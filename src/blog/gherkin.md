Given When Then
2013-10-27

[Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin) is a hack.

Gherkin is the "language" (I'll justify the use of scare-quotes in a minute)
used by the [Cucumber](https://github.com/cucumber/cucumber) test framework.
Or, if you're using PHP, the language behind the PHP port [behat](http://behat.org/).

Tests usually look something like this (example lifted straight from cucumber's docs):

    Feature: Serve coffee
      In order to earn money
      Customers should be able to 
      buy coffee at all times

      Scenario: Buy last coffee
        Given there are 1 coffees left in the machine
        And I have deposited 1$
        When I press the coffee button
        Then I should be served a coffee

Which *is* very nice. Having tests that are as easily readable as this
is obviously fantastic!

What is not nice is how it's implemented. What is even less nice, is how it's
sold as a "business readable, domain specific language". I can live very well
with crude hacks, as long as the README states "it's a crude hack". Glancing
over obvious limitations in exchange for marketing slogans bothers me, however.
Among programmers, we should be honest first.

## intro

Let's step through the test above:

    Feature: Serve coffee
      In order to earn money
      Customers should be able to 
      buy coffee at all times

This whole block is just a comment and subsequently ignored. You have to
have one of those at the top of your files, and the block below `Feature` has
to be indented, however.

      Scenario: Buy last coffee

Another comment. Now comes the actual executable code:

    Given there are 1 coffees left in the machine
    And I have deposited 1$
    When I press the coffee button
    Then I should be served a coffee

Every line here is a "step", and every step does something.

## assertions and instructions

Even thought there are semantic differences between sentences beginning with
with `Given`, `When`, and `Then` in English, they are all the same thing in Gherkin.

Suppose the first sentence

    Given there are 1 coffees left in the machine

sets up the machine to have 1 coffees [sic!] left. You start to run into problems
once you now write a different test where the *outcome* should be that the
machine has one coffee left. Say, something like this:

    Given there are 2 coffees left in the machine
    When I order one coffee
    Then there are 1 coffees left in the machine.

Perfectly reasonable for a human, but for Gherkin this translates to:

    set up the machine to have 2 coffees left
    order one coffee
    set up the machine to have 1 coffee left

Which is not only not right, it's not even wrong. This test will
run and it will run *successfully* every time.

What Gherkin wants you to write is something like this:

    Given there are 2 coffees left in the machine
    When I order one coffee
    Then there should be 1 coffees left in the machine.

So that the programmers can implement the "there should be" sentence as an assertion,
and the "there are" sentence as a instruction. Why is this difference not
handled via the `Given`/`Then` keywords? Who knows.

This minimalism/stupidity in Gherkin's approach to parsing results in a
programming language with extremely low orthogonality. In fact, there's none at
all. If you come across a step like

    Given there are 1 coffees left in the machine

this does *not* guarantee at all that

* there's a step `Given there are 2 coffees left in the machine`
* there's a step `Given there are 1 cappuccinos left in the machine`
* there's a step `Then there should be 1 coffees left in the machine`
* and so on

I think this is pretty confusing, *especially* for non-programmers.
Also, depending on how you write your regexps, the step above is distinct from
all of the following:

* Given there are 1 coffees&nbsp;&nbsp;left in the machine
* Given there are 1 coffees left in the machine.
* Given there are 1 coffees left in the machine!
* Given there are 1 coffee left in the machine
* Given there is 1 coffee left in the machine
* Given there is one coffee left in the machine
* Given there are 1 coffees left
* and so on

This is easily traceable back to the simplistic implementation, but that doesn't
help anyone. Gherkin is aimed at non-technical folk - and it's syntactically
*less* forgiving than JavaScript! In terms of human-friendliness of the
syntax it's comparable to the older fixed-format versions of FORTRAN.

In other words: Gherkin is (or can be) nice to read, but it's *extremely*
unfriendly to write.

## 2 problems

Let's talk about the implementation. Gherkin is regexp-based
<strike>because that's an absolutely reasonable choice for parsing a natural language</strike>.

So, for every "step", you have a regexp with some code behind it, that implements
this step. It looks something like this (in cucumber, behat is a bit more verbose):

    Given /I have deposited (\d+)\$/ do |n|
        @machine.deposit(n)
    end

In other words: there is no Gherkin language. At all. Gherkin is a lexical scanner,
nothing more. The parser (regexps) and evaluator (associated code) is solely in
your hands to implement. And because Gherkin limits you to per-line regexps,
the resulting Gherkin-based DSL is *less* capable than pretty much anything
you could've come up with yourself.

In behat at least (I assume it's the same in cucumber), there's also no way to
stack regexps. Every step has to match exactly *one* regexp.  What that means
is that you can't special-case steps, and you can't override them. (Well, you
can, but it's extremely hacky).

There are other limitations: It's not possible to use the "language" itself
to extend its functionality. You can't write new Gherkin steps in Gherkin.
(Again, technically the last sentence is wrong. You *can* do that but you'd have
to implement it yourself and Gherkin won't help you.)

## overtaken by a PDP-6

The [shrdlu](http://hci.stanford.edu/~winograd/shrdlu/) program was much ahead of
its time, and I'm not saying that its approach to natural language understanding
would have been a good one for Gherkin to take in general.

However, at least one feature would be an obvious improvement to Gherkin,
and not that hard to implement: The whole notation of context. 

    When I type "foo" into the password box
    Then it should change its color to red
    And next to it "Your password is too short" should appear.

You *can* do something like that in Gherkin today but you'd have to implement
it yourself. Which might not be that surprising at this point. Gherkin does
almost nothing - Gherkin *is* almost nothing.

It's just a small hack.

## bonus

Here's an implementation of the core of Gherkin in ~30 lines of Racket:

    :::racket
    #lang racket

    (define *steps* '())
    (define-syntax-rule (prepend! l x) (set! l (cons x l)))
    (define-syntax-rule (Given r (args ...) body ...)
      (prepend! *steps* (cons (regexp r)
                              (lambda (full-match args ...) (begin body ...)))))
    (define-syntax-rule (Then r (args ...) body ...) (Given r (args ...) body ...))
    (define-syntax-rule (When r (args ...) body ...) (Given r (args ...) body ...))

    (define (trim-step step)
      (regexp-replaces (string-trim step)
                       '([#rx"^(Given|And|Then|When) " ""])))

    (define (match-step s r) (regexp-match r (trim-step s)))

    (define (find-step s)
      (define found (findf (compose (curry match-step s) car) *steps*))
      (if found
        (values (car found) (cdr found))
        (values #f #f)))

    (define (run-step step)
      (displayln step)
      (define-values (step-regexp step-fn) (find-step step))
      (if step-fn
        (with-handlers ([exn:fail? (lambda (e) (printf "FAILED: ~a\n" (exn-message e)))])
          (apply step-fn (match-step step step-regexp)))
        (printf "\tStep not implemented. Implement with something like:\n\t~s\n\n"
          `(Given ,(trim-step step) () (do whatever)))))

    (define (run-feature f) (for-each run-step (string-split f "\n")))

Step implementations would look like this:

    :::racket

    ;;; utilities
    (require net/url)
    (define *content* "")
    (define (GET url)
      (call/input-url (string->url url) get-pure-port
        (lambda (p) (set! *content* (port->string p)))))

    ;;; steps

    (Given "^I am on '([^']*)'$" (url) (GET url))

    (Then "^I should see '([^']*)'$" (text)
      (unless (regexp-match? (regexp text) *content*)
        (error "Text not found")))

And you'd run it like this:

    -> (run-feature "
      Given I am on 'http://example.com'
       Then I should see 'Example Domain'
    ")

    Given I am on 'http://example.com'
     Then I should see 'Example Domain'

    -> (run-feature "
      Given I am on 'http://example.com'
       Then I should see 'Foobar'
    ")

    Given I am on 'http://example.com'
     Then I should see 'Foobar'
    FAILED: Text not found

    -> (run-feature "
      Given I am on 'http://example.com'
      Then everything should work
    ")

    Given I am on 'http://example.com'
    Then everything should work
        Step not implemented. Implement with something like:
        (Given "everything should work" () (do whatever))

It's just a hack. A nice one, maybe - but just a hack nonetheless.

