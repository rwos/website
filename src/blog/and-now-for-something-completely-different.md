And Now for Something Completely Different
2011-09-28

As I mentioned before, I've been playing around with Python lately. And what is the first thing to write, when learning a new language?

Right - a brainfuck interpreter.

<a href="https://github.com/rwos/my_brain_hurts/blob/master/my_brain_hurts.py">So I did</a>. It was already pretty small - 294 bytes - but <a href="http://redd.it/ksawz">reddit user fas2</a> managed to cut it down quite a bit more. The final version is only 230 bytes in size:
<pre>from os import*
r='s=[0]*8**5'
p=0
for c in read(0,9**9):o=ord(c);r+='\n'+' '*p+{22:
'p+=1',20:'p-=1',3:'s[p]+=1',5:'s[p]-=1',6:
'write(1,chr(s[p]))',4:'s[p]=ord(read(0,1))',51:
'while s[p]:'}.get(o-40,'');p+=c in'[]'and 92-o
exec r</pre>
<small>(some line breaks added for nicer rendering)</small>

My core idea remained, however. This interpreter is quite unlike others. It's less an interpreter and more a JIT compiler - it translates the brainfuck code into Python and executes the result. It works pretty well (there are edge cases, especially regarding user input - but it's more "conforming" than most other tiny interpreters).

There's just one problem with this approach: It's not going to shrink much more. (And remember: The Ultimate Goal is to make a twittable interpreter, i.e. 140 bytes maximum).

But there's also one upside: I learned more about Python than I would have if I was writing normal boring programs, or following tutorials.

Code-Golfing brings you pretty quickly to the heart of the language - the idioms, the literal forms and other specialities.

And Python has a lot of special features. It feels a bit like a Lisp with syntax, like Perl without the garbage, like PHP without - well, no, actually it doesn't feel like PHP at all. Python is elegant and thought-out and obviously made by people with taste.

It's a great language. And I have barely touched the surface of the magic. Python is so full of cool and useful stuff - and, perhaps most surprisingly, everything is pretty readable.

Python is probably the best language I've seen so far.

 

PS: I hereby introduce *Richard's law of programming language judgement*:
If a language has a literal form for arbitrary-length integers, it will be great all around.

PPS: No, Java-Guys, just no. Bignum does *not* count.

`Bignum result = Bignum.add(Bignum.ONE, new Bignum("2")); // WTF?!`