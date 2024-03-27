import * as React from "react";

const ProfileSvgComponent = ({ width, height, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M256 213.333c47.128 0 85.333-38.205 85.333-85.333S303.128 42.667 256 42.667 170.667 80.872 170.667 128s38.205 85.333 85.333 85.333Zm0-128c23.564 0 42.667 19.103 42.667 42.667S279.564 170.667 256 170.667 213.333 151.564 213.333 128 232.436 85.333 256 85.333ZM298.667 256h-85.334c-70.692 0-128 57.308-128 128v85.333h341.334V384c0-70.692-57.308-128-128-128ZM384 426.667H128V384c0-47.128 38.205-85.333 85.333-85.333h85.334C345.795 298.667 384 336.872 384 384v42.667Z"
      />
    </svg>
  );
};

export default ProfileSvgComponent;
