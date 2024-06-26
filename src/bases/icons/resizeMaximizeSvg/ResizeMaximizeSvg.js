import * as React from "react";

const ResizeMaximizeSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 16 16">
    <path
      fill={color}
      d="M0 .9C0 .4.4 0 .9 0h4.4c.2 0 .4.2.4.4v1.4c0 .2-.2.4-.4.4h-3v3c0 .2-.2.4-.4.4H.4c-.2.1-.4-.1-.4-.3V.9zM5.3 16H.9c-.5 0-.9-.4-.9-.8v-4.4c0-.2.2-.4.4-.4h1.4c.2 0 .4.2.4.4v3h3c.2 0 .4.2.4.4v1.4c.1.2-.1.4-.3.4zm5.4-16h4.4c.5 0 .9.4.9.9v4.4c0 .2-.2.4-.4.4h-1.4c-.2 0-.4-.2-.4-.4v-3h-3c-.2 0-.4-.2-.4-.4V.4c-.1-.2.1-.4.3-.4zM16 10.7v4.4c0 .5-.4.9-.9.9h-4.4c-.2 0-.4-.2-.4-.4v-1.4c0-.2.2-.4.4-.4h3v-3c0-.2.2-.4.4-.4h1.4c.3-.1.5.1.5.3z"
    />
  </svg>
);

export default ResizeMaximizeSvgComponent;
