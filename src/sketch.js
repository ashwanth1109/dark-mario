"use strict";

import bgImg from "./sky.png";

if (module.hot) module.hot.accept(() => window.location.reload());

let bgLayer1;
export function preload() {
  bgLayer1 = loadImage(bgImg);
}

// Export the functions that are used by p5
export function setup() {
  createCanvas(windowWidth, windowHeight);
}

export function draw() {
  image(bgLayer1, 0, 0);
}
