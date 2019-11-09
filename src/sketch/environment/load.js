"use strict";

import sky from "./sky.png";
import ground from "./ground.png";

const loadEnvironment = () => {
  return {
    sky: loadImage(sky),
    ground: loadImage(ground)
  };
};

export default loadEnvironment;
