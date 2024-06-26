import * as React from "react";

const QuoteSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -960 960 960">
    <path
      fill={color}
      d="M580-500h160v-160H580v160Zm-360 0h160v-160H220v160Zm406 220 80-160H520v-280h280v288l-76 152h-98Zm-360 0 80-160H160v-280h280v288l-76 152h-98Zm34-300Zm360 0Z"
    />
  </svg>
);

export default QuoteSvgComponent;
