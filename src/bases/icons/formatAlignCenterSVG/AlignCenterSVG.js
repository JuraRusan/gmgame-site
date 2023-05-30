import * as React from "react"

const AlignCenterSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 -960 960 960"
  >
    <path
      fill={props.color}
      d="M120-120v-60h720v60H120Zm164-165v-60h393v60H284ZM120-450v-60h720v60H120Zm164-165v-60h393v60H284ZM120-780v-60h720v60H120Z" />
  </svg>
)
export default AlignCenterSvgComponent
