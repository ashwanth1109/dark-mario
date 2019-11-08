"use strict";

import bgImg from "./sky.png";
import ground from "./ground.png";
import base from "./base.png";
import bg4 from "./3.png";
import normal from "./normal.png";

if (module.hot) module.hot.accept(() => window.location.reload());

// Declare variables for pre loading environment layers
let bgLayer1;
let bgLayer2;
let bgLayer3;
let bgLayer4;
let normalLayer;

// x1 is the x position of image 1 | x2 for duplicate of image 1
let x1 = 0;
let x2;
let y1 = 0;
let y2;
let mx = 100;
let my;
let isJumping = false;
let goingUp = true;

// scroll speed refers to the step size by which the image
// shifts on each re-draw
let scrollSpeed = 2;

// Export for all the functions that are used by p5
// TODO: As this file grows, we can move out the functions to its
// individual files

// preload our environment layers
export function preload() {
  bgLayer1 = loadImage(bgImg);
  bgLayer2 = loadImage(ground);
  bgLayer3 = loadImage(base);
  bgLayer4 = loadImage(bg4);
  normalLayer = loadImage(normal);
}

// setup our canvas
export function setup() {
  createCanvas(windowWidth, windowHeight);
  x2 = width;
  y2 = width;
  my = height - 138;
}

// draw method reference: https://p5js.org/reference/#/p5/draw
export function draw() {
  if (keyIsDown(RIGHT_ARROW)) {
    mx += 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    mx -= 3;
  }
  if (!isJumping && keyIsDown(UP_ARROW)) {
    isJumping = true;
  }
  if (isJumping) {
    if (goingUp && my > 470) my = my - 3;
    else if (goingUp && my <= 470) goingUp = false;
    else if (my < height - 138) my = my + 3;
    else {
      goingUp = true;
      isJumping = false;
    }
  }

  console.log("DRAW");
  // render our images in the respective positions
  image(bgLayer1, x1, 0, width, height); // initially on screen
  image(bgLayer1, x2, 0, width, height); // initially outside screen to the right
  image(bgLayer2, 0, 0, width, height);
  image(normalLayer, mx, my, 40, 80);

  // // scroll both image and duplicate with each call of the draw function
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  y1 -= scrollSpeed * 2;
  y2 -= scrollSpeed * 2;

  // // if one image goes out the canvas on the extreme left,
  // // swap it back to the right extreme to recycle the image
  if (x1 < -width + scrollSpeed) x1 = width;
  if (x2 < -width + scrollSpeed) x2 = width;

  if (y1 < -width + scrollSpeed * 2) y1 = width;
  if (y2 < -width + scrollSpeed * 2) y2 = width;
}
