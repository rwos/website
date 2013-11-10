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

  ;; TODO rm helpers and use racket's format stuff or move somewhere else
  (define (lpad n str [padstr "&nbsp;"])
    (j (for/list ([i (in-range (- n (string-length str)))])
         padstr)
       str))
  (define (limit n str)
    (if (> (string-length str) (- n 3))
      (j (substring str 0 (- n 3)) "...")
      str))

  (define index.html
    (std-page (std-nav-links "blog")
              "a programmer's view of the world"
      (man-options
        `("Given When Then" "gherkin"
          "Gherkin is a hack.")
        `("ownCloud" "owncloud"
          "Nice to look at, but not what I wanted.")
        `("Racket Appreciation Day" "racket-appreciation-day"
          "So that's what \"pragmatic\" means.")
        `("wtf.js" "wtf-js"
          "I just don't undestand.")
        `("CoffeeScript - Second Impressions" "second-coffeescript"
          "Still better than JS, but certainly not perfect.")
        `("CoffeeScript - First Impressions" "first-coffeescript"
          "Better than JS - but how could it be worse?")
        `("Colored Text in wmii's status bar" "wmii-color-status"
          "What it says on the tin.")
        `("Ludum Dare 26 - Postmortem" "ludum-dare-26-postmortem"
          "Things that worked, things that didn't.")
        `("Overwriting Dynamically Linked Stuff" "dynamic-linking"
          "Again, just a short mental note.")
        `("Javahaha" "javahaha"
          "Write once. Exception in thread \"main\".")
        `("Ludum Dare 26 - Timelapse" "ludum-dare-26-timelapse"
          "Minimalism.")
        `("Certainly Not Mainstream" "r-listing"
          "Reading source code before it was cool.")
        `("Continued" "cray-1-disks-3"
          "Further stuff I learned about the Cray.")
        `("Playing with Cray-1 Disks, Part 2" "cray-1-disks-2"
          "This is M-M-Max MP.")
        `("Playing with Cray-1 Disks" "cray-1-disks"
          "Just some disks.")
        `("Links" "links"
          "Just some links.")
        `("Playing with Typography" "typography"
          "While knowing nothing about it.")
        `("Tacit Programming in Racket, Part 2" "tacit-racket-2"
          "The clarity of APL, the performance of Scheme.")
        `("Review - PLT Games February 2013" "review-plt-games-february-2013"
          "Gamification.")
        `("Syntax Parameters: Usage" "syntax-parameters"
          "Just a short mental note.")
        `("Ping Turtle" "ping-turtle"
          "A not very useful graph")
        `("todo: do" "tododo"
          "Slacker.")
        `("Make FRP Mainstream!" "make-frp-mainstream"
          "Why am I just now learning about this?")
        `("A Graphical Forever Project, Part 2" "forever-gui-2"
          "Continued.")
        `("A Graphical Forever Project" "forever-gui"
          "Programmer's speed of light.")
        `("You've picked the wrong repository" "wrong-repo"
          "Spam and eggs and Spam. Spam and Spam and eggs and Spam.")
        `("Multiple Dispatch in Racket" "racket-multiple-dispatch"
          "Should actually be called: I discovered pattern matching.")
        `("Enterprise PHP" "enterprise-php"
          "The horror.")
        `("The BASIC Magic in Vim" "vim-loop"
          "Infinite joy.")
        `("True Color" "true-color"
          "Has nothing to do with Cindy Lauper.")
        `("Electric Dead Trees" "electric-dead-trees"
          "Source code on eInk.")
        `("&lt;font color=\"green\"&gt;" "semantics"
          "Semantics.")
        `("Tacit Programming in Racket" "tacit-racket"
          "Pointless exercises.")
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
        )
        (p "...and the old stuff...")
        (map (lambda (entry)
               (define (title->url t)
                 (set! t (string-downcase t))
                 (set! t (regexp-replace* #rx"[^a-zA-Z0-9]" t "-"))
                 (set! t (regexp-replace* #rx"--*" t "-"))
                 (set! t (regexp-replace* #rx"^-*" t ""))
                 (set! t (regexp-replace* #rx"-*$" t ""))
                 ;; fixing old links
                 (when (string=? t "more-cowbell")
                   (set! t "more-cowbell-"))
                 (when (string=? t "where-s-my-xor")
                   (set! t "where-s-my-xor-"))
                 t)
               (define title (blog-post-title entry))
               (j (a/href (title->url title) title)
                  (br)))
          (take-right blog-entries-sorted 63))
        ))


  (define archive.html
    (std-page (std-nav-links)
              "a programmer's archive of the world"
      (p
        (map (lambda (name)
               (pre (small
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
       "<channel><atom:link href='//r-wos.org/blog/rss' rel='self' type='application/rss+xml'/>"
       "<title>Richard's Blog</title>"
       "<description>a programmer's view of the world</description>"
       "<link>//r-wos.org/blog/</link>"
       (map (lambda (name)
              (j "<item>"
                 "<title>" (blog-post-title name) "</title>"
                 "<link>//r-wos.org/blog/" name "</link>"
                 "<guid>//r-wos.org/blog/" name "</guid>"
                 "<description><![CDATA["
                 (markdown->html
                   (blog-post-content name))
                 "]]></description>"
                 "</item>"))
         (take blog-entries-sorted 10))
       "</channel></rss>"))

)

