import * as React from "react";

const RightSwipeSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg fill="none" width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 5 5.15 5a2.739 2.739 0 0 1 0 4L9 19"
    />
  </svg>
);

export default RightSwipeSvgComponent;
