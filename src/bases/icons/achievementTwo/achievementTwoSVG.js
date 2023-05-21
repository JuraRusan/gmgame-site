import * as React from "react"

const achievementTwoSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 26 26"
  >
    <path d="M24 3v20h1V3h-1zM23 23h1v1h-1z"/>
    <path d="M24 21V3h-1v20h1v-2z" fill={props.colorOne}/>
    <path d="M23 2h1v1h-1z"/>
    <path d="M22 23H3v1h20v-1h-1z" fill={props.colorOne}/>
    <path d="M21 24H3v1h20v-1h-2z"/>
    <path d="M21 3H3v20h20V3h-2z" fill={props.colorThree}/>
    <path d="M5 2h18V1H3v1h2z"/>
    <path d="M4 3h19V2H3v1h1z" fill={props.colorTwo}/>
    <path d="M2 23h1v1H2z"/>
    <path d="M3 22V3H2v20h1v-1z" fill={props.colorTwo}/>
    <path d="M2 2h1v1H2zM2 21V3H1v20h1v-2z"/>
  </svg>
)
export default achievementTwoSvgComponent