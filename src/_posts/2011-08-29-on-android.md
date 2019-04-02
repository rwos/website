---
title: "On Android"
date: 2011-08-29 00:00:00 +0000
---
I got myself a Motorola Flipout two days ago.

My old phone was actually the last computer in this household not running Linux. So, here I am finally, on Android, like the cool guys.

After a Siemens C30, a Sony CMD J70, a Nokia E65, and a Simvalley XP-65 (yeah I know, Windows Mobile, don't ask...) the Flipout is easily the best phone I ever had. The Keypad is pretty good, the screen is okay and it's an Android phone that actually fits in a pocket. Which is a rare thing in the times of huge screen monsters like the Samsung Galaxy.

So, things could be worse - but things could be much better, too.

The one thing is: Android is pretty much a big pile of beta-stage shit.

The Flipout is running Android 2.1, which is by far not the last version, but still. Actually, that brings us to my first point: Why, for the love of god, am I unable to upgrade? Why do I have to wait for Motorola saying "oh yeah, we totally want a better experience for those who bought our *cheapest* Android phone and thus will release an upgrade".

Everybody knows that this is just not going to happen. And I don't see any reason for why I can't do it myself. The system is supposed to be *free*, the device is *mine* - so, *let me upgrade it for heaven's sake!* Somehow, it seems there are technical reasons for why upgrading isn't completely trivial. Which is an even bigger fail: Android is based on virtual machines and "compile once, run everywhere" Java. I mean, yeah, not that I believed that something built with Java would actually work, but still. Upgrading Android should be trivial. Upgrading the Linux kernel on my laptop is trivial. *And that's a fucking kernel*. The fucking lowest level of software there is (we do not count microcode as software for this exercise). So, upgrading this hyper-virtualized, super-layered, object-oriented, high-level system from pre-alpha to maybe-beta stage is actually *harder* than upgrading a monolithic operating system kernel written in C and assembly?

Really, Java-guys, you must be kidding. Please shoot yourself now, before you reproduce.

On a related note: Android is really really really really slow.

[now following are two sentences which I would never have thought to be able say in my lifetime] I know that my phone is not the fastest on the market. It has only a 700 MHz single-core ARM CPU.

Seven-hundred-fucking-mega-hertz! A 32-Bit ARM processor. The possibilities, they are endless. You could power servers with this baby. But no - open the doors, let some Java programmers in, and suddenly even web-surfing feels sluggish and slow.

Additionally to being unnecessarily slow, the browser doesn't even work too good. Clicking on a link and then saying "oh no, I didn't mean that" is actually completely impossible. And it happens pretty often. Yes, you can stop page loading - which will result in 2 seconds waiting with a message saying "loading is getting stopped" or something equally retarded. After that, a white page will appear - the loaded fraction of the page behind the link you just accidentally clicked. Hitting "back" now results in the browser loading the last page again (no caching? WTF?!). And boy, do pages load forever.

I'm behind a DSL-6000 line here, so this is clearly not a network issue. The fucking browser is stalling for CPU. On a 700Mhz system. The magic of Java.

It seems that nobody at Google really used Android. The mail reader, for instance, is a complete joke. I mean, yeah, it's okay if you get two messages a day. But try it with a subscription of the Linux Kernel Mailing List and you'll know what pain is. Additionally to not being able to sort messages in threads (what century is this again?) it *flattens* IMAP directory structures. So, my "Lists" directory for example shows up as about ten entries of the form "Lists/LKML" or "Lists/gnu-announce". What were they thinking?

I have now exhausted all my rage for today - otherwise I would go on ranting about the brain-deadness of needing an exploit to "root" the phone to unistall the myspace-app it came with. A phone I own. A phone with a supposedly "free" system.

Shame on you, Google.

&nbsp;

Still, with an opera browser and a yet-to-find email client ("K-9 Mail" is not really better) it is a good system. And the Google-Maps things (Navigation, points of interest...) are just great.

It just could be so much better.