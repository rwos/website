Adventures with Newsqueak
2011-11-07

I pushed Rob Pike's Newsqueak interpreter to 
<a href="http://github.com/rwos/Newsqueak">my github page</a>.

This might seem (and largely is) a senseless thing to do,
as it is freely available on
<a href="http://herpolhode.com/rob/">Rob's (old) homepage</a>.
And unfortunately it looks a bit like me trying to take credit for his
work, which I really do not intend to do - so let me explain, why I did this.

Last week or so, I tried to build `squint` (that's the official name of
this marvelous piece of software) on a machine running Ubuntu 10.10,
which gave strange warnings about a gcc built-in being called with a wrong
type.

This seemed odd, given that the version I tried to build was explicitly
marked as the "Linux" version (which implies that using gcc is okay) and
not too old, either (2000, okay that's eleven years, but still).

When I tried to run some test program through the interpreter, it died
with a segmentation fault. Now, this was *really* odd. I hooked up
gdb and it seemed that it died on a strlen() call somewhere deep in
the lexer.

Now, it *is* pretty easy to write a sloppy C program that dies on a
strlen() - just handle it a char array without a terminating NUL byte
and off you go. But lexers are usually super-simple and, last but not least,
it was friggin' Rob Pike who wrote it.

Clearly, there was something very wrong. And probably *not* the code itself.

So I though to myself "okay, let's debug this sometime, and upload the modern
version to github" - thinking that gcc probably changed some default behavior
over the years and I just needed to add something to CFLAGS to make up for that.

Fast forward a week including an update to the latest Ubuntu,
<a href="http://blog.r-wos.org/2011/fuck-unity-fuck-gnome3-i-m-going-to-downgrade">a disgusted look</a>,
and a downgrade to 10.04 LTS (i.e. "long term support").

I had some time on my hands and tried to tackle this `squint` thing again.

I typed `make all` - and, lo and behold, no warning, but one error. The error
was about some pretty strange `#include` for `sys/wait.h` but with an absolute path
instead of, well, `sys/wait.h`.

So I removed the statement - and everything, including running the test programs,
just worked. I thought "cool, fixed it" and uploaded it to github. Then I
realized that the value of that one-line "fix" is, well, not too high, actually...

So now it looks like I took some software from one place, did absolutely
nothing on it, and uploaded it to another place, but with my name added. 
Not that anybody cares, but I just wanted to explain the whole story so I can
stop feeling bad about it.

What also helps is that Newsqueak is a pretty neat (and mostly forgotten)
language. It has, among other nice things, basically typed named-pipe
elements at the language level. And there's a language-level `select` for these things,
too. So that's pretty cool and powerful, while still easy to reason about.
But the real language overview will have to wait until the next post -
I have to really learn it, first. :)

Happy Hacking!

(**Update**: Well, it was (and is) a problem with the code. Some of the plan9
libraries included with squint don't build for 64 bit targets (or well, they
*do* build, but they die at runtime). I thought it was dependent on the gcc
version, because I switched that and forgot that I switched to
a 32 bit CPU at the same time. Word-size depend bugs never occured to me before,
so this wasn't exactly my first though on what was going wrong.)