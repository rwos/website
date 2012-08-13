(module html racket

  (provide j
           html head title body link/css div/class div/id
           a/href a/class/href
           b br p h dl dt dd
           mailto signature
           std-skeleton std-body std-page std-nav-links
           man-option man-options man-section
           ;; movve to extra module
           css)

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

  ;;; standard HTML stuff
  ;;; XXX uses racket's html module

  (define (tag name . s)
    (j "<" name ">" s "</" name ">"))

  (define (html . s)
    (j "<!doctype html>" (tag "html" s)))

  (define (head . s)
    (j "<head><meta charset='UTF-8'>"
       "<meta http-equiv='Content-type' content='text/html;charset=UTF-8'>"
       s
       "</head>"))

  (define (title . s)
    (tag "title" s))

  (define (body . s)
    (tag "body" s))

  (define (link/css url)
    (j "<link rel='stylesheet' type='text/css' href='" url "'>"))

  (define (div/class class . s)
    (j "<div class='" class "'>" s "</div>"))

  (define (div/id id . s)
    (j "<div id='" id "'>" s "</div>"))

  (define (a/href href . s)
    (j "<a href='" href "'>" s "</a>"))

  (define (a/class/href class href . s)
    (j "<a class='" class "' href='" href "'>" s "</a>"))

  (define (b . s)
    (tag "b" s))

  (define (br) "<br>")

  (define (p . s)
    (tag "p" s))

  (define (h n . s)
    (let ([n-str (number->string n)])
      (j "<h" n-str ">" s "</h" n-str ">")))

  (define (dl . s)
    (tag "dl" s))

  (define (dt . s)
    (tag "dt" s))

  (define (dd . s)
    (tag "dd" s))

  ;;; higher-level (but generic) stuff

  (define (mailto address)
    (j "&lt;" (a/href (j "mailto:" address) address) "&gt"))

  ;;; site-specific stuff

  (define (signature name)
    (div/class "sig" name))

  (define (std-skeleton page-title . page-body)
    (j (html
         (head (link/css "http://r-wos.org/web.css")
               (title page-title)
               (body  page-body)))))

  (define (std-navigation nav-links [selected ""])
    (unless (empty? nav-links)
      (let ([nav (map (lambda (spec)
                        (if (string=? selected (cdr spec))
                          ;; currently selected nav-option
                          (cdr spec)
                          ;; normal
                          (a/href (car spec) (cdr spec))))
                      nav-links)])
        (j (div/class "navigation" (j/str " - " nav))))))

  (define std-footer
    (div/id "footer"
            "This page was written in 2011 and 2012 by Richard Wossal "
            (mailto "richard@r-wos.org")
            ". "
            (a/href "http://creativecommons.org/publicdomain/zero/1.0/"
                    "No rights reserved.")))

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

  (define (std-nav-links selected)
    `((("/"                     . "r-wos.org")
       ("http://blog.r-wos.org" . "blog")
       ("/hacks"                . "hacks")
       ("/about"                . "about"))
      ,selected))
      

  (define (man-option text href descr)
    (dd (a/href href text)
        (div/class "descr" descr)))

  (define (man-options . options)
    (j (map (lambda (opt) (apply man-option opt))
            options)))

  (define (man-section heading . content)
    (j (dt heading)
       (dd content)))

  (define (css . s)
    (let ([src (j s)])
      (regexp-replace* #rx" *([{};:,]) *"
        (regexp-replace* #rx"[\n\t ]+" src " ")
        "\\1")
      ))
      
)

