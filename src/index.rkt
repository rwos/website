#lang racket
(require "html.rkt")

(display
  (std-page std-nav-links
            "Weeks of hacking can save you hours of planning"
    (dl
      (man-section "NAME"
        "r-wos.org - because everybody needs a website")
      (man-section "CONTENT"
        (man-options
          '("-v, --blog" "http://blog.r-wos.org"
            "a programmer's view of the world")
          '("-a, --about" "http://blog.r-wos.org/2011/about"
            "about the author")
          '("-h, --hacks" "/hacks/"
            "small random hacks")
          '("-s, --github" "http://github.com/rwos"
            "source code repository")))
      (man-section "AUTHOR"
        "Richard Wossal " (mailto "richard@r-wos.org"))))
)

