import * as React from "react";

const SettingsSvgComponent = ({ width, height, color }) => (
  <svg width={width} height={height} viewBox="0 0 512 512">
    <path
      fill={color}
      fillRule="evenodd"
      d="M332.791 42.667v51.541a177.749 177.749 0 0 1 24.96 14.379l7.638-4.438 36.97-21.312 21.334 36.928 34.112 59.136 21.333 36.95-36.928 21.333-7.637 4.373c.426 4.843.64 9.643.64 14.443 0 4.8-.214 9.6-.64 14.443l7.637 4.373 36.928 21.333-21.333 36.95-34.112 59.136-21.334 36.928-36.97-21.312-7.638-4.438a177.749 177.749 0 0 1-24.96 14.379v51.541H179.213v-51.541a177.749 177.749 0 0 1-24.96-14.379l-7.659 4.438-36.95 21.312-21.333-36.928-34.133-59.136-21.333-36.95 36.95-21.333 7.615-4.373A172.864 172.864 0 0 1 76.791 256c0-4.8.214-9.6.62-14.443l-7.617-4.373-36.95-21.333 21.334-36.95 34.133-59.136 21.334-36.928 36.95 21.312 7.658 4.438a177.749 177.749 0 0 1 24.96-14.379V42.667H332.79Zm-42.666 42.666h-68.246v38.614c-24.384 6.272-46.144 19.008-63.253 36.437l-33.365-19.285-34.134 59.136 33.408 19.285c-3.2 11.627-5.077 23.83-5.077 36.48 0 12.65 1.877 24.853 5.077 36.48l-33.408 19.285 34.134 59.136 33.365-19.285c17.11 17.43 38.87 30.165 63.253 36.437v38.614h68.246v-38.614c24.384-6.272 46.144-19.008 63.253-36.437l33.344 19.285 34.155-59.136-33.408-19.285c3.2-11.627 5.077-23.83 5.077-36.48 0-12.65-1.877-24.853-5.077-36.48l33.408-19.285-34.155-59.136-33.344 19.285c-17.11-17.43-38.87-30.165-63.253-36.437V85.333ZM256 170.667c47.131 0 85.333 38.202 85.333 85.333S303.131 341.333 256 341.333 170.667 303.131 170.667 256s38.202-85.333 85.333-85.333Zm0 42.666c-23.567 0-42.667 19.1-42.667 42.667s19.1 42.667 42.667 42.667 42.667-19.1 42.667-42.667-19.1-42.667-42.667-42.667Z"
    />
  </svg>
);

export default SettingsSvgComponent;
