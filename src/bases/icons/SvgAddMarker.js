import * as React from "react"

const SvgAddMarker = (props) => (
  <svg
    fill={props.color}
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M28 14H18V4a2 2 0 0 0-4 0v10H4a2 2 0 0 0 0 4h10v10a2 2 0 0 0 4 0V18h10a2 2 0 0 0 0-4z" />
  </svg>
)

export default SvgAddMarker
