(module html racket

  (provide j j/str
           a/href
           b body br
           code code/id
           dd div/class div/id dl dt
           em
           h head hr html
           link/css
           noscript
           p pre
           script script/src
           title
           mailto signature
           small
           std-skeleton std-body std-page std-nav-links std-navigation std-footer
           man-page man-option man-options man-section
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
  (define (div/class+id class id . s) (j "<div class='" class "' id='" id "'>" s "</div>"))
  (define (div/id id . s) (j "<div id='" id "'>" s "</div>"))
  (define dl (tag "dl"))
  (define dt (tag "dt"))

  (define em (tag "em"))

  (define (h n . s)
    (let ([n-str (number->string n)])
      (j "<h" n-str ">" s "</h" n-str ">")))
  (define (head . s)
    (j "<head>"
       "<meta http-equiv='Content-type' content='text/html;charset=UTF-8'>"
       "<meta name='Viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0'>"
       s
       "</head>"))
  (define hr (short-tag "hr"))
  (define (html . s) (j "<!doctype html><html lang='en'>" s "</html>"))

  (define (link/css url)
    (j "<link rel='stylesheet' type='text/css' href='" url "'>"))

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
         (head (link/css "http://r-wos.org/web.css")
               "<link href='http://fonts.googleapis.com/css?family=Josefin+Sans:600' rel='stylesheet' type='text/css'>"
               (title page-title))
         (body  page-body))))

  (define theme-switch
    "<script type='text/javascript'>
        var state = 0;
        var expire = new Date();
        expire.setTime(expire.getTime()+1000*60*60*24*365);
        var cookie_foot = '; expires='+expire.toUTCString()+'; path=/';
        function switch_style() {
            tag = document.getElementsByTagName('link')[0];
            if (state == 0) {
                tag.href = tag.href.replace('web.css', 'alt-web.css');
                document.getElementById('style-switch').innerHTML = 'green';
                state = 1;
                document.cookie = 'state=1'+cookie_foot;
            } else if (state == 1) {
                tag.href = tag.href.replace('alt-web.css', 'web.css');
                document.getElementById('style-switch').innerHTML = 'blue';
                state = 0;
                document.cookie = 'state=0'+cookie_foot;
            }
        }
        document.write(' <a id=\"style-switch\" href=\"javascript:switch_style()\">blue</a>');
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            if (cookies[i].trim() == 'state=1')
                switch_style();
        }
     </script>")

  (define (std-navigation nav-links [selected ""])
    (unless (empty? nav-links)
      (let ([nav (map (lambda (spec)
                        (if (string=? selected (cdr spec))
                          ;; currently selected nav-option
                          (j "<span>" (cdr spec) "</span>")
                          ;; normal
                          (a/href (car spec) (cdr spec))))
                      nav-links)])
        (j (div/class "navigation" (j/str " " nav) theme-switch)))))

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

  (define (css . s)
    (let ([src (j s)])
      ;;; XXX does (curry regexp-replace ..) help here?
      (regexp-replace* #rx" *([{};:,]) *"
        (regexp-replace* #rx"[\n\t ]+" src " ")
        "\\1")
      ))
      
)

