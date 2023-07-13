import classNames from "classnames";
import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

import styles from "./Minecraft-armor-type.module.scss"
import 'react-lazy-load-image-component/src/effects/blur.css';

const MinecraftArmorType = (props) => {

  const itemNameArmor = props.item_type_armor;
  const armorTrim = props.armor_trim_type
  const armorTrimMaterial = props.armor_trim_material

  const getSourceHelmetBase = () => {
    if (itemNameArmor === "turtle_helmet") {
      return "./site_assets/minecraft-armor-trim/base-armor/helmet/turtle.png"; // turtle_helmet
    } else if (itemNameArmor === "diamond_helmet") {
      return "./site_assets/minecraft-armor-trim/base-armor/helmet/diamond.png"; // diamond_helmet
    } else if (itemNameArmor === "golden_helmet") {
      return "./site_assets/minecraft-armor-trim/base-armor/helmet/golden.png"; // golden_helmet
    } else if (itemNameArmor === "iron_helmet") {
      return "./site_assets/minecraft-armor-trim/base-armor/helmet/iron.png"; // iron_helmet
    } else if (itemNameArmor === "netherite_helmet") {
      return "./site_assets/minecraft-armor-trim/base-armor/helmet/netherite.png"; // netherite_helmet
    } else if (itemNameArmor === "chainmail_helmet") {
      return "./site_assets/minecraft-armor-trim/base-armor/helmet/chainmail.png"; // chainmail_helmet
    } else {
      return `./site_assets/minecraft-armor-trim/base-armor/helmet/leather.png`;
    }
  };

  const getSourceChestplateBase = () => {
    if (itemNameArmor === "diamond_chestplate") {
      return "./site_assets/minecraft-armor-trim/base-armor/chestplate/diamond.png"; // diamond_chestplate
    } else if (itemNameArmor === "golden_chestplate") {
      return "./site_assets/minecraft-armor-trim/base-armor/chestplate/golden.png"; // golden_chestplate
    } else if (itemNameArmor === "iron_chestplate") {
      return "./site_assets/minecraft-armor-trim/base-armor/chestplate/iron.png"; // iron_chestplate
    } else if (itemNameArmor === "netherite_chestplate") {
      return "./site_assets/minecraft-armor-trim/base-armor/chestplate/netherite.png"; // netherite_chestplate
    } else if (itemNameArmor === "chainmail_chestplate") {
      return "./site_assets/minecraft-armor-trim/base-armor/chestplate/chainmail.png"; // chainmail_chestplate
    } else {
      return `./site_assets/minecraft-armor-trim/base-armor/chestplate/leather.png`;
    }
  };

  const getSourceLeggingsBase = () => {
    if (itemNameArmor === "diamond_leggings") {
      return "./site_assets/minecraft-armor-trim/base-armor/leggings/diamond.png"; // diamond_leggings
    } else if (itemNameArmor === "golden_leggings") {
      return "./site_assets/minecraft-armor-trim/base-armor/leggings/golden.png"; // golden_leggings
    } else if (itemNameArmor === "iron_leggings") {
      return "./site_assets/minecraft-armor-trim/base-armor/leggings/iron.png"; // iron_leggings
    } else if (itemNameArmor === "netherite_leggings") {
      return "./site_assets/minecraft-armor-trim/base-armor/leggings/netherite.png"; // netherite_leggings
    } else if (itemNameArmor === "chainmail_leggings") {
      return "./site_assets/minecraft-armor-trim/base-armor/leggings/chainmail.png"; // chainmail_leggings
    } else {
      return `./site_assets/minecraft-armor-trim/base-armor/leggings/leather.png`;
    }
  };

  const getSourceBootsBase = () => {
    if (itemNameArmor === "diamond_boots") {
      return "./site_assets/minecraft-armor-trim/base-armor/boots/diamond.png"; // diamond_boots
    } else if (itemNameArmor === "golden_boots") {
      return "./site_assets/minecraft-armor-trim/base-armor/boots/golden.png"; // golden_boots
    } else if (itemNameArmor === "iron_boots") {
      return "./site_assets/minecraft-armor-trim/base-armor/boots/iron.png"; // iron_boots
    } else if (itemNameArmor === "netherite_boots") {
      return "./site_assets/minecraft-armor-trim/base-armor/boots/netherite.png"; // netherite_boots
    } else if (itemNameArmor === "chainmail_boots") {
      return "./site_assets/minecraft-armor-trim/base-armor/boots/chainmail.png"; // chainmail_boots
    } else {
      return `./site_assets/minecraft-armor-trim/base-armor/boots/leather.png`;
    }
  };

  const getSwipeChestplate = () => {
    if (itemNameArmor === "iron_chestplate") {
      return `./site_assets/minecraft-armor-trim/trims/metalchestplates/${armorTrim}/${armorTrim}_${armorTrimMaterial}.png`;
    } else {
      return `./site_assets/minecraft-armor-trim/trims/chestplate/${armorTrim}/${armorTrim}_${armorTrimMaterial}.png`;
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
        src="./site_assets/minecraft-armor-trim/armor_stand.png"
        width="auto"
        height="auto"
        effect="blur"
        alt=""
      />

      {itemNameArmor.includes("leggings")
        ?
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
            src={`./site_assets/minecraft-armor-trim/trims/leggings/${armorTrim}/${armorTrim}_${armorTrimMaterial}.png`}
            alt=""
            width="auto"
            height="auto"
            effect="blur"
          />
        </div>
        :
        null
      }

      {itemNameArmor.includes("boots")
        ?
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
            src={`./site_assets/minecraft-armor-trim/trims/boots/${armorTrim}/${armorTrim}_${armorTrimMaterial}.png`}
            alt=""
            width="auto"
            height="auto"
            effect="blur"
          />
        </div>
        :
        null
      }
      {itemNameArmor.includes("chestplate")
        ?
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
        :
        null
      }
      {itemNameArmor.includes("helmet")
        ?
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
            src={`./site_assets/minecraft-armor-trim/trims/helmet/${armorTrim}/${armorTrim}_${armorTrimMaterial}.png`}
            alt=""
            width="auto"
            height="auto"
            effect="blur"
          />
        </div>
        :
        null
      }

    </div>
  );
};

export default MinecraftArmorType;
