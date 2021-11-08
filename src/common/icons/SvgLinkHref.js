import * as React from "react";

function SvgLinkHref({ width = 24, height = 24, color = "#fff" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgLinkHref;
