#lang racket/base

(require "html.rkt")

(provide (prefix-out index: (all-defined-out)))

  (define (term.css colors)
    (define (c name)
      (j "#" (hash-ref colors name)))
    (j
      ".terminal .clipboard {
          position: absolute;
          bottom: 0;
          left: 0;
          opacity: 0.01;
          filter: alpha(opacity = 0.01);
          filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0.01);
          width: 2px;
      }
      .cmd > .clipboard {
          position: fixed;
      }
      .terminal {
          padding: 10px;
          position: relative;
          overflow: hidden;
          max-width: 40em;
      }
      .cmd {
          padding: 0;
          margin: 0;
          height: 1.3em;
      }
      .terminal .terminal-output div div, .terminal .prompt {
          display: block;
          line-height: 14px;
          height: 16px;
      }
      .terminal {
          font-family: \"DejaVu Sans Mono\", \"Droid Sans Mono\", monospace;
          color: #33dd33;
          background-color: #000f00;
          border-radius: 0.5em;
          border: 2pt solid " (c 'borders) ";
          font-size: 14px;
          line-height: 16px;
      }
      .terminal .terminal-output div span {
          display: inline-block;
      }
      .terminal .cmd span {
          display: inline-block;
      }
      .terminal .cmd span.inverted {
          background-color: #33dd33;
          color: #000f00;
      }
      .terminal .terminal-output div div::-moz-selection, .terminal .terminal-output div span::-moz-selection {
          background-color: #33dd33;
          color: #000f00;
      }
      .terminal .terminal-output div div::selection, .terminal .terminal-output div span::selection,
      .terminal .cmd > span::selection, .terminal .prompt span::selection {
          background-color: #33dd33;
          color: #000f00;
      }
      .terminal .terminal-output div.error, .terminal .terminal-output div.error div {
          color: #33dd33;
      }
      .tilda {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1100;
      }
      .clear {
          clear: both;
      }
      .terminal a {
          color: #ccff66;
      }
      .terminal a:hover {
          color: #ccff66;
      }
      "))

  (define reset.css
    "
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed, 
      figure, figcaption, footer, header, hgroup, 
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      article, aside, details, figcaption, figure, 
      footer, header, hgroup, menu, nav, section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol, ul {
        list-style: none;
      }
      blockquote, q {
        quotes: none;
      }
      blockquote:before, blockquote:after,
      q:before, q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }")


  (define (css-template colors)
    (define (c name)
      (j "#" (hash-ref colors name)))
    (define body-size 11)
    (define line-height 16)
    (define (pt n) (format "~apt" (round n)))
    (j
      (css reset.css)
      (css (term.css colors))
      (css "
        small {
          font-size: 90%;
        }
        html {width: 100%; margin: 0; padding: 0;}
        html,body {min-height: 100%;}
        body {
            font-family: \"Open Sans\",\"Droid Sans\",Verdana,sans-serif;
            font-size: " (pt body-size) ";
            line-height: " (pt line-height) ";
            color: " (c 'fg) ";
            padding-top: " (pt (/ line-height 2)) ";
            padding-bottom: " (pt (/ line-height 2)) ";
            padding-left: 1em;
            padding-right: 1em;
            margin: auto;
            background-color: " (c 'bg) ";
            background-image: -o-linear-gradient(     top, " (c 'bg) ", " (c 'bg-image) " 6em, " (c 'bg) " 1000px);
            background-image: -moz-linear-gradient(   top, " (c 'bg) ", " (c 'bg-image) " 6em, " (c 'bg) " 1000px);
            background-image: -webkit-linear-gradient(top, " (c 'bg) ", " (c 'bg-image) " 6em, " (c 'bg) " 1000px);
            background-image: -ms-linear-gradient(    top, " (c 'bg) ", " (c 'bg-image) " 6em, " (c 'bg) " 1000px);
            background-image: linear-gradient(        top, " (c 'bg) ", " (c 'bg-image) " 6em, " (c 'bg) " 1000px);
            max-width: 60em;
        }
        .navigation {
          font-size: 10pt;
        }
        .navigation * {
          margin-right: 1em;
        }
        #footer, #footer * {
            font-size: 9pt;
            color: " (c 'footer) ";
        }
        #footer > a {
          color: " (c 'footer) ";
          text-decoration: underline;
        }
        .block {
            max-width: 35em;
            padding-left: 60pt;
            padding-top: " (pt (* 2 line-height)) ";
            padding-bottom: " (pt (* 1 line-height)) ";
            border-top: 2pt solid " (c 'borders) ";
            border-bottom: 2pt solid " (c 'borders) ";
        }
        code, pre {
          font-family: \"DejaVu Sans Mono\", \"Droid Sans Mono\", monospace;
        }
        .block pre {
          padding-left: 2em;
          line-height: 1.2em;
        }
        blockquote {
          padding-left: 2em;
          line-height: 1.2em;
          font-size: 95%;
          font-style: italic;
        }
        ul {
          list-style-type: disc;
        }
        ul ul {
          padding-left: 1em;
        }
        blockquote small {
          font-style: normal;
        }
        .block p, .block pre {
          margin-top: " (pt (/ line-height 2)) ";
          margin-bottom: " (pt (/ line-height 2)) ";
        }
        .block .date {
            margin-left: -40pt;
        }
        em {
          font-style: italic;
        }
        strong {
          font-weight: bold;
        }
        h1, h2, h3, h4 {
            font-family: \"Open Sans\",\"Droid Sans\",Verdana,sans-serif;
            color: " (c 'headings) ";
            text-align: left;
            margin-left: -40pt;
        }
        h1 {
            font-size: " (pt (* line-height 1.5)) ";
            line-height: " (pt (* line-height 1.5)) ";
          margin-bottom: " (pt (* line-height 2)) ";
        }
        h2 {
            font-size: " (pt (* line-height 1.25)) ";
            line-height: " (pt (* line-height 1.25)) ";
        }
        h3 {
            font-size: " (pt (* line-height 1)) ";
            line-height: " (pt (* line-height 1)) ";
        }
        hr {
            width: 40pt;
            height: 0pt;
            border-style: none;
            border-top: 2pt solid " (c 'borders) ";
            text-align: left;/*this will align it for IE*/
            margin: 0 auto 0 0; /*this will align it left for Mozilla*/
            margin-left: -42pt;
            margin-top: " (pt (* line-height 1)) ";
            margin-bottom: " (pt (* line-height 1)) ";
        }
        a {
            color: " (c 'a) ";
            text-decoration: none;
        }
        a img {
            display: inline-block;
            border: none;
        }
        a:hover, a img:hover {
            color: " (c 'bg) " ! important;
            background-color: " (c 'a-hover-bg) ";
        }
        a:visited {
            color: " (c 'a-visited) ";
        }
        .man-page {
            display: inline-block;
        }
        .man-heading {
            margin-top: " (pt (* line-height 0.5)) ";
            font-size: " (pt (* line-height 0.8)) ";
            font-family: \"Open Sans\",\"Droid Sans\",Verdana,sans-serif;
            margin-left: -40pt;
        }
        .descr {
          margin-left: 2em;
        }
        input[type=text], textarea, input[type=button], input[type=submit] {
            color: " (c 'fg) ";
            background-color: " (c 'input-bg) ";
            border: 2pt solid " (c 'borders) ";
            border-radius: 0.25em;
        }
        input[type=text]:focus, textarea:focus {
            border-top: 2pt solid " (c 'borders) ";
            border-bottom: 2pt solid " (c 'borders) ";
        }
        input[type=button]:hover, input[type=submit]:hover {
            color: " (c 'bg) ";
            background-color: " (c 'a-hover-bg) ";
            border: 2pt solid " (c 'a-hover-bg) ";
            box-shadow: 0px 0px 5px 4px "(c 'a-hover-bg) ";
        }
        .nav-prev {
            font-size: small;
        }
        .nav-next {
            font-size: small;
        }
        .hll { background-color: #ffffcc }
        .c, .cm, .cp, .c1, .cs {
          font-style: italic
        }
        .k, .o, .kc, .kd, .kn, .kp, .kr, .kt {
          ;
        }
        .p, .gp {
          color: " (c 'highlight1) ";
        }
        "
        ;.nb, .k {
          ;color: " (c 'highlight2) ";
        ;}
        ;.m { color: #009999 } /* Literal.Number */
        ;.s { color: #d01040 } /* Literal.String */
        ;.na { color: #008080 } /* Name.Attribute */
        ;.nb { color: #0086B3 } /* Name.Builtin */
        ;.nc { color: #445588; font-weight: bold } /* Name.Class */
        ;.no { color: #008080 } /* Name.Constant */
        ;.nd { color: #3c5d5d; font-weight: bold } /* Name.Decorator */
        ;.ni { color: #800080 } /* Name.Entity */
        ;.ne { color: #990000; font-weight: bold } /* Name.Exception */
        ;.nf { color: #990000; font-weight: bold } /* Name.Function */
        ;.nl { color: #990000; font-weight: bold } /* Name.Label */
        ;.nn { color: #555555 } /* Name.Namespace */
        ;.nt { color: #000080 } /* Name.Tag */
        ;.nv { color: #008080 } /* Name.Variable */
        ;.ow { color: #000000; font-weight: bold } /* Operator.Word */
        ;.w { color: #bbbbbb } /* Text.Whitespace */
        ;.mf { color: #009999 } /* Literal.Number.Float */
        ;.mh { color: #009999 } /* Literal.Number.Hex */
        ;.mi { color: #009999 } /* Literal.Number.Integer */
        ;.mo { color: #009999 } /* Literal.Number.Oct */
        ;.sb { color: #d01040 } /* Literal.String.Backtick */
        ;.sc { color: #d01040 } /* Literal.String.Char */
        ;.sd { color: #d01040 } /* Literal.String.Doc */
        ;.s2 { color: #d01040 } /* Literal.String.Double */
        ;.se { color: #d01040 } /* Literal.String.Escape */
        ;.sh { color: #d01040 } /* Literal.String.Heredoc */
        ;.si { color: #d01040 } /* Literal.String.Interpol */
        ;.sx { color: #d01040 } /* Literal.String.Other */
        ;.sr { color: #009926 } /* Literal.String.Regex */
        ;.s1 { color: #d01040 } /* Literal.String.Single */
        ;.ss { color: #990073 } /* Literal.String.Symbol */
        ;.bp { color: #999999 } /* Name.Builtin.Pseudo */
        ;.vc { color: #008080 } /* Name.Variable.Class */
        ;.vg { color: #008080 } /* Name.Variable.Global */
        ;.vi { color: #008080 } /* Name.Variable.Instance */
        ;.il { color: #009999 } /* Literal.Number.Integer.Long */
        "
        @media (max-width: 500px) {
          .block {
            padding-left: 0em;
            padding-right: 0em;
          }
          code, pre {
            max-width: 100%;
            overflow: hidden;
            -ms-overflow-x: auto;
            overflow-x: auto;
          }
          .block pre {
            padding-left: 0em;
          }
          h1, h2, h3, h4, .man-heading, .block .date {
            margin-left: 0;
          }
        }
        ")))


  (define web.css
    (let ([colors (hash 'fg              "33dd33"
                        'bg              "000f00"
                        'bg-image        "021a02"
                        'footer          "226622"
                        'headings        "66ff66"
                        'headings-border "66aa66"
                        'a               "ccff66"
                        'a-hover-bg      "ffff00"
                        'a-visited       "aaaa00"
                        'borders         "227722"
                        'highlight1      "339933"
                        'highlight2      "77aa33"
                        'input-bg        "003f00")])
      (css-template colors)))
      
  (require racket) ;;; XXX what's that thing doing here?

  (define (string-replace* str . replacements) ;;; TODO: should  be in utils
    (let ([out-str str])
      (for ([r (in-list replacements)])
        (set! out-str (string-replace out-str (first r) (second r))))
      out-str))

  (define alt-web.css
    (let ([colors (hash 'fg              "000007"
                        'bg              "fefeff"
                        'bg-image        "fdfdfe"
                        'footer          "777777"
                        'headings        "000007"
                        'headings-border "000007"
                        'a               "4444ee"
                        'a-hover-bg      "4444ee"
                        'a-visited       "0000aa"
                        'borders         "333399"
                        'highlight1      "777777"
                        'highlight2      "333333"
                        'input-bg        "ffffff")])
      ;;; TODO: that's pretty hacky
      (string-replace* (css-template colors)
        '("border-radius:5px 5px 5px 5px;" "border-radius: none;")
        '("box-shadow:0px 0px 5px 4px" "box-shadow: 0px 0px 0px 2px"))))
