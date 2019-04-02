<?php

$files = scandir('oldsrc/blog');
foreach ($files as $f) {
    if ($f == '.' || $f == '..') {
        continue;
    }
    $content = file_get_contents("oldsrc/blog/$f");
    $lines = explode("\n", $content);
    $title = array_shift($lines);
    $date = array_shift($lines);
    $newcontent = "---\ntitle: \"$title\"\ndate: $date 00:00:00 +0000\n---";
    $newcontent .= implode("\n", $lines);
    file_put_contents("src/_posts/$date-$f", $newcontent);
}

/*
---
title:  "Welcome to Jekyll!"
date:   2019-04-01 20:30:52 +0000
categories: jekyll update
---
*/

