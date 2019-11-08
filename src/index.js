"use strict";

import p5 from "p5";
import "normalize.css";

import * as sketch from "./sketch";

p5.disableFriendlyErrors = true;

for (let opt in sketch) {
  window[opt] = sketch[opt];
}

new p5();
