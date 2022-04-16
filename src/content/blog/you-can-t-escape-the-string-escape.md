---
title: "You Can't Escape The String Escape"
date: 2011-07-23 00:00:00 +0000
---
I've just written this:
<pre>for n in `seq \`expr $i - 1\``; do # word name list
        eval echo "\"\t\t\\\"\$fn_word$n\\\",\"" >> fn.c
done</pre>
And then I woke up.
<blockquote><a href="http://www.youtube.com/watch?v=piW9MHpfCu4">You can exit(1) any time you like, but you can never leave...</a></blockquote>