import classNames from "classnames";
import React from "react";

import styles from "./ColorPickerLite.module.scss";

const MINECRAFT_COLOR_ARRAY = [
  "#000000",
  "#0000AA",
  "#00AA00",
  "#00AAAA",
  "#AA0000",
  "#AA00AA",
  "#FFAA00",
  "#AAAAAA",
  "#555555",
  "#5555FF",
  "#55FF55",
  "#55FFFF",
  "#FF5555",
  "#FF55FF",
  "#FFFF55",
  "#F4F4F4", // "#FFFFFF" - vanilla
];

const ColorPickerLite = ({ onClick = (color) => {}, className }) => {
  return (
    <div className={classNames(styles["color_picker_lite"], className)}>
      {MINECRAFT_COLOR_ARRAY.map((color, index) => (
        <span
          className={classNames(styles["one_color"])}
          style={{ background: color }}
          key={index}
          onClick={() => onClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorPickerLite;
