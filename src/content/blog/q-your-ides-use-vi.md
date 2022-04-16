---
title: ":q! your IDEs - use vi"
date: 2011-07-27 00:00:00 +0000
---
<p>The 80s called - they want their <a href="http://en.wikipedia.org/wiki/Editor_war">editor wars</a> back. So here it is:</p>

<p>The participants have changed, however. I use vi myself, but I do consider every Emacs user a brother-in-arms. The picture may be different, if you're doing low-level systems programming, but in the unholy world of web-development the line is somewhere else.</p>

<p>It's between IDE users and <del>real programmers</del> uh, well - vi and Emacs users.</p>

<p>I am not going to talk about the up- and downsides of IDEs. Yes, they can do a lot useful stuff, yes they have auto-completion, nananana. They are taking away a Gig of core quite easily, but on today's machines it hardly matters, yada-yada, you know the story.</p>

<p>I am out today, to fight the myth that working with vi was like working with Window's Notepad. Or typing into cat(1). <a href="http://xkcd.com/378/">Or something like that</a>.</p>

<p>Take this, myth: <em>You are not true</em>. Ha!</p>

<p>The first thing is: nearly everything of what the IDE makers sell as "features" can easily be handled by the typical Unix tools alone. So, even if I was typing into cat(1) on a Unix machine, I still would be <em>much</em> more productive than the world's fastest typist using Notepad on Windows.</p>

<p>That complex "Global Regular Expression Search (and Replace)" dialog window of Eclipse? That is grep(1) and sed(1). Batch file renaming? Known as rename(1) on Unix. Listing and navigating directories? Well, good 'ol ls and cd will do the trick, too. Building huge projects with just a single click? We use make(1) for that.</p>

<p>What remains on the IDE side? Yeah, automatic UML generation. Or code generation from UML. Or UML-ation of generated code. UML UML UML. (That, and bad XML-GUIs - as if XML wasn't scary enough on its own.)</p>

<p>On the other hand: no IDE in the world is as easily programmable or scriptable as Emacs and vi. No IDE has something like vi's <code>:r!</code> (open a shell, execute the following commands, read the result into the buffer). In fact, IDEs are not built to communicate with the exterior world at all. I think that is because* there is nothing out there* that would be worth communicating with - as is the case on Windows. And because there is nothing out there, IDEs have to provide every single stupid feature themselves.</p>

<p>So, IDEs actually <em>emulate an operating system</em>. A programmer's operating system, that is. Or, to put it another way: <em>IDEs provide Unix on machines lacking Unix</em>.</p>

<p>So why use the slow and heavy emulation? Why risk starting all over again learning to use all the features, if the vendor dies or that specific brand of IDE is unavailable? Why not use the real thing instead?</p>

<p>The standard:</p>

<p>Unix, and vi.</p>
