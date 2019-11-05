if (module.hot) module.hot.accept(() => window.location.reload());

// Export the functions that are used by p5
export function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

export function draw() {}
