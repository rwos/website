/// TODO
/*
   frontmatter - split on "---"
       - top is yaml => redirects, title, etc
       - bottom is markfown

   dir structure like website

   some kind of magic to easily add pictures

   pictures and internal links should be checked
*/

package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"os"
	"path"
	"path/filepath"
	"strings"

	chroma "github.com/alecthomas/chroma/formatters/html"
	"github.com/yuin/goldmark"
	"github.com/yuin/goldmark-highlighting"
	"github.com/yuin/goldmark/extension"
	"github.com/yuin/goldmark/parser"
	goldmarkhtml "github.com/yuin/goldmark/renderer/html"
	"golang.org/x/net/html"
	"gopkg.in/yaml.v2"
)

type PageConfig struct {
	Title    string
	Subtitle string
	Tags     []string
	Path     string
	Dest     string
	Link     string
}

const contentBase = "content/"
const buildBase = "../build/"

var md goldmark.Markdown

func main() {
	// TODO: https://github.com/abhinav/goldmark-toc
	// TODO: https://github.com/yuin/goldmark-highlighting
	md = goldmark.New(
		goldmark.WithExtensions(
			extension.GFM,
			extension.Footnote,
			highlighting.NewHighlighting(
				highlighting.WithStyle("monokai"),
				highlighting.WithFormatOptions(
					chroma.WithLineNumbers(true),
				),
			),
		),
		goldmark.WithParserOptions(
			parser.WithAutoHeadingID(),
		),
		goldmark.WithRendererOptions(
			goldmarkhtml.WithUnsafe(),
		),
	)

	files := []string{}
	dirs := []string{}
	err := filepath.Walk(contentBase, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if !info.IsDir() {
			files = append(files, path)
		} else if path != contentBase {
			path = strings.Replace(path, contentBase, "", 1)
			dirs = append(dirs, path)
		}
		return nil
	})
	fatalIfError(err)

	// pre-create all known dirs
	for _, p := range dirs {
		fullPath := path.Join(buildBase, p)
		fmt.Printf("creating dir %s\n", fullPath)
		err := os.MkdirAll(fullPath, 0755)
		fatalIfError(err)
	}

	allTags := map[string][]PageConfig{} // tag => list of destination files that have that tag

	for _, p := range files {
		dest := buildBase + strings.TrimPrefix(p, contentBase)
		if strings.HasSuffix(dest, ".md") && !strings.HasSuffix(dest, "README.md") {
			dest = strings.TrimSuffix(dest, ".md") + ".html"
		}

		fmt.Printf("rendering %s to %s\n", p, dest)
		config, body := configAndBodyOf(p, dest)
		for _, t := range config.Tags {
			allTags[t] = append(allTags[t], config)
		}

		// writing base content
		err = ioutil.WriteFile(dest, []byte(body), 0644)
		fatalIfError(err)
	}

	// render indices
	fmt.Printf("processing tags\n")
	for tag, files := range allTags {
		dir := path.Join(buildBase, tag)
		fmt.Printf("creating dir %s\n", dir)
		err := os.MkdirAll(dir, 0755)
		fatalIfError(err)
		target := path.Join(dir, "index.html")
		fmt.Printf("appending index to %s\n", target)
		f, err := os.OpenFile(target, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
		fatalIfError(err)
		// construcing index
		_, err = f.WriteString("\n<dl>")
		fatalIfError(err)
		for _, c := range files {
			_, err = f.WriteString(fmt.Sprintf(
				`<dt><a href="%s">%s</a></dt>`,
				c.Link, c.Title))
			fatalIfError(err)
			if c.Subtitle != "" {
				_, err = f.WriteString(fmt.Sprintf(`<dd>%s<dd>`, c.Subtitle))
				fatalIfError(err)
			}
		}
		_, err = f.WriteString("\n</dl>")
		fatalIfError(err)
		f.Close()
	}
}

func configAndBodyOf(p string, dest string) (config PageConfig, body string) {
	b, err := ioutil.ReadFile(p)
	fatalIfError(err)
	if !strings.HasSuffix(p, ".md") || strings.HasSuffix(p, "README.md") {
		// static files => body == contents
		body = string(b)
	} else {
		// md files => body is rendered, might have config on top
		contents := strings.SplitN(string(b), "\n---\n", 2)
		mdBody := contents[0]
		if len(contents) == 2 {
			err := yaml.Unmarshal([]byte(contents[0]), &config)
			fatalIfError(err)
			mdBody = contents[1]
		}
		var buf bytes.Buffer
		err = md.Convert([]byte(mdBody), &buf)
		fatalIfError(err)
		body = buf.String()
	}

	// config: applying defaults
	config.Path = p
	config.Dest = dest
	config.Link = "/" + strings.TrimPrefix(dest, buildBase)
	if config.Title == "" {
		config.Title = titleFromPath(p)
	}
	if config.Subtitle == "" {
		config.Subtitle = descriptionFromHtml(p)
	}

	// only construct tags for html and md files
	if !strings.HasSuffix(p, ".md") && !strings.HasSuffix(p, ".html") {
		return config, body
	}
	if strings.HasSuffix(p, "README.md") {
		return config, body // "README.md"s also don't need tags and stuff
	}

	// config: constructing tags
	for _, t := range tagsFromPath(p) {
		config.Tags = append(config.Tags, t)
	}
	if len(config.Tags) == 1 &&
		(strings.HasSuffix(p, config.Tags[0]+"/index.md") ||
			strings.HasSuffix(p, config.Tags[0]+"/index.html")) {
		// tag index file => remove its own tag, add "tags" tag
		config.Tags = []string{"tags"}
	}
	// make tags unique
	uniqueTags := map[string]bool{}
	for _, t := range config.Tags {
		uniqueTags[t] = true
	}
	config.Tags = []string{}
	for t := range uniqueTags {
		config.Tags = append(config.Tags, t)
	}
	return config, body
}

func descriptionFromHtml(p string) string {
	f, err := os.Open(p)
	fatalIfError(err)
	defer f.Close()
	doc, err := html.Parse(f)
	if err != nil {
		fmt.Printf("tried parsing %s as HTML, that failed: %s\n", p, err)
		return ""
	}
	var walker func(*html.Node)
	desc := ""
	walker = func(n *html.Node) {
		if n.Type == html.ElementNode && n.Data == "meta" {
			found := false
			for _, attr := range n.Attr {
				if attr.Key == "name" && attr.Val == "description" {
					found = true
				}
			}
			if !found {
				return
			}
			for _, attr := range n.Attr {
				if attr.Key == "content" {
					desc = attr.Val
				}
			}
		}
		for c := n.FirstChild; c != nil; c = c.NextSibling {
			walker(c)
		}
	}
	walker(doc)
	return desc
}

func titleFromPath(p string) string {
	if strings.HasSuffix(p, ".html") {
		// parse title from HTML
		f, err := os.Open(p)
		fatalIfError(err)
		defer f.Close()
		doc, err := html.Parse(f)
		if err != nil {
			fmt.Printf("tried parsing %s as HTML, that failed: %s\n", p, err)
			goto titleFromPath
		}
		var walker func(*html.Node)
		title := ""
		walker = func(n *html.Node) {
			if n.Type == html.ElementNode && n.Data == "title" {
				if n.FirstChild.Type != html.TextNode {
					fmt.Printf("tried parsing %s as HTML, didn't find title\n", p)
					return
				}
				title = n.FirstChild.Data
				return
			}
			for c := n.FirstChild; c != nil; c = c.NextSibling {
				walker(c)
			}
		}
		walker(doc)
		if title != "" {
			return title
		}
	}
titleFromPath:
	out := path.Base(p)
	out = strings.TrimSuffix(out, filepath.Ext(out))
	out = strings.ReplaceAll(out, "-", " ")
	out = strings.ReplaceAll(out, "_", " ")
	if out == "index" {
		parts := strings.Split(filepath.Dir(p), "/")
		return parts[len(parts)-1]
	}
	return out
}

func tagsFromPath(p string) []string {
	in := strings.TrimPrefix(p, contentBase)
	base := filepath.Base(in)
	in = strings.TrimSuffix(in, base)
	parts := strings.Split(in, "/")
	// return first part only (/hacks/ld26 => only tagged as "hacks" by default)
	for _, p := range parts {
		if p != "" {
			return []string{p}
		}
	}
	return []string{}
}

func fatalIfError(err error) {
	if err != nil {
		panic(err)
	}
}
