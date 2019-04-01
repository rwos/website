Where's My XOR?
2011-08-02

Apparently the kids today don't do XOR any more.

My natural approach on graphically drawing things to the screen would be XORing some Bitmap with the screen. Then another XOR on the same position would "delete" that. After that I would XOR the Bitmap again, on a new position. Which - tada - results in an animated sequence.

Problem is: SDL doesn't have any "XOR this with that" primitive. Or I just can't find it. And - at least this is what Google spits out on the topic - it's apparently okay to do a whole screen erase and redraw for every single frame.

Seems a bit resource-wasting to me, but I'll try that and see how it works out. It sure would simplify some things. And I can imagine modern machines to be fast enough to do this at 40 frames per second. Still, I'm a bit worried whether the 400Mhz MIPS CPU in the NanoNote can handle it.

Well, there's my old problem again: too much thinking, too little coding. I just cannot stand bad solutions - not in my own code, at least.

Gotta work on that, when I think about it...