import classNames from "classnames";
import React from "react";
import { SHULKERS_TYPE } from "../../../pages/shopkeepers/ShulkersType";
import ShulkerBox from "../shulker-box/Shulker-box";
import MinecraftImage from "../mini-component/Minecraft-image";
import MinecraftArmorType from "../mini-component/Minecraft-armor-type";
import MinecraftName from "../mini-component/Minecraft-name";
import MinecraftRegister from "../mini-component/Minecraft-register";
import MinecraftShield from "../mini-component/Minecraft-shield";
import MinecraftBanner from "../mini-component/Minecraft-banner";

import styles from "./Preview-component.module.scss";

const PreviewComponent = ({ selected }) => {
  return (
    <div className={classNames(styles["prev"])}>
      {SHULKERS_TYPE.includes(selected.id) ? (
        <div className={classNames(styles["view_shulker"])}>
          <ShulkerBox item={selected} />
        </div>
      ) : (
        <div className={classNames(styles["view_item"])}>
          <div className={classNames(styles["column_one"])}>
            {selected.trim === undefined && selected.banner_pattern === undefined && selected.shield === undefined ? (
              <div className={classNames(styles["imageWrapperAll"])}>
                <MinecraftImage item={selected} />
              </div>
            ) : null}
            {selected.trim !== undefined ? (
              <div className={classNames(styles["imageWrapperArmor"])}>
                <MinecraftArmorType item={selected} />
              </div>
            ) : null}
            {selected.banner_pattern !== undefined || selected.shield !== undefined ? (
              <div className={classNames(styles["imageWrapperBanner"])}>
                {selected.id === "shield" ? (
                  <MinecraftShield item={selected} type="normal" />
                ) : (
                  <MinecraftBanner item={selected} type="normal" />
                )}
              </div>
            ) : null}
          </div>
          <div className={classNames(styles["column_two"])}>
            <MinecraftName item={selected} />
            <MinecraftRegister item={selected} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewComponent;
