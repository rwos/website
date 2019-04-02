---
title: "Forwards, Backwards, or nil"
date: 2011-07-05 00:00:00 +0000
---
Programming languages can be categorised into <a href="http://en.wikipedia.org/wiki/List_of_programming_languages_by_category" target="_blank">many</a>, many - uh, categories. That's no news.

But, no matter if you write object-oriented, structured, functional, or <a href="http://www.esolangs.org/wiki/Brainfuck" target="_blank">brainfuck</a> - someday someone will *read* your program. (Well, maybe not if you're writing in Brainfuck... let's better just keep that aside for now)

Now, the first thing that I notice in a new programming language is not whether it's object-oriented. And it's not whether it supports monads or functors or even first-class functions. I only see *the direction of reading*.

In my very personal categorisation, there are exactly 3 directions currently available in programming languages:
<ol>
	<li>left-to-right</li>
	<li>right-to-left</li>
	<li>nil</li>
</ol>
Let me explain.

The first one on the list is the easiest one to find examples for. Everybody knows it: Lisp (everybody *does* know Lisp, right?). In Lisp everything reads strictly from left to right: Add one to one `(+ 1 1)`. Display "hello" `(display "hello")`. Define ls as a list of one and two `(define ls (list 1 2))`.

Easy and - more importantly - consistent.

Now let's come two item two on the list, the right-to-left languages. These are harder to find. The most prominent example among the high-level languages is probably Forth. In Forth, most things read from right to left. Add one and one: "`1 1 +`". Display the duplicate of 2: "`2 DUP .`".

There are exceptions to these in Forth, but overall, due to its stack-based nature, it has a very strong right-to-left feeling. At least for me.

The third point on the list is... non-existent, really

Most languages like C or Java or Fortran don't really have a built-in reading direction - or I just don't see it. Still, they cannot really be considered "both-ways" as *they lack the right-to-left way*. There is no way to write a C program that looks like Forth. C just lacks the stack (a programmer-accessible stack, that is) - and with it a *whole world* of expressions and idioms.

And that is what I miss most in programming languages: Lisp *and* Forth. I want *both* of them. At the same time. In one language.

How hard can it be?