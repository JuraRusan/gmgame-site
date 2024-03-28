import * as React from "react";

const ItalicSvgComponent = ({ width = "100px", height = "100px", color = "#f4f4f4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -960 960 960">
    <path fill={color} d="M224-199v-80h134l139-409H338v-80h380v80H584L445-279h159v80H224Z" />
  </svg>
);

export default ItalicSvgComponent;
