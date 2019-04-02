---
title: "Enterprise PHP"
date: 2013-02-05 00:00:00 +0000
---
This is a post about the bullshit one has to put up with in an "enterprise"
PHP shop. I wrote it some months ago. I have since left that job, but I haven't
published the text yet. It's a well-known internet law that one cannot leave
a PHP rant unpublished - so here it is.

----

I've switched teams at work and thus am currently struggling with yet another
huge code base. And even though I'm only doing this for not quite three years
now and even though it pays two-thirds (that's stuff for another rant) of my
rent I'm *really* growing tired of this. Not of coding, mind you, nor of
change - I'm sick and tired of needlessly complex and verbose code.

To get more specific: We're talking about PHP. But PHP itself has
nothing to do with it. It has it's share of shortcomings as a language,
but frankly I'm experiencing more something like a culture clash.

You see, "professional" "enterprise" "solutions" (the words are quoted
because they lose their meaning if you put them together in one sentence)
in PHP are basically written just like you'd write them in Java. In fact
PHP's object system is pretty much the same as Java's (from a user's
perspective). So you have getters and setters and interfaces and
abstract classes and all those silly access modifiers - I don't like
that too much, but that's not what I'm on about.

The thing is, in Java you don't have a choice. It's not only statically
typed, it's *obsessed* with types. Types, and type-hierarchies, are the
very core of what programming in Java is about. Everything else follows:
there are some ways to do type-based code-sharing - inheritance,
interfaces - so that's what you do. Then there are some problems that
Java's object system can't really solve on its own, so you use some
hacks you found in a book (aka "patterns") like decorators or factories
(or, actually, setters and getters).

PHP, to put it mildly, does not share Java's obsession with types. It's
dynamically typed and it does a lot of type coercion (`0 == "a"` is true, for
example). It has a thing it calls "array", which in reality is a linked
hash-map - or, in other terms, a single container type that has the properties
of the most often used containers, all smashed into one. The only way
to get even more weakly typed than PHP is to get rid of types altogether.

It also has a great number of abstraction-breaking hacks and magic
stuff going on (<a href="http://www.php.net/manual/en/function.spl-autoload-register.php">the autoloader</a>,
<a href="http://php.net/manual/en/language.oop5.magic.php">__call</a>,
variable variables etc.).

In the end, PHP has quite a couple of features intended to make the
programmer's life easier and that - while the result won't be a shiny diamond
of perfection -  can make most code fairly compact. Perl's motto is "There's
more than way to do it".  PHP's could be "Yeah, that's a hack - but it was easy
to do and works most of the time" (whether or not that's a good direction for a
programming language to take is a separate topic entirely).

But PHP is appalling as a Java replacement. Memory usage is incredibly high
and performance is sub-par - and both are made *worse* by using complicated
Java-like OOP-patterns. The Java compiler can optimize some of that away - the
PHP interpreter cannot. And it's all so very useless, you just don't *need* all
that Decorator-Facade-Interface crap in a language as dynamic as PHP.

For a long time I thought that *the* most stupid piece of software ever written
was Smarty (a template engine for PHP - that is, a template engine for a
language that already *is* a template engine).

But really, the Zend Framework is much much worse. The terseness of Java,
with the performance of PHP. The worst of both worlds.

Thanks, but no thanks.

