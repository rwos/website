Racket Appreciation Day
2013-07-23


     #lang racket
     (require net/url)
     (port->string
       (get-pure-port
         (string->url "http://r-wos.org")))

Racket Appreciation Day was today, for me. I tried writing a small script
that reads from Github's API and displays a list
of "@mentions" in [Guile](http://www.gnu.org/software/guile/).

<small>
(Why Guile? Well, the short version of the story is
that I'd like to run this program on my [Ben NanoNote](http://en.qi-hardware.com/wiki/Ben_NanoNote)
since I have that machine lying around for quite some time now,
looking for something, *anything* to use it for.

The NanoNote comes with Guile. It also comes with Python, Bash,
GForth and Lua, and I could probably cross-compile Racket for it
(it's a MIPS CPU), but yeah - I thought writing something in Guile
would be interesting.)
</small>

And Guile *is* quite nice, as a language - but some things
still made me miss [Racket](http://racket-lang.org).

Examples are: local `define`s, `let-values`, `port->string`, Racket's
`for` loop forms, and the quality of the documentation:
Guile's docs don't include the return value in the function signature - 
you have to parse the prose around it for that information. Not nice.

But what triggered this post is Guile's absolutely *stupid* HTTP client.
It's reasonably easy to use, and generally works, except that it
*verifies* the response headers.

What the fuck?! Since when are the receiving ends of clients in a
network supposed to play the RFC-Nazi role? Or the receiving end
of anything, really: "Be conservative in what you send, be liberal
in what you accept", isn't that the networking credo?

Well, not so with Guile's HTTP client. This one throws a `Bad Header` exception
and trashes the response if the server decided to send something that isn't
part of some RFC. And, as if that wasn't bad enough, it also throws
for basically everything with a `Content-Location` header. As an example,
it refuses to accept the response you'll get after
requesting <http://r-wos.org>.

Okay, so now I have two options. Either I write my own `http-get` - which means
basically writing in C, except slower, and with more parentheses.
Or I use `(system "curl ...")`. Not nice, part two.

So here's my tip of the day: use Racket if you can.

And just use Python or something, if you can't.

