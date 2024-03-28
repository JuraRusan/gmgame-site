import * as React from "react";

const ImageSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512">
    <path
      fill={color}
      fillRule="evenodd"
      d="M64 448V64h384v384H64Zm109.227-198.4-66.561 106.948v48.785h298.667v-33.92l-64-64-65.493 65.494L173.227 249.6Zm232.106-142.934H106.666v169.211l61.44-98.81 110.72 132.693 62.507-62.507 64 64V106.666Zm-96 42.667c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32Z"
    />
  </svg>
);

export default ImageSvgComponent;
