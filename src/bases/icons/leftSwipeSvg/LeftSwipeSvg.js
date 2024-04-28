import * as React from "react";

const LeftSwipeSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg fill="none" width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15 19-5.16-5a2.75 2.75 0 0 1 0-4L15 5"
    />
  </svg>
);

export default LeftSwipeSvgComponent;
