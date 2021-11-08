import * as React from "react";

function SvgMinecraftrating({ width = 24, height = 24, color = "#fff" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M12 10c-.1 0-.2 0-.3-.1l-11-4C.3 5.8 0 5.4 0 5s.3-.8.7-.9l11-4c.2-.1.5-.1.7 0l11 4c.3.1.6.5.6.9s-.3.8-.7.9l-11 4c-.1.1-.2.1-.3.1zM3.9 5L12 7.9 20.1 5 12 2.1 3.9 5zM12 24c-.1 0-.2 0-.3-.1l-11-4c-.5-.2-.8-.8-.6-1.3.2-.5.8-.8 1.3-.6L12 21.9 22.7 18c.5-.2 1.1.1 1.3.6.2.5-.1 1.1-.6 1.3l-11 4c-.2.1-.3.1-.4.1z"
      />
      <path
        fill={color}
        d="M12 24c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v14c0 .6-.4 1-1 1zm11-4c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1s1 .4 1 1v14c0 .6-.4 1-1 1zM1 20c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1s1 .4 1 1v14c0 .6-.4 1-1 1z"
      />
    </svg>
  );
}

export default SvgMinecraftrating;
