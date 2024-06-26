import * as React from "react";

const HeartSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg viewBox="0 0 24 24" width={width} height={height} xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={color}
      d="M12 21a1.5 1.5 0 0 1-.844-.261c-3.684-2.5-5.28-4.216-6.16-5.288-1.874-2.285-2.772-4.63-2.746-7.171C2.28 5.368 4.615 3 7.456 3c2.067 0 3.498 1.164 4.331 2.133a.28.28 0 0 0 .425 0C13.045 4.163 14.476 3 16.542 3c2.842 0 5.178 2.368 5.207 5.28.026 2.541-.873 4.887-2.747 7.172-.88 1.072-2.475 2.787-6.159 5.287A1.5 1.5 0 0 1 12 21Z"
    />
  </svg>
);

export default HeartSvgComponent;
