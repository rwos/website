(module hacks racket/base

  (require "html.rkt")

  (provide (prefix-out hacks: (all-defined-out)))

  (define index.html
    (std-page std-nav-links "Hacks"
      (dl
        (man-section "PROCESSING"
          (p "Some quick hacks written in the visualization language
              <a href='http://processing.org'>Processing</a>. These are Java
              applets, so you'll have to have a JRE installed on your machine.
              (Sadly, you'll even need the Sun^H^H^HOracle JRE, others won't
              work.)")
          (p "The source code for all of these is available "
             (a/href "https://github.com/rwos/processing_hacks" "here") ".")
          (man-options
            '("Canvas Game of Life" "/hacks/canvas_game_of_life"
              "A living canvas.")
            '("Fractal Garden" "/hacks/fractal_garden"
              "A very simple fractal viewer.")
            '("Fractal Garden 2" "/hacks/fractal_garden_2"
              "More or less a cobination of the two above.")
            '("The Dark Side" "/hacks/dark_side"
              "An interactive version of Pink Floyd's famous Dark Side of the
               Moon album cover.")))
        (man-section "JAVASCRIPT"
          (p "You'll generally need a browser with support for the &lt;canvas&gt;
              element (that is, any modern browser should work). If in doubt use
              the latest Firefox or Chromium.")
          (man-options
            `("Voronoi Mandelbrot" "/hacks/voronoi-mandelbrot"
              ,(j "An interactive, zoom-able real-time rendering of the
                   Mandelbrot set, using random points and Voronoi tessellation.
                   The code is available "
                  (a/href "https://github.com/rwos/voronoi-mandelbrot" "here")
                  "."))))
        (man-section "AUTHOR"
          "Richard Wossal " (mailto "richard@r-wos.org")))))

)

