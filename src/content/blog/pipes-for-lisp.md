---
title: "Pipes for Lisp"
date: 2011-07-07 00:00:00 +0000
---
I have already blogged about the <a title="Forwards, Backwards, or nil" href="http://hackersdiary.wordpress.com/2011/07/05/forwards-backwards-or-nil/" target="_blank">reading order of programming languages</a>. Thinking about that, a stupid idea formed in my head:

*What if Lisp had pipes?*

You know, <a href="http://en.wikipedia.org/wiki/Pipeline_%28Unix%29" target="_blank">pipes, as in "`|`"</a>. These fabulous little things known from such nice expressions like "`grep whatever * | more`" or "`cat stuff | sort | uniq`".

Now, imagine how bad the last example would look, if the unix shell was lisp-like: `(uniq(sort(cat stuff)))`. (Well, maybe *bad* is the wrong word. Still, I think it looks considerably cleaner in shell-syntax.)

Now, if Lisp had my proposed, to-be-implemented, pipe-enabling, <del>world-changing</del>, preprocessor, it would look like this: `cat stuff | sort | uniq` - which is in fact identical to the shell version. Piping a command into another one would be the equivalent of using it (the first one) as the 2. command's parameter. Like so: `(define ls (list 1 2))` could become `list 1 2 | define ls`.

As you can see, that wouldn't change or break a lot - it would just give us programmers a way to more-or-less reverse the reading order of expressions. Which could come in handy in those case where Lisp's natural order reads awkwardly inverted.

In case you asking: I am fully aware of the fact that - with the examples given above - this looks neither helpful, nor lispy, nor even remotely like something anybody would want to have.

Well, I'll be back (with a prototype) to discuss this idea some more. Oh, hacking, you got me back...