import classNames from "classnames";
import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

import styles from "./Minecraft-banner.module.scss"
import 'react-lazy-load-image-component/src/effects/blur.css';

const MinecraftBanner = (props) => {

  const arrayBanner = props.array_banner

  return (
    <div className={classNames(styles["flagGroup"])}>
      <div className={classNames(styles["flag"])}>
        <LazyLoadImage
          src={`./site_assets/flag_pattern/${props.item_minecraft_name_id}.webp`}
          width="100%"
          height="100%"
          alt="none"
          effect="blur"
        />
      </div>
      <div className={classNames(styles["flag"])}>
        <LazyLoadImage
          src="./site_assets/flag_pattern/pattern_shadow.webp"
          width="100%"
          height="100%"
          alt="none"
          effect="blur"
        />
      </div>
      {arrayBanner?.map((el, i) => (
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
