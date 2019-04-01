Why?
2011-12-06

Today I learned: `printf(1)` is locale-dependent.

    $ printf %f 0.1
    -bash: printf: 0.1: invalid number

    $ printf %f 0,1
    0,1

    $ LANG=C;printf %f 0.1
    0.1

Why, oh **fucking why**?