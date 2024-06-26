import * as React from "react";

const CenterSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 16 16">
    <g fill={color}>
      <path d="M0 6.8h4.6v2.3H0zM11.4 6.8H16v2.3h-4.6zM8.1 10.1c-1.1 0-2.3-1-2.3-2.1s1-2.1 2.1-2.1S10 6.9 10 8c.2 1.1-.8 2.1-1.9 2.1zM6.8 0h2.3v4.6H6.8zM6.9 11.4h2.2V16H6.9z" />
    </g>
  </svg>
);

export default CenterSvgComponent;
