Pure Functional WTF
2011-10-23

I watched a couple of talks from Rich Hickey recently.
(To be precise: <a href="http://www.infoq.com/presentations/Are-We-There-Yet-Rich-Hickey">this talk</a>
and <a href="http://www.infoq.com/presentations/Simple-Made-Easy">this one</a>.)

He is the creator of <a href="http://clojure.org">Clojure</a>,
a Lisp for the JVM and the CLI (the .NET system).  Well, actually,
Clojure is not only *some* Lisp, but a more modern, more functional Lisp dialect.

Clojure is based on immutable types, like other pure-functional languages.

This was a foreign concept for me. And it doesn't seem very helpful at first.
You can't change things. You have to produce a new version, with the "changes"
included. Now, clojure makes this faster than it sounds, using some heavy
trie wizardry (yes, <a href="http://en.wikipedia.org/wiki/Trie">trie</a>,
not tree) - but that's not the point.

The point is - that whole concept makes sense. You can stop worrying about
the state of a data structure. The thing you got will never change. It can't.
It's save to dereference, and it always will be.

Additionally, and derived from that, everything becomes time-independent.
As long as you apply the same functions in the same order on the same data,
you will always get the same result.

That's functional programming and that's all fun and games. I can easily see
that this works great for any sort of compiler or translator or programs of
that kind.

But it doesn't really work for processes; for programs where you *want* changes
over time, or for any kind of I/O.

And that is the point where it gets tricky. Now you've got to manage time.
And you've got to manage side-effects.
That's where things like "monads" enter the stage. 

Rich Hickey talked about the difference between "simple" and "easy" - and
doing I/O via monads is one of the things, where - for me - it becomes
too hard to do the simple.

I just don't grok it. When I read sentences like this:

> An additive monad is a monad endowed with a monadic zero and an
> operation (called mplus) satisfying the monoid laws, with the monadic zero
> as unit. The operation has type M t -> M t -> M t (where M is the monad constructor
> and t is the underlying data type), satisfies the associative law and has the
> zero as both left and right identity. (Thus, an additive monad is also a monoid.)

my brain switches into "overload" mode. I get a SIGSEGV from only *trying* to
understand what this might be about.

How can simple things be so hard?

In some regards, this reminds me of my first encounter with object-oriented programming.
I thought "WTF is this about? Why can't they just, you know, *program* like
normal people?". But I *did* understand OOP, eventually.  I don't know how,
but one day the light bulb went on.

I really hope that happens with monads, too.

This cannot not be as hard as it looks, right?