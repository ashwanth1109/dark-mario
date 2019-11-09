"use strict";

import rest from "./rest.png";
import run1 from "./run1.png";
import run2 from "./run2.png";
import run3 from "./run3.png";
import run4 from "./run4.png";
import run5 from "./run5.png";
import run6 from "./run6.png";
import run7 from "./run7.png";
import run8 from "./run8.png";
import jump from "./jump.png";

const loadMario = () => ({
  rest: loadImage(rest),
  run1: loadImage(run1),
  run2: loadImage(run2),
  run3: loadImage(run3),
  run4: loadImage(run4),
  run5: loadImage(run5),
  run6: loadImage(run6),
  run7: loadImage(run7),
  run8: loadImage(run8),
  jump: loadImage(jump)
});

export default loadMario;
