---
title: "Make FRP Mainstream!"
date: 2013-02-17 00:00:00 +0000
---
I'm currently playing around with
[functional reactive programming](http://en.wikipedia.org/wiki/Functional_reactive_programming),
specifically Racket's [FrTime](http://docs.racket-lang.org/frtime/index.html)
language/library.

I haven't done that much with it, yet - I've just thrown together some small
scripts, playing with the concept. But I can say this: if
you haven't programmed anything in a reactive style yet, drop everything
you're doing, get to your machine, and try it! It's fantastic!

You can say things like "the position of this is the integral of its velocity
over time". Or "the force vector is the vector from the object's position to
the mouse pointer scaled by $x". And that's it, you don't need to worry about
*doing* the updates - you just declare stuff and off it goes.

Well, I just realize that I'm pretty bad at explaining the magic. Maybe it can
only be seen in person. But it's really, really, *really* great! It feels
so high-level, and it plays so well with purely functional programming
and function composition and all that. I just don't understand why it isn't
more mainstream.

I mean, it *is* mainstream in the sense that the Observer OOP-pattern can be
used to do something quite like it - but you'd have
to build the primitives yourself, as the Observer pattern is much more low-level.
Go's goroutines and channels could also be used in a functional-reactive fashion,
I suppose. But the *real* magic only comes into play in systems like FrTime or
[Elm](http://elm-lang.org/), where there are first-class behaviors and events.

Functional reactive programming works great for interactive stuff like GUIs or
games - but it should be an improvement for basically everything that has
event-handlers, callbacks, or some kind of polling loop.

It's beyond me why it is so esoteric. It's much more useful, and
more fun, than OOP. Everybody should use it.

