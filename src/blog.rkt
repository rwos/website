(module blog racket

  (require "html.rkt")

  (provide (prefix-out blog: index.html)
           all-blog-files)

  (define index.html
    (std-page (std-nav-links "blog")
              "a programmer's view of the world"
      (dl
        (man-section "LATEST"
          (man-options
            `("Multimedia" "multimedia"
              "Stuff I had lying around.")
            `("Convay's Game of Floating Point" "convays-game-of-floating-point"
              "What a great hack.")
            `("Ludum Dare Postmortem" "ludum-dare-post-mortem"
              "Everything that dies someday comes back.")
            `("Ludum Dare Postmortem" "ludum-dare-post-mortem"
              "Everything that dies someday comes back.")
        ))
        ;; TODO: per-topic sections
        (man-section "AUTHOR"
          "Richard Wossal " (mailto "richard@r-wos.org")))))


  ;;; file and html generation stuff

  (define (blog-data name)
    (let* ([file-name (string-append "blog/" name ".md")]
           [file (open-input-file file-name)]
           [title (read-line file)]
           [date  (read-line file)]
           [text  (port->string file)])
      (list title date text)))

  (define (markdown->html src)
    (with-output-to-string (lambda () (system* "md2html" src))))

  (define (signed date)
    (p (small (j "posted " date))))

  (define (std-blog-body nav-links date header . contents)
    (j (apply std-navigation nav-links)
       (div/id "content"
         (div/class "block"
           (div/class "date" (small date))
           (div/class "header" (h 1 header))
           contents
           ;; disqus comments
           "<div id=\"disqus_thread\"></div><script type=\"text/javascript\">
            var disqus_shortname = 'rwosorg';
            (function() {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
            </script>
            <noscript>Please enable JavaScript to view or post comments.</noscript>
            <a href=\"http://disqus.com\" class=\"dsq-brlink\">comments powered by <span class=\"logo-disqus\">Disqus</span></a>"
          )
       )
       std-footer))

  (define (std-blog-page name)
    (let* ([data (blog-data name)]
           [date (second data)]
           [header (first data)]
           [content (markdown->html (last data))])
      (std-skeleton (j header " | r-wos.org")
        (std-blog-body (std-nav-links "blog") date header content))))

  (define blog-entries
    (map (lambda (f) (string-replace (path->string f) ".md" ""))
      (directory-list "./blog")))

  (define (blog-file name) ; see "file" in make.rkt
    (lambda (dir)
      (list 
        (symbol->string dir)
        (string-append name ".html")
        ;; content
        (std-blog-page name))))

  (define (all-blog-files)
    (map blog-file blog-entries))

)

