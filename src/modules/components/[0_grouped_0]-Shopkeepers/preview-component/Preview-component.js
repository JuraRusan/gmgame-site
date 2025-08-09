import classNames from "classnames";
import React from "react";
import { BUNDLES_TYPE, SHULKERS_TYPE } from "../../../pages/shopkeepers/ShulkersType";
import MinecraftImage from "../mini-component/Minecraft-image";
import MinecraftName from "../mini-component/Minecraft-name";
import MinecraftRegister from "../mini-component/Minecraft-register";
import ShulkerBox from "../shulker-box/Shulker-box";
import Bundle from "../bundle/Bundle";

import styles from "./Preview-component.module.scss";

const PreviewComponent = ({ selected }) => {
  const componentMap = [
    {
      ids: SHULKERS_TYPE,
      component: (item) => <ShulkerBox item={item} />,
    },
    {
      ids: BUNDLES_TYPE,
      component: (item) => <Bundle item={item} />,
    },
  ];

  const match = componentMap.find((entry) => entry.ids.includes(selected.id));

  return (
    <div className={classNames(styles["prev"])}>
      {match ? (
        <div>{match.component(selected)}</div>
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
