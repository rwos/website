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
         $.terminal.encode = function(str) {
            return str.replace(/&(?!#[0-9]+;|[a-zA-Z]+;)/g, '&amp;')
                      .replace(/</g, '&lt;').replace(/>/g, '&gt;')
                      .replace(/\\n/g, '<br/>')
                      .replace(/  /g, '&nbsp;&nbsp;')
                      .replace(/   /g, '&nbsp;&nbsp;&nbsp;')
                      .replace(/\\t/g, '&nbsp;&nbsp;');
         };
         var term = $('#term').terminal(function(command, term) {
           term.resize = function(w, h) {
             return term;
           };
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
               term.set_prompt('->&nbsp;');
               code_to_evaluate = '';
           } else {
               term.set_prompt('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
           }
         }, {
           greetings: '',
           height: 300,
           name: 'biwa',
           exit: false,
           prompt: '->&nbsp;'});
         term.exec('(about \"Richard Wossal\")');
       });
       document.write('<small>(<a href=\"http://www.biwascheme.org\">BiwaScheme</a>'
                      + ' (Copyright (C) 2007-2010 Yutaka HARA and the BiwaScheme team))');
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

)

