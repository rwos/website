Multiple Dispatch in Racket
2013-02-06

Some months ago, Racket 5.3 introduced a new
[generics library](http://docs.racket-lang.org/reference/struct-generics.html).
As you would expect, it's basically a convenient way to implement generic
interfaces for related type-specific operations
([for example](http://blog.racket-lang.org/2012/11/generics.html)
generic queue operations for different queue implementations).

That's all fine and works well, but it doesn't (as of now) support
dispatching for more than one function parameter, i.e.
[multiple dispatch](http://en.wikipedia.org/wiki/Multiple_dispatch).

However, there is a reasonably easy way one can get something equivalent to
multiple dispatch in Racket: pattern matching. (This may seem obvious
to others but it wasn't obvious to me until very recently.)

To take the example from the wikipedia page - in Common Lisp one
could do:

    (defmethod collide-with ((x asteroid) (y asteroid))
      ;; deal with asteroid hitting asteroid
      )
    (defmethod collide-with ((x asteroid) (y spaceship))
      ;; deal with asteroid hitting spaceship
      )
    (defmethod collide-with ((x spaceship) (y asteroid))
      ;; deal with spaceship hitting asteroid
      )
    (defmethod collide-with ((x spaceship) (y spaceship))
      ;; deal with spaceship hitting spaceship
      )

While in Racket one could use [pattern matching](http://docs.racket-lang.org/reference/match.html)
to get the same effect:

    (define/match (collide-with x y)
      ((asteroid asteroid)
        #| deal with asteroid hitting asteroid |#)
      ((asteroid spaceship)
        #| deal with asteroid hitting spaceship |#)
      ((spaceship asteroid)
        #| deal with spaceship hitting asteroid |#)
      ((spaceship spaceship)
        #| deal with spaceship hitting spaceship |#))

I don't know enough Common Lisp or Racket to say whether these two versions
are *completely* equivalent (especially performance-wise), but they can
both be used in the same way - which is good enough for me.

