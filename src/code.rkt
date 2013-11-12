#lang racket

(require "html.rkt")

(provide (prefix-out code: index.html)
         all-code-files)

(define projects
  '((experimental . ("website" "dotfiles"))))

(define index.html
  (std-page (std-nav-links "code")
            "Code"
    (map (lambda (cat)
           ;; category
           (j
             (h 2 (symbol->string (car cat)))
             (map (lambda (proj)
                    ;; project
                    (j
                      (a/href "#TODO" proj) " "
                      "GPL"
                      (br)))
                  (rest cat))))
         projects)
            ))

(define all-code-files '())

