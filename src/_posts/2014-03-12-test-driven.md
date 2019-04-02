---
title: "Test Driven Development"
date: 2014-03-12 00:00:00 +0000
---
It's hard to argue against TDD because that is often construed as arguing
against software testing itself.

I guess there are actually people who think that *all testing* is bollocks, but
I am not one of them. I think that there's value in regression and acceptance
testing. Yet I still think that TDD is absolutely the wrong way to go. I'll
try and explain that opinion.

I will try and *not* bring up any arguments that boil down to "if you're being
stupid, TDD doesn't help". Sometimes people claim that TDD makes software
development easier. But "easy" is a big concept and I assume they don't mean
"follow that one weird trick and your programs will always work". Nobody can
expect any software development technique to help *so much* that you can switch
your brain off - and I don't expected that from TDD.

The object of TDD is the unit, and the unit test. That is not necessarily
always true, one could theoretically do test driven development against
higher-level functional tests. But since one of the claims pro TDD is that it
makes the code itself better, and since we write programs by typing in one unit
of code after another (roughly), I think it's fair to say that the unit is the
canonical choice for TDD.

So TDD starts out with a simple test. That test fails, so then there's code
being written to satisfy the test. Then add another test and so on.

The usual claim is that, by going by that method, you're going to end up with a
testable (hence well-designed), and well-tested unit of code.

In my opinion there are a few things wrong with that claim.

First, **testable does not equal well-designed**. In fact, testability and
well-designed-ness of code are completely orthogonal. Yes, an easily
unit-testable class is probably better than *the same class* with a design that
prohibits unit-testing. But it's only exactly that.

* The class might be completely unnecessary. This is a particularly common
oversight. The functionality might already exist elsewhere. Or the class might just
not *do anything* worthwhile at all. TDD doesn't help here. In fact, it even
hurts. With the writing of a unit test for that useless class it cements it
into the system. You wouldn't throw that well-tested class away, now
would you?

* The class might make assumptions about the context that aren't valid.
A common thing to "demo" TDD  itself is to write a function that generates the
Fibonacci sequence in test-driven style. Obviously, it's a demo of a concept
and not part of a mathematical library but even so - most implementations will
recurse into a stack overflow, and generally be slow as molasses. Because
they're simplistic, and that's fine. Except when it's not.

That part, the *wrong approach, try again* part of software development, is
completely ignored by TDD. Sometimes you'd even hear that wrong approaches just
don't happen with TDD (which is so obviously ignorant it hurts). Other times,
TDD proponents will lean on the good code coverage their approach generates.
This supposedly makes rewriting the code easy and - most of all - save.

So that's the next topic: code coverage.

There are a couple of ways to measure code coverage. And there's the nice
buzz word of "100% code coverage".

Yes, there *is* such a thing as 100% coverage. For example, you can exhaustively
test the addition of two 32 bit integers by writing 18446744073709551616 tests.
But since running those tests would take a few years, I think we can conclude
that exhaustive testing isn't practical. **With exhaustive testing also dies the
idea of "100% code coverage"**. What do people even measure to come to the
incredibly stupid conclusion that they are testing 100% of anything?

In the PHP world, when people say "100%", they mean
"100% lines of code" because that's what the main PHP testing tool puts out.
Other environments will have other conventions - slightly different stupidity
of the same magnitude.

Line-based, and token-based, coverage measurement is easily debunked by
changing the *value* of the things the tokens stand for. In other words:
if the program is using variables, constants, or symbols of any kind, a lexical
approach to coverage-measurement won't tell you anything. Your tests *may* cover
the whole space of possible tests (unlikely, see integer example above), or
they may just cover a tiny portion of it.

Branch coverage is a stronger measurement, since that at least has a runtime
portion to it. But what is a branch? Do you count every single jump-if-zero on
the CPU level? Do you count fall-through cases in switch-case statements? Do
you count vtables and dynamic dispatch systems? Obviously, *even if* that is
all factored-in: you still don't know if you are really covering 100%. Many
common sources of bugs - integer overflows, buffer overruns, off-by-one errors
of all kinds - are still easily achieved with 100% branch coverage.

And then there's "100% of all functions or methods called" - well, you're not
even trying, are you?

So that kind of "coverage" (and even "more coverage than before") doesn't tell
you *shit* about how save it is to refactor that code. It doesn't tell you
anything about *what* is tested, how it's tested, and whether or not that all
makes sense. It doesn't tell you if you're going to be lucky and break your new
code in exactly such a way that a test catches it. Increased "coverage" does
not imply increased safety. Not at all.

Aside: this has a social/cognitive dimension, too. If you believe that what
you're doing is save because of bogus measurements of test effectiveness, that
can actually be more dangerous than not having any tests at all. If there are
no tests then it's clear that your brain is the thing that will have to make it
work. So you have to *think* about what you're doing, and how it affects the
system. If, however, you *believe* that the tests catch you, you're probably
going to be a little more sloppy. It's like a handrail that's not bolted on
properly. If people lean on it, that can easily be more dangerous than not
having a handrail at all.

But TDD proponents being ignorant is one thing. What *really* bugs me about
this is that the "100% coverage" story is what programming is all about.

This is the fundamental *thing* about programming: there are
umpteen-million-billion cases, and *we just cannot try them all*. We do not,
and we *can not* know if that program will even halt.

And coming into that fundamental problem of computer programming, coming to
people who *all* work around it in various clever ways, with a "solution" that
basically says "I know, we'll just ignore it" - that, my friend, that makes
me angry.

---

What we ought to do instead is trying to make sure our programs are correct by
making it easy to reason about them. Patiently write our regression tests for
every reported bug. Write acceptance tests, automated integration tests, that
make sure that at least the common paths through the whole thing still work.

And not claim that this is the silver bullet that kills all bugs.

Dijkstra:

> Testing shows the presence, not the absence of bugs.
