import * as React from "react";

const BinSvgComponent = ({ width, height, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.25 6.75-1.344 12.925A1.5 1.5 0 0 1 17.416 21H6.584a1.5 1.5 0 0 1-1.49-1.325L3.75 6.75M21.75 3H2.25a.75.75 0 0 0-.75.75V6c0 .414.336.75.75.75h19.5A.75.75 0 0 0 22.5 6V3.75a.75.75 0 0 0-.75-.75ZM14.625 11.25l-5.25 5.25m5.25 0-5.25-5.25"
    />
  </svg>
);
export default BinSvgComponent;
