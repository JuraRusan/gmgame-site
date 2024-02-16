import classNames from "classnames";
import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

import styles from "./Minecraft-shield.module.scss"
import 'react-lazy-load-image-component/src/effects/blur.css';

const MinecraftShield = ({item, type}) => {

  return (
    <div
      className={classNames(styles["shield_group"],
        {
          [styles["center"]]: type === "center",
          [styles["normal"]]: type === "normal"
        }
      )}
    >
      <LazyLoadImage
        src={`./site_assets/shield_pattern/${item.shield_color.color}_shield.webp`}
        width="100%"
        height="100%"
        alt="none"
        effect="blur"
      />
      <div className={classNames(styles["shadow"])}>
        <LazyLoadImage
          src="./site_assets/shield_pattern/shadow.webp"
          width="100%"
          height="100%"
          alt="none"
          effect="blur"
        />
      </div>
      {item.banner_pattern?.map((el, i) => (
        <div className={classNames(styles["shield"])} key={i}>
          <LazyLoadImage
            src={`./site_assets/shield_pattern/${el.color}/pattern_${el.pattern}.webp`}
            width="100%"
            height="100%"
            alt="none"
            effect="blur"
          />
        </div>
      ))}
      {!item.enchant ?
        null
        :
        <div className={classNames(styles["enchant"])}>
          <LazyLoadImage
            src={`./site_assets/animation_v.png`}
            width="100%"
            height="100%"
            alt="none"
            effect="blur"
          />
        </div>
      }
    </div>
  );
};

export default MinecraftShield;
