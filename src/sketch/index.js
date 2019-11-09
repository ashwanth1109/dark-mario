"use strict";

import drawEnvironment from "./environment";
import loadEnvironment from "./environment/load";
import loadMario from "./mario/load";
import setupCanvasAndInitialize from "./setup";
import initializeMario from "./setup/mario";
import drawMario from "./mario";

if (module.hot) module.hot.accept(() => window.location.reload());

let envLayers = {};
let envVariables = {};

let marioLayers = {};
let marioVariables = {};

// preload our environment layers
export function preload() {
  envLayers = loadEnvironment();
  marioLayers = loadMario();
}

// setup our canvas
export function setup() {
  envVariables = setupCanvasAndInitialize();
  marioVariables = initializeMario(marioLayers.rest);
}

// // draw method reference: https://p5js.org/reference/#/p5/draw
export function draw() {
  envVariables = drawEnvironment(envLayers, envVariables);
  marioVariables = drawMario(marioLayers, marioVariables);
}
