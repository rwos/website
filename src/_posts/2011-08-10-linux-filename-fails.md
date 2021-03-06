---
title: "Linux Filename Fails"
date: 2011-08-10 00:00:00 +0000
---
So, we had some kind of long and gruel flame war at work today. Which was
(unintentionally!) started by me asking if it's now possible with Windows 7 to
name a folder "aux". Turns out it isn't.

However, war was on. And that's not a pretty thing to watch between die-hard
Linux users and Windows fans. They tend to fight until both camps are basically
destroyed.

While the battle was raging, I (even though being generally more on the Linux
side of things) tried very hard to think of filename "gotchas" on
Unix/Linux/POSIX systems. Just to give some balance to the discussion...

The example I came up with was naming a directory "*" in / and then trying to
delete that. This wasn't very creative and thus was generally not accepted by
the Linux guys as a proof that POSIX systems had filename issues. Nothing could
beat Windows' "aux" idiocy, it seemed.

Now, incidentally, some <a
href="http://forums.thedailywtf.com/forums/p/24739/262049.aspx">post on the
DWTF forums</a> just pointed me to <a
href="http://www.dwheeler.com/essays/fixing-unix-linux-filenames.html">a rich
resource of POSIX filename fails</a>, created by David A. Wheeler. I will only
cite some passages, in order to give the dear reader an impression of how
fucked-up POSIX' filename rules really are.

<blockquote>Oh, and **don't display filenames**. Filenames could contain
control characters that control the terminal (and X-windows), causing nasty
side-effects on display. Displaying filenames can even cause a security
vulnerability - and who expects *printing a filename* to be a
vulnerability?!?</blockquote>

...and...

<blockquote>The list of problems that "leading dash filenames" creates is
seemingly endless. You can't safely run "cat *", because there might be a file
with a leading dash; if there's a file named "-n", then suddenly all the output
is numbered if you use GNU cat. Not all programs support the "--" convention,
so you can't simply say "precede all command lists with --", and in any case,
people forget to do this in real life.</blockquote>

...oh, and...

<blockquote>Why the heck are the ASCII control characters (byte values 1
through 31, as well as 127) permitted in filenames? The point of filenames is
to create human-readable names for collections of information, but since these
characters aren't readable, the whole point of *having* filenames is
lost.</blockquote>

...so, let's conclude:

<blockquote>In a well-designed system, simple things should be simple, and the
"obvious easy" way to do simple common tasks should be the correct way. I call
this goal "*no sharp edges*" - to use an analogy, if you're designing a wrench,
don't put razor blades on the handles. Typical Unix/Linux filesystems fail this
test - they *do* have sharp edges. Because it's hard to do things the "right"
way, many Unix/Linux programs simply assume that "filenames are reasonable",
even though the system doesn't guarantee that this is true.</blockquote>

Comparing these (and more) short-comings of UNIX' design against the
short-comings of Windows is left as an exercise to the reader.

The author is in a love-hate relationship with UNIX, anyway - no flame wars
needed. But don't say anything against Plan 9! :-)
