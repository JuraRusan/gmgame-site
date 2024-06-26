import * as React from "react";

const ResizeSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 16 16">
    <path
      fill={color}
      d="M16 15.1c0 .5-.4.9-.9.9h-4c-.8 0-1.1-.9-.6-1.5l1.3-1.3L8 9.4l-3.8 3.8 1.3 1.3c.5.6.1 1.5-.6 1.5h-4c-.5 0-.9-.4-.9-.9v-4c0-.8.9-1.1 1.5-.6l1.3 1.3L6.6 8 2.8 4.2 1.5 5.5C.9 6 0 5.6 0 4.9v-4C0 .4.4 0 .9 0h4c.7 0 1.1.9.6 1.5L4.2 2.8 8 6.6l3.8-3.8-1.3-1.3c-.5-.6-.1-1.5.6-1.5h4c.5 0 .9.4.9.9v4c0 .8-.9 1.1-1.5.6l-1.3-1.3L9.4 8l3.8 3.8 1.3-1.3c.5-.5 1.5-.2 1.5.6v4z"
    />
  </svg>
);

export default ResizeSvgComponent;
