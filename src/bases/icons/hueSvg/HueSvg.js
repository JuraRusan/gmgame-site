import * as React from "react";

const HueSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
    <path
      fill={color}
      d="M12 19.6c-4.2 0-7.6-3.4-7.6-7.6S7.8 4.4 12 4.4s7.6 3.4 7.6 7.6-3.4 7.6-7.6 7.6zm0-13.7c-3.3 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.8-6.1-6.1-6.1z"
    />
    <path
      fill={color}
      d="M12 15.3c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zm0-5.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8z"
    />
  </svg>
);

export default HueSvgComponent;
