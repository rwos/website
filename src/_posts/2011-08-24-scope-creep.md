---
title: "Scope Creep"
date: 2011-08-24 00:00:00 +0000
---
So, after some weeks trying to implement my programming language, the immediate goals went down quite a bit. The top priority used to be "make something really cool". But the thing got too complex for some quick hacking after work. I needed about an hour just to remember what I was doing last time, and that sucks.

Now, it's more like "make it work, then make it cool".

I scraped the following features:

The first release will not have a programmer-accessible parser/lexer (aka read-macros). I still think that this is quite a neat thing to have, but it complicated matters too much. That, and I don't really have a good idea how to implement it elegantly.

On a related note, the language will have only 3 forms of literals: Numbers, Strings, and Functions. Literal arrays, lists, and hash-maps would be nice, too, but those are more syntactic sugar than a really pressing need.

The first release will not feature arbitrary precision numbers. It will, however have only one number type, "num". Arbitrary precision calculations is a pretty complex thing if you want to do it fast. It's less complex, but still non-trivial, if you only want to do it right. So, I'll just save this one for later.

The language will have types, in the form of a second "type-stack". First I wanted something un-typed, like Forth, but I found that it's clearer and easier to debug with the type stack. You can very easily test on types, construct new types, cast between them and all that. So that's an addition, but it cleans things up.