import processing.core.*; 
import processing.xml.*; 

import java.applet.*; 
import java.awt.Dimension; 
import java.awt.Frame; 
import java.awt.event.MouseEvent; 
import java.awt.event.KeyEvent; 
import java.awt.event.FocusEvent; 
import java.awt.Image; 
import java.io.*; 
import java.net.*; 
import java.text.*; 
import java.util.*; 
import java.util.zip.*; 
import java.util.regex.*; 

public class fractal_garden extends PApplet {

Stack stack = new Stack();
Turtle t;

public void setup() {
  size(800, 600);
  background(random(100, 200), random(100, 200), random(100, 200));
  stroke(0);
  strokeWeight(1);
  smooth();

  t = new Turtle();
  t.pos = new PVector(width/2, height/2);
  t.rot = HALF_PI;
}

public void draw() {
  ;
}

String src="X";
public void mousePressed() {
  print("applying rules... "); 
  src = src.replaceAll("F", "FF");
  src = src.replaceAll("X", "F-[[X]+X]+F[+FX]-X");
  print("done.\n");
  print("drawing... ");
  draw_src(src);
  print("done.\n");
}

public void draw_src(String s) {
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

  static public void main(String args[]) {
    PApplet.main(new String[] { "--bgcolor=#DFDFDF", "fractal_garden" });
  }
}
