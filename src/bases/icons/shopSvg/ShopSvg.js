import * as React from "react";

const ShopSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg
    fill="none"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 14v3.6c0 .84 0 1.26-.164 1.581a1.5 1.5 0 0 1-.655.655c-.32.164-.74.164-1.581.164H7.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.655-.656C5 18.861 5 18.441 5 17.6V10m14 0v10M5 16h10M5.558 4.884l-1.98 3.958c-.19.384-.287.575-.264.731a.5.5 0 0 0 .208.337c.13.09.344.09.772.09h15.412c.428 0 .643 0 .772-.09a.5.5 0 0 0 .208-.337c.023-.156-.073-.347-.265-.73l-1.979-3.959c-.16-.32-.24-.481-.36-.598a1 1 0 0 0-.374-.231C17.55 4 17.37 4 17.011 4H6.99c-.36 0-.539 0-.697.055a1 1 0 0 0-.374.23c-.12.118-.2.278-.36.6Z"
    />
  </svg>
);

export default ShopSvgComponent;
