"use strict";

const drawMario = (
  { rest, run1, run2, run3, run4, run5, run6, run7, run8, jump },
  marioVariables
) => {
  let {
    marioX,
    marioY,
    renderIndex,
    isJumping,
    goingUp,
    jumpingFrom,
    mario
  } = marioVariables;

  const run = [run1, run2, run3, run4, run5, run6, run7, run8];
  const frameRate = 5;
  const jumpHeight = 100;
  const jumpSpeed = 4;

  if (!isJumping && keyIsDown(UP_ARROW)) {
    mario = jump;
    jumpingFrom = marioY;
    isJumping = true;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    if (!isJumping) {
      renderIndex =
        renderIndex !== run.length * frameRate - 1 ? renderIndex + 1 : 0;
      mario = run[Math.floor(renderIndex / frameRate)];
    } else {
      renderIndex = 0;
      mario = jump;
    }
  } else {
    renderIndex = 0;
    mario = rest;
  }

  if (isJumping) {
    mario = jump;
    if (goingUp && marioY > jumpingFrom - jumpHeight) marioY -= jumpSpeed;
    else if (goingUp && marioY <= jumpingFrom - jumpHeight) goingUp = false;
    else if (marioY !== jumpingFrom) marioY += jumpSpeed;
    else {
      goingUp = true;
      isJumping = false;
    }
  }

  image(mario, marioX, marioY, 60, 80);

  return {
    marioX,
    marioY,
    renderIndex,
    isJumping,
    goingUp,
    jumpingFrom,
    mario
  };
};

export default drawMario;
