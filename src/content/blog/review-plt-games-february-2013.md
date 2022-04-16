---
title: "Review - PLT Games February 2013"
date: 2013-03-11 00:00:00 +0000
---
A relatively new addition to the existing 423439 programming competitions on
the web is [PLT Games](http://www.pltgames.com), a monthly programming language
programming competition. <small>(Though I don't really know where the "competition"
part is - one can rate languages but there seems to be no page for the results.)</small>

I've thought about taking part a number of times now, but I've never
found the time (which is to say: the time was there, of course - I just
didn't use it to write a programming language). So, instead of a
submission, here's a review of the [submissions for February 2013](http://www.pltgames.com/competition/2013/2).

The theme was "gamification" - and as luck would have it there are only
two entries. Which makes reviewing "all of them" rather easy...

Grinder
-------

<https://github.com/gatesphere/grinder>

Grinder is a wrapper around Python, with an RPG-like shop system where you can
unlock Python modules by paying with gold. Gold is earned by running Python
programs. You lose gold if the program throws an (uncaught) exception
or has syntax errors.

So, let's see how it works:

    
    $ ./grinder stats
    Your grinder stats:
    Gold: 0
    Unlocked modules:

Hm, we seem to start without any gold or unlocked modules. "hello world" it is,
then:

    
    $ cat > hello.py
    print "hello, world"
    ^D
    $ ./grinder hello.py 
    hello, world

How much did we earn?

    
    $ ./grinder stats
    Your grinder stats:
    Gold: 21
    Unlocked modules:

21 pieces of gold - that isn't a lot, the README says we need 500 to unlock a
module. Though, I do have an idea where the number comes from...

    
    $ wc -c hello.py
    21 hello.py

Well, that was simple - let's farm us some gold, shall we?

    
    $ for i in `seq 100`; do echo "# foo" >> hello.py; done
    $ wc -c hello.py
    621 hello.py

That should do.

    
    $ ./grinder stats
    Your grinder stats:
    Gold: 42
    Unlocked modules:

Okay, it's cleverer than that. Let's see if it catches this:

    
    $ for i in `seq 100`; do ./grinder hello.py; done
    $ ./grinder stats
    Your grinder stats:
    Gold: 2142
    Unlocked modules:

Nope - and there we have it: the first problem of gamification are cheaters
like me. That got boring rather quickly... Still, let's just visit the shop to
see what it looks like:

    
    $ ./grinder shop
    Welcome to the Grinder shop!
    Your grinder stats:
    Gold: 2142
    Unlocked modules:
    Commands that can be entered below:
      b modulename
        -> unlocks modulename -- costs 500 gold
      q
        -> quits shopping

Okay, let's buy the `os` module:

    command?> b os
    purchase module os? (y/n)> y
    purchased module os

And try it:
        
    
    $ cat > os.py
    import os
    print os.name
    ^D
    $ ./grinder os.py
    posix

Okay, let's try a module we don't have yet:

    
    $ cat > sys.py
    import sys
    print sys.argv
    ^D
    $ ./grinder sys.py
    Error! Module sys not unlocked!

Fair enough - let's see if we can sneak our way past that restriction:

    
    $ cat > backimport.py
    import sys 
    ^D

And now, after buying only `backimport` (but not `sys`):

    
    $ cat > sys-backdoor.py
    from backimport import * 
    print sys.argv
    $ ./grinder sys-backdoor.py 
    ['./grinder', 'sys-backdoor.py']

So that works, too. Which means that we only need to buy one module. But
we could also buy more than one since gold is easy to come by. All in all, it's
a nice idea but it's too easy to circumvent. Let's see what the other
submission is like.

STRIP-18
--------

<https://github.com/pufuwozu/strip18>

This one is more a programming language game than a game programming language -
if that makes sense. [You can play it online](http://brianmckenna.org/files/strip18/).
It's fun, though a bit short. The concept is interesting - basically the language/game
gives you more powerful constructs once you've proven that you can do what they do
yourself (i.e. you get multiplication, once you've shown you know how to multiply
two numbers using only addition).

It stops at lambda but it would be cool if it went on - maybe one could get
namespaces and symbols once one implemented recursion with a Y combinator?

I tried writing the Y (actually, the Z) combinator in STRIP-18, but it didn't
work. For the record, I think it should be:

    (f) => (((x) => ((x)(x)))((g) => (((f)((v) => (((g)(g))(v)))))))

It's possible, likely even, that I have made an error here but I think 
the main problem is that there is something funny going on with function literals -
there seem to be no first class functions or something:

This:

    >> (a) => (2)
    [object Object]

is a function, and calling works like that:

    >> ((a) => (2))(0)
    2

But you can't define function-returning functions:

    >> (a) => ((b) => (2))
    [object Object]
    >> ((a) => ((b) => (2)))(0)
    [object Object]

This seems to work so far, but when we try to call the inner-most
function:

    >> (((a) => ((b) => (2)))(0))(0)
    node is undefined

I'm not enough of a computer scientist to know which property of literal
functions exactly is missing here - but the functions in STRIP-18 differ from
Scheme's or Python's `lambda` forms. (That, or I've overlooked something).

Result
------

I find both languages pretty neat. Grinder is obviously just a toy, but it's
a nice idea. I'll rate STRIP-18 a bit higher because the evil side of me
would love to see something like that in production systems...
"Thou shalt not use objects before you understand pointers!" ;-)

That was fun. The current PLT games theme is "live coding" - and the March
still has some days left...

It's a shame that the competition website seems so dead - I like the idea
of a programming language competition but it's no fun without
...well, the *fun* part - reviews, leader boards, discussions, that sort of
thing. Well, we'll see.

