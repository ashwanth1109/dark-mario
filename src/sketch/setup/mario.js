"use strict";

const initializeMario = rest => ({
  marioX: 100,
  marioY: 0.85 * height - 70,
  isJumping: false,
  goingUp: true,
  renderIndex: 0,
  jumpingFrom: 0.85 * height - 70,
  mario: rest
});

export default initializeMario;
