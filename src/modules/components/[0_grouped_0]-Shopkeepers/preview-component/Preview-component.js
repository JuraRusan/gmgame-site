import classNames from "classnames";
import React from "react";
import { SHULKERS_TYPE } from "../../../pages/shopkeepers/ShulkersType";
import ShulkerBox from "../shulker-box/Shulker-box";
import MinecraftImage from "../mini-component/Minecraft-image";
import MinecraftArmorType from "../mini-component/Minecraft-armor-type";
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
            <div className={classNames(styles["imageWrapperAll"])}>
              <MinecraftImage item={selected} />
            </div>
            {selected.trim?.pattern && (
              <div className={classNames(styles["imageWrapperArmor"])}>
                <MinecraftArmorType item={selected} />
              </div>
            )}
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

// {selectedItem && (
//   <div className={classNames(styles["view_shulker"])}>
//     <ShulkerBox item={selectedItem} />
//   </div>
// )}
// {selectedItemOne && (
//   <div className={classNames(styles["view_item"])}>
//     <div className={classNames(styles["column_one"])}>
//       {selectedItemOne.trim === undefined &&
//       selectedItemOne.banner_pattern === undefined &&
//       selectedItemOne.shield_color?.color === undefined ? (
//         <div className={classNames(styles["imageWrapperAll"])}>
//           <MinecraftImage item={selectedItemOne} />
//         </div>
//       ) : null}
//       {selectedItemOne.trim !== undefined ? (
//         <div className={classNames(styles["imageWrapperArmor"])}>
//           <MinecraftArmorType item={selectedItemOne} />
//         </div>
//       ) : null}
//       {selectedItemOne.banner_pattern !== undefined || selectedItemOne.shield_color?.color !== undefined ? (
//         <div className={classNames(styles["imageWrapperBanner"])}>
//           {selectedItemOne.type === "shield" ? (
//             <MinecraftShield item={selectedItemOne} type="normal" />
//           ) : (
//             <MinecraftBanner item={selectedItemOne} type="normal" />
//           )}
//         </div>
//       ) : null}
//     </div>
//     <div className={classNames(styles["column_two"])}>
//       <div className={classNames(styles["top"])}>
//         <MinecraftName item={selectedItemOne} />
//         {/*{selectedItemOne.trim === undefined ? null : <MinecraftArmorName item={selectedItemOne} />}*/}
//         {/*{selectedItemOne.shield_color?.color === undefined ? null : (*/}
//         {/*  <MinecraftShieldColor item={selectedItemOne} />*/}
//         {/*)}*/}
//         {/*{selectedItemOne.leather_color === undefined ? null : <MinecraftArmorColor item={selectedItemOne} />}*/}
//         <MinecraftList item={selectedItemOne} />
//       </div>
//       <div className={classNames(styles["bottom"])}>
//         <MinecraftRegister item={selectedItemOne} />
//       </div>
//     </div>
//   </div>
// )}
