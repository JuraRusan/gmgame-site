import * as React from "react"

const ArticlesSvgComponent = ({width, height, color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 512 512"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M426.667 42.667v426.666H85.333V42.667h341.334ZM384 85.333H128v341.334h256V85.333ZM341.333 320v42.667H170.667V320h170.666Zm0-85.333v42.666H170.667v-42.666h170.666Zm0-85.334V192H170.667v-42.667h170.666Z"
    />
  </svg>
)

export default ArticlesSvgComponent
