import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
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
      {item.leather_color && <h3 className={classNames(styles["name"], styles["color"])}>{item.leather_color}</h3>}
      {item.instrument && (
        <h3 className={classNames(styles["name"], styles["color"])}>{lang[`goat_horn.${item.instrument}`]}</h3>
      )}
      {item.firework_power && (
        <h3 className={classNames(styles["name"], styles["color"])}>Длительность полёта: {item.firework_power}</h3>
      )}
      {item.trim?.pattern && (
        <h3 className={classNames(styles["name"], styles["color"])}>{lang[`trim_pattern.${item.trim.pattern}`]}</h3>
      )}
      {item.trim?.material && (
        <h3 className={classNames(styles["name"], styles["color"])}>{lang[`trim_material.${item.trim.material}`]}</h3>
      )}
      {item.id.includes("smithing_template") && (
        <h3 className={classNames(styles["name"], styles["color"])}>
          {item.id.includes("netherite_upgrade") ? lang[`upgrade.${item.id}`] : lang[`template.${item.id}`]}
        </h3>
      )}
      <MinecraftList item={item} />
    </div>
  );
};

export default MinecraftName;
