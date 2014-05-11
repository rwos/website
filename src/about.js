<canvas id="canvas" width="640" height="480" style="width:100%;top:0;left:0;position:absolute;z-index:-9999"></canvas>

<script>
var C = el("canvas")
var CTX = C.getContext("2d");
var H = C.height;
var W = C.width;


var MAX_ITERATIONS = 255;
var SUPER_SAMPLE = 1;
var STEP_SIZE = 5;
var POINTS_PER_RUN = H*W;

var ZOOM = 1;
var X_OFF = 0.74364386269;
var Y_OFF = 0.13182590271;

var RUNNING;

// UTILS

function el(e) { return document.getElementById(e); }
function rand(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}
function gradient(i, max) {
    i = Math.round(i * (255.0/max));
    i = Math.round(i * 0.3);
    return "rgb(0," + i + ",0)";
}
function clear() {
    CTX.fillStyle = "#ffffff";
    CTX.fillRect(0, 0, W, H);
}

var ASPECT = W / H;
var goal_aspect = 3.5 / 2;
function scale_x(x) {
    var scaled = (x / W) * 3.5 - 2.5 // in (-2.5, 1)
    return scaled * ZOOM * (ASPECT/goal_aspect) - X_OFF;
}
function scale_y(y) {
    var scaled = (y / H) * 2 - 1 // in (-1, 1)
    return scaled * ZOOM - Y_OFF;
}

var LAST_X = 0;
var LAST_Y = 0;
function next_point() {
    // point
    var y_supersample = SUPER_SAMPLE;
    var x_supersample = SUPER_SAMPLE;
    var sub_colors = []
    for (var iy = 0; iy < 1; iy += 1/y_supersample) {
        for (var ix = 0; ix < 1; ix += 1/x_supersample) {
            sub_colors.push(point_at(LAST_X+ix, LAST_Y+iy));
        }
    }
    // mean of supersamples
    var accu = 0;
    for (var i in sub_colors) {
        accu += sub_colors[i];
    }
    // next point
    var x = LAST_X;
    var y = LAST_Y;
    LAST_X += STEP_SIZE;
    if (LAST_X > W) {
        LAST_X = 0;
        LAST_Y += STEP_SIZE;
        if (LAST_Y > H)
            return false;
    }
    return [x, y, (accu/sub_colors.length)];
}

function point_at(x, y) {
    // scale
    var x_scaled = scale_x(x);
    var y_scaled = scale_y(y);
    // check range
    if (x_scaled < -2.5 || x_scaled > 1 || y_scaled < -1 || y_scaled > 1) {
        return false; // out of range (b/c of offset/zoom)
    }
    var mx = 0;
    var my = 0;
    var i  = 0;
    var xtemp;
    while ((mx*mx + my*my < 2*2) && (i < MAX_ITERATIONS)) {
        xtemp = mx*mx - my*my + x_scaled;
        my = 2*mx*my + y_scaled;
        mx = xtemp;
        i += 1;
    }
    return i;
}

function run() {
    var start = (new Date).getTime();
    for (var j = 0; j < POINTS_PER_RUN; j++) {
        var res = next_point();
        if (res) {
            CTX.fillStyle = gradient(res[2], MAX_ITERATIONS);
            CTX.fillRect(res[0], res[1], STEP_SIZE, STEP_SIZE);
        } else {
            // done rendering
            clearTimeout(RUNNING);
            return;
        }
    }
    var stop = (new Date).getTime();
    RUNNING = setTimeout(run, 1);
}

function re_run() {
    LAST_X = 0;
    LAST_Y = 0;
    ZOOM *= 0.99;
    clearTimeout(RUNNING);
    RUNNING = setTimeout(run, 1);
    setTimeout(re_run, 10);
}
re_run();

</script>

