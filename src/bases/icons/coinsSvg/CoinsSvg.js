import * as React from "react";

const CoinsSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
    <path
      d="M12 4.84c0 .78-.83 1.48-2.11 1.91a9.55 9.55 0 0 1-3.14.48 9.55 9.55 0 0 1-3.14-.48C2.33 6.32 1.5 5.62 1.5 4.84c0-1.32 2.35-2.39 5.25-2.39S12 3.52 12 4.84Z"
      stroke={color}
      strokeLinecap="square"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <path
      d="M12 4.84v3.82c0 .78-.83 1.48-2.11 1.91a9.82 9.82 0 0 1-3.14.48 9.82 9.82 0 0 1-3.14-.48C2.33 10.14 1.5 9.44 1.5 8.66V4.84c0 .78.83 1.48 2.11 1.91a9.55 9.55 0 0 0 3.14.48 9.55 9.55 0 0 0 3.14-.48C11.17 6.32 12 5.62 12 4.84Z"
      stroke={color}
      strokeLinecap="square"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <path
      d="M12 8.66v3.82c0 .78-.83 1.48-2.11 1.91a9.84 9.84 0 0 1-3.14.47 9.84 9.84 0 0 1-3.14-.47C2.33 14 1.5 13.26 1.5 12.48V8.66c0 .78.83 1.48 2.11 1.91a9.82 9.82 0 0 0 3.14.48 9.82 9.82 0 0 0 3.14-.48C11.17 10.14 12 9.44 12 8.66Z"
      stroke={color}
      strokeLinecap="square"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <path
      d="M12 12.48v3.82c0 1.31-2.35 2.38-5.25 2.38S1.5 17.61 1.5 16.3v-3.82c0 .78.83 1.48 2.11 1.91a9.84 9.84 0 0 0 3.14.47 9.84 9.84 0 0 0 3.14-.47C11.17 14 12 13.26 12 12.48ZM22.5 12.48v3.82c0 1.31-2.35 2.38-5.25 2.38S12 17.61 12 16.3v-3.82c0 .78.83 1.48 2.11 1.91a9.84 9.84 0 0 0 3.14.47 9.84 9.84 0 0 0 3.14-.47c1.28-.39 2.11-1.13 2.11-1.91Z"
      stroke={color}
      strokeLinecap="square"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <path
      d="M12 12.48v7.63c0 1.32-2.35 2.39-5.25 2.39S1.5 21.43 1.5 20.11v-7.63M22.5 13.48v6.63c0 1.32-2.35 2.39-5.25 2.39S12 21.43 12 20.11v-7.63M22.5 6.75a5.25 5.25 0 1 1-5.25-5.25 5.2 5.2 0 0 1 5.25 5.25Z"
      stroke={color}
      strokeLinecap="square"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <path
      d="M22.5 12.48c0 .78-.83 1.48-2.11 1.91a9.84 9.84 0 0 1-3.14.47 9.84 9.84 0 0 1-3.14-.47C12.83 14 12 13.26 12 12.48s.69-1.36 1.78-1.8a5.22 5.22 0 0 0 6.94 0c1.09.44 1.78 1.08 1.78 1.8Z"
      stroke={color}
      strokeLinecap="square"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
  </svg>
);

export default CoinsSvgComponent;
