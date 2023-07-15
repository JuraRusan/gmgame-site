import classNames from "classnames";
import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {animation_type} from "../../../pages/shopkeepers/AnimationType";

import styles from "./Minecraft-image.module.scss"
import 'react-lazy-load-image-component/src/effects/blur.css';

const MinecraftImage = (props) => {

  const itemNameId = props.item_minecraft_name_id;
  const idPotion = props.item_minecraft_id_potion;

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
    } else if (
      itemNameId === "tipped_arrow" ||
      itemNameId === "splash_potion" ||
      itemNameId === "potion" ||
      itemNameId === "lingering_potion"
    ) {
      return `./site_assets/minecraft-item/${itemNameId}_${idPotion}.webp`;
    } else if (animation_type.includes(itemNameId)) {
      if (props.enchantsList?.length > 0) {
        return `./site_assets/animation_webp/${itemNameId}.webp`;
      } else {
        return `./site_assets/minecraft-item/${itemNameId}.webp`;
      }
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


  const imageSource = getImageSource();
  const imageTypeFolder = getImageTypeFolder();

  return (
    <div className={classNames(styles["wrapperImage"])}>
      <LazyLoadImage
        src={imageSource}
        width="100%"
        height="100%"
        effect="blur"
        alt="none"
      />
      {props.armor_trim_material !== undefined
        ?
        <div className={classNames(styles["absoluteArmor"])}>
          <LazyLoadImage
            src={`./site_assets/view_trim/${imageTypeFolder}/${props.armor_trim_material}.webp`}
            width="100%"
            height="100%"
            effect="blur"
            alt="none"
          />
        </div>
        :
        null
      }
    </div>
  );
};

export default MinecraftImage;
