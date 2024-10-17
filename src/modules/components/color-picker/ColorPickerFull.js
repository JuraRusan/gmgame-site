import classNames from "classnames";
import React from "react";
import Sketch from "@uiw/react-color-sketch";

import styles from "./ColorPickerFull.module.scss";

const ColorPickerFull = ({ color, onChange = (color) => {}, className }) => {
  return (
    <div className={classNames(styles["color_picker_full"], className)}>
      <Sketch
        presetColors={false}
        prefixCls={classNames(styles["custom_style"])}
        width="100%"
        color={color}
        onChange={(color) => onChange(color.hex)}
      />
    </div>
  );
};

export default ColorPickerFull;
