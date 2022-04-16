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

	for _, p := range dirs {
		fullPath := path.Join(buildBase, p)
		fmt.Printf("creating dir %s\n", fullPath)
		err := os.MkdirAll(fullPath, 0755)
		fatalIfError(err)
	}

	for _, p := range files {
		dest := strings.Replace(p, contentBase, buildBase, 1)
		dest = strings.Replace(dest, ".md", ".html", 1)
		if !strings.HasSuffix(p, ".md") {
			fmt.Printf("copying %s to %s\n", p, dest)
			input, err := ioutil.ReadFile(p)
			fatalIfError(err)
			err = ioutil.WriteFile(dest, input, 0644)
			fatalIfError(err)
			continue
		}

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
		// XXX defaults for page config, title etc
		//fmt.Printf(">>%+v -- %+v\n", body, config)
		var buf bytes.Buffer
		err = md.Convert([]byte(body), &buf)
		fatalIfError(err)
		err = ioutil.WriteFile(dest, buf.Bytes(), 0644)
		fatalIfError(err)
	}
}

func fatalIfError(err error) {
	if err != nil {
		panic(err)
	}
}
