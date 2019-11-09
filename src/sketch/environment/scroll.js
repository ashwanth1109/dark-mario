"use strict";

const scroll = (coordinate, speed) =>
  coordinate < -width + speed + 1 ? width : coordinate - speed;

export default scroll;
