Colored Text in wmii's Status Bar
2013-06-08

Another entry without any ranting - what is this blog coming to?
In order to not *entirely* slip into the realms of factual boringness
this one is only useful for people who use `wmii` as their window manager:

The `wmii` status bar doesn't interpret ANSI escape codes for colors,
but one can set the colors globally for the whole bar. If one wants
to color only specific sections of the status bar, one has to divide
it into more bars.

This is easily done by writing a new file into `/rbar` in `wmii`'s
virtual file system. I suppose you already have your own `status` function
in your `wmiirc_local` - just add something like the following:

    
    status() {
        # [...]
        echo -n "colors #ff0000 #000000 #000000\n" \
                "label this will be red" | \
            wmiir create /rbar/little_red_text_bar
        # [...]
    }

And that's pretty much it. The files in `/rbar` are displayed
in alphabetical order. Since the default status bar is called
`/rbar/status`, the `little_red_text_bar` will end up on the left
side of it.

