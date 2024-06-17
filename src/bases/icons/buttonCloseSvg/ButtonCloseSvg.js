import * as React from "react";

const ButtonCloseSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path stroke={color} strokeLinecap="round" strokeWidth={1.5} d="M17 7 7 17M7 7l10 10" />
  </svg>
);

export default ButtonCloseSvgComponent;
