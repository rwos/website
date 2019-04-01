Choices
2011-09-06

One thing that is really nice about designing and implementing a programming language, is that you can define how it looks. Sounds simple, *is* simple - simply fun.

The problems start when you have to actually choose one of the possibilities. Today on my plate: assignment.

The assignment function (yes, function, not operator) will play a major role in my future programming language. As I have written before, it will basically be Forth-like. Which means, that it will have a dictionary. This dictionary (think "big hash map") will contain everything - all the functions, all the global variables. Adding something to the dictionary will look something like this:
<pre>
    (ASSIGNMENT_SYMBOL "name" [code])
</pre>
or like this (both variants will be possible):
<pre>
    [code] "name" ASSIGNMENT_SYMBOL
</pre>

Now, it's pretty clear that C's `=` will read pretty bad. In my language's syntax, something denoting the word "store" would be more natural. However, typing `store` over and over again is just silly.

Forth has a word named `!` for storing things in memory. I think this is pretty sweet, but I've become too used to C using it for logical NOT.

Maybe `:` would be a better choice. But it looks stupid when it stands on its own. And looks are important, right?

So, here I am, thinking about what symbol to use for assignment for about an hour now. I really have to work on my time management, I guess.