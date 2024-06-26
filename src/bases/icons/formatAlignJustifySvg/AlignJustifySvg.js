import * as React from "react";

const AlignJustifySvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -960 960 960">
    <path
      fill={color}
      d="M120-120v-60h720v60H120Zm0-165v-60h720v60H120Zm0-165v-60h720v60H120Zm0-165v-60h720v60H120Zm0-165v-60h720v60H120Z"
    />
  </svg>
);

export default AlignJustifySvgComponent;
