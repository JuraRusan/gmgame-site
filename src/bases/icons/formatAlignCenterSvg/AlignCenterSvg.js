import * as React from "react";

const AlignCenterSvgComponent = ({ width, height, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -960 960 960">
    <path
      fill={color}
      d="M120-120v-60h720v60H120Zm164-165v-60h393v60H284ZM120-450v-60h720v60H120Zm164-165v-60h393v60H284ZM120-780v-60h720v60H120Z"
    />
  </svg>
);
export default AlignCenterSvgComponent;
