Javahaha
2013-04-30

A lot of the Ludum Dare games are written in Java. Much to my surprise,
I did have a JRE installed on my machine. So most of the games worked
out of the box, but sometimes the JRE died with a peculiar error:

    Exception in thread "main"
        java.lang.UnsupportedClassVersionError: $file
        (Unsupported major.minor version 51.0)

Let's try and understand this error, shall we?

* `major.minor version 51.0` - major.minor is the standard format of
  a version number, no need to say that in the error message.

* `UnsupportedClassVersionError` - I'm sorry, is there a shortage of space characters?
  Is your keyboard broken? Oh, it's an identifier and you can't have spaces in identifiers?
  Well, don't dump the identifier to the user, then.
  
  Oh, you have to dump the Identifier because otherwise the user wouldn't know
  that it's the "Class Version" that's unsupported? Well, how about including
  *vital information* like that in actual the error message? Sounds like a good
  idea? Yeah, thought so.

* The unsupported class version is `51.0`. The JRE I have installed
  is version `6` (Debian package `openjdk-6-jre`). If I ask the program `java`
  what its version is, I get back `java version "1.6.0_27"`.  And `IcedTea6
  1.12.4 (6b27-1.12.4-1)`. And `OpenJDK 64-Bit Server VM (build 20.0-b12)`.
  WTF?!

* No really, what the *fuck* is going on there?

  The language is version 6; the VM is version 1.6.0_27(?); the
  class version (whatever *that* is) that this VM can't run is 51.

  What the hell? Off to $search-engine.

* And here's what I learned (and what the error message should say):

    The JRE is too old. The program you're trying to run was
    compiled for Java 7. You only have Java 6. Please update.

---

Can you image that Java didn't exist until 1995? It was completely made up
from scratch less than 20 years ago! How could they accumulate this kind
of cruft in less than two decades? How will this ecosystem look like when it
reaches the age of C, or Lisp?

But it's not only that - the error message itself also reminds me why I dislike
Java.

"We can send `toString()` to basically everything. So, for error messages,
let's just send `toString()` to the Exception. Wow, how *elegant*.
How *object-oriented*. Oh, look how much we don't care about the
implementation. What a great application of encapsulation and
separation of concerns!
 
And everyone gets the same message - users, developers, log files, API
consumers! And they all get a stack trace! Because users *love* stack traces!"

What a Wrong And Stupid Thing To Do.

