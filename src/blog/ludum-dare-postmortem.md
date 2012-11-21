Ludum Dare Postmortem
2012-09-14

The following is a copy of the short postmortem I wrote for the
<a href="http://ludumdare.com">Ludum Dare</a> website. I just want to archive it here as I hate dead links and don't trust anybodies WordPress installations to be still available some years down the road.

It may or may not be helpful for you if you plan to attend the next Ludum Dare - which you *must* absolutely do, it's a lot of fun!

Here's the screencast of the whole thing:

<iframe width="480" height="360" src="http://www.youtube.com/embed/MG53Fm-JHBU" frameborder="0" style="width: 100%" allowfullscreen></iframe>

----

This was my first Ludum Dare and I made a game called
"<a href="http://r-wos.org/hacks/ld24/ld24">Moore's Game</a>". It's basically a journey through the evolution of video games – starting with Tic Tac Toe on a line-printer and ending with a ray-casting first person shooter.

Technology-wise it's written in JavaScript, using the 2d-context of the HTML5 canvas element.

What went right
---------------

**Speed** - apart from the few times where I got stuck (more on that later), I was working pretty fast. Pong, Breakout and the raytracer for the Wolf3D-like level were done really quickly. It helped that I disregarded every coding best practice in existence. Even though faking namespaces via objects or closures is possible and common in Javascript, I didn't do that and just put everything into the global namespace. That made for messy code (more on that later) but speedy development.

Although I (think I) was fast, I couldn't finish everything I had originally planned. More on that later (that's going to be a big what-went-wrong section, oh my...).

**Technology choice** - Modern Javascript interpreters (read: browsers) are blazingly fast, given the (security-)constraints in which they have to operate. The canvas API is simple and straight-forward. And the result is playable on every operating system with a modern browser.  What's not to like about that? Javascript as a language has it's share of problems, but it's not too bad. It has really just the wrong syntax for the dynamic, lisp-like language it actually is.

**The competition** - as I said, this was my first Ludum Dare. I had the most programming-related fun since …ever, really! :-) I also didn't expect such a cool community. I was on the IRC a little bit, during the competition, and I was stunned how friendly and civilized everyone behaved. It's the internet, people, you are expected to endlessly insult each other!

No, Ludum Dare is just great – it won't be my last one!

What went wrong
---------------

**Scope** - that was my biggest problem. I just planned too much features. And while implementing those I had ideas for even more and more and more… I originally wanted to blend the gameplay from one game-generation into the other (that is, playing a bit of a Mario-Bros.-like jump-and-run with Pacman, for example) – but I had just no time for that. The games itself were all simple and small – but there were eight of them.

Which, by my current calculations, were at least seven games too many for a 48h-competition...

**Code Quality** - let's not talk about that. This was hands-down the worst code I've ever written. I've written BASIC on my calculator that was better structured… I just didn't have time to stop and think. So, copy-and-paste it was, mostly. And brute force. And a lot of “what's the most stupid thing that could possibly work at least half of the time”.

**Pacman** - I still don't know how the hell I managed to get completely stumped by writing pacman. I was on the wrong path, somehow and as a result I wasted much too much time even getting it to the sorry state it's in now. The ghosts just move randomly, the frame-rate is ridiculously low, it's buggy as hell. And it doesn't even look too much like pacman. Not good.

**Adventure** - The lucas-arts inspired point-and-click adventure level was first planned to be the *cool* level of the game. The one that would pay back for all the bugs in the other levels. Well, no, that didn't work out. I wrote half of an engine for it, but there just wasn't enough time – and I didn't really know how to actually write a point-and-click adventure game engine… So I started that level over – with about 4 hours left – and basically cut down all the features until it was just one big if-else tree. Not good, part 2.

**Time management** - It's easy to lose track of just how much work is still to do when you're working on eight different games at the same time. And losing track I did.

**Knowledge** - Before I started, I thought that I generally knew how to program all the games I had planned. Well, yes, generally. But what are good jumping dynamics for a platformer? How should I do collision testing? How do I insert scaled sprites into a ray-casted world? By which rules do the monsters move in pacman? I have no idea. Oh, and no time to find out... Not good, part 3.

What I'll do different next time
---------------------------------

I'm going to write one game. Like, *one*.

1

One! Eins! Uno!

One single, polished, working game that's fun to play.

Not freaking eight badly made ones...

Thanks everyone!

Ludum Dare 24 was fun!
