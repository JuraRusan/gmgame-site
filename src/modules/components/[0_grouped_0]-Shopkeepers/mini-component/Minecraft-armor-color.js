import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-armor-color.module.scss"

const MinecraftArmorColor = ({item}) => {

  function rgbToHex(red, green, blue) {

    red = Math.min(255, Math.max(0, red));
    green = Math.min(255, Math.max(0, green));
    blue = Math.min(255, Math.max(0, blue));

    let hexRed = red.toString(16).padStart(2, '0');
    let hexGreen = green.toString(16).padStart(2, '0');
    let hexBlue = blue.toString(16).padStart(2, '0');

    let hexColor = '#' + hexRed + hexGreen + hexBlue;

    return hexColor.toLowerCase();
  }

  return (
    <p className={classNames(styles["color_style_box"])}>- Цвет:
      <span className={classNames(styles["span_color"])}>{rgbToHex(item.leather_color?.red, item.leather_color?.green, item.leather_color?.blue)}</span>
    </p>
  );
};

export default MinecraftArmorColor;
