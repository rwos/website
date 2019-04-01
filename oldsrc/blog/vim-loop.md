The BASIC Magic in Vim
2013-01-25

I've just discovered this by accident: one can make infinite recursive loops in
vim. It's very simple: just record a macro and in that macro apply that macro. 

That may seem useless but it's not: I'm now finally able to port my
very first program to vim. The original form was:

    10 PRINT "HELLO"
    20 GOTO 10

In vim: type `<ESC> qaoHELLO <ESC> @aq` followed by `@a`.

