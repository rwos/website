---
title: "You've picked the wrong repository"
date: 2013-02-07 00:00:00 +0000
---
Apparently, recruiting spammers are making progress - they now have a
perl script that parses github user profiles:

> `Subject: Data mining project`<br>
> `Date: Thu, 7 Feb 2013 10:44:06 -0000`<br>
> `From: "Tanya Kotwall" <tanya.kotwall@njfeurope.com>`<br>
> `To: <richard@r-wos.org>`<br>
> 
> Hi Richard,
> 
> Notice your github online.. (was trying to understand the `my_brain_hurts`
> repositories)
> 
> A contact of mine founded trustyou.com in Munich, it's a datamining
> platform and they partner with businesses like tripadvisor. At the
> moment they are looking for a front end web applications engineer as
> well as python backend engineer.. not sure if you are aware of anyone in
> the community who could be up for a challenge (down in Munich)?
> 
> Thanks very much for your thoughts J
> 
> Tanya Kotwall
> 
> Senior Consultant
> 
> NJF Europe Ltd

Here are the entire contents of the repo that they have problems to understand:

    
    from os import*
    r='s=[0]*8**5'
    p=0
    for c in read(0,9**9):r+='\n'+' '*p+dict(zip("><+-.,[","p+=1|p-=1|s[p]+=1|s[p]-=1|write(1,chr(s[p]))|s[p]=ord(read(0,1))|while s[p]:".split('|'))).get(c,'');p+=c in'[]'and 92-ord(c)
    exec r

And who could blame them? It's not exactly pretty code. It's also not very
interesting - it's a brainfuck interpreter. It first translates brainfuck into
python (in the long line, the result of the `dict` call is a mapping between
brainfuck (first argument to `zip`) and python (the rest)). The value of
`p` is used for indentation. The last line executes the resulting python
program.

So much for the explanation - and since they asked for my thoughts, here are my
thoughts:

* If you're going to parse github, don't just take the first repo in $language
  or you'll end up writing to people about their dotfile repos. 
* Use a spell checker on your mail template.
* Don't put "This e-mail contains proprietary information some or all of which
  may be legally privileged. It is for the intended recipient only." into your
  disclaimer. It won't help, people will just ignore it. Oops, I think I just
  did. Sorry.
* Use a spell checker on your mail template. Seriously.
* The whole concept of recruiting spam doesn't make sense to me. You're
  basically recruiting people that are stupid enough to reply to spam.
  Or do you use those mails as a honeypot and blacklist everyone that
  replies? That would make more sense.
* Use a spell checker on your mail template. And use *one* dot at the end
  of every sentence.
* Oh, and about the python engineer in Munich? No idea.

