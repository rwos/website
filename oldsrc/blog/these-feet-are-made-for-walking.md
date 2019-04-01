These feet are made for walking
2012-05-07

I just finished a part of <strike>the terrain-generator</strike>
...well, let's call it "the OpenGL project"
that generates some three-dimensional primitives.

I think the internal API is quite nice - though, admittedly I may be
a bit biased... :-)

If one wanted a sphere (there is no choice, really - spheres are the
only primitives implemented for now) at some point (1,2,3) in space,
it's:

    (at 1 2 3
        (sphere))

That sphere has a radius of one unit - a sphere with half of that
size would be:

    (at 1 2 3
      (scaled 0.5
        (sphere)))

Two spheres with that 0.5 unit radius could be written as:

    (scaled 0.5
      (at 1 2 3 (sphere))
      (at 4 5 6 (sphere)))

and so on. Quite simple. These functions return lists (well, actually
trees) and those lists can then be passed to a render function.

I'm quite happy with that part of the code looking clean and nice again
- the mindless hacking and testing of the past two weeks began to take
its toll.

Screenshot number one (two spheres, obviously):

<img src="http://r-wos.org/media/game-3-1.png" style="width:90%">

And screenshot number two:

<img src="http://r-wos.org/media/game-3-2.png" style="width:90%">

The feet are only made of scaled and rotated spheres (per-axis scaling,
obviously). Once I had one foot defined, the whole high-level rendering code
looked like this:

    (render
      (at  1 0 -5 foot)
      (at -1 0 -5 (mirrored/x foot)))

Which, I think, looks quite elegant - and the outcome is better than I
thought. I just want to avoid doing manual 3D mesh modeling.

You might have also noticed some diffuse light - I switched the standard
OpenGL lighting on now. Better lighting and materials are the next point on
the TODO list.

