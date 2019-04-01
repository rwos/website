There's one thing wrong with Python
2011-12-14

Finally! I found something that is wrong with Python!
<small>With Python2, that is - Python3 saves itself from being wrong
by being stupid.</small>

And it's really wrong, it's of "absolutely broken" wrongness.
On a scale from 0 (right) to 12 (wrong) this would score a straight
twenty-seven.

It's about scope in nested functions.

Normally, scope in python is pretty straight-forward. Okay, to access
the global scope from a non-global scope, one has to use the `global`
keyword:

    foo = 0
    def bar():
        global foo # no access to foo without this
        print foo

That's stupid but it doesn't really qualify as being wrong.
Now enter nested functions:

    def foo():
        state = 1
        def bar():
            pass # "pass" is a no-op
        bar()
        return state
    print foo()

That's the (artifical) example I'll be using. It doesn't do something
useful and the nested function is not needed here, but that's not
the point. I "discovered" the behaviour I'm going to describe while writing
a lexer. Which *did* do something useful. Or at least it would have - if
python had let it.

So, the program above is perfectly valid python and prints `1`, as you
would expect.

This, on the other hand, is *not* valid python:

    def foo():
        state = 1
        def bar():
            state += 1
        bar()
        return state
    print foo() # should print 2, but doesn't

It gives an `UnboundLocalError`: "local variable 'state' referenced
before assignment".

The unhelpful error message notwithstanding, that seems to be the
same case as with global variables. Seems like we always have to
be explicit to access higher-than-local scope.

Well, yes and no.

Yes, that might have been the thought behind it.

No, `global` doesn't work in this case - and there is no complement for
use in functions. <small>I'm told that python 3 has `nonlocal` which solves
this issue - but again: I think that requiring that explicitness is just
stupid.</small>

But wait, there's more! We were wrong about the need to be explicit:
in fact, `bar()` *does* have access to `state` - by default! How come?

Well, local functions can *access* all variables local to their parent
function. They just can't rebind them.

To see how utterly, utterly wrong this is, take a look at the following
code. Which does *exactly* what the last snipped intended to do, but is
absolutely legal python. Because this time, we cheat our ways around that
idiotic "no rebind" policy:

    def foo():
        state = [1]
        def bar():
            state[0] += 1
        bar()
        return state[0]
    print foo() # prints 2

Really, are you kidding me or what? How can "access, but not rebind" ever
have seemed to be a good idea? I sincerly hope that this behaviour is only
due to some implementation detail and fell out for free.

Because I just cannot imagine anyone being stupid enough to implement this
deliberately.

Ironically, this is also legal:

    def foo():
        global state
        state = 1
        def bar():
            global state
            state += 1
        bar()
        return state
    print foo() # prints 2

Great, your scope-access control bullshit allows introducing global variables
that *nobody knows about* because they are not declared anywhere in the global
scope - but it doesn't allow nested functions to access perfectly encapsulated
*local* variables of their parents. Gnah!

But let's explore this some more: solely accessing `state` in `bar()` is allowed -
which, for instance, makes the following legal python:

    def foo():
        state = 1
        def bar():
            print state # prints 1
        bar()
        return state
    print foo() # prints 1

That was expected. What was unexpected: this is also legal:

    def foo():
        state = 1
        def bar():
            state = 2
        bar()
        return state
    print foo() # prints 1 [sic!]

That's because in this case the `state` that `bar()` sets to `2` is a
*different* `state` than the one in `foo()`. No Error, everything is
fine. How... why... I don't even... ARG!

But I'm not mad. There's one thing horribly wrong with Python.

That's pretty good for a programming language, I'd say.