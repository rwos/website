(module html racket

  (require "css.rkt")

  (provide j j/str
           a/href
           b body br
           code code/id
           dd div/class div/id dl dt ul li
           em
           h head hr html
           link/css style
           noscript
           p pre
           script script/src
           title
           mailto signature
           small
           std-skeleton std-body std-page std-nav-links std-navigation std-footer
           man-page man-option man-options man-section)

  ;;; string-joining helpers

  (define (j/str sep . strs)
    (string-join
      (map (lambda (s) (if (list? s)
                           (apply j/str sep s)
                           (if (void? s)
                               ""
                               s)))
           strs)
      sep))

  (define (j . strs)
    (apply j/str (cons "" strs)))

  (define (j/sp . strs)
    (apply j/str (cons " " strs)))

  (define (string->id str)
    (regexp-replace* #rx" " (string-downcase str) "-"))

  ;;; standard HTML stuff

  ;;; TODO: support for arguments (optional)

  (define (tag name)
    (lambda content
      (j "<" name ">" content "</" name ">")))

  (define (short-tag name)
    (lambda () (j "<" name ">")))

  ;;; XXX TODO: Fix this mess - there's probably a way to define them
  ;;;           all at once.

  (define (a/href href . s) (j "<a href='" href "'>" s "</a>"))

  (define b     (tag "b"))
  (define body  (tag "body"))
  (define br    (short-tag "br"))

  (define code (tag "code"))
  (define (code/id id . stuff) (j "<code id='" id "'>" stuff "</code>"))

  (define dd (tag "dd"))
  (define (div/class class . s) (j "<div class='" class "'>" s "</div>"))
  (define (div/class+id class id . s) (j "<div class='" class "'id='" id "'>" s "</div>"))
  (define (div/id id . s) (j "<div id='" id "'>" s "</div>"))
  (define dl (tag "dl"))
  (define dt (tag "dt"))

  (define em (tag "em"))

  (define ul (tag "ul"))
  (define li (tag "li"))

  (define (h n . s)
    (let ([n-str (number->string n)])
      (j "<h" n-str ">" s "</h" n-str ">")))
  (define (head . s)
    (j "<head>"
       "<meta http-equiv='Content-type'content='text/html;charset=UTF-8'>"
       "<meta name='Viewport'content='width=device-width,initial-scale=1,maximum-scale=1.0'>"
       s
       "</head>"))
  (define hr (short-tag "hr"))
  (define (html . s) (j "<!doctype html><html lang='en'>" s "</html>"))

  (define (link/css url)
    (j "<link rel='stylesheet' type='text/css' href='" url "'>"))

  (define style (tag "style"))

  (define noscript (tag "noscript"))

  (define p (tag "p"))

  (define pre (tag "pre"))

  (define script (tag "script"))
  (define (script/src src [c ""]) (j "<script src='" src "'>" c "</script>"))

  (define small (tag "small"))

  (define title (tag "title"))

  ;;; higher-level (but fairly generic) stuff

  (define (mailto address)
    (j "&lt;" (a/href (j "mailto:" address) address) "&gt;"))

  ;;; site-specific stuff

  (define (signature name)
    (div/class "sig" name))

  (define (std-skeleton page-title . page-body)
    (j (html
         (head (title page-title)
               (style index:web.css)
               )
         (body  page-body))))

  (define (std-navigation nav-links [selected ""])
    (unless (empty? nav-links)
      (let ([nav (map (lambda (spec)
                        (if (string=? selected (cdr spec))
                          ;; currently selected nav-option
                          (j "<span>" (cdr spec) "</span>")
                          ;; normal
                          (a/href (car spec) (cdr spec))))
                      nav-links)])
        (div/class "navigation" (j/str " " nav) ))))

  (define std-footer
    (div/id "footer"
            "written by Richard Wossal "
            (mailto "richard@r-wos.org")
            " - "
            (a/href "http://creativecommons.org/publicdomain/zero/1.0/"
                    "no rights reserved")))

  (define (std-body nav-links header . contents)
    (j (apply std-navigation nav-links)
       (div/id "content"
         (div/class "block"
           (div/class "header" (h 1 header))
             contents))
       std-footer))

  (define (std-page nav-links header . contents)
    (std-skeleton (j header " | r-wos.org")
      (apply std-body (append
                        (list nav-links header)
                        contents))))

  (define (std-nav-links [selected ""])
    `((("/"          . "r-wos.org")
       ("/blog/"     . "blog")
       ("/blog/rss"  . "rss")
       ("/hacks/"    . "hacks")
       ("/about"     . "about"))
      ,selected))

  (define (man-page . content)
    (div/class "man-page" content))

  (define (man-option text href descr)
    (div/class "man-option"
               (a/href href text)
               (div/class "descr" descr)))

  (define (man-options . options)
    (j (map (lambda (opt) (apply man-option opt))
            options)))

  (define (man-section heading . content)
    (j (div/class+id "man-heading" (string->id heading) heading)
       (div/class "man-content" content)))

)
