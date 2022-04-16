<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
    <meta name="Viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0">
    <meta name="Description" content="Homepage of Richard Wossal. Weeks of hacking can save you hours of planning.">
    <title>{{ .Title }} | r-wos.org</title>
    <style>
    * { line-height: 140%; }
    body { margin:15px auto; max-width:40em; padding: 0 1em; }
    body { background: lightcyan; }
    nav, main, aside { background: white; border: 4px ridge black; padding: 8px 1em; margin: 8px 0; }
    nav { background: lightyellow; }
    h1 { text-align: center; color: rebeccapurple; }
    time { background: yellow }
    {% include blink.css %}
    </style>
  </head>
  <body>
    <nav>
      <img style="vertical-align: middle" src="/media/disk.gif">
      <a href="/">Home</a> -
      <a href="/blog">Blog</a> -
      <a href="/feed.xml">RSS</a> -
      <a href="/hacks">Hacks</a> -
      <a href="/about">About</a>
    </nav>
    <main>
      <h1>{{ .Title }}</h1>
      <p><b><time datetime="{{ .Date }}">{{ .Date }}</time></b></p>
      {{ .Content }}
    </main>
  </body>
</html>
