---
title: 'Arbitrary Limits, or "64 Bits ought to be enough for anybody"'
date: 2011-07-07 00:00:00 +0000
---
Let's talk about integers.

Yes, I heard you - yes, there are more interesting things in the world, but let's just stick to the good 'ol integer for now.

What is an <a href="http://en.wikipedia.org/wiki/Integer_%28computer_science%29" target="_blank">integer</a>? Easy, right? It's a <del>16</del> <del>32</del> 64 Bit <del>signed</del> <del>unsigned</del> number with a maximum range of <del>-2^32</del> <del>-2^64</del> 0 (or -2^30 or -2^28 for languages with type tags?) to some thing like... (2^32 - 1) or like 2^58 if unsigned and with type tags or... well, up to a large number, you know.

See the problem?

Now, that's easy to fix, right - on overflowing or underflowing of whatever today's integer limit is, just degrade to... eh, double floats, or something. These are limited to, well 2^53 or something? And that really ought to be enough for anybody! I mean, really, just who needs such big numbers, right?

In case you wondered - I'm not kidding here. There are languages that *do degrade to (double) floats*. See the <a href="http://php.net/manual/en/language.types.integer.php" target="_blank">PHP</a> manual. Check with a JavaScript implementation of your choice (in fact, JavaScript doesn't even *have* integers to begin with). Am I the only one who thinks that exchanging one arbitrary limit against another, slightly higher one, is *downright crazy*?

Well, of course, <a href="http://www.math.grinnell.edu/~stone/events/scheme-workshop/overview.html" target="_blank">*some* people</a> got it right and did the only sensible thing to do: make integers have no range limits.

Now, I can hear the C programmers sneaking around the corner, mumbling something like "hmmmumble performance hmmumble".

Well, all right, now that we have the opportunity, let us just catch one of those C programmers and ask him a few questions.

*C programmer (c):* Wait, what...?

*me (m):* Quick - What is the size of an integer in bits?

*c:* It's thirty-.. Well, it depends, really.

*m:* Yeah? On what does it depend?

*c:* Well, it's an implementation thing. It varies across, well, machines, and compilers - I guess - and operating systems, probably... But [proud:] you can always do a sizeof() and then you have the size - and thus, range...

*m:* ...wait-a-minute! The range? How do you know whether you have one's or two's complement? That affects the range, doesn't it?

*c:* Yeah, well it *would* affect the range, because, you see, in C you just assume that you have two's complement. I mean it's true in most cases, right? But let's come back to sizeof() - at least you can surely find out the *size*. Of any type, that is - not just integers. It's really cool and easy. No need to worry - C got you covered!

*m:* The size as measured in what, exactly?

*c:* In Bytes, of course... No, wait - in chars, actually.

*m:* And a char is...

*c:* ...at least one byte...

*m:* ...which is...

*c:* ...eh, well... 8 Bits, mostly. or 16 Bits. Or something like that. But, really, we got that thing covered. When was the last time you heard about some integer overflow (or underflow) issue? I mean, really, it just doesn't happen!

*m:* No it <a href="http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=integer+overflow" target="_blank">really doesn't happen</a>.

*c:* [happy:] See? It's really a non-issue here. Wait... was that some kind of sarcasm joke thingy or what...? I mean, I'm right, right? And what's that hyperlink linking to? [click] Oh...

[on a rainy autumn afternoon, a sad C programmer leaves the stage]

[the end]

Now, the morale of the story is this: *range-limited integers are wrong and dangerous* - in the wrong hands, that is. And they always fall in the wrong hands - and they will continue to do so. It's just not an option to think that you can train programmers to avoid these kind of overflows or underflows. In some cases, this is not exactly trivial. What *is* trivial, however is designing programming languages to use arbitrary-range integers. A web server, for example, written in such a language will still perform better than a C web server being constantly remotely induced to segfault and restart.
