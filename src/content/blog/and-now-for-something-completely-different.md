---
title: "And Now for Something Completely Different"
date: 2012-12-06 00:00:00 +0000
---
The next [Ludum Dare](http://ludumdare.com) is very very soon. That means it's
time to think about games, again.

First: the platform of choice: I've actually been pretty happy with what I
chose last time - JavaScript and the usual 2D-Canvas stuff. It was fast to program
in, performed well enough and worked on every platform. So, I'm absolutely sure
I'll be using JavaScript again - though maybe I won't directly write in it,
this time around.

One possibility would be to use [Whalesong](http://hashcollision.org/whalesong/),
a Racket-to-JavaScript compiler thing. I don't have any illusions - writing the
whole thing in Racket won't make me code any faster, or the game any better.
But it would be a nice challenge, I think. Could be fun.

The other idea that came to me just yesterday was to use some
JavaScript implementation of a machine or something. Like, writing the whole
thing in C64-BASIC and letting it run on a JavaScript C64 emulator.  Or in C
and letting it run on a JavaScript Linux VM.  That would be even cooler than
writing it in Racket - but it does introduce quite a lot of problems. The
biggest of which will probably be the really, really bad performance of the
whole thing. Well, we'll see.

For the game's engine, I'm currently playing around with various software
rendering stuff - I have a ...well, a thing ...one could call it a stochastic
ray-caster. It produces very nice low-tech, pseudo-retro kind of
effects.

<img src="http://r-wos.org/media/rand-raycast.png" style="max-width:100%">

I really do like software renderers. I'm not very good at writing them (too bad
at math), but I do like just how much crazy stuff you can do with a software
renderer that would be hard or impossible to do with the usual
hardware-accelerated 3D-APIs.

For the game's content - well, let's wait for the official theme announcement,
shall we?

This Ludum Dare, I won't have the whole weekend for coding. But if my last
attendance is any indication, time won't be too big of a problem.

...well, no actually, I got that wrong. Time will be *the* biggest problem
of them all.

In other news: work is currently *exceptionally* boring. I really enjoy
programming, like *really* - but the things I'm currently forced to
do at work, and the context I'm doing them in, are killing all the fun.

So, by way of variety, I've done something completely pointless: I've
integrated a Scheme interpreter into [my about page](http://r-wos.org/about).
It really works! If you don't know Scheme try `(+ 40 2)` or
`((lambda (x) (* x x)) 12)` for a start.

It's the little things in life... :-)

