import classNames from "classnames";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./Minecraft-armor-type.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const MinecraftArmorType = ({ item }) => {
  const id = item.id;
  const pattern = item.trim.pattern;
  const material = item.trim.material;

  const getSourceHelmetBase = () => {
    if (id === "turtle_helmet") {
      return "./site_assets/minecraft-armor-trim/base-armor/helmet/turtle.webp"; // turtle_helmet
    } else if (id === "diamond_helmet") {
      return "./site_assets/minecraft-armor-trim/base-armor/helmet/diamond.webp"; // diamond_helmet
    } else if (id === "golden_helmet") {
      return "./site_assets/minecraft-armor-trim/base-armor/helmet/golden.webp"; // golden_helmet
    } else if (id === "iron_helmet") {
      return "./site_assets/minecraft-armor-trim/base-armor/helmet/iron.webp"; // iron_helmet
    } else if (id === "netherite_helmet") {
      return "./site_assets/minecraft-armor-trim/base-armor/helmet/netherite.webp"; // netherite_helmet
    } else if (id === "chainmail_helmet") {
      return "./site_assets/minecraft-armor-trim/base-armor/helmet/chainmail.webp"; // chainmail_helmet
    } else {
      return `./site_assets/minecraft-armor-trim/base-armor/helmet/leather.webp`;
    }
  };

  const getSourceChestplateBase = () => {
    if (id === "diamond_chestplate") {
      return "./site_assets/minecraft-armor-trim/base-armor/chestplate/diamond.webp"; // diamond_chestplate
    } else if (id === "golden_chestplate") {
      return "./site_assets/minecraft-armor-trim/base-armor/chestplate/golden.webp"; // golden_chestplate
    } else if (id === "iron_chestplate") {
      return "./site_assets/minecraft-armor-trim/base-armor/chestplate/iron.webp"; // iron_chestplate
    } else if (id === "netherite_chestplate") {
      return "./site_assets/minecraft-armor-trim/base-armor/chestplate/netherite.webp"; // netherite_chestplate
    } else if (id === "chainmail_chestplate") {
      return "./site_assets/minecraft-armor-trim/base-armor/chestplate/chainmail.webp"; // chainmail_chestplate
    } else {
      return `./site_assets/minecraft-armor-trim/base-armor/chestplate/leather.webp`;
    }
  };

  const getSourceLeggingsBase = () => {
    if (id === "diamond_leggings") {
      return "./site_assets/minecraft-armor-trim/base-armor/leggings/diamond.webp"; // diamond_leggings
    } else if (id === "golden_leggings") {
      return "./site_assets/minecraft-armor-trim/base-armor/leggings/golden.webp"; // golden_leggings
    } else if (id === "iron_leggings") {
      return "./site_assets/minecraft-armor-trim/base-armor/leggings/iron.webp"; // iron_leggings
    } else if (id === "netherite_leggings") {
      return "./site_assets/minecraft-armor-trim/base-armor/leggings/netherite.webp"; // netherite_leggings
    } else if (id === "chainmail_leggings") {
      return "./site_assets/minecraft-armor-trim/base-armor/leggings/chainmail.webp"; // chainmail_leggings
    } else {
      return `./site_assets/minecraft-armor-trim/base-armor/leggings/leather.webp`;
    }
  };

  const getSourceBootsBase = () => {
    if (id === "diamond_boots") {
      return "./site_assets/minecraft-armor-trim/base-armor/boots/diamond.webp"; // diamond_boots
    } else if (id === "golden_boots") {
      return "./site_assets/minecraft-armor-trim/base-armor/boots/golden.webp"; // golden_boots
    } else if (id === "iron_boots") {
      return "./site_assets/minecraft-armor-trim/base-armor/boots/iron.webp"; // iron_boots
    } else if (id === "netherite_boots") {
      return "./site_assets/minecraft-armor-trim/base-armor/boots/netherite.webp"; // netherite_boots
    } else if (id === "chainmail_boots") {
      return "./site_assets/minecraft-armor-trim/base-armor/boots/chainmail.webp"; // chainmail_boots
    } else {
      return `./site_assets/minecraft-armor-trim/base-armor/boots/leather.webp`;
    }
  };

  const getSwipeChestplate = () => {
    if (id === "iron_chestplate") {
      return `./site_assets/minecraft-armor-trim/trims/metalchestplates/${pattern}/${pattern}_${material}.webp`;
    } else {
      return `./site_assets/minecraft-armor-trim/trims/chestplate/${pattern}/${pattern}_${material}.webp`;
    }
  };

  const sourceHelmetBase = getSourceHelmetBase();
  const sourceChestplateBase = getSourceChestplateBase();
  const sourceLeggingsBase = getSourceLeggingsBase();
  const sourceBootsBase = getSourceBootsBase();

  const swipeChestplate = getSwipeChestplate();

  return (
    <div className={classNames(styles["armor"])}>
      <LazyLoadImage
        className={classNames(styles["layersArmorStand"])}
        src="./site_assets/minecraft-armor-trim/armor_stand.webp"
        width="auto"
        height="auto"
        effect="blur"
        alt=""
      />

      {id.includes("leggings") ? (
        <div className={classNames(styles["leggings"])}>
          <LazyLoadImage
            className={classNames(styles["layersArmor"])}
            src={sourceLeggingsBase}
            alt=""
            width="auto"
            height="auto"
            effect="blur"
          />
          <LazyLoadImage
            className={classNames(styles["layersTrim"])}
            src={`./site_assets/minecraft-armor-trim/trims/leggings/${pattern}/${pattern}_${material}.webp`}
            alt=""
            width="auto"
            height="auto"
            effect="blur"
          />
        </div>
      ) : null}

      {id.includes("boots") ? (
        <div className={classNames(styles["boots"])}>
          <LazyLoadImage
            className={classNames(styles["layersArmor"])}
            src={sourceBootsBase}
            alt=""
            width="auto"
            height="auto"
            effect="blur"
          />
          <LazyLoadImage
            className={classNames(styles["layersTrim"])}
            src={`./site_assets/minecraft-armor-trim/trims/boots/${pattern}/${pattern}_${material}.webp`}
            alt=""
            width="auto"
            height="auto"
            effect="blur"
          />
        </div>
      ) : null}
      {id.includes("chestplate") ? (
        <div className={classNames(styles["chestplate"])}>
          <LazyLoadImage
            className={classNames(styles["layersArmor"])}
            src={sourceChestplateBase}
            alt=""
            width="auto"
            height="auto"
            effect="blur"
          />
          <LazyLoadImage
            className={classNames(styles["layersTrim"])}
            src={swipeChestplate}
            alt=""
            width="auto"
            height="auto"
            effect="blur"
          />
        </div>
      ) : null}
      {id.includes("helmet") ? (
        <div className={classNames(styles["helmet"])}>
          <LazyLoadImage
            className={classNames(styles["layersArmor"])}
            src={sourceHelmetBase}
            alt=""
            width="auto"
            height="auto"
            effect="blur"
          />
          <LazyLoadImage
            className={classNames(styles["layersTrim"])}
            src={`./site_assets/minecraft-armor-trim/trims/helmet/${pattern}/${pattern}_${material}.webp`}
            alt=""
            width="auto"
            height="auto"
            effect="blur"
          />
        </div>
      ) : null}
    </div>
  );
};

export default MinecraftArmorType;
