(module index racket

  (require "html.rkt")

  (provide (prefix-out code-museum: (all-defined-out)))

  (define (code-page-skeleton page-title . page-body)
    (j (html
         (head (link/css "http://code-museum.org/web.css")
               (title page-title)
               (script/src "exec.js"))
         (body  page-body))))

  (define (read-code-file title)
    (let* ([title (string-replace title " " "-")]
           [code  (file->string (j "code-museum/" title))])
      (set! code (string-replace code "&" "&amp;"))
      (set! code (string-replace code "<" "&lt;"))
      (set! code (string-replace code ">" "&gt;"))
      code))

  (define (read-exec-file title)
    (let* ([title (string-replace title " " "-")]
           [code  (file->string (j "code-museum/" title ".exec"))])
      (set! code (string-replace code "&" "&amp;"))
      (set! code (string-replace code "<" "&lt;"))
      (set! code (string-replace code ">" "&gt;"))
      (set! code (string-replace code "\\" "\\\\"))
      (set! code (string-replace code "\"" "\\\""))
      (define code-lines (regexp-split #rx"\n" code))
      (set! code-lines
        (map (lambda (line)
               (set! line (regexp-replace #rx"^" line "\""))
               (set! line (regexp-replace #rx"$" line "\\\\n\" +\n"))
               line)
          code-lines))
      (regexp-replace #rx"\\+\n$" (apply j code-lines) "")))

  (define (exec-file-js title)
    (define exec (read-exec-file title))
    (script "var exec = " exec ";"))

  (define (code-page page-title author language year info)
    (let ([small-title (string-downcase page-title)])
      (code-page-skeleton (j page-title " | code-museum.org")
      (div/id "header"
        (h 1 (a/href "http://code-museum.org" "Code Museum"))
        " programming as an art"
        ;; XXX TODO: nav
        (div/id "nav"
          (a/href "/hello-world" "hello world")))
      (div/id "outer"
        (div/id "inner"
          (pre (code/id "src" (read-code-file small-title)))
          (div/class "title"
            (h 2 page-title)
            author (br)
            language "&ndash;" year
            (div/class "info"
              (p info)))
          ))
      (exec-file-js small-title)
      )))

  (define hello-world.html
    (code-page "Hello World" "Dennis Ritchie" "C" "1976" "Trulllala"))

  (define exec.js
    "
    function get_src(s) {
      var lines = s.split('\\n');
      var src = '';
      for (var i = 0; i < lines.length; i++) {
        var split_at = lines[i].indexOf(' ');
        var op   = lines[i].substring(0, split_at);
        var data = lines[i].substring(split_at + 1);
        if (op == 'codeline')
          src += data + '\\n';
        else if (op == 'code')
          src += data;
      }
      return src;
    }
    function get_output(s) {
      var lines = s.split('\\n');
      var out = '';
      for (var i = 0; i < lines.length; i++) {
        var split_at = lines[i].indexOf(' ');
        var op   = lines[i].substring(0, split_at);
        var data = lines[i].substring(split_at + 1);
        if (op == 'output')
          out += data + '\\n';
      }
      return out;
    }
    function exec_ops(src) {
      var parts = src.split(/stop/);
      var ops = []
      for (var i = 0; i < parts.length; i++) {
        ops.push({src: get_src(parts[i]), output: get_output(parts[i])});
      }
      console.log(ops);
      return ops;
    }
    function display_code(code, cur_step) {
      var el = document.getElementById('src');
      el.innerHTML = '';
      for (var i = 0; i < code.length; i++) {
        var out_line = '';
        out_line += code[i].src + '\\n';
        if (i == cur_step) {
          el.innerHTML += '<span class=\"cur\">'
                        + out_line
                        + '</span>';
        } else {
          el.innerHTML += out_line;
        }
      }
    }
    var current_step = 0;
    var code = [];

    function next_step() {
      current_step += 1;
      display_code(code, current_step);
    }

    window.onload = function() {
      code = exec_ops(exec);
      display_code(code, current_step);
    };
    ")

  (define web.css 
    (css "
      * {
          margin: 0;
          padding: 0;
      }
      body {
          font-family: Helvetica, sans-serif;
          background: #302020;
          color: #c0a0a0;
      }
      h1 {
          font-family: Georgia, serif;
          font-size: 10pt;
          font-weight: bold;
          display: inline-block;
      }
      pre {
          font-family: monospace;
          font-size: 14pt;
          color: #d0f0d0;
      }
      code .cur {
          background: #d0f0d0;
          color: #302020;
          border-radius: 0.1em;
      }
      a {
          color: #a0c0a0;
          text-decoration: none;
      }
      a:hover {
          text-decoration: underline;
      }
      li {
          list-style: none;
      }
      dd {
          padding-left: 20pt;
      }
      dt {
          font-variant: small-caps;
      }
      p {
          margin-top: 5pt;
          margin-bottom: 5pt;
      }
      #header {
          font-size: 10pt;
          padding: 10pt;
          margin-bottom: 10pt;
      }
      #header #nav {
          font-size: 10pt;
          Xtext-align: center;
          background: #a0c0a0;
          color: #302020 !important;
          border-radius: 2pt;
          padding: 5pt;
          margin: 5pt;
          opacity: 0;
          -o-transition:.25s;
          -ms-transition:.25s;
          -moz-transition:.25s;
          -webkit-transition:.25s;
          transition:.25s;
      }
      #header #nav a {
          color: #302020 !important;
      }
      #header:hover #nav {
          opacity: 1;
      }
      #outer {
          float: right;
          right: 50%;
          position: relative;
      }
      #inner {
          float: right;
          right: -50%;
          position: relative;
      }
      .title {
          padding-top: 30pt;
          text-align: right;
          font-size: 12pt;
      }
      .title h2 {
          font-size: 12pt;
          font-weight: bold;
      }
      .title .info {
          position: absolute;
          padding-top: 20pt;
          padding-bottom: 20pt;
          text-align: left;
          font-size: 11pt;
          opacity: 0;
          -o-transition:.25s;
          -ms-transition:.25s;
          -moz-transition:.25s;
          -webkit-transition:.25s;
          transition:.25s;
      }
      .title:hover .info {
          opacity: 1;
      }
     "))
)

