#lang racket 

;; XXX TODO: use new generics for pages AND directories:
;; (maybe named "resource" or so)
;; --> methods:
;;       name (includes extension)
;;       write (includes post-processors)
;;       write-gzipped
;;

;; TODO: move non-page stuff into lib-directory

;; TODO: automatic requires
(require "index.rkt")
(require "hacks.rkt")

(define (dir dir-name . content)
  (map (lambda (e)
         (if (list? e)
           (list (symbol->string dir-name) e)
           (e dir-name)))
       content))

(define-namespace-anchor a)
(define ns (namespace-anchor->namespace a))

(define (file name)
  (lambda (dir)
    (list
      (symbol->string dir)
      (symbol->string name)
      (eval (string->symbol
              (string-join
                (list (symbol->string dir)
                      (symbol->string name))
                ":"))
            ns))))

(define (page name)
  (file name))

;;; actual site configuration

(define complete-site
  (dir 'index
    (page 'index)
    (page 'about)
    (dir 'hacks
      (page 'index))))

;;; writing out the generated files

(define (write-page dir name content)
  (unless (directory-exists? dir)
    (make-directory dir))
  (let ([path (string-join (list dir "/" name ".html") "")])
    (display-to-file content path #:exists 'replace)))

(define (generate page-conf-list base-dir)
  (map (lambda (page-conf)
         (if (= (length page-conf) 2)
           ;; directory
           (generate (second page-conf)
                     (string-join
                       (list base-dir (first page-conf)) "/"))
           ;; single page
           (let ([dir     (string-join (list base-dir (first page-conf)) "/")]
                 [name    (second page-conf)]
                 [content (third page-conf)])
             (write-page dir name content))))
       page-conf-list))

(generate complete-site "../generated")
#|
    ;(page "about")
    (dir "hacks"
      (page 'voronoi-mandelbrot))))
|#

