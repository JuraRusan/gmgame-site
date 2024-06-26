import * as React from "react";

const HoverMeSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    fill={color}
    color={color}
    viewBox="0 0 1500 1500"
  >
    <image
      data-name="\u0421\u043B\u043E\u0439 0"
      x={399}
      y={678}
      width={537}
      height={332}
      fill={color}
      xlinkHref="data:img/png;base64,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"
    />
    <text
      data-name="hover me..."
      transform="rotate(27 -966.294 2733.922) scale(1.28)"
      fill={color}
      style={{
        fontSize: 72,
        textAnchor: "end",
        color: "#f4f4f4",
        fontFamily: "&quot",
      }}
    >
      <tspan x={0}>{"hover me..."}</tspan>
    </text>
  </svg>
);

export default HoverMeSvgComponent;
