import classNames from "classnames";
import React from "react";
import { SHULKERS_TYPE } from "../../../pages/shopkeepers/ShulkersType";
import ShulkerBox from "../shulker-box/Shulker-box";
import MinecraftImage from "../mini-component/Minecraft-image";
import MinecraftName from "../mini-component/Minecraft-name";
import MinecraftRegister from "../mini-component/Minecraft-register";

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
            <MinecraftImage item={selected} width={256} height={256} />
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
