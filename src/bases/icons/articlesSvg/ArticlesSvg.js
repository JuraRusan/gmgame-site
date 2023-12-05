import * as React from "react"

const ArticlesSvgComponent = ({width, height, color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 48 48"
  >
    <path
      d="M43.5 13.044H24.77c-1.963-.108-5.931-4.238-8.188-4.238H6.68v-.001A2.176 2.176 0 0 0 4.5 10.976v7.307M10.68 39.195h30.64a2.176 2.176 0 0 0 2.18-2.171V18.283h-27m-12 0v20.912"
      fill="none"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ArticlesSvgComponent
