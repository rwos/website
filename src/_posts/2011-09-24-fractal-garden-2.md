---
title: "Fractal Garden 2"
date: 2011-09-24 00:00:00 +0000
---
Did I mention that <a href="http://processing.org">Processing</a> is fun?

Here's <a href="http://r-wos.org/processing/fractal_garden_2/index.html">Fractal Garden Version 2</a> - this combines three things:

First of all, it's a Conway's Game of Life Simulation on the left hand side. Initialising a population is done via "drawing" in that part of the applet.

This Game of Life however, is not binary (dead/alive), but features symbols - namely F, +, -, [, and ] - and a "dead"-status.

The symbols (i.e. the living population of the Game) compose some kind of source code for a fractal drawing routine. The fractal representation of the code is shown on the left.

That may sound pretty complicated, but is actually super-simple (check out the source!).

And it's pretty nice to look at. Does anybody need some Hollywood-style AI display? :)
<p style="text-align: center;"><a href="http://r-wos.org/media/fractal_garden2.png"><img class="aligncenter size-full wp-image-620" title="Fractal Garden Version 2 screenshot" src="http://r-wos.org/media/fractal_garden2.png" alt="" width="474" height="352" /></a></p>
PS: Processing is fun!

Update: Whoops, I just found two bugs in it. The program works because these bugs are cancelling each other out:

Bug #1: My rand_sym() routine never returns the closing bracket ']'.

Bug #2: The balance() routine does the wrong thing when there are more closing than opening brackets. It appends opening brackets, but it should prepend them.

Well, so, whatever. It's art and not an accounting program. I'll just leave it that way.

Update #2: Doing The Right Thing™ makes the fractals much smaller and less cool looking. So, these bugs shall now be named "features". And everyone lived happily ever after.