What a Language!
2012-11-26

Common Lisp looks strange when you come from C, but it's actually pretty
easy to grok. Racket (and other Schemes) do iteration via tail-recursion,
which seems strange, but is fairly simple. Macros are easier to
work with than the C pre-processor. Only Go has channels and goroutines,
but once you know what they do and how they interact, it's fairly simple
to just use them. It's not *that* easy to do anything non-trivial in
Brainfuck, but the language is so simple, it's fairly straight-forward
to work it out.

...and along comes <a href="http://www.jsoftware.com/">The J Programming Language</a>.

            i.10
        0 1 2 3 4 5 6 7 8 9

...fair enough...

            1+i.10
        1 2 3 4 5 6 7 8 9 10

...nice...

            +/ 1+i.10
        55
            */ 1+i.10
        3628800

...yep...

            +/\ i.10
        0 1 3 6 10 15 21 28 36 45
            +/\. i.10
        45 45 44 42 39 35 30 24 17 9
            */\ i.10
        0 0 0 0 0 0 0 0 0 0
            */\. i.10
        0 362880 362880 181440 60480 15120 3024 504 72 9

...all right...

            4 (~: # ]) 1 2 3 4 5 6
        1 2 3 5 6

I'm sorry?

            (-&2 +&$: -&1)^:(1&<)M.">:i.10 .NB I didn't write that one
        0 1 1 2 3 5 8 13 21 34

What the...?

What a great language! I don't understand a thing! Love it!

