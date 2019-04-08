(module hacks racket/base

  (require "html.rkt")

  (provide (prefix-out hacks: (all-defined-out)))

  (define index.html
    (std-page (std-nav-links "hacks")
              "Hacks"
      (p "Some quick hacks - not polished - hardly usable - use at own risk. "
         "The " (a/href "https://github.com/rwos" "source code") " is available, too.")
      (man-page
        (man-section "ANSI-C"
          (man-options
            `("gti" "/hacks/gti"
              "An implementation of the command I keep typing all day long.")))
        (man-section "JAVASCRIPT"
          (p "For most of those, you'll need a browser with support for the &lt;canvas&gt;
              element (that is, any modern browser should work). If in doubt use
              the latest Firefox or Chromium.")
          (man-options
            `("::.::::::." "/hacks/ld26/"
              ,(j "My entry for the 26th "
                  (a/href "http://www.ludumdare.com/compo/" "Ludum Dare")
                  " 48h game programming competition."))
            `("Moore's Game" "/hacks/ld24/ld24"
              ,(j "My entry for the 24th "
                  (a/href "http://www.ludumdare.com/compo/" "Ludum Dare")
                  " 48h game programming competition."))
            `("Minslide" "/hacks/minslide"
              "A self-contained single-file minimalistic HTML5 slide-deck.")
            `("Voronoi Mandelbrot" "/hacks/voronoi-mandelbrot"
              "An interactive, zoom-able real-time rendering of the
               Mandelbrot set, using random points and Voronoi tessellation.")
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
        (man-section "SCRIPTS"
          (p "The quickest hacks of them all. And the most useless. You'll need a POSIX system.")
          (man-options
            `("mod-time graph" "https://gist.github.com/rwos/5300154"
              "Plots a graph of the modification times of all the files in ~/src.")
            `("ping-turtle" "https://gist.github.com/rwos/5031023"
              "Plots a graph of the ping responses of the hosts with a two-character DNS name.")
            ))
        )))

  (define gti.html
    (std-page (std-nav-links)
              "gti"
      (p "I've finally implemented the command I keep typing all day: "
         (code (b "gti")) ".")
      "<img src='/media/gti-animation.gif' style='max-width:100%'>"
      (p "It's a program that displays a badly made ASCII-art animation
          to punish you for your typing error - and after that magically
          launches the command " (em "you meant to launch") ".")
      (p "The code is available under an MIT-like license "
         (a/href "https://github.com/rwos/gti" "on github")
         " - though of course anybody can write his or her own version"
         " in a couple of minutes.")
      (p "This whole thing is heavily inspired by " (a/href "https://github.com/mtoyoda/sl" (code "sl")) ", which
          displays a steam locomotive. However, " (code "gti") " is actually
          nicer than " (code "sl") " as it at least executes git after the
          animation. :-)")
      (hr)
      (p (code "gti") " is available as a package in "
         (ul
           (li (a/href "http://aur.archlinux.org/packages.php?ID=62059" "Arch Linux"))
           (li (a/href "http://packages.gentoo.org/package/dev-vcs/gti" "Gentoo"))
           (li (a/href "http://svnweb.freebsd.org/ports/head/games/gti/" "FreeBSD"))
           (li (a/href "http://openports.se/games/gti" "OpenBSD"))
           (li "the Debian-based "
               (a/href "https://raymii.org/cms/p_Software_Packages" "Terrible Linux"))
           (li (a/href "http://www.sourcemage.org/projects/grimoire/repository/revisions/834ee1a87924c78ebcfeb40628faec67d7bac09d" "Source Mage GNU/Linux"))
           (li "Mac OS X via the " (a/href "http://braumeister.org/formula/gti" "homebrew") " package system.")))
      (p "Thanks to " (a/href "https://github.com/kusma" "kusma") " it should now also compile and run on Windows.")
      (p "If you're going to include " (code "gti") " in $YOUR_DISTRO's package system please
          consider sending me a short note " (mailto "richard@r-wos.org")
         ". It's not a requirement, of course - I'm just curious!")
      ))


)
