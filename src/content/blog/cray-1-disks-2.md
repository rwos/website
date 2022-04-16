---
title: "Playing with Cray-1 Disks, Part 2"
date: 2013-04-11 00:00:00 +0000
---
<small>([part 1](http://r-wos.org/blog/cray-1-disks))</small>

Nothing ground-breaking to report, yet - but I'm having a lot of
fun so I thought I might as well blog about it.

Today (well, actually yesterday, it's 3:30am...) I've read the Cray Assembly Language
manual I linked last time.

It not only describes the architecture and instructions of the Cray-1 but also
the binary output format of the assembler. Unfortunately, nothing on the two disks
actually has that format, as far as I can tell.

The only thing on the disks that seems to match the manual are the word-sized program
names (the Cray-1 has 64-bit words). There's also no sign of the date and time strings
the manual describes. So, what I thought to be an easy vector to extract the machine code
doesn't really work. 

However, others have already worked out the file format for the Cray OS disk
(thought it only really works for what is basically the boot section of the
disk, but maybe that's because of data corruptions).
I'm planning to write a small disassembler and try and see if I can find at least
some code that makes sense.

I don't really know what I'm doing, to be honest, which is probably what makes
it so much fun. :-)

The assembler manual contains a lot of interesting stuff I can't really explain
myself with my limited knowledge of 1970s batch computing.
For once, the assembler input is described in terms of punch cards, but there's also a
section that describes the invocation of the assembler in what looks like a CP/M like
syntax (assuming the '/X' switch syntax comes from CP/M, I only know it from DOS):

> `CAL Z`<br>
> causes assembly of CAL source file `Z`, producing an absolute binary file
> called `Z.SV`<br>
> `CAL/N/L A`<br>
> causes assembly of file `A`, producing as output a listing file `A.LS`.

On what kind of machine does the assembler run? Probably not directly on the
Cray, I imagine. And if that machine has a command prompt sophisticated enough
to specify flags, why doesn't it also have a simple line editor? How did you
compute, strange people from the 70s? I have no clue!
(I feel I should know more about the whole thing, this was only 40 years ago...).

Oh, and the assembler has apparently 5 error messages: `O`, `L`, `D`, `U`, and
`R`. That are three more than `ed(1)` has, but still... In some ways, it seems,
these were simpler times.

From the ASCII strings it seems that there's quite a bit of fun stuff on the
Cray OS disk - a source code editor, a complete on-line help system for
Cray OS and IOS (which, if I understood it correctly, is basically the Cray's
BIOS, only that it also has its own processor) - oh, and this:

    &*****************************
    &* Leading Edge Technologies *
    &*****************************
    &Preventive Maintenance (TISM):
    &Mon 07:15 - 09:15, Tue 17:00 - 21:00, Fri 07:15 - 09:15.
    &*************************************
    6LTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
    &Mon 07:15 - 09:15, Tue 17:00 - 21:00, Fri 07:15 - 09:15.
    &******************************************************
    &* This is M-M-Max MP, here ... PARTY, PARTY, PARTY ! *
    &******************************************************
    %*****************************************************
    %* This is M-M-Max MP, here ... Hey, go home ... NOW *
    %*****************************************************
    %*****************************************************
    %* This is M-M-Max MP, here ... sorry, no NEWS today *
    %*****************************************************

Happy Hacking and good night!

