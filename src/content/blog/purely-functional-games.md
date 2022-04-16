---
title: "Purely Functional Games"
date: 2012-05-25 00:00:00 +0000
---
First things first: **What is purely functional programming?**

A simple definition that'll do it for this exercise is this:

* It's called "functional", because we use functions. Functions get arguments passed
into them; do something with those arguments; and eventually return a result.

* It's called "pure", because we only use functions without side-effects - calling the
function with the same value always leads to the same result. Thus, functions are
generally not allowed to change something outside of their scope, be it global
variables or memory or files, etc.

As you can see from this definition, we can never do IO, never directly allocate
memory, never write to files, never receive user input - which is quite a bit
of a problem for a game, isn't it?

That's why I trade a bit of the pureness for some practicality. I *am*
receiving user input, and I *am* sending things to
the GPU. The whole *game*, the vast majority of the code is everything between those
two, of course - and that's where I try to keep things pure.

And guess what - I'll still call the whole thing "purely functional", even if it
isn't.

Second things second (well...): **Why would one want to do this?**

* to ease testing

Unit testing in a purely functional program is easy - just
pass in the right data and test if the return value is what you expected. That's
it. There's - by definition - no set-up or tear-down or other complicated crap needed.

* to ease programming

For the same reasons purely functional programs are trivial to unit-test, they are
easy to reason about - one function at a time.

Of course, that doesn't mean that all purely functional programs are easy to *understand*
(as in "anyone could immediately understand what this code does"). Far from it - I
personally find the typical purely functional programs *harder* to grok than the
typical C or Java program. The important part is that *when* you understand all the
parts of a purely functional program, you *by definition* do understand the whole program.
Whereas in side-effect-rich programs, in order to really understand what's going on,
one basically has to have a CPU and half a gig of RAM in one's head.

* because it hasn't been done before

Now, there *are* purely functional games, but there aren't many of them.
It's still such a novelty that many games written in that style advertise the fact.
(Well, on the other hand: if they didn't advertise it I wouldn't know about it,
 so... yeah.)

And there *are* some resources - but mostly, you're on your own.

And that's fun, isn't it?

* because it's fun

Yes, it is.

So - **How does it work for games?**

Short version: it's quite a challenge.

Long version:

Let's start at the basics, shall we? The most high-level loop in a game generally
looks like this:

    forever do:
        receive user input
        update the game world
        draw the world to the screen

As I've said above, doing that loop in a purely functional style is out of my scope.
So, let's take a look at "update the game world": 
This block consists of many functions, small and big - all mutating the state of the
world.

Well, they would do exactly that in an object-oriented or imperative program, but in
a purely functional program, we can't use side effects. We can't just change the world
- we can only take the old world and return a new one.

Now, that would be mighty ugly - every single little function takes the whole world
and returns a whole *new* world?  It would maybe look a bit like this:

    (let* ((w1 (update-npc-stats    world))
           (w2 (update-player-stats w1))
           (w3 (update-physics      w2)))
      ;;; w3 now is the world we'll pass to the renderer
      [...]

What's the point of doing that? What would be the advantage over directly manipulating
the world? That's a rhetorical question, there is none.

One solution to this mess would be to only pipe the actual parts of the world
that'll get "updated" to the functions - and re-create a new world outside of them.

    (let ((w1 (new-world-with-changes world
                'npc-stats
                (update-npc-stats (world-npc world)))))
      [...]

I tried that, but beside not knowing how to name most things and functions
(always a bad sign), it was really really ugly and noisy and verbose.
Again, that would've been far easier to write and look cleaner in imperative style
- so, not good.

One *real* solution that I found
<a href="http://prog21.dadgum.com/26.html">on the net</a>
is to not concentrate on the *world* at all. What all these little functions
really produce are neither new worlds nor new positions or velocities - they
produce *changes*. That is, descriptions of things that will happen.
Actually *doing* those things (i.e. producing a new world, with some objects on
different positions, or in different colors or something) is a completely
separate step.

I have recently implemented some system based on that idea in my little
not-yet-a-game-game and it works just great. I really doubt I could've come
up with something of that elegance all by myself - but that's what the internet
is for, right?

Now that all those functions just return changes, we can easily collect
their output:

    (let ((npc-changes    (map update-npc-stats (world-npcs       world)))
          (physics        (map update-physics   (world-particles  world)))
          (player-changes (list (player-points time)
                                (update-player-stats world))))
    ;;; dozens of other forms would be possible, too
    ;;; (this is not real code, by the way, but it's close)

We still have the problem of threading stuff *into* the functions (and I still
don't have a real solution for that - one can basically choose between
"overly verbose" and "overly opaque", both non-optimal) - but that's
now decoupled from the problem of collecting the output.

So, to answer the last question everyone probably has now:

**What the fuck?**

Yeah, I didn't say it was easy. Also, I don't know if I'm just very stupid,
or this is very hard, or I'm doing something very wrong, or purely functional
programming is just not a good fit for games, or if we all should just go
shopping.

But I do enjoy it, actually - it doesn't have to be easy.
Games are hard to write.  Good code is hard to write.
Writing a game using only good code is hard².

A good purely functional game? Hard!

-----

Only tangentially related to today's post, the following screencast shows
my first try of a collision engine. It's a slowed-down version of a
simulation that ran on pretty high (that is, earth-like) gravity settings.
The spheres are two meters in diameter and weight 10kg each. You'll notice
that at one point two spheres pass right through each other. You'll also
notice the low and unstable frame-rate. These are the things I currently
try to resolve with my second try of a collision engine...

But that's stuff for another post.

<img src="http://r-wos.org/media/game-5-1.gif" style="width:90%">

Good night and happy hacking!

