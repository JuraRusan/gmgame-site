import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { RgbToHex } from "../function/RgbToHex";
import MinecraftList from "./Minecraft-list";

import styles from "./Minecraft-name.module.scss";

const MinecraftName = ({ item }) => {
  const lang = useSelector((state) => state.lang);

  return (
    <div className={classNames(styles["block"])}>
      {!item.minecraft_custom ? (
        <h3 className={classNames(styles["name"])}>{lang[item.id]}</h3>
      ) : (
        <h3 className={classNames(styles["name"])} dangerouslySetInnerHTML={{ __html: item.minecraft_custom }}></h3>
      )}
      {item.leather_color && (
        <h3 className={classNames(styles["name"])}>
          - Цвет: <span className={classNames(styles["custom"])}>{RgbToHex(item.leather_color)}</span>
        </h3>
      )}
      {item.improvement && (
        <h3 className={classNames(styles["name"])}>
          - <span className={classNames(styles["color"])}>{lang[item.improvement]}</span>
        </h3>
      )}
      {item.type_horn && (
        <h3 className={classNames(styles["name"])}>
          - <span className={classNames(styles["color"])}>{lang[item.type_horn]}</span>
        </h3>
      )}
      {item.firework_power && (
        <h3 className={classNames(styles["name"])}>
          - lvl <span className={classNames(styles["custom"])}>{item.firework_power}</span>
        </h3>
      )}
      {item.trim?.pattern && (
        <h3 className={classNames(styles["name"])}>
          - <span className={classNames(styles["custom"])}>{lang[item.trim.pattern]}</span>
        </h3>
      )}
      {item.trim?.material && (
        <h3 className={classNames(styles["name"])}>
          - <span className={classNames(styles["custom"])}>{lang[item.trim.material]}</span>
        </h3>
      )}
      <MinecraftList item={item} />
    </div>
  );
};

export default MinecraftName;
