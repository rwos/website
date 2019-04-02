---
title: "The Turing Machine vs. The Coffee Machine"
date: 2011-07-17 00:00:00 +0000
---
From a <a href="http://tldp.org/HOWTO/Coffee.html">great article about making coffee with a Linux box</a>:
> Because of the way a Turing Machine works [...], it is a very complicated device to program, and debug at the end of the day. The reason is, that its behavior is a sequential process that is completely determined by the following parameters:

> (1) the State the machine is in,</li>

> (2) the Symbol (or number) on the square it is scanning, and</li>

> (3) a Table of Instructions</li>

> The major contemporary disadvantage of the Turing Machine (TM) is that it is of sequential nature, which implies that only a particular range of problems can be mapped to it in a straightforward way. TMs are suitable for problems that are described well on a serial storage medium (tapes) and don't make use of indexes for data reference. This is in contrast to the Coffee Machine (CM) that can handle any Random Access algorithms as well (with no compromise of simplicity).

> Add to this, that TMs impose a very high and unnecessary complexity on item (3) in favor of keeping (1) and (2) simple. And just in case you don't agree that the so called Table of Instructions gets trully overwhelmed, have you ever tried to write a compiler for a Turing Machine? A system that isn't easily programmable and is hard to debug, should be considered a seriously questionable system, at least as far as Computer Engineering (!= CS) is concerned. For instance, <b>try to simulate the Coffee Machine with a Turing Machine and vice versa</b>. Hey, if you still disagree, show me the code.

> Bottom Line: The Coffee Machine (CM), is a much better model for the von Neumann architecture and has a O(1) relationship with what is standard practice of weighting algorithms, in the current form of complexity theory.


Emphasis mine - and, yes, I do think this is *very* funny!