import * as React from "react";

const PrizeSvgComponent = ({ width, height, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={width} height={height} viewBox="0 0 512 512">
    <path
      fill={color}
      fillRule="evenodd"
      d="M384 85.333 469.333 192 256 480 42.667 192 128 85.333h256ZM305.23 208h-98.46L256 400l49.23-192Zm-134.86 0h-63.164l119.767 179.796L170.37 208Zm234.402 0h-63.143l-56.567 179.683L404.772 208Zm-193.216-80L148.48 128l-38.41 48h66.819l34.667-48Zm55.11 0h-21.333l-32 48h85.333l-32-48ZM363.5 128h-63.055l34.666 48h66.798l-38.41-48Z"
    />
  </svg>
);

export default PrizeSvgComponent;
