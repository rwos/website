(module blog racket

  (require "html.rkt")

  (provide (prefix-out blog: index.html)
           (prefix-out blog: archive.html)
           (prefix-out blog: rss.xml)
           all-blog-files)

  ;;; file and html generation stuff

  (define (blog-data name)
    (let* ([file-name (string-append "blog/" name ".md")]
           [file (open-input-file file-name)]
           [title (read-line file)]
           [date  (read-line file)]
           [text  (port->string file)]
           [X (close-input-port file)]) ; XXX - well...
      (list title date text)))

  (define (markdown->html src)
    (with-output-to-string (lambda () (system* "md2html" src))))

  (define (std-blog-page name prev next)
    (displayln (string-append "fetching blog page " name))
    (let* ([data (blog-data name)]
           [date (second data)]
           [header (first data)]
           [content (markdown->html (last data))])
      (std-skeleton (j header " | r-wos.org")
        (std-blog-body (std-nav-links) date header prev next content))))

  (define (blog-file name prev next)
    (lambda (dir)
      (list 
        (symbol->string dir)
        (string-append name ".html")
        ;; content
        (std-blog-page name prev next))))


  (define (blog-post-title name)
    (first (blog-data name)))
  (define (blog-post-date name)
    (second (blog-data name)))
  (define (blog-post-size name)
    (string-length (last (blog-data name))))
  (define (blog-post-content name)
    (last (blog-data name)))

  ;;; sorting and lists of posts

  (define (blog-sort-by-date name1 name2)
    (let ([date1 (blog-post-date name1)]
          [date2 (blog-post-date name2)])
      (string>? date1 date2)))

  (define blog-entries-unsorted
    (map (lambda (f) (string-replace (path->string f) ".md" ""))
      (filter (lambda (s) (not (char=? #\. (string-ref (path->string s) 0))))
        (directory-list "./blog"))))

  (define blog-entries-sorted
    (sort blog-entries-unsorted blog-sort-by-date))

  ;; exported
  (define (all-blog-files)
    (for/list ([entry (in-list blog-entries-sorted)]
               [prev  (in-list (append (rest blog-entries-sorted) (list #f)))]
               [next  (in-list (append (list #f) (reverse (rest (reverse blog-entries-sorted)))))])
      (blog-file entry
                 (if prev
                     (list prev (blog-post-title prev))
                     #f)
                 (if next
                     (list next (blog-post-title next))
                     #f))))

  ;;; templates

  (define (signed date)
    (p (small (j "posted " date))))

  (define (std-blog-body nav-links date header previous next . contents)
    (j (apply std-navigation nav-links)
       (div/id "content"
         (div/class "block"
           (div/class "date" (small date))
           (div/class "header" (h 1 header))
           contents)
         (when (list? previous)
           (div/class "nav-prev" "previous: " (a/href (first previous) (second previous))))
         (when (list? next)
           (div/class "nav-next" "next: " (a/href (first next) (second next))))
         "<br style='clear: both'><br>"
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
       std-footer))

  ;;; semi-static pages

  (define index.html
    (std-page (std-nav-links "blog")
              "a programmer's view of the world"
      (dl
        (man-section "LATEST"
          (man-options
            `("The most latest \"new year\" type post of the year" "happy-new-year"
              "GOTO 2013")
            `("This doesn't seem safe to me" "doesnt-seem-safe"
              "Reflections on trust. No need for clever tricks, Ken.")
            `("And Now For Something Completely Different" "and-now-for-something-completely-different"
              "...fun!")
            `("Art" "art"
              "Found in a line of BASIC.")
            `("What a Language!" "what-a-language"
              "First impressions of J. A Programming Language.")
            `("The German Programming Apprenticeship - A Review" "german-programming-apprenticeship-review"
              "Consumer Information.")
            `("Hardly Any Python, Hardly Any Cry" "hardly-any-python-hardly-any-cry"
              "Moving the blog around for pain and misery.")
            `("Joining Everything" "joining-everything"
              "Register.")
            `("Multimedia" "multimedia"
              "Stuff I had lying around.")
            `("Convay's Game of Floating Point" "convay-s-game-of-floating-point"
              "What a great hack.")
            `("Ludum Dare Postmortem" "ludum-dare-postmortem"
              "Everything that dies someday comes back.")
        ))
        (man-section "SEE ALSO"
          (man-options
            `("RSS" "rss"         "For your feed reader's convenience."))
          (man-options
            `("Archive" "archive" "Everything's in chronological order.")))
        ;; TODO: per-topic sections
        (man-section "AUTHOR"
          "Richard Wossal " (mailto "richard@r-wos.org")))))

  ;; TODO rm helpers and use racket's format stuff or move somewhere else
  (define (lpad n str [padstr "&nbsp;"])
    (j (for/list ([i (in-range (- n (string-length str)))])
         padstr)
       str))
  (define (limit n str)
    (if (> (string-length str) (- n 3))
      (j (substring str 0 (- n 3)) "...")
      str))

  (define archive.html
    (std-page (std-nav-links)
              "a programmer's archive of the world"
      (p
        (map (lambda (name)
               (code (small
                 (j "-rw-r--r-- 1 rwos rwos "
                    (lpad 6 (number->string (blog-post-size name))) " " " "
                    (blog-post-date name) " "
                    (a/href name (limit 40 name))
                    "<br>"))))
          blog-entries-sorted))))

  ;; quick hack, just like everything here
  (define rss.xml
    (j "<?xml version='1.0' encoding='utf-8'?>"
       "<rss version='2.0' xmlns:atom='http://www.w3.org/2005/Atom'>"
       "<channel><atom:link href='http://r-wos.org/blog/rss' rel='self' type='application/rss+xml'/>"
       "<title>Richard's Blog</title>"
       "<description>a programmer's view of the world</description>"
       "<link>http://r-wos.org/blog/</link>"
       (map (lambda (name)
              (j "<item>"
                 "<title>" (blog-post-title name) "</title>"
                 "<link>http://r-wos.org/blog/" name "</link>"
                 "<guid>http://r-wos.org/blog/" name "</guid>"
                 "<description><![CDATA["
                 (markdown->html
                   (blog-post-content name))
                 "]]></description>"
                 "</item>"))
         (take blog-entries-sorted 10))
       "</channel></rss>"))

)

