"use strict";

import scroll from "./scroll";

const drawEnvironment = (
  { sky, ground },
  { skyX1, skyX2, groundX1, groundX2 }
) => {
  // draw the sky
  let skyScrollSpeed = 2;
  image(sky, skyX1, 0, width, height); // initially on screen
  image(sky, skyX2, 0, width, height); // initially outside screen to the right
  skyX1 = scroll(skyX1, skyScrollSpeed);
  skyX2 = scroll(skyX2, skyScrollSpeed);

  // draw the ground
  let groundScrollSpeed = 3;
  image(ground, groundX1, 0.85 * height, width, 0.15 * height);
  image(ground, groundX2, 0.85 * height, width, 0.15 * height);
  // scroll the ground on key RIGHT ARROW
  if (keyIsDown(RIGHT_ARROW)) {
    groundX1 = scroll(groundX1, groundScrollSpeed);
    groundX2 = scroll(groundX2, groundScrollSpeed);
  }

  return {
    skyX1,
    skyX2,
    groundX1,
    groundX2
  };
};

export default drawEnvironment;
