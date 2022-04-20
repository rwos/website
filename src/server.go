package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"strings"
)

func main() {
	// XXX TODO: gzip + brotli and whatever compression support
	// XXX TODO: read redirects from posts, create redirect map
	// XXX TODO: also listen to blog.r-wos.org redirects(?)
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		ext := path.Ext(r.URL.Path)
		// everything ending in a slash is a directory...
		isDir := r.URL.Path[len(r.URL.Path)-1] == '/'
		fmt.Printf("input: %v\n", r.URL.Path)

		switch ext {
		case "":
			// plain path => might be a directory (/blog, etc)
			if !isDir {
				stat, err := os.Stat(filepath.Join("./", r.URL.Path))
				if err == nil {
					isDir = stat.IsDir()
					fmt.Printf("is a directory after all: %v\n", r.URL.Path)
				}
			}
			// plain path => try .html first
			if !isDir {
				_, err := os.Stat(filepath.Join("./", r.URL.Path) + ".html")
				fmt.Printf("checking for html: %v\n", err)
				if err == nil {
					r.URL.Path += ".html"
				}
			}
		case ".html":
			// .html => redirect to plain path
			r.URL.Path = strings.TrimSuffix(r.URL.Path, ".html")
			http.Redirect(w, r, r.URL.String(), 301)
			return
		}
		fmt.Printf("trying: %v\n", r.URL.Path)
		http.ServeFile(w, r, filepath.Join("./", r.URL.Path))
	})

	log.Println("Listening on :8080...")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}
