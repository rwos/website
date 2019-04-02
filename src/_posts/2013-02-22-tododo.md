---
title: "todo: do"
date: 2013-02-22 00:00:00 +0000
---
I'm not a big fan of anything in list form, really, but I do keep TODO lists.
I'm currently using [Trello](https://trello.com) for that.

Trello is great, but it invites one (well, me) to play with it. That is, to
create new lists and re-order stuff and label it and re-label it, and so on.
The result is that I now have a very nice TODO list but I've done nothing. I
knew I had to stop using Trello after I created a meta-TODO list for the TODO
lists some days ago. That's getting seriously unhealthy...

I think the main problem is that Trello lives in the browser, but the stuff I
want to do lives (mostly) in `~/src`.

Now, it's a well-known law in programming that every programmer has to
write a hello-world program, a blog engine, and a TODO organizer.

So I did what I had todo (ahem) and wrote a small program that finds TODO and
GOAL files in `~/src`, orders them by age, and displays them (oldest first).

I called it "slacker", obviously.

<img src="http://r-wos.org/media/slacker.png" style="max-width:100%">

No, it's not pretty. We'll see if it helps.

<small>PS: The code is [on github](https://github.com/rwos/slacker) if you want
it - though it's currently more a small hack than anything else. It works on
Linux/X11 and *should* work on Mac OS X and Windows, too.</small>

