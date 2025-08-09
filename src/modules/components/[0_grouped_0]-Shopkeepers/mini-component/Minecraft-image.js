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

  if (item.shield) {
    imagesArr.push(process.env.PUBLIC_URL + `/site_assets/shield_pattern/${item.shield}.webp`);
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
    </div>
  );
};

export default MinecraftImage;
