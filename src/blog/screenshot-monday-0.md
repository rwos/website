Screenshot Monday 0
2011-08-08

It's Monday, and - in order to keep me motivated and on track on my little graphics programming project - I hereby declare this day to *screenshot day*.

I don't have much to show yet, though.

The last few development hours mainly went into graphic effects. In the usual minimal-effort-maximal-impact style of doing things I implemented a simple fade effect. This kills 3 birds with one stone:
<ul>
	<li>movements look better (moving squares the naïve way looks *very* bad at higher speeds, even at 60+ FPS)</li>
	<li>I don't need a background (the squares paint it for me now)</li>
	<li>and some third thing I forgot about</li>
</ul>
With only 3 squares (as shown in the screenshot) this doesn't look very impressive, but it should look pretty nice with the 1000+ squares the game will be showing when it's done. The frame rate dropped pretty hard, but it's still between 20 and 30 frames per second. And the effect is implemented in such a way that it always costs the same, no matter how many squares are added.

The current GUI is pretty minimal - and I like that. The *real magic*, I hope, will be there when things move and behave as they should. I'm not much into just painting things to look cool. I want things to *be* cool. *Programmer Art*, if you will.

Next, I plan to spend some time on the input side of things. Zooming and moving the view is already implemented but I have to clean up the internal API a bit more. The engine has to be really solid and easy to use for when I start implementing the game logic.

It's moving slowly, but still: for the few hours I have to actually work on it, it's pretty neat, I think. Now, without much further ado: this Monday's screenshot:

<a href="http://blog.r-wos.org/wp-content/uploads/2011/08/game_screenshot.png"><img class="size-medium wp-image-504" title="Screenshot Monday 0" src="http://blog.r-wos.org/wp-content/uploads/2011/08/game_screenshot-300x187.png" alt="Screenshot Monday 0" width="300" height="187" /></a>

PS: Yes, the colors are #00ff00, #00ffff, and #ff0000 - programmer art, as I said... And yes, I will change that, sometime.