<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
    <meta name="Viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0">
    <meta name="Description" content="Homepage of Richard Wossal. Weeks of hacking can save you hours of planning.">
    <title>{{ .Title }} | r-wos.org</title>
    <style>

.terminal .clipboard {
 position:absolute;
 bottom:0;
 left:0;
 opacity:0.01;
 filter:alpha(opacity = 0.01);
 filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0.01);
 width:2px;
}
.cmd > .clipboard {
 position:fixed;
}
.terminal {
 padding:10px;
 position:relative;
 overflow:hidden;
}
.cmd {
 padding:0;
 margin:0;
 height:1.3em;
}
.terminal .terminal-output div div,
.terminal .prompt {
 display:block;
 line-height:14px;
 height:16px;
}
.terminal {
 font-family:FreeMono,monospace;
 color:#33dd33;
 background-color:#000f00;
 font-size:14px;
 line-height:16px;
}
.terminal .terminal-output div span {
 display:inline-block;
}
.terminal .cmd span {
 display:inline-block;
}
.terminal .cmd span.inverted {
 background-color:#33dd33;
 color:#000f00;
}
.terminal .terminal-output div div::-moz-selection,
.terminal .terminal-output div span::-moz-selection {
 background-color:#33dd33;
 color:#000f00;
}
.terminal .terminal-output div div::selection,
.terminal .terminal-output div span::selection,
.terminal .cmd > span::selection,
.terminal .prompt span::selection {
 background-color:#33dd33;
 color:#000f00;
}
.terminal .terminal-output div.error,
.terminal .terminal-output div.error div {
 color:#33dd33;
}
.tilda {
 position:fixed;
 top:0;
 left:0;
 width:100%;
 z-index:1100;
}
.clear {
 clear:both;
}
.terminal a {
 color:#ccff66;
}
.terminal a:hover {
 color:#ccff66;
}
body {
 font-family:Helvetica,Arial,sans-serif;
 font-size:11pt;
 line-height:1.5em;
 padding:0.5em;
 margin:0em;
 color:#33dd33;
 background-color:#000f00;
}
main {
 max-width:50em;
 margin-left:auto;
 margin-right:auto;
}
#footer,
#footer * {
 text-align:center;
 font-size:9pt;
 color:#226622;
}
#footer > a {
 color:#226622;
 text-decoration:underline;
}
h1,
h2,
h3,
h4 {
 color:#66ff66;
 line-height:1em;
 text-align:center !important;
 font-family:Georgia,serif;
 font-weight:normal;
}
a {
 color:#ccff66;
 text-decoration:none;
}
a img {
 display:inline-block;
 border:none;
}
a:hover {
 color:#000f00 ! important;
 background-color:#ffff00;
 border-radius:5px 5px 5px 5px;
 box-shadow:0px 0px 5px 4px #ffff00;
}
a:visited {
 color:#aaaa00;
}
nav {
 font-size:10pt;
 text-align:center;
}
.header {
 text-align:center !important;
}
h1 {
 font-size:16pt;
 border-top:1pt solid #66aa66;
 padding-top:0.25em;
 margin-top:1em;
 display:inline-block;
}
hr {
 border-style:none;
 width:50%;
 height:0pt;
 border-top:2pt solid #339933;
}
dl {
 display:inline-block;
}
dt {
 padding-top:1em;
 font-size:90%;
}
dt:first-letter {
 font-size:110%;
}
dd {
 padding-left:0.5em;
}
dd .descr {
 margin:0pt;
 margin-left:3em;
 margin-bottom:0.5em;
 padding 0pt;
}
.block {
 margin:1em;
 padding:4em;
 padding-top:1.5em;
 padding-bottom:2em;
 border-top:2pt solid #339933;
 border-bottom:2pt solid #339933;
 border-radius:2em;
 text-align:center;
}
.block * {
 text-align:left;
}
input[type=text],
textarea {
 color:#33dd33;
 background-color:#003f00;
 border:2pt solid #003f00;
 border-radius:0.25em;
}
input[type=text]:focus,
textarea:focus {
 border-top:2pt solid #339933;
 border-bottom:2pt solid #339933;
}
input[type=button],
input[type=submit] {
 color:#33dd33;
 background-color:#003f00;
 border-radius:0.25em;
 border:2pt solid #339933;
}
input[type=button]:hover,
input[type=submit]:hover {
 color:#000f00;
 background-color:#ffff00;
 border:2pt solid #ffff00;
 box-shadow:0px 0px 5px 4px #ffff00;
}
.nav-prev {
 float:left;
 font-size:small;
}
.nav-next {
 float:right;
 font-size:small;
}
@media (max-width:500px) {
 .block {
  padding-left:0em;
  padding-right:0em;
 }
 .nav-prev,
 .nav-next {
  float:none;
 }
}
/*
     FILE ARCHIVED ON 01:11:37 Jan 15, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:25:51 Apr 19, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 172.701
  exclusion.robots: 0.095
  exclusion.robots.policy: 0.087
  RedisCDXSource: 0.787
  esindex: 0.007
  LoadShardBlock: 156.164 (3)
  PetaboxLoader3.datanode: 153.834 (4)
  CDXLines.iter: 13.946 (3)
  load_resource: 94.393
  PetaboxLoader3.resolve: 43.836
*/
    </style>
  </head>
  <body>
    <nav>
      <img style="vertical-align: middle" src="/media/disk.gif">
      <a href="/">Home</a> -
      <a href="/blog/">Blog</a> -
      <a href="/feed.xml">RSS</a> -
      <a href="/hacks/">Hacks</a> -
      <a href="/about">About</a>
    </nav>
    <main>
      <h1>{{ .Title }}</h1>
      <p><b><time datetime="{{ .Date }}">{{ .Date }}</time></b></p>
      {{ .Content }}
    </main>
  </body>
</html>