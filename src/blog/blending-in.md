Blending In
2011-07-14

There are a multitude of different coding styles - and they usually differ widely between languages and environments. But it all comes down to two extremes: short and long.

In a Unix (read: ANSI or pre-ANSI C) environment the dominating style is the short one. It usually reads like a strange version of English written in a Latin-transcribed <a href="http://en.wikipedia.org/wiki/Hebrew_alphabet" target="_blank">Hebrew alphabet</a>: `strtr`, `creat`, `malloc`, `yhwh` (well, maybe not `yhwh`, but you get the point). Additionally, Unix and C are more or less free of upper-case letters.

The other extreme is the OOP world: their camelCase or MixedCase style looks like... well, a camel? Uh... yeah, sure looks like a camel. And as you know, those guys tend to use really long names: `getLengthOfStringAsInteger` and so on.

Ok, introduction done - main point:

No matter what style you think is better: *blend in* *and use the style of the existing code for heaven's sake*!

Mixing these styles sucks. Hard time.
<pre>lotat = getListOfThisAndThatByFooId(foo.getId());</pre>
Really, even if `listOfThisAndThat` feels too long to write it out each and every time (which it does, at least for me): do *not* shorten it.

It is called `listOfThisAndThat` and that is how you *must* name it.

Or else, everyone coming along afterwards - with the longCamelCaseNames parsing mode activated - will take `lotat` for a proper name or something - and will have to *waste time* going back through the code, trying to find out what the hell it really is.

The worst style is no style at all.