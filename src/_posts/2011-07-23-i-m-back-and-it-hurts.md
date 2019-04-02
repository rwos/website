---
title: "I'm Back - And It Hurts"
date: 2011-07-23 00:00:00 +0000
---
Working with strings is painful in C. I knew that.

But I have completely forgotten, *how* brain-shattering painful it is.

I guess it's common knowledge, but let's recap some of the issues:

* `strlen()` *does* give you the string's length - but only in a very strict sense. It does *not* give you the string's size. That would be one byte more.
* A simple `strlen()` call on garbage (that is, a perfect valid string but without the terminating NUL byte, for example) will very likely run until your process segfaults.
* `strcpy()`, which copies a string to another location, absolutely needs a destination that must be of at least the source's size and a source that is NUL-terminated. So you'll have to check for that. Oh, and yes, `strcpy()` will happily wreck total havoc if you fail to provide it, of course.
* `strncpy()` is somewhat better, using an additional parameter that limits the bytes copied. That eliminates the "the destination must be of some uncertain size" problem, but introduces new problems in return: If there is no NUL byte among the n bytes that you want to have copied, the destination will not be NUL-terminated. That is, *it will be no string*. See above for what that means in C. So, you'll have to include checks, too  - which completely defeats the purpose of choosing `strncpy()` over the faster `strcpy()`.
* Because of the very nature of "strings" in C, `strlen()` is of linear time complexity, making string concatenations, for example, much slower than needed.
* etc.

And yes, I know that those pitfalls (and many more) are well-documented in the man pages. I know that C strings are of unmatched space efficiency. I know that it was the only possible way to get unlimited strings on machines with a 64k core.

And it's not that it was *impossible* to work with standard strings in C. It's just *much harder than it needs to be*. And much more dangerous.

It's like [insert crazy rhetoric figure, comparing working with C strings with [doing normal stuff] using [highly dangerous equipment]].

Or something like that.

PS: Just in case this isn't clear to everyone: C is a programming language. In fact, C is a pretty *good* programming language. I like it very much. It's a piece of cake to implement better strings in C, custom made for your needs. Only the string implementation of the standard library is, well, a bit *unpleasant* to use.
