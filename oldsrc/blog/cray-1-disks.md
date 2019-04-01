Playing with Cray-1 Disks
2013-04-09

You might have heard about [the guy who made a fantastic small FPGA Cray-1](http://www.chrisfenton.com/homebrew-cray-1a/).

He also found two old backup disks, one of which contains the
[last known copy of the Cray Operating System](http://www.chrisfenton.com/cos-recovery/).

I've just started playing around with the disk images - it's quite exciting!

The non-COS disk seems to contain some kind of system test application (there's
a lot of BASIC code on there that hints into that direction).

I haven't found anything too interesting yet, I'll have to write some
tools first. However, there is one text file on the application disk
I found by manually going through the strings. It describes a language
called APAL, whatever that stands for (there doesn't seem to be any
APAL code on the disk):

    INTRODUCTION

    An APAL program is composed of one or more APAL source statements.
    Each statement is one line in length.  Each statement, when com-
    piled by the APAL compiler, results in one or more instructions to
    be executed by the A processor, or the definition of working memory
    space for the program.  The APAL compiler examines each source state-
    ment for proper syntax and usage of operands.  Any errors are noted
    on the compile listing which is a product of the compilation process.
    The compiler generates instructions, assigns memory addresses, and
    sets aside memory areas for buffers and working space as directed by
    the source statements in the program.

    The console command to execute the APAL compiler is:  APAL A B C.
    A is the name of the file containing the source program. B is the
    name of the file that will contain the binary at the completion of
    the compilation process. C is the name of the file that will contain
    the listing.

    STATEMENT FORMAT

    The basic APAL instruction takes the form of a conditional assignment
    statement.


    Label Assignment Expression , Condition Expression .Comments


     #
     Subject1 = Expression1, Subject2 = Expression
     <
     >

    Except for a very limited number of statements, all APAL source
    statements take this form. The assignment portion of the statement
    is always present, and is composed of a single subject followed by an
    = sign followed by an expression which expresses the value of the
    quantity which is to replace the subject operand. The = sign is the
    only separator allowed between the subject and the replacement ex-
    pression in the assignment portion of the statement. Expression1 may
    be any expression composed of valid names ond operators. The condition
    portion of the statement is optional. When present, it is first eval-
    uated to determine a true or false condition. If true, the assignment
    portion of the statement is executed. If false, the assignment portion
    of the statement is not executed.

The text-file format is mildly interesting: it's basically ASCII, but with hex `c2 81`
as space (hex `c2 82` after sentences). It also uses `CR LF` as a line separator.
So, if you have code that handles "Windows" newlines you can now rename that
to "Cray-1 newlines". ;-)

What is needed, of course, is a disassembler and a script that parses the
disk images into files. I haven't tried parsing the image yet, but the filesystem
layout of the COS disk seems to be known, more or less. Maybe it'll be
similar on the application disk.

Dis-assembling the binaries also can't be that hard, since the
[manual for the original assembler of the CRAY-1](http://bitsavers.org/pdf/cray/2240000B_Prelim_CAL_RefMan_Dec75.pdf)
is available.

The COS disk is of course a bit more interesting, it's apparently for a
single-processor Cray X-MP (the successor of the Cray-1 - but "mostly
compatible", according to Wikipedia).

And now I have run out of things to say and I don't have a nice conclusion
with which to end this post. Well, except, maybe:

Happy Hacking!

