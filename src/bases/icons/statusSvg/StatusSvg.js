import * as React from "react";

const StatusSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg
    fill="none"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={4} height={13} x={18} y={7} stroke={color} strokeLinejoin="round" strokeWidth={1.5} rx={1} />
    <rect width={4} height={7} x={10} y={13} stroke={color} strokeLinejoin="round" strokeWidth={1.5} rx={1} />
    <rect width={4} height={11} x={2} y={9} stroke={color} strokeLinejoin="round" strokeWidth={1.5} rx={1} />
  </svg>
);

export default StatusSvgComponent;
