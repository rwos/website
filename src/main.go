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
	"github.com/yuin/goldmark/renderer/html"
	"gopkg.in/yaml.v2"
)

type PageConfig struct {
	Title string
	Tags  []string
}

const contentBase = "content/"
const buildBase = "../build/"

func main() {
	// TODO: https://github.com/abhinav/goldmark-toc
	// TODO: https://github.com/yuin/goldmark-highlighting
	md := goldmark.New(
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
			html.WithUnsafe(),
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

	allTags := map[string][]string{} // tag => list of destination files that have that tag

	for _, p := range files {
		dest := buildBase + strings.TrimPrefix(p, contentBase)
		dest = strings.TrimSuffix(dest, ".md") + ".html"

		// static files: just copy
		if !strings.HasSuffix(p, ".md") || strings.HasSuffix(p, "README.md") {
			fmt.Printf("copying %s to %s\n", p, dest)
			input, err := ioutil.ReadFile(p)
			fatalIfError(err)
			err = ioutil.WriteFile(dest, input, 0644)
			fatalIfError(err)
			continue
		}

		// md files: process
		fmt.Printf("rendering %s to %s\n", p, dest)
		b, err := ioutil.ReadFile(p)
		fatalIfError(err)
		contents := strings.SplitN(string(b), "\n---\n", 2)
		config := PageConfig{}
		body := contents[0]
		if len(contents) == 2 {
			err := yaml.Unmarshal([]byte(contents[0]), &config)
			fatalIfError(err)
			body = contents[1]
		}

		// applying defaults
		if config.Title == "" {
			config.Title = titleFromPath(p)
		}
		for _, t := range tagsFromPath(p) {
			config.Tags = append(config.Tags, t)
		}
		if len(config.Tags) == 1 && strings.HasSuffix(p, "index.md") {
			// index file => remove its own tag, add "tags" tag
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
			allTags[t] = append(allTags[t], p)
		}
		fmt.Printf("%v tags - %s\n", len(config.Tags), dest)

		// rendering base content
		var buf bytes.Buffer
		err = md.Convert([]byte(body), &buf)
		fatalIfError(err)
		err = ioutil.WriteFile(dest, buf.Bytes(), 0644)
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
		for _, fWithTag := range files {
			_, err = f.WriteString(fmt.Sprintf(
				`<dt><a href="XXXTODO">%s</a></dt><dd>DESCRIPTION</dd>`,
				fWithTag))
			fatalIfError(err)
		}
		_, err = f.WriteString("\n</dl>")
		fatalIfError(err)
		f.Close()
	}
}

func titleFromPath(p string) string {
	out := path.Base(p)
	if !strings.HasSuffix(out, ".md") {
		panic("expected md file here")
	}
	out = strings.TrimSuffix(out, filepath.Ext(out))
	out = strings.ReplaceAll(out, "-", " ")
	if out == "" {
		panic("no file name left?")
	}
	return out
}

func tagsFromPath(p string) []string {
	in := strings.TrimPrefix(p, contentBase)
	base := filepath.Base(in)
	in = strings.TrimSuffix(in, base)
	parts := strings.Split(in, "/")
	nonEmptyParts := []string{}
	for _, p := range parts {
		if p != "" {
			nonEmptyParts = append(nonEmptyParts, p)
		}
	}
	return nonEmptyParts
}

func fatalIfError(err error) {
	if err != nil {
		panic(err)
	}
}
