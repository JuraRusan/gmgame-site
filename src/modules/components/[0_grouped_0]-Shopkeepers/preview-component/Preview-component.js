import classNames from "classnames";
import React from "react";
import ShulkerBox from "../shulker-box/Shulker-box";
import MinecraftImage from "../mini-component/Minecraft-image";
import MinecraftArmorType from "../mini-component/Minecraft-armor-type";
import MinecraftName from "../mini-component/Minecraft-name";
import MinecraftArmorName from "../mini-component/Minecraft-armor-name";
import MinecraftList from "../mini-component/Minecraft-list";
import MinecraftRegister from "../mini-component/Minecraft-register";
import MinecraftBanner from "../mini-component/Minecraft-banner";
import MinecraftShield from "../mini-component/Minecraft-shield";
import MinecraftShieldColor from "../mini-component/Minecraft-shield-color";
import MinecraftArmorColor from "../mini-component/Minecraft-armor-color";

import styles from "./Preview-component.module.scss";

const PreviewComponent = ({ selectedItem, selectedItemOne }) => {
  return (
    <div className={classNames(styles["prev"])}>
      {selectedItem && (
        <div className={classNames(styles["view_shulker"])}>
          <ShulkerBox item={selectedItem} />
        </div>
      )}
      {selectedItemOne && (
        <div className={classNames(styles["view_item"])}>
          <div className={classNames(styles["column_one"])}>
            {selectedItemOne.trim === undefined &&
            selectedItemOne.banner_pattern === undefined &&
            selectedItemOne.shield_color?.color === undefined ? (
              <div className={classNames(styles["imageWrapperAll"])}>
                <MinecraftImage item={selectedItemOne} />
              </div>
            ) : null}
            {selectedItemOne.trim !== undefined ? (
              <div className={classNames(styles["imageWrapperArmor"])}>
                <MinecraftArmorType item={selectedItemOne} />
              </div>
            ) : null}
            {selectedItemOne.banner_pattern !== undefined || selectedItemOne.shield_color?.color !== undefined ? (
              <div className={classNames(styles["imageWrapperBanner"])}>
                {selectedItemOne.type === "shield" ? (
                  <MinecraftShield item={selectedItemOne} type="normal" />
                ) : (
                  <MinecraftBanner item={selectedItemOne} type="normal" />
                )}
              </div>
            ) : null}
          </div>
          <div className={classNames(styles["column_two"])}>
            <div className={classNames(styles["top"])}>
              <MinecraftName item={selectedItemOne} />
              {selectedItemOne.trim === undefined ? null : <MinecraftArmorName item={selectedItemOne} />}
              {selectedItemOne.shield_color?.color === undefined ? null : (
                <MinecraftShieldColor item={selectedItemOne} />
              )}
              {selectedItemOne.leather_color === undefined ? null : <MinecraftArmorColor item={selectedItemOne} />}
              <MinecraftList item={selectedItemOne} />
            </div>
            <div className={classNames(styles["bottom"])}>
              <MinecraftRegister item={selectedItemOne} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewComponent;
