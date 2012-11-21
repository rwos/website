<?php
// redirecting the old blog posts to the new location
// (blog.r-wos.org/YEAR/POST --> r-wos.org/blog/POST)
// (yes, that's hacky)
$uri = $_GET['uri'];
$uri = str_replace('2011/', '', $uri);
$uri = str_replace('2012/', '', $uri);
$uri = str_replace('.html', '', $uri);
$uri = str_replace('.gz', '', $uri);
$uri = rtrim($uri, '/');

header('HTTP/1.1 301 Moved Permanently');
header('Location: http://r-wos.org/blog/' . $uri);
exit;

