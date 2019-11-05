"use strict";

const Sketch = p => {
  let bg = 200;
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
  };
  p.draw = () => {
    p.background(bg);
  };
};

export default Sketch;
