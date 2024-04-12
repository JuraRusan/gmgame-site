import * as React from "react";

const CropSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
    <path
      fill={color}
      d="M18.2 15.2h-1.5V7.3H8.8V5.8c0-.4-.3-.8-.8-.8s-.7.4-.7.8v1.5H5.8c-.4 0-.8.3-.8.8s.3.8.8.8h1.5v7.8h7.8v1.5c0 .4.3.8.8.8s.8-.3.8-.8v-1.5h1.5c.4 0 .8-.3.8-.8s-.4-.7-.8-.7zM8.8 8.8h6.3v6.3H8.8V8.8z"
    />
  </svg>
);

export default CropSvgComponent;
