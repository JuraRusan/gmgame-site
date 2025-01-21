// import classNames from "classnames";
// import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { ARRAY_MAPPINGS } from "../../../pages/shopkeepers/AnimationType";
//
// import styles from "./Minecraft-image.module.scss";
// import "react-lazy-load-image-component/src/effects/blur.css";
//
// const MinecraftImage = ({ item, dots = "." }) => {
//   const itemNameId = item.id;
//   const itemEnchant = !item.enchant ? [] : item.enchant;
//   const colorBG = item.leather_color !== undefined ? { backgroundColor: item.leather_color } : {};
//   const includesType = ARRAY_MAPPINGS[itemNameId];
//
//   const getImageSource = () => {
//     if (itemNameId === "enchanted_golden_apple") {
//       return `${dots}/site_assets/items/golden_apple.webp`;
//       // --------------------------------------------
//     } else if (itemNameId === "written_book") {
//       return `${dots}/site_assets/items/book.webp`;
//       // --------------------------------------------
//     } else if (itemNameId === "enchanted_book") {
//       return `${dots}/site_assets/items/book.webp`;
//       // --------------------------------------------
//     } else if (itemNameId === "end_crystal") {
//       return `${dots}/site_assets/animation_webp/end_crystal.webp`;
//       // --------------------------------------------
//     } else if (itemNameId === "sculk_sensor") {
//       return `${dots}/site_assets/animation_webp/sculk_sensor.webp`;
//       // --------------------------------------------
//     } else if (itemNameId === "calibrated_sculk_sensor") {
//       return `${dots}/site_assets/animation_webp/calibrated_sculk_sensor.webp`;
//       // --------------------------------------------
//     } else if (itemNameId === "leather_helmet" && item.leather_color !== undefined) {
//       return `${dots}/site_assets/leather_colored_armor/leather_colored_helmet.webp`;
//       // --------------------------------------------
//     } else if (itemNameId === "leather_chestplate" && item.leather_color !== undefined) {
//       return `${dots}/site_assets/leather_colored_armor/leather_colored_chestplate.webp`;
//       // --------------------------------------------
//     } else if (itemNameId === "leather_leggings" && item.leather_color !== undefined) {
//       return `${dots}/site_assets/leather_colored_armor/leather_colored_leggings.webp`;
//       // --------------------------------------------
//     } else if (itemNameId === "leather_boots" && item.leather_color !== undefined) {
//       return `${dots}/site_assets/leather_colored_armor/leather_colored_boots.webp`;
//       // --------------------------------------------
//     } else if (itemNameId === "leather_horse_armor" && item.leather_color !== undefined) {
//       return `${dots}/site_assets/leather_colored_armor/leather_colored_horse_armor.webp`;
//       // --------------------------------------------
//     } else if (itemNameId === "smithing_template") {
//       if (item.improvement === "netherite_upgrade") {
//         return `${dots}/site_assets/items/${item.improvement}_${item.id}.webp`;
//       } else {
//         return `${dots}/site_assets/items/${item.improvement}_armor_trim_${item.id}.webp`;
//       }
//       // --------------------------------------------
//     } else {
//       return `${dots}/site_assets/items/${itemNameId}.webp`;
//     }
//   };
//
//   const getImageTypeFolder = () => {
//     if (itemNameId.includes("helmet")) {
//       return "helmet";
//     } else if (itemNameId.includes("chestplate")) {
//       return "chestplate";
//     } else if (itemNameId.includes("leggings")) {
//       return "leggings";
//     } else if (itemNameId.includes("boots")) {
//       return `boots`;
//     } else {
//       return `boots`;
//     }
//   };
//
//   const renderArmorImage = (itemType) => {
//     if (itemNameId.includes(itemType)) {
//       return (
//         <div className={classNames(styles["absoluteArmor"])}>
//           <LazyLoadImage
//             src={`${dots}/site_assets/patterns/${itemType}_pattern.png`}
//             width="100%"
//             height="100%"
//             effect="blur"
//             alt="none"
//           />
//         </div>
//       );
//     }
//
//     return null;
//   };
//
//   const imageSource = getImageSource();
//   const imageTypeFolder = getImageTypeFolder();
//
//   return (
//     <div className={classNames(styles["wrapperImage"])}>
//       <LazyLoadImage style={{ ...colorBG }} src={imageSource} width="100%" height="100%" effect="blur" alt="none" />
//
//       {item.trim && (
//         <div className={classNames(styles["absoluteArmor"])}>
//           <LazyLoadImage
//             src={`${dots}/site_assets/item_trim/${imageTypeFolder}/${item.trim.material}.webp`}
//             width="100%"
//             height="100%"
//             effect="blur"
//             alt="none"
//           />
//         </div>
//       )}
//
//       {itemEnchant.length > 0 || itemNameId === "written_book" || itemNameId === "enchanted_golden_apple" ? (
//         <div className={classNames(styles["enchant"])}>
//           <LazyLoadImage src={`${dots}/site_assets/Comp_1.gif`} width="100%" height="100%" effect="blur" alt="none" />
//         </div>
//       ) : null}
//
//       {includesType ? renderArmorImage(includesType) : null}
//     </div>
//   );
// };
//
// export default MinecraftImage;

import classNames from "classnames";
import React from "react";
import CanvasRender from "./Minecraft-canvas";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./Minecraft-image.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const MinecraftImage = ({ item, width, height, background }) => {
  const itemNameId = item.id;

  const getImageTypeFolder = () => {
    if (itemNameId.includes("helmet")) {
      return "helmet";
    } else if (itemNameId.includes("chestplate")) {
      return "chestplate";
    } else if (itemNameId.includes("leggings")) {
      return "leggings";
    } else {
      return `boots`;
    }
  };

  let imagesArr = [process.env.PUBLIC_URL + `/site_assets/items/${itemNameId}.webp`];

  if (itemNameId === "wolf_armor" && item.leather_color !== undefined) {
    imagesArr.push(process.env.PUBLIC_URL + "/site_assets/leather_colored_armor/wolf_armor.webp");
  }
  if (itemNameId === "leather_helmet" && item.leather_color !== undefined) {
    imagesArr.push(process.env.PUBLIC_URL + "/site_assets/leather_colored_armor/leather_helmet.webp");
  }
  if (itemNameId === "leather_chestplate" && item.leather_color !== undefined) {
    imagesArr.push(process.env.PUBLIC_URL + "/site_assets/leather_colored_armor/leather_chestplate.webp");
  }
  if (itemNameId === "leather_leggings" && item.leather_color !== undefined) {
    imagesArr.push(process.env.PUBLIC_URL + "/site_assets/leather_colored_armor/leather_leggings.webp");
  }
  if (itemNameId === "leather_boots" && item.leather_color !== undefined) {
    imagesArr.push(process.env.PUBLIC_URL + "/site_assets/leather_colored_armor/leather_boots.webp");
  }
  if (itemNameId === "leather_horse_armor" && item.leather_color !== undefined) {
    imagesArr.push(process.env.PUBLIC_URL + "/site_assets/leather_colored_armor/leather_horse_armor.webp");
  }

  if (item.trim) {
    imagesArr.push(
      process.env.PUBLIC_URL + `/site_assets/item_trim/${getImageTypeFolder()}/${item.trim.material}.webp`
    );
  }

  if (itemNameId === "wolf_armor" && item.leather_color !== undefined) {
    imagesArr.push(process.env.PUBLIC_URL + "/site_assets/leather_colored_armor/wolf_armor_overlay.webp");
  }
  if (itemNameId === "leather_helmet" && item.leather_color !== undefined) {
    imagesArr.push(process.env.PUBLIC_URL + "/site_assets/leather_colored_armor/leather_helmet_overlay.webp");
  }
  if (itemNameId === "leather_chestplate" && item.leather_color !== undefined) {
    imagesArr.push(process.env.PUBLIC_URL + "/site_assets/leather_colored_armor/leather_chestplate_overlay.webp");
  }
  if (itemNameId === "leather_leggings" && item.leather_color !== undefined) {
    imagesArr.push(process.env.PUBLIC_URL + "/site_assets/leather_colored_armor/leather_leggings_overlay.webp");
  }
  if (itemNameId === "leather_boots" && item.leather_color !== undefined) {
    imagesArr.push(process.env.PUBLIC_URL + "/site_assets/leather_colored_armor/leather_boots_overlay.webp");
  }
  if (itemNameId === "leather_horse_armor" && item.leather_color !== undefined) {
    imagesArr.push(process.env.PUBLIC_URL + "/site_assets/leather_colored_armor/leather_horse_armor_overlay.webp");
  }

  if (item.banner_pattern) {
    const maping = (folder) => {
      item.banner_pattern.map((el) => {
        return imagesArr.push(process.env.PUBLIC_URL + `/site_assets/${folder}/${el.color}/pattern_${el.pattern}.webp`);
      });
    };

    if (item.shield) {
      imagesArr.push(process.env.PUBLIC_URL + `/site_assets/shield_pattern/${item.shield}.webp`);
      maping("shield_pattern");
    } else {
      imagesArr.push(process.env.PUBLIC_URL + `/site_assets/flag_pattern/${item.id}.webp`);
      maping("flag_pattern");
    }
  }

  return (
    <div className={classNames(styles["wrapper_image"])} style={{ width: width, height: height }}>
      {imagesArr.map((el, i) => {
        if (item.leather_color && i === 1) {
          return (
            <div className={classNames(styles["single"])} key={i}>
              <CanvasRender
                width={width}
                height={height}
                images={[imagesArr[1]]}
                color={item.leather_color}
                type="colored"
              />
            </div>
          );
        } else {
          return (
            <div className={classNames(styles["single"])} key={i}>
              <LazyLoadImage src={el} width="100%" height="100%" effect="blur" alt="none" />
            </div>
          );
        }
      })}

      {item.enchant || itemNameId === "written_book" || itemNameId === "enchanted_golden_apple" ? (
        <div className={classNames(styles["enchant"])}>
          <LazyLoadImage
            src={process.env.PUBLIC_URL + `/site_assets/enchantment.gif`}
            width="100%"
            height="100%"
            effect="blur"
            alt="none"
          />
        </div>
      ) : null}

      <div className={classNames(styles["crop"])}>
        <CanvasRender width={width} height={height} images={[imagesArr[0]]} type="crop" background={background} />
      </div>

      {/*<CanvasRender*/}
      {/*  color={item.leather_color}*/}
      {/*  width={width}*/}
      {/*  height={height}*/}
      {/*  enchantment={item.enchant || itemNameId === "written_book" || itemNameId === "enchanted_golden_apple"}*/}
      {/*  images={imagesArr}*/}
      {/*/>*/}
    </div>
  );
};

export default MinecraftImage;
