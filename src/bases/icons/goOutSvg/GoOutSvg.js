import * as React from "react";

const GoOutSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20a8 8 0 1 1 0-16" />
    <path stroke={color} strokeLinecap="round" strokeWidth={1.5} d="M10 12h10m0 0-3-3m3 3-3 3" />
  </svg>
);

export default GoOutSvgComponent;
