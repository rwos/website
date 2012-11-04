Oh, Android
2011-10-06

> There are two ways of constructing a software design:
> One way is to make it so simple that there are *obviously*
> no deficiencies, and the other way is to make it so complicated
> that there are no *obvious* deficiencies.
>
> The first method is far more difficult.
>
> <small>C.A.R. Hoare</small>

Android is not a developer-friendly system.

Starting with development for Android first of all means downloading. Downloading gigabytes of SDKs, libraries, documentation, editors, plugins for those editors, emulators, system images, cross-assemblers, tools, cowbells, lol-cat gifs, old Time magazine issues, and gigs and gigs and gigs of what is mainly: *stuff*.

Then, when the intertubes are empty, and you hard drive is full, you can start. Start Eclipse.

Yes, it's possible to code Android apps with other editors. I've even heard of people who know *how* to do it - just tweak those ant-files, add this patch, and then enter these 23 friendly commands.

So, Eclipse it is then.

(How, just how, can they force programmers into this environment? Do they know nothing about Unix? It's Android for heaven's sake, it's a Linux kernel underneath, and the development environment looks like one made for Windows CE. Why is there no fucking C compiler and a Makefile? They could have wrapped this Eclipse pile-of-shit around the compiler and the Makefile, so that sane people can work in a sane environment and idiots can "refactor". What was the fucking problem? Anyway, back to the text.)

As is commonly known, Eclipse is made by people who (a) cannot type, (b) cannot program, (c) have no taste whatsoever, (d) have never seen a programmer doing her job, and (e) are blind. These are pretty hard requirements, so they have some problems getting contributors, I guess. Maybe they even let some people in who *can* program, and just have no taste. I'm not sure. Anyway, they somehow managed to assemble a huge *development environment*, whatever that is.

It has all the features of a good operating system, but in a slower and often-crashing version. It's like a pun on operating systems. The window manager, for instance, is a complete joke. As is the global search. As is the editor.

So this is the developer's window to the Android world. It's broken.

And then you're in and the pain goes on and on and on. Every fucking thing in this fucking Android world is either an XML file, a relational database, or an object. It's a constant struggle against the compiler, against access control bullshit, constant re-configuration and re-compilation. I wonder how they ever managed to do one single working program with this unneeded complexity everywhere.

Oh, right, they didn't.

And Java is *not* helpful. It's a nice thing that it's garbage-collected, but that is about it. Everything must be written at least thrice to satisfy this programmer-distrusting, second-thinking piece-of-shit which is the Java compiler.

Why do I have to write "public" fucking *everywhere*? Really, `public class` - is this some kind of joke, or what? It's a *class*, *of-jesus-fucking-course* I want it to be public, I want to *use* it you morons! They didn't even make public the default for when there is no visibility specifier (which is allowed, yes, but then that class has only package-wide visibility - well, thanks a lot). The whole access and visibility issue in Java is completely out of control.

That may not sound like much, a little "public" here, a little "public" there - but the whole algorithm, everything the program *does* gets completely lost between all this forced noise bullshit coming from the language. Everything ends up getting delegated and overridden until someone comes and "refactors" and the bullshit-cycle starts anew.

Java is near to unusable. Yes, Python spoiled me. But even C is cleaner, *including* the manual memory management.

Somehow, I managed to hack together something nearly working. I have a menu and an options screen and managed to draw onto a canvas. Which is nice. But it really wasn't fun.

Although it could be.

Although it fucking should be.
