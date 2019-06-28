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

public class dark_side extends PApplet {

int tx, ty, tw, omx, omy;

public void setup() {
  size(400, 400);
  background(0);
  smooth();
  tw = width/2;
  tx = width/2;
  ty = tw/2+10;
}

public void draw() {
  // bg fade
  pushStyle();
  fill(0, 64);
  rect(0, 0, width, height);
  popStyle();
  // move triangle
  if (mousePressed) {
    if (omx != 0 && omy != 0) {
      tx += mouseX-omx;
      ty += mouseY-omy;
    }
    omx = mouseX;
    omy = mouseY;
  } 
  else {
    omx = 0;
    omy = 0;
  }
  // draw
  PVector pos = new PVector(0, (height/5)*3);
  PVector vel = new PVector(1, -0.3f);
  draw_light(pos, vel, false, 255, 255, 255, 32);
  draw_tri();
}

public void draw_light(PVector pos, PVector vel, boolean was_in, int r, int b, int g, int a) {
  noStroke();
  fill(r, b, g, a);
  for (int i = 0; i < width; i++) {
    // drawing
    float sz = 6;
    ellipse(pos.x, pos.y, sz, sz);
    // state changes
    if (in_tri(pos) && !was_in) {
      // in triangle
      vel.y += 0.3f;
      for (int s = -2; s < 2; s++) {
        PVector n_pos = pos.get();
        PVector n_vel = vel.get();
        n_vel.y += (float)s/40.0f + random(0, 0.01f);
        draw_light(n_pos, n_vel, true, 255, 255, 255, 3);
      }
      return;
    }
    if (!in_tri(pos) && was_in) {
      // and out again - rainbow
      vel.y += 0.1f;
      for (int s = 8; s >= 0; s--) {
        PVector n_pos = pos.get();
        PVector n_vel = vel.get();
        n_vel.y += (float)s/40.0f + random(0, 0.01f);
        int nr = (int)(sin(0.4f*s + 0) * 127) + 128;
        int nb = (int)(sin(0.4f*s + 2) * 127) + 128;
        int ng = (int)(sin(0.4f*s + 4) * 127) + 128;
        draw_light(n_pos, n_vel, false, nr, nb, ng, 8);
      }
      return;
    }
    // position change
    pos.add(vel);
  }
}

public void draw_tri() {
  pushStyle();
  stroke(255, 64);
  strokeJoin(ROUND);
  noFill();
  for (int i = 0; i < 20; i++) {
    int r = (int)random(0, 5);
    strokeWeight(r);
    triangle(tx-tw/2, ty+tw, tx, ty, tx+tw/2, ty+tw);
  }
  popStyle();
}

public boolean in_tri(PVector p) {
  PVector a = new PVector(tx-tw/2, ty+tw);
  PVector b = new PVector(tx, ty);
  PVector c = new PVector(tx+tw/2, ty+tw);
  if (same_side(p, a, b, c) && same_side(p, b, a, c) && same_side(p, c, a, b))
    return true;
  else
    return false;
}

public boolean same_side(PVector p1, PVector p2, PVector a, PVector b) {
  b = PVector.sub(b, a);
  p1 = PVector.sub(p1, a);
  p2 = PVector.sub(p2, a);
  PVector cp1 = b.cross(p1);
  PVector cp2 = b.cross(p2);
  if ((cp1.dot(cp2)) >= 0)
    return true;
  else
    return false;
}

  static public void main(String args[]) {
    PApplet.main(new String[] { "--bgcolor=#DFDFDF", "dark_side" });
  }
}
