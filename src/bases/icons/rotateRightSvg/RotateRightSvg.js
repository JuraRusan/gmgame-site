import * as React from "react";

const RotateRightSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={width} height={height} fill="none">
    <path
      fill={color}
      d="M12.5 11.8c.2.2.2.6 0 .9-1.1 1.1-2.8 1.8-4.5 1.8-3.7 0-6.5-2.8-6.5-6.5s3-6.5 6.5-6.5c1.7 0 3.3.7 4.5 1.8l1-1c.4-.4 1-.1 1 .4v3.8c0 .3-.3.6-.6.6h-3.7c-.5 0-.8-.7-.4-1L11 4.9c-.9-.9-1.9-1.3-3-1.3-3 0-5.4 3.1-4 6.2.7 1.6 2.3 2.6 4 2.6 1.2 0 2.2-.4 3-1.3.2-.2.6-.2.8 0l.7.7z"
    />
  </svg>
);

export default RotateRightSvgComponent;
