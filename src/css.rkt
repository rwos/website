#lang racket/base

(provide (prefix-out index: (all-defined-out)))

  (define (css . s)
    (let ([src (j s)])
      ;;; XXX does (curry regexp-replace ..) help here?
      (regexp-replace* #rx" *([(){};:.,=]) *"
        (regexp-replace* #rx"[\n\t ]+" src " ")
        "\\1")
      ))
      
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
      }")


  (define (css-template colors)
    (define (c name)
      (j "#" (hash-ref colors name)))
    (define body-size 11)
    (define line-height 16)
    (define (pt n) (format "~apt" (round n)))
    (j
      (css reset.css)
      (css "
        small {
          font-size: 90%;
        }
        em {
          font-style: italic;
        }
        strong {
          font-weight: bold;
        }
        body {
            font-family: Georgia, sans-serif;
            font-size: " (pt body-size) ";
            line-height: " (pt line-height) ";
            color: " (c 'fg) ";
            padding-top: " (pt (/ line-height 2)) ";
            padding-bottom: " (pt (/ line-height 2)) ";
            padding-left: 1em;
            padding-right: 1em;
            margin: auto;
            background-color: " (c 'bg) ";
            max-width: 60em;
        }
        textarea {
            font-family: Georgia, sans-serif;
            font-size: " (pt body-size) ";
            line-height: " (pt line-height) ";
            color: " (c 'fg) ";
            clear: both;
            display: block;
            width: 100%;
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
        .block p, .block pre {
          margin-top: " (pt (/ line-height 2)) ";
          margin-bottom: " (pt (/ line-height 2)) ";
        }
        .block p, textarea {
          -webkit-hyphens: auto;
          -moz-hyphens: auto;
          -ms-hyphens: auto;
          hyphens: auto;
          text-align: justify;
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
        .block .date {
            margin-left: -40pt;
        }
        h1, h2, h3, h4 {
            font-family: Georgia, serif;
            color: " (c 'headings) ";
            text-align: left;
        }
        h2, h3 {
            color: " (c 'inline-headings) ";
            float: right;
            margin-left: 1em;
            height: " (pt (* line-height 2)) ";
            font-size: " (pt (* line-height 1.25)) ";
            line-height: " (pt (* line-height 1.75)) ";
        }
        h4 {
            color: " (c 'inline-headings) ";
        }
        h1 {
            font-size: " (pt (* line-height 1.5)) ";
            line-height: " (pt (* line-height 1.5)) ";
          margin-bottom: " (pt (* line-height 2)) ";
        }
        hr {
            width: 40pt;
            height: 0pt;
            border-style: none;
            border-top: 2pt solid " (c 'inline-headings) ";
            text-align: left;
            margin: 0 auto 0 0;
            margin-top: " (pt (* line-height 1)) ";
            margin-bottom: " (pt (* line-height 1)) ";
        }
        .comments {
          counter-reset: comment-id;
        }
        .comments hr:before, .comments h2+p:before {
          counter-increment: comment-id;
          content: counter(comment-id);
          font-size: small;
          color: " (c 'inline-headings) ";
          display: block;
          margin-left: -40pt;
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
        .nav-prev, .nav-next {
            font-size: small;
        }
        .hll { background-color: #ffffcc }
        .c, .cm, .cp, .c1, .cs {
          font-style: italic
        }
        .k, .o, .kc, .kd, .kn, .kp, .kr, .kt {
          font-style: bold;
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
            margin-right: 0;
            display: block;
            float: none;
          }
        }
        ")))


  (define web.css
    (let ([colors (hash 'fg              "111"
                        'bg              "fff"
                        'footer          "444"
                        'headings        "222"
                        'inline-headings "777"
                        'headings-border "888"
                        'a               "0000ff"
                        'a-hover-bg      "0000ff"
                        'a-visited       "aa00aa"
                        'borders         "111"
                        'highlight1      "550"
                        'highlight2      "000"
                        'input-bg        "eee")])
      (css-template colors)))
      
  (require racket) ;;; XXX what's that thing doing here?

  (define (string-replace* str . replacements) ;;; TODO: should  be in utils
    (let ([out-str str])
      (for ([r (in-list replacements)])
        (set! out-str (string-replace out-str (first r) (second r))))
      out-str))

