import * as React from "react";

const ResizeReduceSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 16 16">
    <path
      fill={color}
      d="M7 2.8v3.5c0 .4-.3.7-.7.7H2.8c-.7 0-1-.8-.5-1.3l1-1-3.1-3C0 1.5 0 1.2.2 1L1 .2c.2-.2.5-.2.7 0l3.1 3.1 1-1c.4-.5 1.2-.2 1.2.5zm0 6.9v3.5c0 .7-.8 1-1.3.5l-1-1-3.1 3.1c-.1.2-.4.2-.6 0L.2 15c-.2-.2-.2-.5 0-.7l3.1-3.1-1-1c-.5-.4-.2-1.2.5-1.2h3.5c.4 0 .7.3.7.7zm2-3.4V2.8c0-.7.8-1 1.3-.5l1 1L14.4.2c.1-.2.4-.2.6 0l.8.8c.2.2.2.5 0 .7l-3.1 3.1 1 1c.5.4.2 1.2-.5 1.2H9.7c-.4 0-.7-.3-.7-.7zm6.8 8c.2.2.2.5 0 .7l-.8.8c-.2.2-.5.2-.7 0l-3.1-3.1-1 1c-.4.5-1.2.1-1.2-.5V9.7c0-.4.3-.7.7-.7h3.5c.7 0 1 .8.5 1.3l-1 1 3.1 3z"
    />
  </svg>
);

export default ResizeReduceSvgComponent;
