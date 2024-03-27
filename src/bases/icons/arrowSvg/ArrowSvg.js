import * as React from "react";

const ArrowSvgComponent = ({ width, height, color }) => (
  <svg viewBox="0 0 50 50" width={width} height={height} xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" d="M0 0h50v50H0z" />
    <path
      d="M34.397 29 20 48 5.604 29H15C15 0 44 1 44 1S25 2.373 25 29h9.397z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </svg>
);

export default ArrowSvgComponent;
