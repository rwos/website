Continued
2013-04-12

Things I've learned today in my
[little](http://r-wos.org/blog/cray-1-disks)
[Cray-1](http://r-wos.org/blog/cray-1-disks-2) adventure:

The Cray-1 seems to use a Data General Eclipse as its control computer.
The Eclipse's OS is called RDOS - and that's also the system
the assembler is running on. (RDOS has the `PROG/A/B` switch syntax described in
the assembler manual, and also uses the `.SV` file extension for executables.)

The good news is that there is an Eclipse simulator in `simh`,
and they also have an [RDOS software kit](http://simh.trailing-edge.com/software.html).

The boot instructions are in the `simh` manual, but I at least had to
replace the mentions of `dp0` with `dkp0` (which is how `simh` calls
the "moving head disk"):

    # install simh, then do
    $ eclipseemu # at least that's what it's called on debian
    sim> att dkp0 zrdos75.dsk
    sim> set tti dasher
    sim> boot dkp0
    FILENAME? (cr)
    DATE (mm/dd/yy)? xx/yy/zz
    TIME (hh:mm:ss)? hh:mm:ss
    R
    list/e

RDOS doesn't seem to have an on-line help system, which makes using it
a bit difficult. But there's [a PDF manual on bitsavers](http://bitsavers.informatik.uni-stuttgart.de/pdf/dg/software/rdos/093-000109-01_RDOS_Command_Line_Interpreter.pdf).

So that all works but it doesn't really bring us that much further.
I guessed that the Cray OS disk might actually be (at least partly)
an RDOS disk, but it isn't:

    R
    init dp1
    DISK FORMAT ERROR:  DP1
    
Admittedly, that was a bit naive. The COS disk belongs to a Cray X-MP
and in the [reference manual for *that* machine](http://bitsavers.informatik.uni-stuttgart.de/pdf/cray/HR-0032_X-MP_MainframeRef_Nov82.pdf)
(bitsavers is a gold mine) there's no mention of the Eclipse.

Said manual also contains the following section:

> SYSTEM DEADSTART<br>
> [...]
> Once the I/O Subsystem is operating, the CRAY X-MP mainframe can be
> deadstarted from the Peripheral Expander magnatic tape unit or the DD-20
> disk unit.

The problem is that it refers to the "I/O Subsystem (IOS) Operator's Guide" for
further information - and I couldn't find that guide, yet.

The Cray-1 manual, on the other hand, says that

> COS is loaded into memory and activated through a system startup
> procedure performed on the MCU (maintenance control unit). At
> startup, permanent datasets are reloaded or re-established on mass
> storage.

Is the Data General Eclipse the MCU? Probably - but probably only for the
Cray-1. What's the MCU-like thing for the Cray-X MP? Is there one?

To sum up, I can't really say that I understand the whole auxiliary
stuff around the mainframe.

So, maybe a better way to move on would be to try to manually extract the COS
image that seems to be on the disk and ignore the whole IOS stuff for the
moment.

