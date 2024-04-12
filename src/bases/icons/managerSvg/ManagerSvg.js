import * as React from "react";

const ManagerSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.067 5c.592.958.933 2.086.933 3.293 0 3.476-2.83 6.294-6.32 6.294-.636 0-2.086-.146-2.791-.732l-.882.878c-.735.732-.147.732.147 1.317 0 0 .735 1.025 0 2.05-.441.585-1.676 1.404-3.086 0l-.294.292s.881 1.025.147 2.05c-.441.585-1.617 1.17-2.646.146l-1.028 1.024c-.706.703-1.568.293-1.91 0l-.883-.878c-.823-.82-.343-1.708 0-2.05l7.642-7.61s-.735-1.17-.735-2.78c0-3.476 2.83-6.294 6.32-6.294.819 0 1.601.155 2.319.437"
    />
    <path
      stroke={color}
      strokeWidth={1.5}
      d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195 2.2 2.2 0 0 1-2.205-2.195 2.2 2.2 0 0 1 2.205-2.196 2.2 2.2 0 0 1 2.204 2.196Z"
    />
  </svg>
);

export default ManagerSvgComponent;
