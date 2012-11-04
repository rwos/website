Secret Alien Technology
2012-04-08

Recently some colleagues of mine started hacking some OpenGL stuff,
which somehow motivated me to also dive into that again. Knowing that
I won't be able to keep me motivated writing a whole game, I thought
I'll tinker a bit with terrain generation - a fairly easy way to do
something exciting.

Now, my colleagues use C++, a language I don't exactly like very much.
I could have just used C, but in my usual way of spending too much
time solving self-inflicted problems, I thought "why not common lisp?".

<img src="http://r-wos.org/media/lisplogo_warning_128.png">

Well, I'll tell you why not.

I spent the last two days getting a common lisp implementation to run
some toy OpenGL example. Not the whole two days, mind you - but still
much too much time.

Instead of `make`, lisp apparently uses something called `asdf` (pro:
very easy to type). Somehow, I missinterpreted what `asdf` does -
I though it was some kind of package system, but it's "only" a
dependency-resolving build tool. So, in my ignorance, I downloaded the
lisp OpenGL binding packages in the hope they'd include documentation
describing how to get them installed so that `asdf` finds them. Well,
that didn't work out too well - the cl-opengl package comes with exactly
zero install documentation. Great - off to `asdf`'s manual.

That manual describes quite well where to place the package, and how to
load it. The only problem is that cl-opengl in turn has quite some
dependencies.
And downloading them all manually can't be the right way to do things.
Besides, my `asdf` installation was a bit too old - and the new version
changed the api for loading packages, of all things. Great, volume two.

Now, one *can* install/load the newer version using the old version -
but I couldn't figure out how to tell my lisp implementation (I use
sbcl, by the way) to always use the newer one. Besides, I grew really
tired of the whole process. This began to look like system administration
- fiddling with configuration files, adding paths in startup files...
I hate that kind of thing, with a passion.

The next day, after some googling, I found a thing called `quicklisp`
which *is* a package system. Like, a real one! Success!

Quicklisp was like a breath of fresh air - friendly, telling
you exactly what you need to do - and everything just worked. I got
the OpenGL, Glut and Glu bindings installed, loaded the aforementioned
example program - and there were colorful rotating pyramids! And
music filled the air, and there were people dancing on the streets.

One remaining problem is that I don't know how one would distribute a
common lisp program in source form. Can I just assume everybody uses
quicklisp? That doesn't seem right.

On a side note: I'm really underwhelmed by the state of lisp programming
tools - it's 2012 and some Emacs mode is the absolute height of
lisp programming? A REPL on steroids, with "online documentation". Wow.
That's the superiority of lisp, something nearly as useful as Eclipse?
They must be kidding. I really hope there's something better out there
I just haven't found yet.

Also, the program startup takes ages (3 seconds or so, where it should take
a fraction of a second), but that's probably my fault. Everything *should*
get compiled to machine code, but it seems like the external packages
are loaded from source every time. Is there something like static linking
in the lisp world? Who knows.

Well, I don't. Everything seems so alien to me. There's a whole lot of
manuals waiting to be read, I guess.
