import * as React from "react"

const MapSvgComponent = ({width, height, color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 512 512"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="m421.653 327.53 47.68 23.83L256 458.027 42.667 351.36l47.68-23.83L256 410.37l165.653-82.84Zm.022-95.377L469.333 256 256 362.667 42.667 256l47.658-23.847L256 315.01l165.675-82.856ZM256 53.973 469.333 160.64 256 267.307 42.667 160.64 256 53.973Zm0 47.68L138.048 160.64 256 219.605l117.93-58.965L256 101.653Z"
    />
  </svg>
)

export default MapSvgComponent
