Stack stack = new Stack();
Turtle t;

void setup() {
  size(800, 600);
  background(random(100, 200), random(100, 200), random(100, 200));
  stroke(0);
  strokeWeight(1);
  smooth();

  t = new Turtle();
  t.pos = new PVector(width/2, height/2);
  t.rot = HALF_PI;
}

void draw() {
  ;
}

String src="X";
void mousePressed() {
  print("applying rules... "); 
  src = src.replaceAll("F", "FF");
  src = src.replaceAll("X", "F-[[X]+X]+F[+FX]-X");
  print("done.\n");
  print("drawing... ");
  draw_src(src);
  print("done.\n");
}

void draw_src(String s) {
  int c = s.length();
  int step = c / 100;
  int progress = 1;
  for (int i = 0; i < c; i++) {
    if (i > progress*step)
      print(progress+++" "); // behold: the triple plus operator
    switch (s.charAt(i)) {
    case 'F':
      float end_x = t.pos.x + cos(t.rot);
      float end_y = t.pos.y + sin(t.rot);
      line(t.pos.x, t.pos.y, end_x, end_y);
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

class Turtle {
  PVector pos;
  float rot;
}

