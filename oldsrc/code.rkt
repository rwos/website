#lang racket

(require "html.rkt")

(provide (prefix-out code: index.html)
         all-code-files)

(define projects
  '((game "games" .
      (ludum-dare-26
       ludum-dare-24
       sidescroll))
    (prog "serious apps" .
      (git-remind gti slacker powerplain))
    (visual "visual demos/hacks" .
      (img2ascii processing-hacks voronoi-mandelbrot render-brot))
    (web "web stuff" .
      (website minslide))
    (hack "no value at all" .
      (my-brain-hurts))
    (config "config files" .
      (dotfiles))
    (3rd-party "not mine" .
      (newsqueak))
    (obsolete "ignore" .
      (scrapyard psblog))))

(define (project-license p)
  "GPL") ;; TODO

(define (project-description p)
  "some code for foo bar") ;; TODO

(define (project-last-change p)
  "12 months ago") ;; TODO

(define index.html
  (std-page (std-nav-links "code")
            "Code"
    (map (lambda (cat)
           ;; category
           (j
             (h 2 (symbol->string (car cat)))
             (p (second cat))
             (ul
               (map (lambda (proj)
                      ;; project
                      (li
                        (a/href (symbol->string proj) (code (symbol->string proj))) " - "
                        (project-description proj)
                        (br)
                        (small
                          (project-license proj) ", updated " (project-last-change proj))
                        (br)))
                    (rest (rest cat))))
             (br)))
         projects)
            ))

(define all-code-files '())

