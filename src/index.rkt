(module index racket/base

  (require "html.rkt")

  (provide (prefix-out index: (all-defined-out)))

  (define index.html
    (std-page (std-nav-links "r-wos.org")
              "Weeks of hacking can save you hours of planning"
      (man-page
        (man-section "NAME"
          "r-wos.org - because everybody needs a website")
        (man-section "CONTENT"
          (man-options
            '("-v, --blog" "/blog/"
              "a programmer's view of the world")
            '("-h, --hacks" "/hacks/"
              "small random hacks")
            '("-s, --github" "https://github.com/rwos"
              "source code repository")
            '("-a, --about" "/about"
              "about the author"))))))

  (define about.html
    (std-page (std-nav-links "about")
              "About"
      (p "Hi, I'm Richard Wossal - a programmer, as you might have guessed.")
      (p "I'm currently mostly doing web development professionally and
          try to do more interesting things unprofessionally.")
      (p "You can contact me at " (mailto "richard@r-wos.org") ".")
      (p "Thanks for stepping by!")))

  (define 404.html
    (std-page (std-nav-links)
              "404 Not Found"
      (p "Sorry about that.")))

  (define 500.html
    (std-page (std-nav-links)
              "500 Internal Server Error"
      (p "Well, at least it's not your fault")))

)

