---
title: "Adventures with Newsqueak, part 2"
date: 2011-11-09 00:00:00 +0000
---
<a href="http://blog.r-wos.org/2011/adventures-with-newsqueak"><small>(part 1 is here)</small></a>

I just ported a small testing script included in the source tree from rc
(which is Plan9's command interpreter) to bourne shell. And then I ran
it, obviously.

The first test to fail was a small snippet called "fio":

    include "fio.h"
    F:=fopen("include/fio.h", 0);
    a:array of char;
    do{
        a=<-F.in;
        print(a);
    }while(len a);

This is pretty straight-forward. It includes the fio.h header (probably
"file input output") and then opens this exact header file and echoes
it to standard output. The most notable thing about it is probably
this line:

    a=<-F.in;

which translates to English as "read from the channel F.in into a".
Channels are a thing unique to Newsqueak, but in this case this channel is
basically only used like some kind of a character stream, very much
like C++'s `std::iostream`. Channels can do more than that, some of which I
covered in
<a href="http://blog.r-wos.org/2011/channels-in-newsqueak">another blog post</a>.

But back to the test - why did it fail? Well, to be exact, the line that
failed was the first one - the include. Here's the `strace`.

    open("progs/fio", O_RDONLY)             = 3
    read(3, "include \"fio.h\"\nF:=fopen(\"include"..., 8192) = 104
    open("fio.h", O_RDONLY)                 = -1 ENOENT (No such file or directory)
    open("/usr/rob/src/squint/include/fio.h", O_RDONLY) = -1 ENOENT (No such file or directory)
    write(2, "progs/fio:1: can't open fio.h\n\n"..., 31progs/fio:1: can't open fio.h

As you can see, the include statement searches for "fio.h" in
`/usr/rob/src/squint/include/`. That won't bring up too much; I'm not Rob
and modern Unix systems have their "user" directory under `/home` anyway.

(Note however, that this path does probably *not* stem from some ancient
Unix machine (or a not-so-ancient FreeBSD machine), but from Plan9's use
of `/usr` for, well, *users*. Okay, back to the text:)

This path is actually hard-coded in the lexer, here's the code from `lex.c`:

    349        char buf[1024];
    350        fd=open(s, 0);
    351        if(fd<0 && s[0]!='/' && s[0]!='.'){
    352            sprint(buf, "/usr/rob/src/squint/include/%s", s);
    353            fd=open(buf, 0);
    354        }
    355        if(fd<0)
    356            error("can't open %s\n", s);

And this fact is even documented in a file called "sq" in the
source tree:

    include "file"
    include may appear anywhere an identifier is legal
    if file is not found locally, and does not begin with a / or . , 
    it is looked for in /usr/rob/squint/include.

So, what do we learn from all this?

1. The Newsqueak "include" statement is handled by the lexer
   (which makes sense given that it's much like the one in C,
   where the pre-processor handles it). 

2. Obviously, this code was never used by anyone but Rob Pike himself
   (except for, maybe, people on the same machine - and other people
   called "Rob" running either old Unixes or Plan9).

3. Digging through other people's code can be fun. Especially when the
   code is old and/or strange and has stories to tell.

4. This must be fixed.

I'm not yet completely sure how to handle include file lookup. I will
probably end up using some "config.h" with a compile-time constant,
or just some hard-coded sane default. However, I think I'll look at how
python does this, first. There's no rush, right?

In other news: <a href="http://github.com/rwos/Newsqueak">the interpreter</a>
still doesn't build with certain newer
versions of `make` and/or `gcc` [nope, it was a 64 bit issue, see
update below]. It's probably not a code problem, so
a fix will require someone to look through the Makefiles and stuff.

I will do that, but not right now, that's just too boring and cumbersome
after a long day at work.

(**Update**: Now it does build, and it *was* in fact a code problem:
some of the included Plan9 libraries don't build on 64 bit hosts.
These are probably ancient versions of those libraries anyway, I'll see
if I can replace them with more current unix ports (or if those have the
same problems))


As always: Happy Hacking!
