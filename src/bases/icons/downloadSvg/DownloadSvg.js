import * as React from "react";

const DownloadSvgComponent = ({ width, height, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
    <path
      fill={color}
      d="M17.2 12.1c-.4 0-.8.3-.8.8v2.8c0 .6-.4 1-1 1H8.6c-.6 0-1-.4-1-1v-2.8c0-.4-.3-.8-.8-.8s-.8.3-.8.8v2.8c0 1.4 1.1 2.5 2.5 2.5h6.8c1.4 0 2.5-1.1 2.5-2.5v-2.8c.1-.5-.2-.8-.6-.8z"
    />
    <path
      fill={color}
      d="M11.5 14.6c.1.1.3.2.5.2s.4-.1.5-.2l2.4-2.3c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-1.1 1.1V6.6c0-.4-.3-.8-.8-.8s-.8.3-.8.8v5.6l-1.1-1c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l2.6 2.3z"
    />
  </svg>
);

export default DownloadSvgComponent;
