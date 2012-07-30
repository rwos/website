(module html racket

  (provide html head title body link/css div/class a/href h
           std-skeleton std-body std-page)

  (define (j . strs)
    (string-join
      (map (lambda (s) (if (list? s)
                           (apply j s)
                           (if (void? s)
                               ""
                               s)))
           strs)
      ""))

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

  (define (a/href href . s)
    (j "<a href='" href "'>" s "</a>"))

  (define (h n . s)
    (let ([n-str (number->string n)])
      (j "<h" n-str ">" s "</h" n-str ">")))

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
        (j (div/class "navigation" "(" nav ")")))))

  (define (std-body nav-links header . contents)
    (j (std-navigation nav-links)
       (div/class "block"
         (div/class "header" (h 1 header))
           contents)))

  (define (std-page nav-links header . contents)
    (std-skeleton (j header " | r-wos.org")
      (apply std-body (append
                        (list nav-links header)
                        contents))))
)

