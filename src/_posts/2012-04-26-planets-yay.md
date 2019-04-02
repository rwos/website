---
title: "Planets! Yay!"
date: 2012-04-26 00:00:00 +0000
---
I just got my little terrain generator to render the first planets.

The generated terrain is not yet very realistic, the "texture" is just
a height-map and the poles (not pictured) look *really* bad.

Still: success! I managed to get something involving sine and cosine
to actually work, sort of. And I regained my sixth grade math skills in
the process...

<img src="http://r-wos.org/media/game-1-1.png">

<img src="http://r-wos.org/media/game-1-2.png">

It's written in <a href="http://www.racket-lang.org">Racket</a>, which
is a Scheme, which is a Lisp - which doesn't matter since I have yet to
find OpenGL bindings that would not follow that strange standard OpenGL
programming style.

However, there are three advantages in using a Lisp over something
like C: `read`, `eval`, and `print`.

I've build a console into the generator's main window, which exposes
an interactive read-eval-print-loop to the user. It's not yet hooked up
to the generator's internals but evaluating standard Racket code does
work:
 
<img src="http://r-wos.org/media/game-1-3.png">

(By the way - that sort of thing is not complicated in Racket. About
twenty lines of code, including the text-field instantiation.)

When that console is done, debugging and further development can happen
interactively - with a live preview, as it were.
