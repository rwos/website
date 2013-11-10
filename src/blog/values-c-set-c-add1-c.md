(values C (set! C (add1 C)))
2012-04-20

"You are missing some linker flag somewhere" translates to C++ as follows:

```
    undefined reference to
    `OIS::InputManager::createInputSystem(std::multimap<std::basic_string<char,
    std::char_traits<char>, std::allocator<char> >, std::basic_string<char,
    std::char_traits<char>, std::allocator<char> >, std::less<std::basic_string<char,
    std::char_traits<char>, std::allocator<char> > >,
    std::allocator<std::pair<std::basic_string<char, std::char_traits<char>,
    std::allocator<char> > const, std::basic_string<char, std::char_traits<char>,
    std::allocator<char> > > > >&)'
```

There is no place in this world for a language like that.
We have enough problems already.

Stop.

Using.

C++.

Use C, use Go, use a Lisp - heck, use C# or Java or Brainfuck. But
please, please, please stop that C++ bullshit.

Yes, it's only some linker flag. Yes, it works on your machine. Yes, if
I would use Visual Studio Highly Professional Gold Plate Edition 2012
IntelliSense with Service Pack 2a, I could just import the project file.
Yes, I only need to learn using your XML-based build tool and specify that
flag. Yes, that's only a problem with gcc after 4.23-123 and before
3.23-2, or on AMD-64 machines made around Christmas 2010, or on rainy
Tuesdays, or both. Yes, Gentoo has a patch for it. Yes, I'm a programmer,
yes I could fix it.

No, I'm not going to fix it. I'm not even going to report it. I'm sick
and tired of this shit. Big C++ Projects *never* manage to do a clean
compile out of the box. And virtually every C++ project is big. And
all of those C++ projects have a metric shitload of dependencies. And
more often than not, you have to have the right *minor* version or even
the right patch-level installed. And every fucking C++ project bigger
than "hello world" takes ages to compile. And what does it come back with?
Kilobytes of error messages.

No, Dear C++ programmers, you got that wrong. You see, the compiler is
normally used to generate *binaries*, not error messages.
Most languages don't even *have* an arbitrary-length error message
generator, like C++ does.

I'll tell you another secret: users make use of these binaries by *running* them.
And they make the lights in that plastic thing called *computer* go on and
off with a certain rhythm. And sometimes, there's even sound or network
activity! It's a magic world, the world of working programs, I tell you.

I will never try compiling a C++ project again.

I do realize that this is not very threatening, but you have to start
*somewhere*.

Just say no to C++.

Or NO.

Or NO OH MY GOD NO NOT EVEN OVER MY DEAD BODY.

End of nerd rage reached. Thank you.
