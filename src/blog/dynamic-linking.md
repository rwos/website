Overwriting Dynamically Linked Stuff
2013-05-07

This is just another one of these "I have to write it down somewhere or I'll
forget it" things.

Changing the implementation of dynamically linked library functions via
`LD_PRELOAD` isn't hard at all - but what wasn't completely obvious to me is
how to write implementations that use the original version of the function.

As an example, let's say we want a version of `open(2)` that prints everything
it tries to open - but otherwise doesn't change its behaviour. After printing
the pathname, we would like to just do `return open(path, flags);`. But that
wouldn't work, of course - it would recursively call our own `open()`.

How do we get the original `open(2)`? The trick is to use `dlsym(3)` with the
special `RTLD_NEXT` handle. This will find the next occurrence of the specified
function after the current library (that is, after our `LD_PRELOAD`ed hook).

    
    #define _GNU_SOURCE /* RTLD_NEXT is a GNU extension */
    #include <dlfcn.h>
    #include <stdio.h>

    int open(const char *pathname, int flags)
    {

Now we need to obtain a function pointer to the original
`open`:

    
        static int (*sys_open)(const char *, int) = NULL;
        if (sys_open == NULL) {
            sys_open = dlsym(RTLD_NEXT, "open");
        }

And then we can use it:

    
        printf("%s\n", pathname);
        return sys_open(pathname, flags);
    }

Compile the whole thing with:

    gcc -fPIC -shared -o print_open.so print_open.c

And use it as follows:

    LD_PRELOAD=`pwd`/print_open.so PROGRAM

