---
title: "True Color"
date: 2013-01-24 00:00:00 +0000
---
This page now has a [linear-gradient](https://developer.mozilla.org/en-US/docs/CSS/linear-gradient)
background image - as you might have noticed if you haven't clicked the "too
much green" button in the header.

Did you also notice that it's not *really* a linear gradient, but more a bunch of
stripes? Yeah, that's why we need more than 24 bit color depth.

The argument for calling 24 bit color "True Color" was that the human eye can only
discriminate about 10 million colors - and 24 bits are over 16 million. So, why
can *you* see the color banding? Are you super-human or what?

Now, if we just take the alpha channel's 8 bits and put them somewhere else
we suddenly have 32 bits for colors. That may not sound like much more but it's
enough for over 4294 million different colors. In other words: between
today's #000000 (black) and #000001 (nearly black) there would be 256 shades. That should do.

Can we put the alpha channel somewhere else? I don't know, but why not? It's
more of a quick hack for the renderer, anyway - we don't have displays with
dynamic, per-pixel transparency. So why does the "virtual" alpha channel have to
hang around in the same 32-bit integer as the real colors? Now, granted,
we don't have 32-bit color displays either but that's just a matter of time.
It's just that one side - hardware or software - has to start.

High-DPI is nice but what you really want is 32 bit (or more) color depth.

If, by any chance, you find yourself owning a display factory, here's a top-tip
for you: Make a 32+ bit color display, call it something snappy (maybe
"[cone cell](http://en.wikipedia.org/wiki/Cone_cell) panel" or something) and
watch the rubles rolling in. Or dollars. Or yen. You'll get rich is what I'm
trying to say.

To recap the propaganda: The "human eye" argument is bullshit, "true color" is a
lie, and you may now use this blog as a piece of evidence.

You're welcome.

