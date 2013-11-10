Greetings from Mandelbrot
2012-08-13

It's nothing terribly exciting, but here's a picture
from a rendering of the Mandelbrot set I did today
(click for the full picture):

<a href="http://r-wos.org/media/mandelbrot.png">
<img src="http://r-wos.org/media/mandelbrot_small.png" style="max-width:90%;display:inline;">
</a>

The renderer is written in JavaScript and is basically
just a hack on top of
[this earlier hack](http://r-wos.org/hacks/voronoi-mandelbrot)
(source code [here](http://github.com/rwos/voronoi-mandelbrot)).

However, the new renderer is pixel-based and doesn't use
Voronoi-tessellation. It also does super-sampling and
supports arbitrary target resolutions.

The combination of JavaScript and the canvas element lends
itself quite well to that kind of thing. It's reasonably
fast (the above picture took about one minute to render) and
easy to use. The whole renderer is about 30 lines of code,
a trivial program.

I'll release it soon, for your desktop-wallpaper generation pleasure -
I'll just have to clean up the user interface a bit, first.