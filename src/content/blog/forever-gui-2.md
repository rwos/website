---
title: "A Graphical Forever Project, Part 2"
date: 2013-02-15 00:00:00 +0000
---
<small>([part 1](http://r-wos.org/blog/forever-gui))</small>

My first idea of how we could simplify creating graphical user interfaces
was to just take a unix pipe and to either render something graphical for each
component, or only one input-element and one output element.

That is, for example `find ./ -name *.c | xargs grep -n "[^f]gets" | vi -`
would result in a number of little boxes on the screen, connected by pipes,
with the last box being `vi`. The `find` box may have had a text-field
for the directory in it, and some (actually: much more) other widgets
for controlling all the other options. As would the `xargs` box, and
so on.

That would be very simple (*no* work at all to implement a GUI), but
also very stupid.

The relationship between a program and its GUI is a bit funny. If you look
at today's GUI programs, you'll find that there's
usually no connection at all between the structure of the program and
the structure of the GUI. Which is fine, I think. With current graphics
systems you are absolutely free to do the GUI whatever way you want.

So I came to the (not too surprising) conclusion that a graphics system has to
have that distinction between GUI and program.

Currently, most GUIs are trees. It may be worthwhile to explore other means of
grouping in GUIs, but as a whole the current parent-children approach seems to
work rather well. The unix shell language can't easily express trees. The unix
file system can, however. So it seems rather natural to map containers (windows,
group-boxes, tabs, ...) to directories, and containees (buttons, text-fields, ...)
to files.

But creating complex file trees is cumbersome with the standard unix tools.
Trees are, however, easy to express as s-expressions.

Putting it all together: say, we want a program that has takes a word,
[searches for the definition on duckduckgo](http://duckduckgo.com?q=define+hello),
and shows the result. If we were to
run that program on the command line, we'd expect a plain-text answer. If
we were to run it as a desktop application, we'd expect a little formatting.

    
    #!/bin/sh
    word-input = text-input -name word
    gui-output = html-render
    http GET "duckduckgo.com/q?=define+`$word-input`" | \
        html only div id="zero_click" | $gui-output | html2text
    # (vertical
    #   word-input
    #   gui-output)

If we had the utilities that I made up for this example, you could run that
script today with any unix shell. `text-input` would just print the name and read
your input, `http` would send the request and return the result, `html` would
parse the html and return only the div with the id "zero_click". `html-render`
would do nothing and just return its input, and `html2text` actually exists
and does what you'd expect.

The GUI part is the tree in the comments. A graphics system could parse the
script including the "commented" section and create a window, with an
input field and an HTML renderer below it.

One way to do that would be to implement a `-gui` switch on text-input and
html-render which would make them return their graphical representation - and
the GUI would know about that switch and call the elements of the window with
it.

This seems all pretty hacky, and it is - but it would also mean that you'd have
a GUI system on the shell-scripting level. The real benefit of that is the
power you'd gain, when you go further and implement basically 
"higher-order" GUIs. Say we have a text-editor and want to add the ability
to look up word definitions. Assuming we put the script above into
`/bin`, maybe named "word-definition", we could now just go ahead and include
it into the GUI-tree of our text-editor.

The problem is, of course, that things don't really work like that. Maybe you'd
want the definition to pop up somewhere when you middle-click a word in the
editor, or something like that. I don't think that things like that (that is,
real-world GUIs, as opposed to "what I wished GUIs looked like because it would
make the programmer's job easier") are impossible to do with my little scheme,
but it does take some thinking on how to do it elegantly.

At last, I want to come back to mapping GUIs to directories and files. I'm not
sure whether or not this is a good idea (in fact, I'm leaning towards "this is
absolutely stupid"), but it would have some good sides: You could `cp` or `mv`
complete windows, or parts of windows elsewhere (maybe to another desktop).
You could re-arrange windows by re-arranging the file hierarchy. You could
share windows over a network, just as you can with files.

Hoverer, I haven't really thought that through, yet. What kind of format would
the files have? PNGs? Some formatted text? Binary bitmaps? And who would create
them? And how would updating (i.e re-drawing) work if you could move them
around as you wish?  No idea.

It's a Forever Project, after all.

