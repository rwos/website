---
title: "Syntax Parameters: Usage"
date: 2013-03-05 00:00:00 +0000
---
This is just a short note, because I know I'll forget it if I don't write
it down somewhere:

Racket's [syntax parameters](http://docs.racket-lang.org/reference/stxparam.html?q=define-syntax-parameters)
can be used to safely break hygiene in macros.

As an example, say we want to create a macro `define/return` that makes
an exit-continuation named `return` available in the function body - so that
calling `(return value)` anywhere in the function does what you would expect
from most other languages.

First, the `require`:

    
    (require racket/stxparam)

Then, we have to define `return` as a syntax-parameter:

    
    (define-syntax-parameter return (syntax-rules ()))

And we can go on writing our macro:

    
    (define-syntax define/return
      (syntax-rules ()
        [(define/return (name args ...) body ...)
         (define (name args ...)
           (call/ec (lambda (ret)

Here's the interesting bit: we now have to use `syntax-parameterize`
in order to make `ret` available under the name `return` for the function
body:

    
             (syntax-parameterize
                 ([return (syntax-rules () [(_ v) (ret v)])])
               (begin body ...)))))]))

So, the macro is done - here's a (silly) usage example:

    
    -> (define/return (foo x) (+ 1 (return x)))
    -> (foo 42)
    42

And that's it, I think. I can't claim to *really* understand what's
going on here, but it seems to work pretty well...

