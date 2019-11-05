"use strict";

import "normalize.css";
console.log("Hello Dark Mario");

const Sketch = p => {
  let gray = 0;
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
  };
  p.draw = () => {
    p.background(gray);
  };
};

new p5(Sketch);
