Artificial Stupidity
2011-07-18

I always wanted to create some artificial intelligence - well, every programmer
does, right? So, I thought, I'd dive into some <a
href="http://en.wikipedia.org/wiki/Genetic_programming">genetic programming</a>
(not to be confused with generic programming, the time-wasting technique from
OOP-land).

Genetic programming basically means that you create some random programs and
see how well they perform a certain task. Then you pick the best performers,
mutate and cross-breed them and test this new generation again. Repeat a few
times until some fitness threshold is reached and spit out the best program.

Sounds like a perfect natural approach to me. In fact it *is* *the* perfect
natural approach - a thing called *evolution*.

Now, the hard points are basically these three:

* how to mutate and cross-breed programs
* how to measure the fitness of programs
* what to choose as the threshold

Mostly, some kind of Lisp is used as the underlying programming language - but
that's boring, right?

So I chose Brainfuck.

I mean what do you take to implement a brain in? Of course, *a language that
has the word "brain" right in its name*. Easy choice. Besides, it enabled me to
skip all three problems - and so I hacked together some program that spits out
random Brainfuck (bf) programs. Mutation was done through randomly replacing
and inserting one of bf's operators. Cross-breeding was not done at all.

Next, I opted for binary fitness evaluation - right or wrong. Which, quite
elegantly, made choosing a threshold very easy...

As an input I presented the program (hereafter called by its given name
"Stupy") with a question and an answer. Stupy now tried to rearange his
Brainfuck brain until it could produced exactly the given answer, when given
the question as an input.

Now that alone does not make intelligence - so Stupy recorded all
question-answer pairs and tested them all. A brain was only held as "working"
when all known questions produced the right answers, respectively.

To actually see the intelligence, Stupy made proposals of answers, when given a
question. He would run the question through his current brain and print out the
result. So you could see if he really "got it" or if he was just doing random
guessing.

Sounds like a good idea, right? Well, no it wasn't.

At first I was delighted: Stupy was fast! And he really *was* intelligent - or
so it seemed. Let me reprint the first session here:

    human >>> 1+1
    stupy >>>
            human correction >>> 2
    stupy >>> hm no, wait............................ ah! Ok, got it!

Okay, easy - Stupy had created some Brainfuck program that transformed "1+1"
into "2". But there are a multitude of different ways to achieve this. So,
let's test *his* approach:

    human >>> 2+1
    stupy >>> 3
            human correction >>>
                    --> right answer

Right answer! *Right answer*! I created intelligent live! I am the programming
Uber-Lord! I... must train him more:

    human >>> 1+2
    stupy >>> 2
            human correction >>> 3
    stupy >>> hm no, wait............................
    .................................................
    [several lines of dots skipped]
    .................................................
    ....... uh, I'm too stupid.

Oh.

    human >>> 2+2
    stupy >>> 3

Oh-oh.

    human >>> a
    stupy >>> b

Okay.

Turns out, Stupy wasn't that intelligent. I increased the timeout, but still -
even after 4 hours mutating and testing his brain, he didn't get both "1+2" and
"2+1" right at the same time.

Maybe Brainfuck wasn't the best choice, after all.

PS: Some of Stupy's brains:

(Note that my Brainfuck interpreter had a timeout <del
datetime="2011-07-18T18:52:20+00:00">to solve the halting problem</del>.
Besides, as you will notice, most "brains" are not well-formed Brainfuck
programs - so some of these might not work with regular interpreters, much
less compilers.)

"add one to first byte of input and print the result"

    >,+[.<][]

    ,+.

    ,+.+]-.+[.+>>[>><-],[]<-><][<,,

"echo input (like cat(1))"

    ->,[.,][,<],++>,<[,<<>>.+,,,<>+
    ]>[].+]<<+,+[.]-<][,>,.[[,[,,<+
    <.>[+.>]],-,.]    .[>>+[.+.<.+]
    +[][,.<>+,-,<-]<-[],]-,-><+->+<
    +[,]++-.>

    ,[.,]]][+,>--+[

**Update:** The code of a slightly modified version is <a
href="https://github.com/rwos/scrapyard/tree/master/artificial-stupidity">here</a>.
This version uses many different brains (worst-case: one for each
question-answer pair) and thus can answer both 1+2 and 2+1 correctly.

