Channels in Newsqueak
2011-11-21

School can really be a drag, sometimes - especially when I could learn so
much more at home. For instance via - you guessed it - playing with Newsqueak.

So, today in our series of <del>"nobody is interested, please stop"</del>
"Fun with Newsqueak": Channels.

The idea goes back to C.A.R. Hoare's
[Communicating Sequential Processes](http://www.usingcsp.com/) or CSP.

The thing is basically that processes communicate by writing to and
reading from unbuffered (i.e. *blocking*), named channels. Sounds simple,
is simple - and that's in fact what it was done for in the first place.

CSP is not (necessarily) a programming technique for scaling programs to
multi-processor machines but more a system that makes some programs easier
to write and understand. Of course, *if* suddenly some multi-processor
machines come along, your programs will be ready - but that's not the point.

Using channels makes programs more elegant. *That* is the point.

So, let's talk about a nice little program that Hoare credits to Doug McIlroy
(aka the guy who invented the unix-shell pipe (which is, more or less, just
a two-dimensional channel (and was invented *before* Hoare wrote his book
(that should be enough historic context for now)))).

The specific (Newsqueak-)implementation I'll be using was (probably) written
by Rob Pike. It's an implementation of the
[Sieve of Eratosthenes](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes),
the well-known prime number sieve.

But first, some Newsqueak basics: Newsqueak looks pretty much like C, but with
Pascal-style declarations and first-class functions (`prog`s).

If you want to try it out for yourself, you might want to
[grab squint](http://github.com/rwos/Newsqueak), the interpreter.

This

    i:int;

declares a variable of type `int` named "i". This

    i:=1;

declares a variable of a to-be-decided-on type and assigns
the number one to it. As 1 is an integer, i is an integer, too. This
automatic type inference only works when declaring the variable.

The rest is pretty much like in C, and should be readable - so, let's
step through some code for a simple counter, implemented using channels.

    counter:=prog(end: int, c: chan of int) {

First, we declare a variable "counter" and assign a `prog` to it.
A `prog` is a literal function, it works much like Javascript's "function"
syntax, for example. This is the function definition.

The first argument is of type `int` and the second is... special. :-)

It is a `chan`nel of int - a thing we can write integers into and
read integers from.

        i:int;
        for(i=2; i<end; i++)
            c<-=i;

Now, we loop through all integers from 2 to `end` and write them into the
channel. This line

            c<-=i;

does the writing and parses as:

    c   # the channel
    <-  # the "write into channel" operator (it points towards the channel)
    =   # assignment operator
    i   # what we are assigning

Oh, and don't we forget the closing brackets and the semicolon:

    };

Putting everything together:

    counter:=prog(end: int, c: chan of int) {
        i:int;
        for(i=2; i<end; i++)
            c<-=i;
    };

Easy, right? Now, how does this execute?

Well, channels are unbuffered, thus blocking. If
`counter` is called with an `end` of, say, 100, it will first try to write the
integer `2` into the channel. But since no-one is reading from the channel,
and since the channel is unbuffered, that write will block. The program will
stop until someone comes forward and reads from the channel, receiving the
`2`. The next block will be encountered when the `counter` tries to write
the 3 (and nobody reads) - and so on.

As you can see, we'll need some `prog` reading from the channel - and that `prog`
better ran concurrent with `counter`!

Enter Newsqueak's `begin` statement, which helps us here. You can `begin`
a `prog` and off it goes, not blocking further program execution. It behaves
like fork-and-exec, but it's cheaper and simpler.

Let's construct a simple "reader" `prog`:

    reader:=prog(c: chan of int) {
        i:int;
        for (;;) {
            # reading from c (note the arrow pointing to the left)
            i=<-c;
            print(i, "\n");
        }
    };

This one should be obvious by now: it tries to read from the integer
channel `c` in an infinite loop (but it won't loop all the time:
read operations block, too, if there's nothing to read).
When it got some integer off the channel, it just prints it (and a newline).

Now we combine this `prog` with the counter from above and invoke the
mechanism with the following three lines:

    count:=mk(chan of int); # mk ("make") is like "new" in other languages:
                            # an object creator, if you will.
                            # "count" is now a chan of int,
                            # nothing special happened
    begin counter(100, count);
    begin reader(count);

What happens? The `counter` will (try to) "pump" numbers into the channel,
while the `reader` gets them off and prints them.

These 2 processes communicate via the blocking channel alone - we don't have
to stop them, or otherwise control execution. We just pushed the start button
and off they went.

Again: these are *not* necessarily processes in the operating-system
meaning of the term - they don't *have to* run in parallel, and they are
cheaper than "real" processes. You might as well create thousands of them, if
you need to.

In case you wondered: yes, this example is silly. The following, however,
is not. Take the counter from above, but don't connect it with the
reader. Take this recursive, filter-creating filter instead:

    # "rec" keyword needed for recursive progs
    rec filter:=prog(listen: chan of int)
    {
        i:int;
        prime:=<-listen;
        print(prime, " ");
        send:=mk(chan of int);
        begin filter(send);
        for(;;)
            if((i=<-listen)%prime)
                send<-=i;
    };

...and you have the Sieve of Eratosthenes, implemented in just a
couple of lines.

Quite an elegant brain-teaser, isn't it?

Still not interested? Well, what a shame...
