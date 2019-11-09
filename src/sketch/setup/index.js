"use strict";

import initialize from "./initialize";

const setupCanvasAndInitialize = () => {
  createCanvas(windowWidth, windowHeight);
  return initialize();
};

export default setupCanvasAndInitialize;
