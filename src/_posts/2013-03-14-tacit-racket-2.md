---
title: "Tacit Programming in Racket, Part&nbsp;2"
date: 2013-03-14 00:00:00 +0000
---
I've learned a bit more about tacit programming since
[last time](http://r-wos.org/blog/tacit-racket). What I will attempt
to do today is re-create the higher-order forms called [*hooks* and
*forks* in the J programming language](http://www.jsoftware.com/help/learning/09.htm)
in Racket.

Monadic Forks
-------------

Last time, I defined a function I called `-<`:

    
    (define (-< head . fns)
      (lambda (x) (apply head (map (lambda (fn) (fn x)) fns))))

What it does is best explained by an example:

    
    (-< / sum length)
    ; is equivalent to
    (lambda args
      (/ (apply sum args)
         (apply length args)))

I gave it that funny symbol as a name because I couldn't think of a
good name for what it does. Turns out, the people devising the J
programming language couldn't think of a good name either: they
call that function a "monadic fork". *Monadic* as in "one argument" (i.e. what
other languages would call "unary" - *not* monadic in the Haskell sense),
and *fork* as in ...well, fork in the road, I suppose.

My version takes an arbitrary number of arguments, though - because
that's what you would expect in Lisp. So it's not even monadic.
It's also not constrained to forking into two paths - we can
supply an arbitrary number of "child" functions. 

But still, "fork" seems to be a better name than "-<":

    
    (define fork -<)

Monadic Hooks
-------------

A monadic hook in J is basically the same as a fork, just without the forking.
...which is not a good explaination, I admit. It's probably best explained by
an example:

    
    (hook foo bar)
    ; is equivalent to
    (lambda (arg)
      (foo arg (bar arg)))

It's a useful construct in some situations. The example used in the J manual is
finding out if a number is equal to its floor - i.e. if it is an integer.
Racket has that function already built-in, under the name `integer?` - but
let's suppose it did not. The non-tacit version is:

    
    (define (integer? x) (= x (floor x)))

The tacit version would be:

    
    (define integer? (hook = floor))

With that in mind, we can implement `hook` in Racket:

    
    (define (hook f1 f2)
      (lambda args
        (apply f1 (cons (apply f2 args)
                         args))))

(This, again, returns a function that takes an arbitrary number of
arguments, not just one. Changing it to also take an arbitrary number
of functions would be possible, too, of course - we'll get there
later.)

Dyadic Hooks
------------

Monadic hooks supply every function with the same argument (or, in
our implementation above, with all arguments). Dyadic
("2-ary" or "binary") hooks give every argument to only one single function.
Example:
    
    
    (hook/dyadic foo bar)
    ; is equivalent to
    (lambda (arg1 arg2)
      (foo arg1 (bar arg2)))

This is useful for combining functions with different parameters. Again,
I'll take the example from the J manual: Say, we want a function `hr`
that converts hours and minutes into a decimal fraction of an hour.

    
    ;;; (This looks much better with infix notation: 3 hr 15)
    -> (hr 3 15)
    3.25
    -> (hr 2 30)
    2.5

The non-tacit version of `hr` is:

    
    (define (hr h m) (+ h (/ m 60)))

The tacit version would be:

    
    (define hr (hook/dyadic + (curryr / 60)))

Which, as you might have noticed, is longer. And harder to understand.
The basic concept of the "hooks" does have some beauty, though - especially
if we expand it to take an arbitrary number of functions. There is
the monadic-style hook, the one that applies every function to
the same argument:

    foo x   ⇑      ⇑     ⇑
           bar x   ⇑     ⇑
                  baz x  ⇑
                        qux x

And there is the "dyadic" hook, the one that applies the arguments
in order:

```
foo x1   ⇑       ⇑      ⇑
        bar x2   ⇑      ⇑
                baz x3  ⇑
                       qux x4
```
                    
Of course, both "monadic" and "dyadic" are the wrong words for an
implementation that takes an arbitrary number of functions. And
"hook" isn't a very good name either. These are more like trees.

> There are only two hard things in Computer Science: cache invalidation and
> naming things.
> <br><small>Phil Karlton</small>

I think part of the reason why these functions (especially the "hooks") are so
obscure is that they don't have a good name. The operation of `fold` (also
called `reduce` sometimes) isn't too straight-forward either. But it's clear,
since you can say "it's a fold". If the thing has a name you only have to
understand it once.

Hooks as Forks
--------------

As you might have noticed, "monadic" hooks (the ones where every function gets
the same arguments) are basically a special case of forks. They are forks
with the identity function (`identity` in Racket) on one side. Taking our
`integer?` example from above:

    
    (hook = floor)
    ; is the same as
    (lambda (x) (= x (floor x)))
    ; which is the same as
    (lambda (x) (= (identiy x)
                   (floor x)))
    ; which is the same as
    (fork = identity floor)

And that concludes today's tacit programming lession.
See you next time, where we will use it to construct arbitrarily obscure
versions of once simple functions in order to drive everyone insane. ;-)

Happy Hacking!

