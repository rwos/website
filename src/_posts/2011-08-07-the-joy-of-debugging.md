---
title: "The Joy Of Debugging"
date: 2011-08-07 00:00:00 +0000
---
<p>I tested everything. I ran through every line thrice to make sure it was right. I hooked up gdb. I looked at wikis, example implementations, the reference documentation. I googled. And yet I couldn't seem to get alpha blended blitting to work.</p>

<p>I have two (or more) surfaces (SDL terminology, think "screen buffer") and want to blit one onto the other, but with 50% opacity. There is nothing fancy about it - you just set a per-surface alpha value of 127 to the "top" surface and blit it onto the "bottom" one. Two lines of code, plus error handling. Easy. Trivial. <em>Why the fucking hell doesn't this work in my fucking program, for the fucking love of God?</em>.</p>

<p>After about 2 hours of checking every function call, I switched into "monkey with a typewriter" mode. Randomly erasing and inserting stuff. Randomly changing things. Randomly eating bananas.</p>

<p>Nothing. Everything else worked just fine - I just could not get the friggin' surfaces to blend onto each other, no matter what I tried.</p>

<p>So, I lit a cigarette and then it came to me... <em>The ring buffer!</em></p>

<p><img class="size-full wp-image-495 " title="Eureka" src="http://r-wos.org/media/image_2.png" alt="Eureka" width="451" height="426" /></p>

<p>Yes, my to-be-blended surfaces came out of a ring buffer. Yes, there was the bug. It just returned the same surface over and over again - so I successfully blitted the same screens on top of each other. With 50% opacity. A graphical effect commonly known as "resource-wasting transparency-cancelling blending" (not a very catchy name, I know).</p>

<p>So, the morale of the story is: check your ring buffer implementations first.</p>

<p>Uh... or something like that, anyway.</p>

