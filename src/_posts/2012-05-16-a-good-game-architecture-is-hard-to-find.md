---
title: "A Good Game Architecture Is Hard to Find"
date: 2012-05-16 00:00:00 +0000
---
I've run head-first into the first big wall on my little OpenGL-Project.

I was implementing a simple physics system, which triggered a much
bigger problem: the general architecture of my game was crap.
I knew that, but I didn't know how to make it suck less.

However, I *think* I have now found a solution.

The usual object-oriented approach to game architecture is to create
a hierarchy of classes, from the most general (probably "GameObject") to
the most special case ("BlueAngryFlyingFlamethrowingDragon").

Hierarchies like that are easy to understand and generally nice to look at.
There's just one small problem: they don't work.

A hierarchy of game objects is first and foremost a lie. A beautiful lie,
maybe, but a lie nonetheless. Every new major feature potentially
re-shuffles the whole class-tree. Also, the whole approach inevitably leads
to a stupid amount of work re-ordering things and pseudo-generalizing stuff
into yet more classes.
Refactoring is hard (it's a hierarchy, you can't just move stuff around as
you wish) *and* incredibly important - because the only alternative to
constant refactoring is "guessing everything just right at the first try".

But if you're trying to fit the whole world into a single hierarchy, getting
it right the first time around is pretty much impossible. Just ask the
<a href="http://en.wikipedia.org/wiki/Linnaean_taxonomy">Fungi</a>.
Multiple inheritance
<a href="http://en.wikipedia.org/wiki/Diamond_problem">doesn't really
help</a>, either.

So, OOP is out: too much work, too little gain, too brittle code.

Another major approach are entity-systems, which shift the attention
away from the hierarchy and just concentrate everything around the
so-called components instead.

The component (stupid name IMHO, I would've called it "feature") holds the
data for a small aspect of a game object. A "PhysicalComponent" for instance
would probably hold things like position, velocity, mass, etc.

The entity is the actual game object - however, it's just a container for
components. If some game character needs to be able fly, it would just get
a "FlyingComponent" added; if it needs to throw flames, it would get
a "ThrowFlamesComponent" added - and so on.

The processing happens somewhere else - in the "systems", which take the
components and do stuff. (I haven't found a more detailed description of
what the systems should or shouldn't do. Also, the data-flows are still
quite a bit of a mystery to me.)

And - last but not least - there's reactive programming, which basically works
like a spreadsheet: All values have a formula associated with them, which
is used to keep the value up to date when a dependency changes.
Both the update and the dependency-resolution usually happen automatically.
It's not too wide-spread, I think, but there are libraries for at least
Python and Common Lisp which implement this scheme.

What *I'm* currently trying to implement for my game is something like that
component-entity thingy, but not as OOP-ish as most websites describe it.
Until now, it seems to be a good fit: the data-flow into and out of the
functions is explicit and clear. It's a bit too verbose, but I think
I can hide most of that behind some macros.

Today's screenshot shows... fog! And spheres! Isn't that nice?
(as I said, I mostly wrestled with the architecture, lately)

<img src="http://r-wos.org/media/game-4-1.png" style="width:90%">

Also, here's a diagram from the project's repository. The x-axis
shows the hour of the day, the y-axis shows the number of commits
made at that hour. Just in case someone wondered what having a
semi-complex side-project and a 40 hour work week does to your
sleep cycle. ;-)

<img src="http://r-wos.org/media/game-4-2.png" style="width:90%">

Happy hacking!

