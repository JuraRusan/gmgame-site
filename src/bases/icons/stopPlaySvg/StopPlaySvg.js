import * as React from "react";

const StopPlaySvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg
    fill="none"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={12} cy={12} r={10} stroke={color} strokeWidth={1.5} opacity={0.5} />
    <path
      stroke={color}
      strokeWidth={1.5}
      d="M8 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 8 9.034 8 9.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 16 9.966 16 9.5 16s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 15.199 8 14.966 8 14.5v-5ZM13 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 8 14.034 8 14.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 15.199 13 14.966 13 14.5v-5Z"
    />
  </svg>
);

export default StopPlaySvgComponent;
