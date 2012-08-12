(module index racket/base

  (require "html.rkt")

  (provide (prefix-out index: (all-defined-out)))

  (define index
    (std-page std-nav-links
              "Weeks of hacking can save you hours of planning"
      (dl
        (man-section "NAME"
          "r-wos.org - because everybody needs a website")
        (man-section "CONTENT"
          (man-options
            '("-v, --blog" "http://blog.r-wos.org"
              "a programmer's view of the world")
            '("-h, --hacks" "/hacks/"
              "small random hacks")
            '("-s, --github" "http://github.com/rwos"
              "source code repository")
            '("-a, --about" "/about"
              "about the author")))
        (man-section "AUTHOR"
          "Richard Wossal " (mailto "richard@r-wos.org")))))

  (define about
    (std-page std-nav-links
              "About"
      (p "Hi, I'm Richard Wossal - a programmer, as you might have guessed.")
      (p "I'm currently mostly doing web development professionally and
          try to do more interesting things unprofessionally.")
      (p "You can contact me at " (mailto "richard@r-wos.org") ".")
      (p "Thanks for stepping by!")
      (signature "Richard Wossal")))

)

