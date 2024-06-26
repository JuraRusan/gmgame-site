import * as React from "react";

const FlipHorizontalSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={width} height={height} fill="none">
    <path
      fill={color}
      d="M8 15.9c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v13.9c0 .6-.4 1-1 1zm4-2.4h-.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h.5c.4 0 .8.3.8.8s-.4.8-.8.8zm2.7 0h-.5c-.4 0-.8-.3-.8-.8 0-.3.2-.6.5-.7.1-.3.4-.5.7-.5.4 0 .8.3.8.8v.5c.1.4-.3.7-.7.7zm0-2.8c-.4 0-.8-.3-.8-.8v-.8c0-.4.3-.8.8-.8s.8.3.8.8v.8c0 .4-.4.8-.8.8zm0-3.3c-.4 0-.8-.3-.8-.8v-.7c0-.4.3-.8.8-.8s.8.3.8.8v.8c0 .4-.4.7-.8.7zm0-3.3c-.3 0-.6-.2-.7-.5-.3-.1-.5-.4-.5-.7 0-.4.3-.8.8-.8h.5c.4 0 .8.3.8.8v.5c-.1.4-.5.7-.9.7zM12 3.6h-.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h.5c.4 0 .8.3.8.8s-.4.8-.8.8zM4.5 13.5H1.3c-.4 0-.8-.3-.8-.8V2.9c0-.4.3-.8.8-.8h3.2v1.5H2V12h2.5v1.5z"
    />
  </svg>
);

export default FlipHorizontalSvgComponent;
