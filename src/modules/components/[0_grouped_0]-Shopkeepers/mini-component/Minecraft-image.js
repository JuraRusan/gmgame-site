import classNames from "classnames";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ARRAY_MAPPINGS } from "../../../pages/shopkeepers/AnimationType";

import styles from "./Minecraft-image.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const MinecraftImage = ({ item }) => {
  const itemNameId = item.id;
  const itemEnchant = !item.enchant ? [] : item.enchant;
  const colorBG = item.leather_color !== undefined ? { backgroundColor: item.leather_color } : {};
  const includesType = ARRAY_MAPPINGS[itemNameId];

  const getImageSource = () => {
    if (itemNameId === "enchanted_golden_apple") {
      return process.env.PUBLIC_URL + `/site_assets/minecraft-item/golden_apple.webp`;
      // --------------------------------------------
    } else if (itemNameId === "written_book") {
      return process.env.PUBLIC_URL + `/site_assets/minecraft-item/book.webp`;
      // --------------------------------------------
    } else if (itemNameId === "enchanted_book") {
      return process.env.PUBLIC_URL + `/site_assets/minecraft-item/book.webp`;
      // --------------------------------------------
    } else if (itemNameId === "end_crystal") {
      return process.env.PUBLIC_URL + `/site_assets/animation_webp/end_crystal.webp`;
      // --------------------------------------------
    } else if (itemNameId === "sculk_sensor") {
      return process.env.PUBLIC_URL + `/site_assets/animation_webp/sculk_sensor.webp`;
      // --------------------------------------------
    } else if (itemNameId === "calibrated_sculk_sensor") {
      return process.env.PUBLIC_URL + `/site_assets/animation_webp/calibrated_sculk_sensor.webp`;
      // --------------------------------------------
    } else if (itemNameId === "leather_helmet" && item.leather_color !== undefined) {
      return process.env.PUBLIC_URL + `/site_assets/leather_colored_armor/leather_colored_helmet.webp`;
      // --------------------------------------------
    } else if (itemNameId === "leather_chestplate" && item.leather_color !== undefined) {
      return process.env.PUBLIC_URL + `/site_assets/leather_colored_armor/leather_colored_chestplate.webp`;
      // --------------------------------------------
    } else if (itemNameId === "leather_leggings" && item.leather_color !== undefined) {
      return process.env.PUBLIC_URL + `/site_assets/leather_colored_armor/leather_colored_leggings.webp`;
      // --------------------------------------------
    } else if (itemNameId === "leather_boots" && item.leather_color !== undefined) {
      return process.env.PUBLIC_URL + `/site_assets/leather_colored_armor/leather_colored_boots.webp`;
      // --------------------------------------------
    } else if (itemNameId === "leather_horse_armor" && item.leather_color !== undefined) {
      return process.env.PUBLIC_URL + `/site_assets/leather_colored_armor/leather_colored_horse_armor.webp`;
      // --------------------------------------------
    } else if (itemNameId === "smithing_template") {
      if (item.improvement === "netherite_upgrade") {
        return process.env.PUBLIC_URL + `/site_assets/minecraft-item/${item.improvement}_${item.id}.webp`;
      } else {
        return process.env.PUBLIC_URL + `/site_assets/minecraft-item/${item.improvement}_armor_trim_${item.id}.webp`;
      }
      // --------------------------------------------
    } else {
      return process.env.PUBLIC_URL + `/site_assets/minecraft-item/${itemNameId}.webp`;
    }
  };

  const getImageTypeFolder = () => {
    if (itemNameId.includes("helmet")) {
      return "helmet";
    } else if (itemNameId.includes("chestplate")) {
      return "chestplate";
    } else if (itemNameId.includes("leggings")) {
      return "leggings";
    } else if (itemNameId.includes("boots")) {
      return `boots`;
    } else {
      return `boots`;
    }
  };

  const renderArmorImage = (itemType) => {
    if (itemNameId.includes(itemType)) {
      return (
        <div className={classNames(styles["absoluteArmor"])}>
          <LazyLoadImage
            src={process.env.PUBLIC_URL + `/site_assets/patterns/${itemType}_pattern.webp`}
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
      <LazyLoadImage style={{ ...colorBG }} src={imageSource} width="100%" height="100%" effect="blur" alt="none" />

      {item.trim && (
        <div className={classNames(styles["absoluteArmor"])}>
          <LazyLoadImage
            src={process.env.PUBLIC_URL + `/site_assets/view_trim/${imageTypeFolder}/${item.trim.material}.webp`}
            width="100%"
            height="100%"
            effect="blur"
            alt="none"
          />
        </div>
      )}

      {itemEnchant.length > 0 || itemNameId === "written_book" || itemNameId === "enchanted_golden_apple" ? (
        <div className={classNames(styles["enchant"])}>
          <LazyLoadImage
            src={process.env.PUBLIC_URL + `/site_assets/animation_h.png`}
            width="100%"
            height="100%"
            effect="blur"
            alt="none"
          />
        </div>
      ) : null}

      {includesType ? renderArmorImage(includesType) : null}
    </div>
  );
};

export default MinecraftImage;
