Well, that didn't work out so well
2012-07-18

Today I learned: "Balls bouncing around in a cube" is not a good
paradigm to build a programming language on.

Let me explain.

<a href="http://blog.r-wos.org/2011/artificial-stupidity">
Some time ago</a>, I tried to dive into genetic programming. Back then,
I used Brainfuck as the underlying programming language - mainly because
it's very easy to generate Brainfuck code. Needless to say, that didn't
work out too well. Evolving programs for things that are trivial in
Brainfuck to do (like "read one byte, add one, and print it")
worked well. Evolving programs for more complicated tasks did not.

I think one problem was that there was no way to connect the effects of
the program to (parts of) its source code. One could take a Brainfuck
program that doesn't do anything useful, add one byte, and suddenly it
prints the lyrics of "99 Bottles of Beer on the Wall". The thing is,
you don't know that you are on the right track. There's no easy to
detect feature that would allow one to differentiate between a program that
does task X if one adds that one instruction there, and a program that is
just complete garbage.

So, what I wanted was a programming language that would allow me to see
if a program was on the right track - one that would basically point out
in what direction to change the source code. So that, for example, if I
wanted it to print "9", but it printed "0", I would know that I'll have
to go "higher", in a way. And then, if I ran it again, it may print "5" or
so - you get the idea.

It's not a very thought-out idea. What means "higher"? And what about other
changes - "more", "fewer", "go on longer", "except in that case", "stop
earlier", ...? Well, I don't know. And since this is a leisure-time activity,
I can react to not-knowing with "mindless hacking"! :-)

So, mindlessly I hacked. One idea that I had was "why not make the language like
throwing a ball"? Let's say we're throwing a ball in the real world, trying
to hit some target. We might throw it too far or not far enough, but we can
always see which one of those it was - and thus, we know what to change in
the next throw (well, at least the general direction).

With that in mind, I made a small interpreter that simulates balls inside a
hollow cube, with very *very* basic physics. The bottom of the cube was the
runtime memory -just a grid of byte-cells. Balls hitting a cell would
increase the number stored at that memory location. The right face of the
cube served as an output-trigger. Hitting the right face at its top-left
corner, for example, would print the byte that was currently stored in the
top-left memory cell.

That was the run-time operation - the actual program was just a list of
balls, specifying the starting positions and the direction of travel.
So, it's very simple. And I'm pretty sure it's not turing-complete.

But it is *really* really hard to program such a system. I added a "weight"
attribute to the balls, so that balls "weighting" 42 for example would
increase the contents of the memory cells by that number - but it didn't
really help.

I wanted a language that indicates to me how far I'm away from the solution
to a given problem. The specific problems of my "balls in a cube" model aside,
I've come to the preliminary conclusion that that is a) probably the wrong
thing to search for and b) probably impossible to do for the general case.

I have no shiny new insight. All I can say is that just playing
around with an idea that one knows nothing about is a whole lot of fun sometimes. I could just buy a book on genetic programming.

How boring that would be!

PS: Here it is - in case you like playing with failed ideas...

<textarea id="input" style="width:100%" rows="10">
[6] -- this sets the size
[45|1,1,3|+++] -- the first ball - [weight|start-pos|velocity]
[69|2,4,4|+-+]
[39|3,5,4|---]
[17|4,4,5|+-+]
[17|2,3,4|+--]
[13|5,2,3|+++]
[34|3,3,3|-++]
[45|4,3,2|+-+]
[15|3,1,5|-++]
[36|2,2,3|++-]
[22|4,4,2|+-+]
[39|3,4,3|-++]
[25|3,2,2|+-+]
</textarea>
<br>
<input type="button" value="run" onclick="run()">
<input type="button" value="stop" onclick="stop()">
<hr>
<canvas id="top_view" width="160" height="160"></canvas>
<canvas id="top_view_memory" width="160" height="160"></canvas>
top view - MEMORY
<br>
<canvas id="front_view" width="160" height="160"></canvas>
<canvas id="output_view" width="160" height="160"></canvas>
front view - right (OUTPUT) view
<hr>
Output<br>
<b><big id="output"></big></b>
<script>
    function el(id) {return document.getElementById(id);}
    var top_view = el('top_view');
    var top_view_memory = el('top_view_memory');
    var front_view = el('front_view');
    var output_view = el('output_view');
    var GAME_INTERVAL;

    function parse(src) {

        var size = 32;
        var balls = [];

        var statements = src.split(/[\[\]]/);
        for (var i = 0; i < statements.length; i++) {
            var stmt = statements[i];
            if (stmt.length < 1)
                continue;
            var parts = stmt.split('|');
            var tmp;
            switch (parts.length) {
            case 1: // size statement
                tmp = parseInt(parts[0]);
                if (! isNaN(tmp))
                    size = parseInt(parts[0]);
                break;
            case 3: // ball with infinite time-to-live
            case 4: // ball with non-infinite time-to-live
                tmp = parse_ball(parts);
                if (tmp)
                    balls.push(tmp);
                break;
            }
        }
        return {'size': size,
                'balls': balls};
    }

    function parse_ball(parts) {
        var weigth;
        var position = [];
        var velocity = [];
        var ttl;
        // weight
        weight = parseInt(parts[0]);
        if (isNaN(weight))
            return false;
        // position
        position_parts = parts[1].split(',');
        if (position_parts.length != 3)
            return false;
        for (var i = 0; i < 3; i++) {
            position[i] = parseInt(position_parts[i]);
            if (isNaN(position[i]))
                return false;
        }
        // velocity
        velocity_parts = parts[2];
        if (velocity_parts.length != 3)
            return false;
        for (var i = 0; i < 3; i++) {
            switch (velocity_parts[i]) {
            case '+': velocity[i] = 1;  break;
            case '-': velocity[i] = -1; break;
            case '0': velocity[i] = 0;  break;
            default: return false;
            }
        }
        // time to live
        if (parts.length == 4) {
            ttl = parseInt(parts[3]);
            if (isNaN(ttl))
                return false;
        } else {
            ttl = Infinity;
        }
        return {'weight':   weight,
                'position': position,
                'velocity': velocity,
                'ttl':      ttl};
    }

    var SIZE = 32;
    var balls = [];
    var memory = [];

    function run() {

        var src = el('input').value;
        var prog = parse(src);
        SIZE = prog.size;
        balls = prog.balls;

        // init memory
        for (var i = 0; i < SIZE*SIZE; i++) {
            memory[i] = 0;
        }
        // game loop
        GAME_INTERVAL = setInterval(function() {
            // ball "physics"
            for (var i in balls) {
                advance_ball(balls[i]);
                ball_hit_test(balls[i]);
                // TODO: ball-ball hit test (??)
                // (balls "occupy" the subcube, others can check that)
            }
            // draw
            draw_memory(memory);
            clear_views();
            for (var i in balls) {
                draw_ball(balls[i]);
            }
        }, 1);
    }

    function stop() {
        clearInterval(GAME_INTERVAL);
        el('output').innerHTML = '';
        clear_views();
        // clear memory
        for (var i = 0; i < SIZE*SIZE; i++) {
            memory[i] = 0;
        }
        draw_memory(memory);
    }


    function advance_ball(b) {
        b.position[0] += b.velocity[0];
        b.position[1] += b.velocity[1];
        b.position[2] += b.velocity[2];
    }

    function ball_hit_test(b) {
        // x walls
        if (b.position[0] == 0) {
            // bottom face - MEMORY
            b.velocity[0] *= -1;
            var mem_x = b.position[1];
            var mem_y = b.position[2];
            var mem_off = mem_y*SIZE + mem_x;
            memory[mem_off] += b.weight;
            // XXX ADD TO SPEC  - max ball weight 255 - min -255
            if (memory[mem_off] > 255) memory[mem_off] -= 255;
            if (memory[mem_off] < 0)   memory[mem_off] += 255;
        }
        if (b.position[0] == SIZE-1) {
            // top face - nothing
            b.velocity[0] *= -1;
        }

        // y walls
        if (b.position[1] == 0) {
            // left face - INPUT
            b.velocity[1] *= -1;
            // XXX TODO
        }
        if (b.position[1] == SIZE-1) {
            // right face - OUTPUT
            b.velocity[1] *= -1;
            var out_x = b.position[2];
            var out_y = b.position[0];
            var mem_off = out_y*SIZE + out_x;
            output(memory[mem_off]);
        }

        // z walls
        if (b.position[2] == 0) {
            // back face - nothing
            b.velocity[2] *= -1;
        }
        if (b.position[2] == SIZE-1) {
            // front face - nothing
            b.velocity[2] *= -1;
        }
    }

    function output(ch) {
        el('output').innerHTML += String.fromCharCode(ch);
    }

    function draw_memory(memory) {
        for (var x = 0; x < SIZE; x++) {
            for (var y = 0; y < SIZE; y++) {
                var color = rgb(memory[y*SIZE + x], 0, 0);
                fill_subcube(top_view, x, y, color);
                fill_subcube(top_view_memory, x, y, color);
            }
        }
    }

    function clear_views() {
        views = [
            el('top_view'),
            el('front_view'),
            el('output_view')
        ];
        for (i in views) {
            var context = views[i].getContext('2d');
            context.fillStyle = "#000";
            context.fillRect(0, 0, views[i].width, views[i].height);
        }
    }

    function draw_ball(b) {

        var color = rgb(0, (SIZE/255)*b.position[0]*255, 0);
        fill_subcube(top_view, b.position[1],
                               b.position[2],
                               color);

        color = rgb(0, (SIZE/255)*b.position[2]*255, 0);
        fill_subcube(front_view, b.position[1],
                                 b.position[0],
                                 color);

        color = rgb(0, (SIZE/255)*b.position[1]*255, 0);
        fill_subcube(output_view, b.position[2],
                                  b.position[0],
                                  color);
    }

    function rgb(r, g, b) {
        return '#' + byte_hex(r) + byte_hex(g) + byte_hex(b);
    }

    function byte_hex(x) {
        x = Math.round(x);
        if (x < 0) x = 0;
        if (x > 255) x = 255;
        var hex = x.toString(16);
        if (hex.length < 2) hex = '0' + hex;
        return hex;
    }

    function fill_subcube(canvas, x, y, color) {
        var context = canvas.getContext('2d');
        var step = canvas.width / SIZE;
        context.fillStyle = color;
        var startx = x * step;
        var starty = y * step;
        context.fillRect(startx, starty, step, step);
    }
</script>