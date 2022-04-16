---
title: "Join The Tiling Side"
date: 2011-07-22 00:00:00 +0000
---
I'm doing something radically new today - I'm showing off my desktop.

Yeah, it's a common theme - but at least I don't have the standard "cool special effects" and "super-cool wallpaper" desktop. My "wallpaper" is solid black. And the only special effect is a frame that is drawn around the focused window.

<a href="http://r-wos.org/media/screenshot_detail.png"><img class="size-full wp-image-300 " title="screenshot_detail" src="http://r-wos.org/media/screenshot_detail.png" alt="screenshot - part of my desktop" width="276" height="200" /></a>

My desktop doesn't feature panels, or - heaven forbid - a "start" menu. I don't have file icons on the desktop. I don't have widgets. I look outside my window to get the *current weather for Leipzig, SA, Germany, every 30 seconds new.*

I use <a href="http://wmii.suckless.org/">wmii</a>.

Wmii is a <a href="http://en.wikipedia.org/wiki/Tiling_window_manager">tiling window manager</a> - which basically means that windows cannot overlap. But that is a misleading explanation, as some (modal) windows do overlap. Additionally, wmii has an overlapping "classic" mode. So what is this stuff all about, then?

Tiling window management makes *using the whole desktop* the default. Tiling window managers do actually *manage the friggin' windows* and don't let the user juggle them around. *Tiling window managers are the best thing since sliced bread*. Really!

Tiling window managers save time: For example, in order to get the window layout shown in the screenshot below, you only have to do the following:
<ul>
	<li>Press the return key four times while holding down MOD4 (aka The Windows Key™). These two keys are wmii's default combination for opening a new terminal. Now you have four xterms of equal height below each other, using the complete screen estate.</li>
	<li>Necessarily, the mouse is over one of these xterms now. That window has the focus. So, you can shift it left with MOD4+Shift+H (H means left in both vi and wmii - and yes, you can change the key combinations). Now we have two equal-width columns: one xterm on the left, using the whole screen height; and three xterms on the right using one third of the height each. Still using the whole screen (notice a pattern here?).</li>
	<li>Now just move the mouse a bit until the cursor is over the left, big xterm. Opening a new window now will put it into the same left column. So, to open Firefox, we'll use the built-in launcher pressing MOD4+P (think "program") and begin to type "firefox". On my machine, I can stop after "fir" as Firefox is the only program around with that letter combination. Pressing return now will launch Firefox and put it into the left column - using 50% of the screen-height and resizing the left xterm to that, too. Ta-daa: we're done.</li>
</ul>
In reality, this feels not as lengthy as the explanation above, but more like:
<p style="text-align: left; padding-left: 30px;">MOD4+(4*RET) | MOD4+shift+h | MOD4+p fir RET</p>
and you're on <del>your way</del> my desktop!

<a href="http://r-wos.org/media/screenshot_big.png"><img class="size-medium wp-image-312" title="screenshot_big" src="http://r-wos.org/media/screenshot_big-300x187.png" alt="screenshot, showing my desktop (wmii, 4 xterms, Firefox)" width="300" height="187" /></a>

PS: We do have cookies!

