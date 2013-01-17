(module hacks racket/base

  (require "html.rkt")

  (provide (prefix-out hacks: (all-defined-out)))

  (define index.html
    (std-page (std-nav-links "hacks")
              "Hacks"
      (p "Some quick hacks - not polished - hardly usable - use at own risk.")
      (man-page
        (man-section "ANSI-C"
          (p "You'll need a C compiler and a POSIX system for those. Hacks
              don't need to be portable, do they?")
          (man-options
            `("gti" "/hacks/gti"
              ,(j "An implementation of the command I keep typing all day long.
                   The code is available "
                  (a/href "https://github.com/rwos/gti" "here")
                  "."))))
        (man-section "JAVASCRIPT"
          (p "You'll generally need a browser with support for the &lt;canvas&gt;
              element (that is, any modern browser should work). If in doubt use
              the latest Firefox or Chromium.")
          (man-options
            `("Moore's Game" "/hacks/ld24/ld24"
              ,(j "My entry for the 24th "
                  (a/href "http://www.ludumdare.com/compo/" "Ludum Dare")
                  " 48h game programming competition."))
            `("Voronoi Mandelbrot" "/hacks/voronoi-mandelbrot"
              ,(j "An interactive, zoom-able real-time rendering of the
                   Mandelbrot set, using random points and Voronoi tessellation.
                   The code is available "
                  (a/href "https://github.com/rwos/voronoi-mandelbrot" "here")
                  "."))
            `("Render-brot" "/hacks/render-brot"
              ,(j "A pixel-based grey-scale Mandelbrot set renderer with
                   super-sampling. It renders in arbitrary resolutions and
                   works pretty well for generating desktop wallpapers."))
            `("img2ascii" "/hacks/img2ascii"
              ,(j "A line-based image-to-ascii converter. It doesn't work
                   too well, but it's so simple it's a wonder it works at
                   all. Please use Chrome or Chromium for this one."))))
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
              "More or less a combination of the two above.")
            '("The Dark Side" "/hacks/dark_side"
              "An interactive version of Pink Floyd's famous Dark Side of the
               Moon album cover.")))
        (man-section "AUTHOR"
          "Richard Wossal " (mailto "richard@r-wos.org")))))

  (define gti.html
    (std-page (std-nav-links)
              "gti"
      (p "I've finally implemented the command I keep typing all day: "
         (code (b "gti")) ".")
      "<img src='http://r-wos.org/media/gti-animation' style='max-width:100%'>"
      (p "It's a program that displays a badly made ASCII-art animation
          to punish you for your typing error - and after that magically
          launches the command " (em "you meant to launch") ".")
      (p "The code is available under an MIT-like license "
         (a/href "https://github.com/rwos/gti" "on github")
         " - though of course anybody can write his or her own version"
         " in a couple of minutes.")
      (p "This whole thing is heavily inspired by " (code "sl") ", which
          displays a steam locomotive. However, " (code "gti") " is actually
          nicer than " (code "sl") " as it at least executes git after the
          animation. :-)")
      (hr)
      (p "I think " (code "gti") " is now available in both "
         (a/href "http://packages.gentoo.org/package/dev-vcs/gti" "Gentoo's") " and "
         (a/href "http://svnweb.freebsd.org/ports/head/games/gti/" "FreeBSD's")
         " package systems - but I don't use either of them, so I can't really
          test it.")
      (p "It's also available in "
         (a/href "http://aur.archlinux.org/packages.php?ID=62059" "Arch Linux")
         ", "
         (a/href "http://www.sourcemage.org/projects/grimoire/repository/revisions/834ee1a87924c78ebcfeb40628faec67d7bac09d" "Source Mage GNU/Linux")
         ", the Debian-based "
         (a/href "https://raymii.org/cms/p_Software_Packages" "Terrible Linux")
         ", and on Mac OS via the "
         (a/href "http://braumeister.org/formula/gti" "homebrew")
         " package system.")
      (p "If you're going to include it in $YOUR_DISTRO's package system please
          consider sending me a short note " (mailto "richard@r-wos.org")
         ". It's not a requirement, of course - I'm just curious!")
      ))


)

