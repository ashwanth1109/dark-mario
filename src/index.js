"use strict";

import "normalize.css";
import Sketch from "./sketch";

console.log("Hello Dark Mario");

if (module.hot) {
  module.hot.accept(() => {
    window.location.reload();
  });
}

new p5(Sketch);
