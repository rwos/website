---
title: "Introducing DadaDodoWeb"
date: 2011-09-11 00:00:00 +0000
---
Today in our series of funny quick hacks: DadaDodoWeb.

I just downloaded Jamie Zawinski's <a href="http://www.jwz.org/dadadodo/">dadadodo</a>. This is a markov chain implementation that works on text. It's pretty simple - and sometimes spits out surprisingly cool sentences. To quote jwz himself:
<blockquote>DadaDodo is a program that analyses texts for word probabilities, and then generates random sentences based on that. Sometimes these sentences are nonsense; but sometimes they cut right through to the heart of the matter, and reveal hidden meanings.</blockquote>
Now, with some glue written in <del>COBOL</del> PHP, DadaDodoWeb does the following:

It gets some random word off /usr/dict/words; googles it (using the "I'm feeling lucky" button); strips the html; feeds this into dadadodo; and twitters the result. It does some sanity checking along the way, but this is basically it.

I have it sitting in cron.hourly, so it should twit a new status every hour my machine is online. Which is most of the time.

It didn't spit out anything too cool yet, but still: So much fun for 15 minutes of hacking! Unbeatable.

So, <a href="http://twitter.com/#!/DadaDodoWeb">follow DadaDodoWeb</a>!

Update: I did some more fine-tuning. The script now twits with a more random interval and, additionally, randomly hash-tags some words. I don't know why I find this so entertaining. It's so stupid. Man, it's fun!

Update #2: And the second version is online. But now back to serious things...