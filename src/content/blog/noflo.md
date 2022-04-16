---
title: "NoUnderstand NoFlo"
date: 2014-05-24 00:00:00 +0000
---
Playing with [NoFlo](http://noflojs.org/) a bit, currently. It's a flow-based
programming environment in JavaScript. It might not be apparent from this post
but I do quite like it. Data-flow
programming is probably not much of an improvement if you start with a sane
language. But since JavaScript is a rotten piece of shit all the way through,
NoFlo actually improves things considerably.

I haven't written enough stuff in it to know whether or not it's
fit for doing real-world in-browser things, but it does look like
it. One of the nice things about it is that it lets you avoid writing
in continuation passing style, mostly. Again - in a sane language,
no one would do that anyway, but yeah. JavaScript.

As to the flow-based part of it - a few comparisons immediately come to mind.
One of them might be CSP, or Go's implementation of CSP. But I'm not a Go
programmer, so I can only compare it to that other system I know:
unix processes, as exposed by the unix shell.

Obvious from the start: NoFlo is two-dimensional, the shell is 
one-dimensional. Now, that's not strictly true - one can certainly arrange
unix processes in a two-dimensional pattern - but for this exercise, let's only
consider the plain old one-dimensional unix pipeline.

Say, something super-simple like this:

    grep '^a' | head

And that's where my gripes with NoFlo start, because I find it extremely difficult
to write even something simple like that in it.

The naive translation of the program above into NoFlo might look something like
this (the syntax is a built-in DSL, which NoFlo can execute directly):

    Read(filesystem/ReadFile) OUT -> IN Split(strings/SplitStr)
    Split OUT -> IN Filter(strings/Filter) 
    Filter OUT -> IN Head(packets/Range)
    Head OUT -> IN Display(core/Output)

    '^a' -> PATTERN Filter
    '10' -> LENGTH Head

    '/dev/stdin' -> IN Read

It's more verbose, but that's alright since that is obviously a side-effect of
being more organized (component names) and more flexible (multiple IO channels)
than the shell.

The thing is that it's not the same.

In the unix shell version, `head` will terminate after it read and printed 10
lines. This will send a `SIGPIPE` to `grep`, which terminates `grep`. In other
words, the following will terminate after 10 lines of output:

    (cat /usr/share/dict/words; cat) | grep '^a' | head

Whereas the NoFlo program will keep running, blocked on reading from `stdin`.

And not only will it keep running - *it will also not have printed anything*.
Because - somehow - it's not concurrent.

To be fair - that is probably my fault.  There has to be a way to
write this in NoFlo so it prints the matching lines out as soon
as they are read. But it's apparently not the default, and I can't
find anything about this in the documentation.

The fact that it doesn't work out of the box is a bit weird
- especially if you want to let non-experts like me write NoFlo
programs. Which, I think, is one of the goals of the project.

---

First NoFlo program, first deadlock - what can we do? Well, we can certainly
simulate the SIGPIPE by just terminating the whole NoFlo program after ten
lines. This is impossible to implement in the NoFlo DSL because we'd need to
pass a function (`process.exit`) to the callback component, but there is no
syntax to do that. So, let's just quickly write an `eval` component to solve
this:

    noflo = require "noflo"

    class Eval extends noflo.Component
      description: "Send the evaluated input to the output"
      constructor: ->
        @inPorts  = {in:  new noflo.Port 'string'}
        @outPorts = {out: new noflo.Port 'all'}
        @inPorts.in.on "data", (data) =>
          @outPorts.out.send eval(data)
        @inPorts.in.on "disconnect", =>
          @outPorts.out.disconnect()

    exports.getComponent = -> new Eval()

After [adding that to our package.json](http://bergie.iki.fi/blog/distributing-noflo-components/), we can now use it like this:

    'process.exit' -> IN Eval(Eval)
    Eval OUT -> CALLBACK Kill(core/Callback)

We'll need to trigger Kill once we printed 10 lines. I couldn't really figure
out how to connect it directly to `packets/Range`, so I just used
a counter. This leaves us with the following:

    Read(filesystem/ReadFile) OUT -> IN Split(strings/SplitStr)
    Split OUT -> IN Filter(strings/Filter) 
    Filter OUT -> IN Head(packets/Range)
    Head OUT -> IN Display(core/Output)
    Head OUT -> IN Counter(flow/CountDown)

    '^a' -> PATTERN Filter

    '10' -> LENGTH Head
    '10' -> COUNT Counter

    'process.exit' -> IN Eval(Eval)
    Eval OUT -> CALLBACK Kill(core/Callback)
    Counter OUT -> IN Kill

    '/dev/stdin' -> IN Read
    
However, that doesn't solve the problem. Something in the pipeline
still blocks until it read everything. So, `packets/Range` isn't
even receiving any data.

As far as I can tell, the problem here is node's `fs.readFile`
(used in NoFlo's `filesystem/ReadFile`),
which seems to not pass any data to the callback before it read
the complete file. So that's stupid, but fixable:

    fs = require "fs"
    noflo = require "noflo"

    class ReadByte extends noflo.AsyncComponent
      description: "Read single bytes from a file"

      constructor: ->
        @inPorts =
          in: new noflo.Port()
        @outPorts =
          out: new noflo.Port()
          error: new noflo.Port()
        super()
        @inPorts.in.on "disconnect", =>
          @outPorts.out.disconnect()

      doAsync: (filename, callback) ->
        buf = new Buffer 1
        fd = fs.openSync filename, 'r'
        fs.read fd, buf, 0, 1, null, (err, bytesRead, buffer) =>
          return callback err if err?
          @outPorts.out.send buffer.toString()
          @outPorts.out.disconnect()
          fs.close(fd)
          setTimeout () =>
            @doAsync filename, callback
          , 0
    exports.getComponent = -> new ReadByte()


This is laughingly inefficient, but fuck it. At this point it's
pretty much clear that I'm on the wrong path. But I can't figure
out the right one. And I still think that `grep foo | head` is something
that NoFlo should be able to do.

So, hacking on:

Using the above component instead of `filesystem/ReadFile` *would*
make the whole thing work, if it wasn't for `strings/SplitStr` which
isn't build for single-character data.

So here's a thing that splits a stream of chars into lines:

    noflo = require "noflo"

    class StreamSplit extends noflo.Component
      description: "Split the input into lines"

      constructor: ->
        @inPorts  = {in:  new noflo.Port 'string'}
        @outPorts = {out: new noflo.Port 'all'}
        @cur = ''
        @inPorts.in.on 'data', (data) =>
          for c in data.split()
            if c != '\n'
              @cur += c
            else
              @outPorts.out.send @cur
              @cur = ''

        @inPorts.in.on "disconnect", =>
          @outPorts.out.disconnect()
    exports.getComponent = -> new StreamSplit()

Wiring it all up:

    Read(ReadByte) OUT -> IN Split(StreamSplit)
    Split OUT -> IN Filter(strings/Filter) 
    Filter OUT -> IN Head(packets/Range)
    Head OUT -> IN Display(core/Output)
    Head OUT -> IN Counter(flow/CountDown)

    '^a' -> PATTERN Filter

    '10' -> LENGTH Head
    '10' -> COUNT Counter

    'process.exit' -> IN Eval(Eval)
    Eval OUT -> CALLBACK Kill(core/Callback)
    Counter OUT -> IN Kill

    '/dev/stdin' -> IN Read

And it works!

    $ (cat /usr/share/dict/words; cat) | ./node_modules/.bin/noflo graphs/GrepHead.fbp
    a
    aa
    aal
    aalii
    aam
    aardvark
    aardwolf
    aba
    abac
    abaca
    cat: write error: Broken pipe

It's still inefficient, though - there's more data read from the file than
needed.

---

So the first lesson I draw from this is to avoid all that and just don't
bother with NoFlo for anything stream-based. Which is weird because
NoFlo *should* be perfect for that kind of stuff.

Maybe re-creating shell semantics is just not something one should
try to do. But I really think that the standard components should
be built to support data streams. The connect/disconnect stuff
seems weird to me. I probably just don't understand it right,
but I also can't find an explanation. Now, I'm not saying that the
above clusterfuck is the only solution - I'm sure there are better
ways. But it *is* quite obvious that the standard library is broken
if you want to handle byte streams.

The second lesson is that I probably need to read NoFlo's source.
