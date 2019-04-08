Stack stack = new Stack();
Turtle t;
int sx, sy;
int grid_sz = 12;
char[][] world;
int loop;

void setup() {
  size(800, 600);
  background(0);
  stroke(255);
  strokeWeight(1);
  smooth();

  t = new Turtle();
  t.pos = new PVector();
  t.rot = HALF_PI;
  sx = (width/2)/grid_sz;
  sy = height/grid_sz;
  world = new char[sx][sy];
}

void draw() {
  loop++;

  if (mousePressed && mouseX < width/2 && mouseX > 0 && mouseY > 0) {
    world[(mouseX / grid_sz) % sx][(mouseY / grid_sz) % sy] = rand_sym();
  }
  
  boolean sim_this_frame = (loop % 10 == 0);
  if (sim_this_frame) {
    // fade background
    fill(0, 32);
    rect(0, 0, width, height);
    fill(255);
  }
  
  String raw_source = "";
  for (int x = 0; x < sx; x++) {
    for (int y = 0; y < sy; y++) {
      // draw
      if (world[x][y] != '\0') {
        fill(0, 255, 0);
        text(world[x][y], x * grid_sz, y * grid_sz);
        fill(255);
        raw_source += world[x][y];
      }
      // simulation
      if (sim_this_frame) {
        int n = neighbors(x, y, world);
        if (n == 3)
          world[x][y] = rand_sym();
        if (n < 2 || n > 3) 
          world[x][y] = 0;
      }
    }
  }
  // draw fractal
  draw_src(balance(raw_source));
}

void draw_src(String s) {
  t.pos = new PVector((width/4) * 3, height/2); // reset position
  int c = s.length();
  for (int i = 0; i < c; i++) {
    switch (s.charAt(i)) {
    case 'F':
      float end_x = t.pos.x + cos(t.rot) * 3;
      float end_y = t.pos.y + sin(t.rot) * 3;
      line(t.pos.x, t.pos.y, end_x, end_y);
      redraw();
      t.pos.x = end_x;
      t.pos.y = end_y;
      break;
    case '-':
      t.rot -= radians(25);
      break;
    case '+':
      t.rot += radians(25);
      break;
    case '[':
      Turtle tmp = new Turtle();
      tmp.pos = t.pos.get();
      tmp.rot = t.rot;
      stack.push(tmp);
      break;
    case ']':
      t = (Turtle)stack.pop();
      break;
    }
  }
}

// utility routines

int neighbors(int x, int y, char[][] world) {
  if (x <= 0 || y <= 0 || x >= sx - 1 || y >= sy - 1)
    return 0;
  // the following is maybe my fault, maybe Java's - who knows
  int a = (world[(x + 1) % sx][y] == '\0')?0:1;
  int b = (world[x][(y + 1) % sy] == '\0')?0:1;
  int c = (world[(x - 1) % sx][y] == '\0')?0:1;
  int d = (world[x][(y - 1) % sy] == '\0')?0:1;
  int e = (world[(x + 1) % sx][(y + 1) % sy] == '\0')?0:1;
  int f = (world[(x - 1) % sx][(y + 1) % sy] == '\0')?0:1;
  int g = (world[(x - 1) % sx][(y - 1) % sy] == '\0')?0:1;
  int h = (world[(x + 1) % sx][(y - 1) % sy] == '\0')?0:1;
  return a+b+c+d+e+f+g+h;
}

String balance(String s) {
  int balance = 0;
  for (int i = 0; i < s.length(); i++) {
    if (s.charAt(i) == '[')
      balance++;
    else if (s.charAt(i) == ']')
      balance--;
   }
   for (int i = 0; i < balance; i++)
     s += ']';
   for (int i = balance; i < 0; i++)
     s += '[';
   return s;
}

char rand_sym() {
  String symbols = "F+-[]";
  return symbols.charAt((int)random(0, symbols.length() - 1));
}

class Turtle {
  PVector pos;
  float rot;
}

