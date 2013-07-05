CoffeeScript - First Impressions
2013-06-10

Just some short notes about [CoffeeScript](http://coffeescript.org/), after
maybe 5 hours of playing with it. This is mostly about the syntax - but then
again, CoffeeScript *is* mostly about the syntax.

I like it, overall, it's definitely a step up from JavaScript. Though it is a
bit of a "works 90% of the time" design: it quickly gets unintuitive once you
come to the corner-cases. There's a bit too much implicit stuff in the syntax
for my taste - but it's certainly pretty clean and
noise-free (at least in simple cases).

Nice features include:

Function application chains can be written without parentheses:

    foo a         # like foo(a)
    foo a b c d   # like foo(a(b(c(d))))
    foo a b,c,d   # like foo(a(b, c, d))

So it basically gives you an automatic `compose` - it doesn't, however, do an
automatic `curry`:

    foo = (a, b) -> a+b   # like foo = function(a, b) {return a+b;}
    foo a                 # could/should return "(b) -> a+b" but doesn't

Also, combined with some of the other expression-oriented syntax (especially
list-comprehensions) one can basically write arbitrarily confusing constructs:

    foo  x  for x in [1, 2, 3]   # like foo(1); foo(2); foo(3);
    foo (x) for x in [1, 2, 3]   # same as above
    foo (x  for x in [1, 2, 3])  # like foo([1, 2, 3])

My first comment isn't quite the whole truth - the whole first line is also an
expression and that expression evaluates to `[1, 2, 3]`:

    bar(foo x for x in [1, 2, 3])
    # behaves like foo(1); foo(2); foo(3); bar([1, 2, 3])

Let's try and refactor that:

    result = foo x for x in [1, 2, 3]
    bar(result)
    # behaves like foo(1); foo(2); foo(3); bar(3) -- whoopsy!

Well, that's the price one has to pay for the extreme terseness.

## splats 1 ##

Then, there's a feature they call "splats". Which is a stupid name,
but that's because "splats" are actually three distinct features
and the name basically refers to the lexical token "..." and not to
a semantic concept.

The first "..." usage is for rest-args in function definitions:

    foo = (a, b...) -> # b is a list
    
    # equivalent Scheme code:
    # (define (foo a . b) (#| b is a list |#))

What is nice, is that (unlike in Scheme) this works not only for the last
parameters, but everywhere (where it makes sense):

    foo = (a..., b) -> # a contains all but the last parameter

## splats 2 ##

Feature number two is splicing arguments in function calls (basically syntactic
sugar for apply):

    list = [1, 2, 3]
    print list       # like print([1, 2, 3])
    print list...    # like print.apply(null, [1, 2, 3])

Splicing literals and expressions works, too. And you can combine
spliced arguments with non-spliced ones - though *not* on the REPL (at least in 1.6.3),
since it's broken. And the last activity on [a related bug](https://github.com/jashkenas/coffee-script/issues/2906)
is "reopened 2 months ago".

That doesn't quite fill me with enthusiasm for CoffeeScript, I have to say...
(The REPL is also a bit cumbersome to use - one has to manually switch
into multi-line mode in order to enter line breaks.)

Some other corner-cases also work (even on the REPL, yay!):

    foo = -> [1, 2] # (function w/o arguments)
    do foo          # (call that function, returns [1, 2])

    print do foo    # like print([1, 2])
    print do foo... # like print(1, 2)

## splats 3 ##

The third "splats" usage is in "destructing assignment" from lists and
objects:

    [head, stuff..., tail] = [1, 2, 3, 4, 5]
    # stuff will be [2, 3, 4]
    # (except on the REPL, where it will fail)

That's really nice, but why they use brackets on the left side of the
assignment is beyond me.  PHP does something semantically similar (`list(a, b,
c) = array(1, 2, 3)`) - but that's wrong, people! The whole *point* about the
left side of such an assignment is that it is *not* a list. 

## COBOL ##

CoffeeScript also has that whole Perl-like reverse-if stuff:

    x = "foo" if y == "bar"

<strike>Python has that too</strike> <small>(Whoops, no, I was misremembering
here: Python only has the "`x = can_fail() or default_value`" idiom)</small> -
and Python also loves code that reads like simplified English sentences. But
CoffeeScript is in a whole other league:

    while player isnt dead
        if key is space then jump quickly upwards unless status is jumping

Given a bunch of trivial definitions, this is absolutely valid CoffeeScript
code. I don't know if they want to win over the COBOL crowd with this
nonsense, or what is going on here. I just know I don't like it.  (One doesn't
*have to* write in that pseudo-readable style, of course - though the tutorial
does make it clear that this is the preferred way to do things).

As I see it, this is basically the underlying theme of CoffeeScript: syntactic cuteness.

There is a syntax for array slices, in which two dots denote an inclusive end, and three dots
denote an exclusive end - cute, yes, but also a new record for the least amount of pixels that are
wrong per off-by-one error.

Also, consider:

    ls = [0, 1, 2, 3]
    ls[0..3]                    # is [0, 1, 2, 3]
    ls[..]                      # is [0, 1, 2, 3]
    ls[0...3]                   # is [0, 1, 2]
    ls[...]                     # is [0, 1, 2, 3]
    ls[0....3]                  # is []
    ls[0.....3]                 # is a parse error
    ls[0....999999999999999999] # is [0]
    ls[0...999999999999999999]  # is [0, 1, 2, 3]
    ls[0..999999999999999999]   # is [0, 1, 2, 3]
    ls[0.999999999999999999]    # is 1

    # bonus:
    ls[..->]    # is [0, 1, 2, 3]
    ls[...->]   # is []
    ls[.."3"]   # is [0, 1, 2, 3]
    ls[..."3"]  # is [0, 1, 2]
    ls[.."x"]   # is [0, 1, 2 ,3]
    ls[..."x"]  # is []

Unlikely that a programmer would write one of the stranger examples, but if
CoffeeScript had macros, or a preprocessor, it would be quite difficult to
use. But it doesn't. It just has cute syntax.

There's another "cute" thing, `?=`, which sets a variable to a value
when the variable is undefined or null:

    x = null
    x ?= 3 # if x is null or undefined, set it to 3

But you have to declare the variable first, which kind of defeats the whole point.
If you don't want to do that, you can use the following instead:

    x = x ? 3    # set x to 3 if x doesn't exist

But pay attention to not write it as 

    x = x? 3

Because that always sets x to `undefined`. (No, I don't know why.)

The `?` also has an accessor variant, as in:

    object?.key

Which returns `undefined` if `key` doesn't exist in `object`. So that's nice,
especially for longer chains (on the other hand - longer chains of objects
returning objects aren't exactly good code to begin with).

Which brings us to the whole hash-table/object stuff, but that's
stuff for another post.

Happy Hacking!

