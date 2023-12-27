import classNames from "classnames";
import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {ARRAY_MAPPINGS} from "../../../pages/shopkeepers/AnimationType";

import styles from "./Minecraft-image.module.scss"
import 'react-lazy-load-image-component/src/effects/blur.css';

const MinecraftImage = ({item}) => {

  const itemNameId = item.type;
  const itemEnchant = !item.enchant ? [] : item.enchant;
  const itemStoredEnchant = !item.stored_enchant ? [] : item.stored_enchant;
  const itemPotion = item.potion;
  const itemTrimMaterial = item.trim?.material;
  const {red, green, blue} = item.leather_color ?? {};
  const colorBG = red !== undefined ? {backgroundColor: `rgb(${red},${green},${blue})`} : {};
  const armorType = ARRAY_MAPPINGS[itemNameId];

  const getImageSource = () => {
    if (itemNameId === "enchanted_golden_apple") {
      return "./site_assets/animation_webp/enchanted_golden_apple.webp";

    } else if (itemNameId === "written_book") {
      return "./site_assets/animation_webp/written_book.webp";

    } else if (itemNameId === "enchanted_book") {
      return "./site_assets/animation_webp/enchanted_book.webp";

    } else if (itemNameId === "end_crystal") {
      return "./site_assets/animation_webp/end_crystal.webp";

    } else if (itemNameId === "sculk_sensor") {
      return "./site_assets/animation_webp/sculk_sensor.webp";

    } else if (itemNameId === "calibrated_sculk_sensor") {
      return "./site_assets/animation_webp/calibrated_sculk_sensor.webp";

    } else if (itemNameId === "leather_helmet" && item.leather_color !== undefined) {
      return "./site_assets/leather_colored_armor/leather_colored_helmet.webp";

    } else if (itemNameId === "leather_chestplate" && item.leather_color !== undefined) {
      return "./site_assets/leather_colored_armor/leather_colored_chestplate.webp";

    } else if (itemNameId === "leather_leggings" && item.leather_color !== undefined) {
      return "./site_assets/leather_colored_armor/leather_colored_leggings.webp";

    } else if (itemNameId === "leather_boots" && item.leather_color !== undefined) {
      return "./site_assets/leather_colored_armor/leather_colored_boots.webp";

    } else if (itemNameId === "leather_horse_armor" && item.leather_color !== undefined) {
      return "./site_assets/leather_colored_armor/leather_colored_horse_armor.webp";

    } else if (itemNameId === "tipped_arrow" || itemNameId === "splash_potion" || itemNameId === "potion" || itemNameId === "lingering_potion") {
      return `./site_assets/minecraft-item/${itemNameId}_${itemPotion}.webp`;

    } else {
      return `./site_assets/minecraft-item/${itemNameId}.webp`;
    }
  };

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

  const renderArmorImage = (itemType) => {
    if (itemNameId.includes(itemType)) {
      return (
        <div className={classNames(styles["absoluteArmor"])}>
          <LazyLoadImage
            src={`./site_assets/patterns/${itemType}_pattern.webp`}
            width="100%"
            height="100%"
            effect="blur"
            alt="none"
          />
        </div>
      );
    }

    return null;
  };

  const imageSource = getImageSource();
  const imageTypeFolder = getImageTypeFolder();

  return (
    <div className={classNames(styles["wrapperImage"])}>
      <LazyLoadImage
        style={{...colorBG}}
        src={imageSource}
        width="100%"
        height="100%"
        effect="blur"
        alt="none"
      />

      {itemTrimMaterial !== undefined
        ?
        <div className={classNames(styles["absoluteArmor"])}>
          <LazyLoadImage
            src={`./site_assets/view_trim/${imageTypeFolder}/${itemTrimMaterial}.webp`}
            width="100%"
            height="100%"
            effect="blur"
            alt="none"
          />
        </div>
        :
        null
      }

      {itemEnchant.length > 0 || itemStoredEnchant.length > 0
        ?
        <div className={classNames(styles["enchant"])}>
          <LazyLoadImage
            src={`./site_assets/111.gif`}
            width="100%"
            height="100%"
            effect="blur"
            alt="none"
          />
        </div>
        :
        null
      }

      {armorType ? renderArmorImage(armorType) : null}

    </div>
  );
};

export default MinecraftImage;
