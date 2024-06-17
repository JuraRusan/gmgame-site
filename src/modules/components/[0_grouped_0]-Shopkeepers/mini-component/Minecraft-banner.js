import classNames from "classnames";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./Minecraft-banner.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const MinecraftBanner = ({ item, type }) => {
  return (
    <div
      className={classNames(styles["flag_group"], {
        [styles["center"]]: type === "center",
        [styles["normal"]]: type === "normal",
      })}
    >
      <LazyLoadImage
        src={`./site_assets/flag_pattern/${item.id}.webp`}
        width="100%"
        height="100%"
        alt="none"
        effect="blur"
      />
      <div className={classNames(styles["shadow"])}>
        <LazyLoadImage
          src="./site_assets/flag_pattern/shadow.webp"
          width="100%"
          height="100%"
          alt="none"
          effect="blur"
        />
      </div>
      {item.banner_pattern?.map((el, i) => (
        <div className={classNames(styles["flag"])} key={i}>
          <LazyLoadImage
            src={`./site_assets/flag_pattern/${el.color}/pattern_${el.pattern}.webp`}
            width="100%"
            height="100%"
            alt="none"
            effect="blur"
          />
        </div>
      ))}
    </div>
  );
};

export default MinecraftBanner;
