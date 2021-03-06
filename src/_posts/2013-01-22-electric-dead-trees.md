---
title: "Electric Dead Trees"
date: 2013-01-22 00:00:00 +0000
---
I got an ebook reader for christmas, and I generally like it. It's a Kobo
Touch because Amazon needs the competition.  It does everything a book does,
only better. The display is just as readable but I'm not tied to insane
typeface or font size choices of the publisher.  It's lighter than most books
and I can hold it and switch pages with one hand.

So for light entertainment it's hard to beat. One thing sucks, however:
books with source code in them. I'm currently reading the classic "Structure
and Interpretation of Computer Programs" and the code in *that one* looks fine - but
that's Lisp, and Lisp always looks good.

Every other language, however, needs a monospaced font and long lines.
Monospace fonts are built-in and the physical width of the reader is
enough for most code - it's maybe a bit too small for 80 characters, but I
think about 70 or so should be possible in a readable font size.

Still, I have yet to see a technical ebook where the code snippets weren't totally
fucked-up (apart from SICP, as mentioned above).

The standard ebook format supported by every ebook reader out there is called EPUB
(Amazon's reader doesn't support it because they hate you). An ePub (or epub or EpUb or
whatever the official capitalisation is) file is just a zipped directory of HTML and CSS
files. But because that alone would be too easy, there are some random files mixed in there
specifying what's in which HTML file - including one file for specifying where the file is that
specifies what in the HTML files is. So, it's the usual time-wasting, brain-damaging and
brain-damaged, please-repeat-yourself XML "enterprise" bullshit.

But it's HTML and CSS, so it should be possible to -- yeah, no. It's HTML and CSS and
*of course* every reader understands a different subset. Oh, and if you want to
include a cover photo make sure to put it into the zip's root and call it
"Cover.jpg" because apparently some readers don't even bother to read your
configuration XMLs.

So it's all sufficiently fucked-up that it's basically impossible to create
an epub book with source code that looks good on most readers.

Now, that doesn't bother me too much, as long as it looks good on mine - and
I'm currently in the process of hacking something together that creates an
ebook out of a source code tree (yes, that would be a book consisting *only* of
source code). I think I'll get it to work but it's really no fun.

That's it for today - happy hacking!

