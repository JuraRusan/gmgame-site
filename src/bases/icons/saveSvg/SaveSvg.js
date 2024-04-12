import * as React from "react";

const SaveSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 21H7m10 0h.803c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.427.218-.987.218-2.105V9.22c0-.45 0-.675-.048-.889a1.994 1.994 0 0 0-.209-.545c-.106-.19-.256-.355-.55-.682l-2.755-3.062c-.341-.378-.514-.57-.721-.708a1.999 1.999 0 0 0-.61-.271C15.863 3 15.6 3 15.075 3H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 4.52 3 5.08 3 6.2v11.6c0 1.12 0 1.68.218 2.107.192.377.497.683.874.875.427.218.987.218 2.105.218H7m10 0v-3.803c0-1.118 0-1.678-.218-2.105a2.001 2.001 0 0 0-.875-.874C15.48 14 14.92 14 13.8 14h-3.6c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C7 15.52 7 16.08 7 17.2V21m8-14H9"
    />
  </svg>
);

export default SaveSvgComponent;
