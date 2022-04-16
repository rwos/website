int sx, sy;
int[][] black_world, white_world;
int loop = 0;
int lastMouseX = 0;
int lastMouseY = 0;

void setup() { 
  size(640, 480);
  background(255);
  strokeWeight(2);
  fill(100);
  text("Canvas Game Of Life - 2010 - <richard@r-wos.org>", 10, height - 10);
  sx = width/10;
  sy = height/10;
  black_world = new int[sx][sy];
  white_world = new int[sx][sy];
}

void draw() {
  stroke(30, 128);
  sim(black_world, LEFT);
  stroke(230, 128);
  sim(white_world, RIGHT);
}

void sim(int[][] world, int button) {
  // create
  if (mousePressed && mouseButton == button && mouseX > 0 && mouseY > 0) {
    if (lastMouseX != 0 && lastMouseY != 0) {
      for (int i = 0; i < 5; i++) {
        line(lastMouseX + random(-5, 5), lastMouseY + random(-5, 5), 
        mouseX + random(-5, 5), mouseY + random(-5, 5));
      }
      if ((int)random(0, 1) == 0)
        world[(lastMouseX / 10) % sx][(lastMouseY / 10) % sy] = 1;
    }
    lastMouseX = mouseX;
    lastMouseY = mouseY;
  }
  if (! mousePressed) {
    lastMouseX = 0;
    lastMouseY = 0;
  }
  // draw
  for (int x = 0; x < sx; x++) {
    for (int y = 0; y < sy; y++) {
      if (world[x][y] == 1) {
        line(
        x * 10  + random(-5, 5), y* 10  + random(-5, 5), 
        x * 10  + random(-5, 5), y * 10  + random(-5, 5));
      }
    }
  }
  if (++loop % 5 != 0)
    return;
  // live and let die
  for (int x = 0; x < sx; x++) {
    for (int y = 0; y < sy; y++) {
      int n = neighbors(x, y, world);
      if (n == 3)
        world[x][y] = 1;
      if (n < 2 || n > 3) 
        world[x][y] = 0;
    }
  }
}

int neighbors(int x, int y, int[][] world) {
  if (x <= 0 || y <= 0 || x >= sx - 1 || y >= sy - 1)
    return 0;
  return world[(x + 1) % sx][y] +
    world[x][(y + 1) % sy] +
    world[(x - 1) % sx][y] +
    world[x][(y - 1) % sy] +
    world[(x + 1) % sx][(y + 1) % sy] +
    world[(x - 1) % sx][(y + 1) % sy] +
    world[(x - 1) % sx][(y - 1) % sy] +
    world[(x + 1) % sx][(y - 1) % sy];
}

