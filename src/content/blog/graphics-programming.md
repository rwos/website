---
title: "Graphics Programming"
date: 2011-07-30 00:00:00 +0000
---
I'm programming now for 6 years or so and I've never written a game.

A game that works, I should say. I have written my share of pongs and pacmans, but none of them were really playable. I have always lost interest when the complicated things (like moving the ball without flicker) were done. Carving out the last bugs, or implementing high score tables? Nah, too boring. Actually implementing some story line, or some more features? Boring. Too much work.

Well, after working at a large web shop for nearly a year now, my definition of "boring" has shifted significantly. And suddenly, making a *real* game, i.e. one that is more than a tech-demo, sounds like the most exciting thing on earth.

And I realised that I have much to learn. I have done some graphics "programming" some years ago, in C++ and with DirectX 8. I didn't understand much of C++ at the time and was mostly copying things around, changing that parameter, recompiling, see what it does, etc, ad infinitum.

I have tried to get my head around C++ afterwards, and bought some books. But the more I learned, the more I was disgusted by that baroque feature-rich pile-of-everything they called a programming language. Well, to make a long story short: I don't like C++.

I do, however, like C.

But, uh, how do you do graphics programming in C?

So I set out to find a good graphics library. It absolutely had to have C bindings (obviously) and it had to work on Linux as an X11 client (i.e. on my main machine) and on the Linux Framebuffer (on my <a href="http://en.qi-hardware.com/wiki/Ben_NanoNote">NanoNote</a>). It sure would be nice to have it working my friends' machines (mostly Windows 7), too - what's a game without the players?

I was lucky: about every graphics library ever done fits this bill. But the big ones (gtk and qt) are, well, big. Too big for my needs. So I opted for a small, relatively low-level wrapper library called <a href="http://www.libsdl.org/">SDL</a>. Until now, it seems like a perfect match: it's simple and light-weight and a joy to use.

Graphics programming feels still pretty cumbersome to me, but I'm getting there. I now have a window, coloured text, and a rectangle.

And I'm still not bored at all.