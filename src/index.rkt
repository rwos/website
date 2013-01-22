(module index racket/base

  (require "html.rkt")

  (provide (prefix-out index: (all-defined-out)))

  (define index.html
    (std-page (std-nav-links "r-wos.org")
              "Weeks of hacking can save you hours of planning"
      (man-page
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
              "about the author"))))))

  (define about.html
    (std-page (std-nav-links "about")
              "About"
      "<script src='/3rd/jquery-1.8.3.min.js'></script>"
      "<script src='/3rd/biwascheme-min.js'></script>"
      "<script src='/3rd/jquery.terminal-0.4.22.min.js'></script>"
      "<div id='term'></div>"
      "<script>
       function unbalanced_parentheses(text_code) {
         var tokens = (new BiwaScheme.Parser(text_code)).tokens;
         var parentheses = 0;
         var brakets = 0;
         for(var i=0; i<tokens.length; ++i) {
             switch(tokens[i]) {
                 case '[': ++brakets; break;
                 case ']': --brakets; break;
                 case '(': ++parentheses; break;
                 case ')': --parentheses; break;
             }
         }
         return parentheses != 0 || brakets != 0;
       }
       jQuery(function($, undefined) {
          var about = \"Hi, I\\'m Richard Wossal - a programmer, as you might have guessed.\\n\\n\"
                    + \"I\\'m currently mostly doing web development professionally and\\n\"
                    + \"try to do more interesting things unprofessionally.\\n\\n\"
                    + \"You can contact me at <richard@r-wos.org>.\\n\\n\"
                    + \"Thanks for stepping by!\";
          BiwaScheme.define_libfunc('about', 1, 1, function(args) {
            if (args[0] == 'Richard Wossal') {
              term.echo(about);
              return true;
            } else {
              return false;
            }
          });
         var bscheme = new BiwaScheme.Interpreter(function(e, state) {
           term.error(e.message);
         });
         puts = function(string) {term.echo(string);};
         var code_to_evaluate = '';
         var term = $('#term').terminal(function(command, term) {
           code_to_evaluate += ' ' + command;
           if (!unbalanced_parentheses(code_to_evaluate)) {
               try {
                   bscheme.evaluate(code_to_evaluate, function(result) {
                       if (result !== undefined && result !== BiwaScheme.undef) {
                           term.echo(BiwaScheme.to_write(result));
                       }
                   });
               } catch(e) {
                   term.error(e.message);
               }
               term.set_prompt('-> ');
               code_to_evaluate = '';
           } else {
               term.set_prompt('  ');
           }
         }, {
           greetings: '',
           height: 300,
           name: 'biwa',
           exit: false,
           prompt: '-> '});
         term.exec('(about \"Richard Wossal\")');
       });
       document.write('<small>(Interpreter (<a href=\"http://www.biwascheme.org\">BiwaScheme</a>'
                      + ' (Copyright (C) 2007-2010 Yutaka HARA and the BiwaScheme team)))');
       </script>"
       ;; TODO: eliminate duplication
       (noscript
          (p "Hi, I'm Richard Wossal - a programmer, as you might have guessed.")
          (p "I'm currently mostly doing web development professionally and
              try to do more interesting things unprofessionally.")
          (p "You can contact me at " (mailto "richard@r-wos.org") ".")
          (p "Thanks for stepping by!"))))

  (define 404.html
    (std-page (std-nav-links)
              "404 Not Found"
      (p "Sorry about that.")))

  (define 500.html
    (std-page (std-nav-links)
              "500 Internal Server Error"
      (p "Well, at least it's not your fault")))

  (define term.css
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
        font-family: FreeMono, monospace;
        color: #33dd33;
        background-color: #000f00;
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
    ")

  (define web.css
    (j
      (css term.css)
      (css "
        body {
            font-family: \"open sans\",sans-serif;
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
        h1, h2, h3, h4 {
            color: #66ff66;
            line-height: 1em;
            text-align: center !important;
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
            text-align: center !important;
        }
        h1 {
            font-size: 16pt;
            border-top: 1pt solid #66aa66;
            padding-top:0.25em;
            margin-top: 1em;
            display: inline-block;
        }
        hr {
            border-style: none;
            width: 50%;
            height: 0pt;
            border-top: 2pt solid #339933;
        }
        .man-page {
            display: inline-block;
        }
        .man-heading {
            padding-top: 1em;
            font-size: 90%;
        }
        .man-heading:first-letter {
            font-size: 110%;
        }
        .man-content {
            padding-left: 2em;
        }
        .man-content .descr {
            margin: 0pt;
            margin-left: 3em;
            margin-bottom: 0.5em;
            padding 0pt;
        }
        .block {
            margin: 1em;
            padding: 4em;
            padding-top: 1.5em;
            padding-bottom: 2em;
            border-top: 2pt solid #339933;
            border-bottom: 2pt solid #339933;
            border-radius: 2em;
            text-align: center;
        }
        .block * {
            text-align: left;
        }
        input[type=text], textarea {
            color: #33dd33;
            background-color: #003f00;
            border: 2pt solid #003f00;
            border-radius: 0.25em;
        }
        input[type=text]:focus, textarea:focus {
            border-top: 2pt solid #339933;
            border-bottom: 2pt solid #339933;
        }
        input[type=button], input[type=submit] {
            color: #33dd33;
            background-color: #003f00;
            border-radius: 0.25em;
            border: 2pt solid #339933;
        }
        input[type=button]:hover, input[type=submit]:hover {
            color:#000f00;
            background-color:#ffff00;
            border: 2pt solid #ffff00;
            box-shadow: 0px 0px 5px 4px #ffff00;
        }
        .nav-prev {
            float: left;
            font-size: small;
        }
        .nav-next {
            float: right;
            font-size: small;
        }
        @media (max-width: 500px) {
          .block {
            padding-left: 0em;
            padding-right: 0em;
          }
          .nav-prev, .nav-next {
            float: none;
          }
        }
        ")))

  (require racket)

  (define (string-replace* str . replacements)
    (let ([out-str str])
      (for ([r (in-list replacements)])
        (set! out-str (string-replace out-str (first r) (second r))))
      out-str))

  (define alt-web.css
    (string-replace* web.css
      '("33dd33" "000007") ; fg
      '("000f00" "fefeff") ; bg
      '("226622" "777777") ; footer
      '("66ff66" "000007") ; headings
      '("66aa66" "000007") ; headings-top-border
      '("ccff66" "4444ee") ; a
      '("ffff00" "4444ee") ; a hover bg
      '("border-radius:5px 5px 5px 5px;" "border-radius: none;")
      '("box-shadow:0px 0px 5px 4px" "box-shadow: 0px 0px 0px 2px")
      '("aaaa00" "0000aa") ; a visited
      '("339933" "333399") ; hr, borders
      '("003f00" "ffffff") ; input bg
   ))


)

