"use strict";

import bgImg from "./sky.png";

if (module.hot) module.hot.accept(() => window.location.reload());

// Declare variables for pre loading environment layers
let bgLayer1;

// x1 is the x position of image 1 | x2 for duplicate of image 1
let x1 = 0;
let x2;

// scroll speed refers to the step size by which the image
// shifts on each re-draw
let scrollSpeed = 2;

// Export for all the functions that are used by p5
// TODO: As this file grows, we can move out the functions to its
// individual files

// preload our environment layers
export function preload() {
  bgLayer1 = loadImage(bgImg);
}

// setup our canvas
export function setup() {
  createCanvas(windowWidth, windowHeight);
  x2 = width;
}

// draw method reference: https://p5js.org/reference/#/p5/draw
export function draw() {
  // render our images in the respective positions
  image(bgLayer1, x1, 0, width, height); // initially on screen
  image(bgLayer1, x2, 0, width, height); // initially outside screen to the right

  // scroll both image and duplicate with each call of the draw function
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  // if one image goes out the canvas on the extreme left,
  // swap it back to the right extreme to recycle the image
  if (x1 < -width) x1 = width;
  if (x2 < -width) x2 = width;
}
