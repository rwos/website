A Graphical Forever Project
2013-02-13

A month ago, [a nice little blog post](http://www.dev.gd/20130122-the-joys-of-having-a-forever-project.html)
made rounds on the internet. It describes the joys of having a Forever Project,
a project that can't be completed but that you also can't stop to think about.

Needless to say, I quite liked it. I used to think that I was just
not productive enough, not working hard enough on those kinds of projects.
The post promotes a quite different, more romantic view: How wonderful, all
those people working on crazy, ambitious, world-changing stuff!

However, the post says "a" forever project, as in "one" - and I have more than
one that would fit the description. So I still think I'm slacking too much.
The truth is probably somewhere in-between.

My current Forever Project (see? that doesn't sound right - you're supposed
to have only one) is a GUI, as in "desktop environment". I don't have anything
to show, yet. But I thought I might just join in with all the programmers that
talked about their crazy/stupid Forever Projects and - well - talk about it.

Today, I'll start with a rough outline of my goals:

I'd like to do some things that are hard or impossible to do in current
desktop environments. Some examples:

* I'd like to replace the SSL certificate-handling unit in my browser with one
  that warns me when the certificate changes.

* I'd like vim (not "something vaguely vim-like") in every text input field,
  including the search box of my media player.

* I'd like a proximity-based mouse cursor, with clicks always going to the
  nearest button.

* I'd like to take an HTML renderer and send the output through an edge-detection
  filter and down-scale the resulting image. On a machine without a display.
  Why? Well, why not?

* I'd like to quickly hack one-off shell-scripts with a GUI. And combine them
  to bigger programs, and into a bigger GUI.

What that really means is that I want the convenience and flexibility that
unix provides for text-only programming - only that I want it for GUI programs.

That also means that:

* Everything has to be completely language-agnostic. Not a framework, nor a
  library. X11 is already like that, in a way - but it's too complicated
  to use.
* Everything should be dead-simple.  You should be able to
  write shell one-liners for simple GUI programs, just as easy as working with
  text(-files) is on unix today (and was 30 years ago, for that matter...).
  Printing to a window should not be harder than `echo(1)`ing something to
  a file.

It's getting a bit late now, so let's open another forever project: write
a blog post about the forever project. ;-)

I *do* have a bit of code already "done", and I think I have solutions to
some of the problems that come up. I'll be talking about that in the next
post. Which, I hope, will not be as abstract/boring as this one...

Happy Hacking Forever!

