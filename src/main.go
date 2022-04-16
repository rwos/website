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

	files, err := filepath.Glob("./content/**")
	fatalIfError(err)
	for _, p := range files {
		fmt.Printf("processing %s\n", p)
		b, err := ioutil.ReadFile(p)
		fatalIfError(err)
		contents := strings.SplitN(string(b), "---", 2)
		config := PageConfig{}
		body := contents[0]
		if len(contents) == 2 {
			err := yaml.Unmarshal([]byte(contents[0]), &config)
			fatalIfError(err)
			body = contents[1]
		}
		// XXX defaults for page config, title etc
		fmt.Printf(">>%+v -- %+v\n", body, config)
		var buf bytes.Buffer
		err = md.Convert([]byte(body), &buf)
		fatalIfError(err)
		fmt.Printf(">>>rendered\n%s", buf.String())
	}
}

func fatalIfError(err error) {
	if err != nil {
		panic(err)
	}
}
