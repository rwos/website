You Asked For It - You Got It
2011-07-13

    DB ITS.1633. DDT.1546.
    TTY 0
    You're all alone, Fair share = 70%

I'm alone. Alone with one of the most legendary operating system of all times: <a href="http://en.wikipedia.org/wiki/Incompatible_Timesharing_System" target="_blank">ITS</a>.

You really should try it. It will be easy to setup on one of your spare <a href="http://en.wikipedia.org/wiki/PDP-10" target="_blank">PDP-10</a>s. Just in case you don't have a spare PDP-10 lying around: there's an excellent historic machine simulator called <a href="http://simh.trailing-edge.com/" target="_blank">simh</a> (Free Software and runs on most unices). Setting up ITS on the simulated PDP is not exactly simple, but I found this <a href="http://web.archive.org/web/20070826152708/http://www.cosmic.com/u/mirian/its/itsbuild.html" target="_blank">step-by-step description</a> to work quite well.

[caption id="" align="alignright" width="269" caption="The RMS Titanic after collision with an early PDP-10. It was a large machine."]<img class=" " title="RMS Titanic after Collision" src="http://upload.wikimedia.org/wikipedia/commons/6/6e/St%C3%B6wer_Titanic.jpg" alt="" width="269" height="184" />[/caption]

It's quite a nice thing to be able to emulate a monster like the PDP-10 on a small black plastic thingy called "Travelmate". Tells you something 'bout *progress* and <a href="http://en.wikipedia.org/wiki/Moore%27s_law" target="_blank">Moore's Law</a> and stuff...

Now, after booting ITS greets you with the prompt showed above - and that's it. There is no login needed.

Yes, you read that right: *no login*. Full access to everything. For everyone. *On a multi-user operating system*. Quite a pleasant environment! No wonder ITS was one of the <a href="http://www.csd.uwo.ca/staff/magi/personal/humour/Shaggy_Dog/Jargon%20File%20Version%202.1.1.html" target="_blank">roots of the hacker culture</a> - free information, no barriers, <del>flower power</del>, right?

There's a lot of ITS-based hacker folklore floating around. The standard editor on ITS, for instance, is <a href="http://www.ee.ryerson.ca:8080/%7Eelf/hack/realmen.html" target="_blank">commonly described</a> as the unfriendliest piece of software ever made: <a href="http://en.wikipedia.org/wiki/Text_Editor_and_Corrector" target="_blank">TECO</a> is probably the ultimate *You Asked For It - You Got It* program.
<blockquote>Just about any possible typing error while talking with TECO will probably destroy your program, or even worse - introduce subtle and mysterious bugs in a once working subroutine.</blockquote>
Now, that's not unlike what the Windows-Guys say about vi and the unix shell, nowadays. So let's step in and see what it's all about!
<pre>:peek
(Please Log In)

DB ITS 1633  Peek 629   15/31/127 00:00:34359738367  Up time = 38
Memory: Free=408   Runnable Total=11 Out=5     Users: High=6 Runnable=1
Index Uname Jname Sname     Status   TTY    Core Out %Time    Time PIs
  0 SYS    SYS    SYS        HANG    ?        42   0   0%
  1 CORE   JOB    CORE       UUO     ?         0   0   0%
  2 ___002 HACTRN ___002     HANG    &gt;        30   9   0%
  5  ___002 PEEK   ___002    +TTYBO  T0  C    11   3   0%
  3 TARAKA DMPCPY DMPCPY     SLEEP   ?         3   0   0%
  4 PFTHMG DRAGON PFTHMG     SLEEP   ?         6   0   0%
Fair Share 103%     Totals:                   92       0%
Logout time =         Lost 0%  Idle 97%  Null time = 38</pre>
A HACTRN (think DDT, think shell) is up and running - let's start TECO:
<pre>:TECO
SYS: SYS3; TS TECO - NON-EXISTENT DIRECTORY</pre>
Hm, must be making something wrong... Let's get some help:
<pre>:INFO
SYS: SYS3; TS INFO - NON-EXISTENT DIRECTORY
:LISTF
DSK: ___002; .FILE. (DIR) - NON-EXISTENT DIRECTORY</pre>
Eh, what?

Well, it seems that either my ITS installation is lacking some files, or I, as the prototypical luser, am doing something very stupid... Maybe I have to mount some stuff first?

I think I'll start with *reading the fucking manual*...

To be continued, I guess.
