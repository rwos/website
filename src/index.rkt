(module index racket/base

  (require "html.rkt")

  (provide (prefix-out index: (all-defined-out)))

  (define index.html
    (std-page (std-nav-links "r-wos.org")
              "Weeks of hacking can save you hours of planning"
      (dl
        (man-section "NAME"
          "r-wos.org - because everybody needs a website")
        (man-section "CONTENT"
          (man-options
            '("-v, --blog" "http://blog.r-wos.org"
              "a programmer's view of the world")
            '("-h, --hacks" "/hacks/"
              "small random hacks")
            '("-s, --github" "http://github.com/rwos"
              "source code repository")
            '("-a, --about" "/about"
              "about the author")))
        (man-section "AUTHOR"
          "Richard Wossal " (mailto "richard@r-wos.org")))))

  (define about.html
    (std-page (std-nav-links "about")
              "About"
      (p "Hi, I'm Richard Wossal - a programmer, as you might have guessed.")
      (p "I'm currently mostly doing web development professionally and
          try to do more interesting things unprofessionally.")
      (p "You can contact me at " (mailto "richard@r-wos.org") ".")
      (p "Thanks for stepping by!")))

  (define web.css
    (css "
      body {
          font-family: Helvetica,Arial,sans-serif;
          font-size: 11pt;
          line-height: 1.5em;
          padding: 0.5em;
          margin: 0em;
          color: #33dd33;
          background-color: #000f00;
      }
      #content {
          max-width: 50em;
          margin-left: auto;
          margin-right: auto;
      }
      #footer, #footer * {
          text-align: center;
          font-size: 9pt;
          color: #226622;
      }
      #footer > a {
        color: #226622;
        text-decoration: underline;
      }
      h1, h2, h3 {
          color: #66ff66;
          line-height: 1em;
          text-align: center;
          font-family: Georgia,serif;
          font-weight: normal;
      }
      a {
          color: #ccff66;
          text-decoration: none;
      }
      a img {
          display: inline-block;
          border: none;
      }
      a:hover {
          color:#000f00 ! important;
          background-color:#ffff00;
          border-radius: 5px 5px 5px 5px;
          box-shadow: 0px 0px 5px 4px #ffff00;
      }
      a:visited {
          color: #aaaa00;
      }
      .navigation {
          font-size: 10pt;
          text-align: center;
      }
      .header {
          text-align: center;
      }
      h1 {
          font-size: 16pt;
          border-top: 1pt solid #66aa66;
          padding-top:0.25em;
          margin-top: 1em;
          display: inline-block;
      }
      hr {
          border-style:none;
          width:80%;
          height:0pt;
          border-top:2px dashed #55dd55;
      }
      dt {
          padding-top: 1em;
          font-size: 90%;
      }
      dt:first-letter {
          font-size: 110%;
      }
      dd {
          padding-left: 0.5em;
      }
      dd .descr {
          margin: 0pt;
          margin-left: 3em;
          margin-bottom: 0.5em;
          padding 0pt;
      }
      .block {
          margin: 1em;
          padding: 4em;
          padding-top: 2em;
          padding-bottom: 3em;
          border-top: 2pt solid #339933;
          border-bottom: 2pt solid #339933;
          border-radius: 2em;
      }
      "))

)

