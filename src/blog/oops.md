OOPs
2012-04-10

I'm a bit disappointed by Common Lisp. I don't know what I expected, but
it's not quite the language I would like it to be.

It's not that CL's a bad language - it's just so... ugly, really.
For a Lisp at least. And a bit unfriendly, too. To beginners like me
at least.

An example:

The C-way of initializing a window using the OpenGL GLUT library (a
simple windowing framework) is something like that:

    glutInit(&argc, argv);
    glutInitWindowSize(600, 480);
    glutCreateWindow("window title");

Imperative programming in it's purest form. There's always some invisible
global state getting manipulated. That's also the case for programming in
OpenGL in general. It sure is a bit ugly, and basically un-testable.
A lisp should be able to come up with something better, right?

That's what it looks like in Common Lisp:

    (glut:init)
    (glut:init-window-size 600 480)
    (glut:create-window "window title)

So, that's obviously a very low-level binding, which would be fine -
if it wasn't a bit *too* low-level.

Almost everything in GLUT works via callbacks. To register a callback in C,
one would just pass a function pointer to the particular GLUT-function:

    void render(void)
    {
        [...]
    }

    int main(int argc, char** argv)
    {
        [...]
        glutRenderFunc(render);
        [...]
    }

Fair enough. In Common Lisp, a language which - unlike C - does have
first-class functions, I can't get that to work. The CL-GLUT bindings also
want a function pointer - like, a *C* function pointer.

    ; doesn't work
    (glut-render-func (lambda () ( [...] )))

    ; doesn't work
    (defun render ()
      ( [...] ))
    (glut-render-func #'render)

As I said, I'm new to CL - so maybe I'm doing something horribly wrong.
I'm pretty sure I'm not, however. Because there *is* a higher level
interface to GLUT: a class. Which is not Java-style bad, because CL has
a much better object system - but it isn't exactly what I dreamed of, either.

Especially so since the CLOS (Common Lisp Object System) is, like CL in
general, quite verbose:

    ; sub-class glut:window
    (defclass main-window (glut:window)
      ()
      (:default-initargs :width 600 :height 480 :title "window title"
                         :mode '(:single :rgb :depth)))

    ; run before glut:display
    (defmethod glut:display-window :before ((window main-window))
      (gl:clear-color 0 0 0 0))

    ; yay, rendering, at last!
    (defmethod glut:display ((window main-window))
        (gl:load-identity)
        [...]
        (gl:flush))

Again, it's not *bad* - in fact, the CLOS is probably one of the coolest
object systems around. Where else do you have things like `:before`
(defining things to run before some method runs) or true multi-dispatched
methods?

It just looks so... well, ugly.
