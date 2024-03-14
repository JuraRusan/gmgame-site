import * as React from "react"

const ExpandSvgComponent = ({width, height, color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 10V5h5m-5 9v5h5m8-14h5v5m0 4v5h-5"
    />
  </svg>
)
export default ExpandSvgComponent