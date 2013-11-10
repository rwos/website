Well, that didn't work out so well
2012-07-18

Today I learned: "Balls bouncing around in a cube" is not a good
paradigm to build a programming language on.

Let me explain.

<a href="http://blog.r-wos.org/2011/artificial-stupidity">
Some time ago</a>, I tried to dive into genetic programming. Back then,
I used Brainfuck as the underlying programming language - mainly because
it's very easy to generate Brainfuck code. Needless to say, that didn't
work out too well. Evolving programs for things that are trivial in
Brainfuck to do (like "read one byte, add one, and print it")
worked well. Evolving programs for more complicated tasks did not.

I think one problem was that there was no way to connect the effects of
the program to (parts of) its source code. One could take a Brainfuck
program that doesn't do anything useful, add one byte, and suddenly it
prints the lyrics of "99 Bottles of Beer on the Wall". The thing is,
you don't know that you are on the right track. There's no easy to
detect feature that would allow one to differentiate between a program that
does task X if one adds that one instruction there, and a program that is
just complete garbage.

So, what I wanted was a programming language that would allow me to see
if a program was on the right track - one that would basically point out
in what direction to change the source code. So that, for example, if I
wanted it to print "9", but it printed "0", I would know that I'll have
to go "higher", in a way. And then, if I ran it again, it may print "5" or
so - you get the idea.

It's not a very thought-out idea. What means "higher"? And what about other
changes - "more", "fewer", "go on longer", "except in that case", "stop
earlier", ...? Well, I don't know. And since this is a leisure-time activity,
I can react to not-knowing with "mindless hacking"! :-)

So, mindlessly I hacked. One idea that I had was "why not make the language like
throwing a ball"? Let's say we're throwing a ball in the real world, trying
to hit some target. We might throw it too far or not far enough, but we can
always see which one of those it was - and thus, we know what to change in
the next throw (well, at least the general direction).

With that in mind, I made a small interpreter that simulates balls inside a
hollow cube, with very *very* basic physics. The bottom of the cube was the
runtime memory -just a grid of byte-cells. Balls hitting a cell would
increase the number stored at that memory location. The right face of the
cube served as an output-trigger. Hitting the right face at its top-left
corner, for example, would print the byte that was currently stored in the
top-left memory cell.

That was the run-time operation - the actual program was just a list of
balls, specifying the starting positions and the direction of travel.
So, it's very simple. And I'm pretty sure it's not turing-complete.

But it is *really* really hard to program such a system. I added a "weight"
attribute to the balls, so that balls "weighting" 42 for example would
increase the contents of the memory cells by that number - but it didn't
really help.

I wanted a language that indicates to me how far I'm away from the solution
to a given problem. The specific problems of my "balls in a cube" model aside,
I've come to the preliminary conclusion that that is a) probably the wrong
thing to search for and b) probably impossible to do for the general case.

I have no shiny new insight. All I can say is that just playing
around with an idea that one knows nothing about is a whole lot of fun sometimes. I could just buy a book on genetic programming.

How boring that would be!

