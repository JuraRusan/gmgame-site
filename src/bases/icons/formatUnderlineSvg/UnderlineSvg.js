import * as React from "react";

const UnderlineSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -960 960 960">
    <path
      fill={color}
      d="M200-140v-60h560v60H200Zm280-140q-100 0-156.5-58.5T267-497v-343h83v343q0 63 34 101t96 38q62 0 96-38t34-101v-343h83v343q0 100-56.5 158.5T480-280Z"
    />
  </svg>
);

export default UnderlineSvgComponent;
