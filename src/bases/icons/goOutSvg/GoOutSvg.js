import * as React from "react"

const GoOutSvgComponent = ({width, height, color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z"/>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={2}
        d="M9 12h10M16 8l2.586 2.586a2 2 0 0 1 0 2.828L16 16"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={2}
        d="M16 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10"
      />
    </g>
  </svg>
)

export default GoOutSvgComponent
