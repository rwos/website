---
title: "ownCloud"
date: 2013-09-14 00:00:00 +0000
---
So I looked at [ownCloud](http://owncloud.org/) this week.

The install was pretty much hassle-free, as you would expect from a PHP
application. And the web frontend is pretty nice (though extremely slow, at
least on my AMD Sempron server). There's a photo gallery, and direct media
streaming, and zip downloads, and generally a lot of good stuff in there. The
feed reader (in "Apps", not enabled by default) works quite well, and you can
get Android apps to sync your contacts and so on. The Linux sync client is a
bit of a PITA, since the whole thing locks up if you cancel an in-progress
sync. But you can define arbitrary remote-directory to local-directory mappings so
that's pretty nice.

So it's all fun and games and works well enough - but then there's the whole
security issue, the "escape from the NSA" thing. And that's where things start
to fall apart.

## useless encryption

OwnCloud does have an "encryption" option (in "Apps", not enabled by default)
but it's utterly useless.

The only scenario where the built-in encryption helps a little bit is when
someone gets direct access to your data directory, *without* directly breaking
into the server. (The standard ownCloud install puts your data directory
under the www root, so this can actually happen if you're not careful).

If you have encryption enabled, the bad guys won't be able to get the actual
contents of your files. They will, however, be able to see the file size
and file names. Good luck explaining to the NSA that the 450KB file named
`leaks/nsa/prism-presentation.pdf` actually contains only a picture of
a penguin.

So there's that - and there's the other thing that with ownCloud you have to
*absolutely* trust your system administrator. An evil system administrator
could easily record your password when you log in and then go on and decrypt
all of your data.

Now, who's "your system administrator"? If you rented a server, VPS, or
shared hosting account it's you and your hosting provider. If you rented
space from an ownCloud provider, it's them and their hosting provider.
If the server is located in the USA or UK this also includes the NSA/GCHQ. In
most countries the police can seize your server, so include them too. Plus the
people at the data center.

Note that even encrypting your whole hard drive wouldn't help here
because the other side has physical access to the running system.

So it's *not* NSA-proof, not by a long shot. And that's not even a bug
that could be fixed: the only way to securely store data on a server
is to decrypt *only* on the client-side (given you trust the client).

Something like OwnCloud could, theoretically, do that by implementing encryption
and decryption in JavaScript - so that only encrypted data ever hits the server.
This would obviously slow down the whole thing a lot and (probably) make
media streaming too slow to be practical. But at least for contacts and the
calender this could work.

But that's all theory because ownCloud doesn't do any of that and just assumes
you can trust the server since it's "yours" (as in "you rented it"). An
assumption that's getting less and less valid, lately.

## as secure as wordpress

OwnCloud has a built-in updater, and a built-in "app store" for extensions.  It
also had [multiple XSS, SQL-injection, and code execution
vulnerabilities](http://owncloud.org/about/security/advisories/), which, quite
frankly, means that they did't follow modern software engineering practices.

Being open to CSRF attacks (which it was, too) is *kind of* excusable - most
PHP web frameworks don't help you with that by default. But there is no excuse
for SQL-injection or arbitrary code execution in a modern PHP app - other than
"they don't know what they are doing".

Just to mention it explicitly: in the case of an exploitable security hole *in
ownCloud itself*, the list of people you implicitly trust with all your data
automatically grows to "the whole internet". That's the magic of the cloud! :-)

## as secure as wordpress, part 2

So, you could, in theory, audit the code. But there's the next problem: this
thing is *big*. Big parts of the code are more-or-less well known pieces of software,
like the [SabreDAV server](https://en.wikipedia.org/wiki/SabreDAV), but still.

See how that one "simple install" grew to an extremely large TODO list item?
Yeah, you might as well pick the features you need and implement those parts
yourself, in an easily manageable fashion. At least that's my conclusion.

Though I probably won't manage to make a frontend as nice as ownCloud's...

