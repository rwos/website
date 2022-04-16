---
title: "By the Way"
date: 2012-03-11 00:00:00 +0000
---
Hi there! Long time no see!

I got a bit side-tracked. Well, that's an understatement.

At first, I just wanted to re-haul the site's design a bit. Then I
thought, why not re-haul the back-end, too? I was thinking of
a wiki-like system, but with pages consisting of independently
editable (and lockable) blocks.
Just doing that would probably already qualify as a second-system
effect.

But I didn't write a wiki-system. I wrote a programming language
instead.

When it's finished, it will drive this site - as a first small
project. I have a "nearly working"[TM] version on my local machine,
and I'll deploy it "really soon now"[TM].

Sadly, the language itself is also not in a state where I could
publish the code. I need to clean up some stuff, first. I sincerely
hope that this clean-up session will end in an actual clean-up -
and not in me attempting to write a new operating system or
something like that...

Just some small facts about the language: it's basically a Lisp, in
that it doesn't do anything special a Lisp couldn't do, too.
It has first-class macros which is a bit unusual, but I'm pretty
sure that it's not revolutionary. There's probably some Lisp which
had them since the mid-seventies (that's a save bet - for every "new"
feature in programming languages there's a Lisp that had it for
at least 30 years).

It also has some constructs which ease the construction of simple,
limited macros. These small macros are hygienic - and thus just as
easy and straight-forward to write as a function.

I'll say more about the language as soon as I have the code up
on github. It's pointless to tell you about it without you being
able to actually try it.

The run-time system is currently an interpreter written in Python
(though that will change soon, the file is called "bootstrap" *hint*).
Writing that interpreter took much longer than it should.
I took all the wrong turns one could possibly take. But, to say it with
Edison: I have not failed a thousand times - I successfully found 1000
things that won't work. Or something like that.

Things that I thought would be trivial ended up being pretty
hard (parsing numbers is one example) - and some things that I
thought would be impossible for me to implement basically wrote
themselves as soon as I looked at it right.

Most of this may have been aided by my decision to first write some
programs in the language, and then implement the interpreter.
Sometimes the high-level constructs I made up were tricky to
implement elegantly. So, programmer-me and language-implementor-me
often fought each other constantly.

I can't even imagine how people manage to write programming languages
for other people to use. Just tailoring it to my own needs is hard
enough. I didn't know what I wanted, and I didn't know how to get
it. What a wonderful combination.

The clean-up of the interpreter should be done soon, it's a small
program. (That's a bit sad - so much work for only a couple of
hundred relatively trivial lines of code. This must be the thing
named "learning" I heard so much about lately...)

After that I'll finally write that wiki system I wanted
to write all along.

No, wait - that was the second idea. What was the first thing again?
Ah, yes, CSS tweaks.

Well, yeah, should be done really soon now...
