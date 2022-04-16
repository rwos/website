---
title: "Yet Another Esoteric Programming Language"
date: 2011-07-21 00:00:00 +0000
---
There's not much I can report here yet, but my programming language is under way. I finally decided on a syntax and some general attributes.

It will be stack based and generally untyped, i.e. much like <a href="http://en.wikipedia.org/wiki/Forth_%28programming_language%29">Forth</a>. Everything will be a subroutine - all the way down to some (few) built-in routines.

If you are unfamiliar with Forth: it's a very simple system. A word (Forth-terminology; think "a subroutine" or "the name of a subroutine") is read in, searched for in a global table (commonly called "the dictionary") and, if found, executed. Passing values between subroutines happens via a stack.

The stack "cells" in my language will be 8 bit wide. The rationale behind this is that it's easy to implement on today's machines. The obvious downside is the limited integer range. But using traditional (i.e. fixed-width) integers <a title="Arbitrary Limits, or “64 Bits ought to be enough for anybody”" href="http://blog.r-wos.org/2011/abitrary-limits-or-64-bits-ought-to-be-enough-for-anybody/">you are going to a hit a limit anyway</a> - so why not hit it early on? That should make arbitrary-range numbers a pretty pressing need - which is exactly what *I* need to go through the hassle and implement them...

What I could not yet decide on, is how to represent and handle literal numbers and strings. Forth's way of treating them different right in the interpreter feels unnatural to me, somehow. The best way I can think of right now is that a word starting with a decimal number or double-quotes would not undergo the normal search-in-dictionary-and-execute-if-found cycle but instead would get pushed to the stack as single ASCII bytes - which in turn would get processed by some special function that would be launched automatically.

The approach I think of is something remotely like <a href="http://www.psg.com/~dlamkins/sl/chapter03-12.html">Lisp's reader macros</a> - and learning from <del>the soviet union</del> Lisp can't be wrong, right?

I am on my way writing the interpreter (in ANSI C, for POSIX systems only). The parser/lexer (there is no real parser in Forth-like systems) is already done and I am currently debugging and deciding on the exact behaviour of the stack and the dictionary.

As of now, the interpreter is a *very* simple program. It's about 300 lines of C now, with admittedly the whole built-ins still to do - but that shouldn't be so hard.

I think the whole interpreter will end up weighting about 10k, statically linked. Not exactly as small and as minimal as Brainfuck, but still pretty nifty small for a language that should actually be usable by human beings.