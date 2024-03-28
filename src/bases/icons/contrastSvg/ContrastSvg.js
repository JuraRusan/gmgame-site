import * as React from "react";

const ContrastSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
    <path
      fill={color}
      d="M12 4.4c-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6 7.6-3.4 7.6-7.6-3.4-7.6-7.6-7.6zM5.9 12c0-3.3 2.7-6.1 6.1-6.1V18c-3.3.1-6.1-2.7-6.1-6z"
    />
  </svg>
);

export default ContrastSvgComponent;
