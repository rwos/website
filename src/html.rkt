(module html racket

  (provide j j/str
           a/href
           b body br
           code
           dd div/class div/id dl dt
           em
           h head hr html
           link/css
           p
           title
           mailto signature
           small
           std-skeleton std-body std-page std-nav-links std-navigation std-footer
           man-option man-options man-section
           ;; TODO move to extra module
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

  (define dd (tag "dd"))
  (define (div/class class . s) (j "<div class='" class "'>" s "</div>"))
  (define (div/id id . s) (j "<div id='" id "'>" s "</div>"))
  (define dl (tag "dl"))
  (define dt (tag "dt"))

  (define em (tag "em"))

  (define (h n . s)
    (let ([n-str (number->string n)])
      (j "<h" n-str ">" s "</h" n-str ">")))
  (define (head . s)
    (j "<head><meta charset='UTF-8'>"
       "<meta http-equiv='Content-type' content='text/html;charset=UTF-8'>"
       s
       "</head>"))
  (define hr (short-tag "hr"))
  (define (html . s) (j "<!doctype html><html>" s "</html>"))

  (define (link/css url)
    (j "<link rel='stylesheet' type='text/css' href='" url "'>"))

  (define p (tag "p"))

  (define small (tag "small"))

  (define title (tag "title"))

  ;;; higher-level (but fairly generic) stuff

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

  (define theme-switch
    "<script type='text/javascript'>
        var state = 0;
        var expire = new Date();
        expire.setTime(expire.getTime()+1000*60*60*24*365)
        var cookie_foot = '; expires='+expire.toUTCString()+'; path=/';
        function switch_style() {
            tag = document.getElementsByTagName('link')[0];
            if (state == 0) {
                tag.href = tag.href.replace('web.css', 'alt-web.css');
                state = 1;
                document.cookie = 'state=1'+cookie_foot;
            } else if (state == 1) {
                tag.href = tag.href.replace('alt-web.css', 'web.css');
                state = 0;
                document.cookie = 'state=0'+cookie_foot;
            }
        }
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            if (cookies[i].trim() == 'state=1')
                switch_style();
        }
        document.write(' - <a href=\"javascript:switch_style()\">switch style</a>');
     </script>")

  (define (std-navigation nav-links [selected ""])
    (unless (empty? nav-links)
      (let ([nav (map (lambda (spec)
                        (if (string=? selected (cdr spec))
                          ;; currently selected nav-option
                          (cdr spec)
                          ;; normal
                          (a/href (car spec) (cdr spec))))
                      nav-links)])
        (j (div/class "navigation" (j/str " - " nav) theme-switch)))))

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

  (define (std-nav-links [selected ""])
    `((("/"       . "r-wos.org")
       ("/blog/"  . "blog")
       ("/hacks/" . "hacks")
       ("/about"  . "about"))
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

