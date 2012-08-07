(module html racket

  (provide html head title body link/css div/class div/id a/href
           b br p h dl dt dd
           mailto
           std-skeleton std-body std-page std-nav-links
           man-option man-options man-section)

  (define (j . strs)
    (string-join
      (map (lambda (s) (if (list? s)
                           (apply j s)
                           (if (void? s)
                               ""
                               s)))
           strs)
      ""))

  ;;; TODO remove code duplication
  (define (j/sp . strs)
    (string-join
      (map (lambda (s) (if (list? s)
                           (apply j/sp s)
                           (if (void? s)
                               ""
                               s)))
           strs)
      " "))

  ;;; TODO remove code duplication
  (define (j/str sep . strs)
    (string-join
      (map (lambda (s) (if (list? s)
                           (apply j/str sep s)
                           (if (void? s)
                               ""
                               s)))
           strs)
      sep))

  ;;; standard HTML stuff

  (define (html . s)
    (j "<!doctype html><html>" s "</html>"))

  (define (head . s)
    (j "<head><meta charset='UTF-8'>"
       "<meta http-equiv='Content-type' content='text/html;charset=UTF-8'>"
       s
       "</head>"))

  (define (title . s)
    (j "<title>" s "</title>"))

  (define (body . s)
    (j "<body>" s "</body>"))

  (define (link/css url)
    (j "<link rel='stylesheet' type='text/css' href='" url "'>"))

  (define (div/class class . s)
    (j "<div class='" class "'>" s "</div>"))

  (define (div/id id . s)
    (j "<div id='" id "'>" s "</div>"))

  (define (a/href href . s)
    (j "<a href='" href "'>" s "</a>"))

  (define (b . s)
    (j "<b>" s "</b>"))

  (define (br) "<br>")

  (define (p . s)
    (j "<p>" s "</p>"))

  (define (h n . s)
    (let ([n-str (number->string n)])
      (j "<h" n-str ">" s "</h" n-str ">")))

  (define (dl . s)
    (j "<dl>" s "</dl>"))

  (define (dt . s)
    (j "<dt>" s "</dt>"))

  (define (dd . s)
    (j "<dd>" s "</dd>"))

  ;;; higher-level (but generic) stuff

  (define (mailto address)
    (j "&lt;" (a/href (j "mailto:" address) address) "&gt"))

  ;;; site-specific stuff

  (define (std-skeleton page-title . page-body)
    (j (html
         (head (link/css "http://r-wos.org/web.css")
               (title page-title)
               (body  page-body)))))

  (define (std-navigation nav-links)
    (unless (empty? nav-links)
      (let ([nav (map (lambda (spec)
                        (a/href (car spec) (cdr spec)))
                      nav-links)])
        (j (div/class "navigation" (j/str " - " nav))))))

  (define (std-body nav-links header . contents)
    (j (std-navigation nav-links)
       (div/id "content"
         (div/class "block"
           (div/class "header" (h 1 header))
             contents))))

  (define (std-page nav-links header . contents)
    (std-skeleton (j header " | r-wos.org")
      (apply std-body (append
                        (list nav-links header)
                        contents))))

  (define std-nav-links
    `(("/" . ,(b "r-wos.org"))
      ("http://blog.r-wos.org"  . "blog")
      ("http://blog.r-wos.org/2011/about" . "about")
      ("/hacks" . "hacks")
      ))

  (define (man-option text href descr)
    (dd (a/href href text)
        (div/class "descr" descr)))

  (define (man-options . options)
    (j (map (lambda (opt) (apply man-option opt))
            options)))

  (define (man-section heading . content)
    (j (dt heading)
       (dd content)))


)

