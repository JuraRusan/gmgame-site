import * as React from "react";

const FlipVerticalSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={width} height={height} fill="none">
    <path
      fill={color}
      d="M15 9H1c-.5 0-1-.5-1-1s.4-1 1-1h14c.6 0 1 .4 1 1s-.5 1-1 1zM3.1 12.7c-.4 0-.8-.3-.8-.8v-.5c0-.4.3-.8.8-.8s.8.3.8.8v.6c0 .4-.3.7-.8.7zM3.6 15.4h-.5c-.4 0-.8-.3-.8-.8v-.5c0-.4.3-.8.8-.8.3 0 .6.2.7.5.3.1.5.4.5.7.1.6-.2.9-.7.9zM10.1 15.4h-.8c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h.8c.4 0 .8.3.8.8s-.4.8-.8.8zm-3.2 0H6c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h.8c.4 0 .8.3.8.8s-.3.8-.7.8zM13 15.4h-.5c-.4 0-.8-.3-.8-.8 0-.3.2-.6.5-.7.1-.3.4-.5.7-.5.4 0 .8.3.8.8v.5c.1.4-.2.7-.7.7zM13 12.7c-.4 0-.8-.3-.8-.8v-.5c0-.4.3-.8.8-.8s.8.3.8.8v.6c0 .4-.3.7-.8.7z"
    />
    <g>
      <path fill={color} d="M13.8 4.5h-1.5V2H3.9v2.5H2.4V1.3c0-.4.3-.8.8-.8H13c.4 0 .8.3.8.8v3.2z" />
    </g>
  </svg>
);

export default FlipVerticalSvgComponent;
