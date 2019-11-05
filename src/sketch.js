"use strict";

import bgImg from "./sky.png";

if (module.hot) module.hot.accept(() => window.location.reload());

let bgLayer1;
let x1 = 0;
let x2;

let scrollSpeed = 2;

export function preload() {
  bgLayer1 = loadImage(bgImg);
}

// Export the functions that are used by p5
export function setup() {
  createCanvas(windowWidth, windowHeight);
  x2 = width;
}

export function draw() {
  image(bgLayer1, x1, 0, width, height);
  image(bgLayer1, x2, 0, width, height);

  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  if (x1 < -width) x1 = width;
  if (x2 < -width) x2 = width;
}
