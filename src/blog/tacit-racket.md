Tacit Programming in Racket
2013-01-12

Just a quick technical note: tacit (aka point-free aka - hahaha - pointless)
programming works just fine in Racket.

Let's take the usual example problem: we want to get the average of a list of numbers.

The average is the sum of all the numbers divided by the length of the list, so
let's first make a sum function:

    (define (sum ls) (apply + ls))

This would work, as would `(define (sum ls) (foldl + 0 ls))` - but there's still
the "ls" parameter in there. Tacit programming is programming via function
composition, without using explicit parameters. So, lets get rid of it.

Let's take the apply definition above. We can see that `(sum ...)` is exactly the same as
`(apply + ...)`, so if we could just transform the apply function to one that has
the "+" already built-in and only takes the one remaining
argument - the list - that would be great.

And, why yes we can: The operation that helps us here is called "currying"
[because "sch&ouml;nfinkeling" would sound ridiculous](http://en.wikipedia.org/wiki/Currying).

    ;;; curry is in #lang racket - if you use racket/base, just
    ;;; (require racket/function)
    ;;; "->" is the prompt

    -> (curry apply)
    #<procedure:curried>

    -> ((curry apply) +)
    #<procedure:curried>

    -> (((curry apply) +) '(1 2 3))
    6

Aha! Now we have a function, `((curry apply) +)`, that takes a list of numbers
as the only argument and returns the sum. So, why not call that function "sum":

    -> (define sum ((curry apply) +))

    ;; check if it still works
    -> (sum '(1 2 3))
    6

Now we need a length function. For that, we just take the built-in `length` function.

    -> (length '(1 2 3))
    3

The average is now:

    -> (/ (sum '(1 2 3)) (length '(1 2 3)))
    2

We still have the list parameter (or, in this case, the list) in it, however.
So let's take it out. There are probably ways to do that with just basic function
combination and currying, but it's late at night so let's just cheat a little
and define a higher-order function that does exactly what we want:

    ;; I called that function "-<" because you shouldn't use it, as it's more a
    ;; result of my limited knowledge of tacit programming than anything else.
    ;; This is (probably) not the most elegant way to solve our problem.
    -> (define (-< head . fns)
         (lambda (x) (apply head (map (lambda (fn) (fn x)) fns))))

This takes a "head" function and an arbitrary number of child functions and
returns a function that takes an argument to which all the child functions are
applied, with the head function getting applied to the results.

That's a bit confusing to explain, but really simple to use:

    -> (-< / sum length)
    #<procedure>

    -> ((-< / sum length) '(1 2 3))
    2

And with that little non-tacit cheat we now have a rather beautiful average function:

    -> (define avg (-< / sum length))

    -> (avg '(2 3 4 5 6))
    4
    -> (avg '(1 2 3 4 5 6 7 8))
    9/2

Another important higher-order function for tacit programming that wasn't
mentioned here is `compose`, as it's called in Racket. It combines functions
and it's really very simple:

    (compose foo bar baz)

is just the point-free version of

    (lambda (x) (foo (bar (baz x))))

All of this seems like a lot of work just for avoiding explicit parameters, but
once one has a small collection of primitives it's actually pretty easy to
write new functions in a point-free style.

Of course, whether or not you like tacit programming as a whole is a bit of a
question of taste. It's certainly very compact and powerful, but it also can be
very confusing at times. Just have a look at APL, J, or Forth for an example of what it
looks like if one just takes tacit programming and runs with it.

([part 2](http://r-wos.org/blog/tacit-racket-2))

