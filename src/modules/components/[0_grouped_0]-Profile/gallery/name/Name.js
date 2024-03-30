import classNames from "classnames";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./Name.module.scss";

const Name = ({ name, onClick }) => {
  return (
    <div className={classNames(styles["name_box"])}>
      <LazyLoadImage
        wrapperClassName={classNames(styles["icon"])}
        width="100%"
        height="100%"
        src={`https://minotar.net/helm/${name}/100`}
        alt=""
        effect="blur"
      />
      <label className={classNames(styles["name"])}>{name}</label>
      <button className={classNames(styles["actions"])} onClick={onClick}>
        &#10008;
      </button>
    </div>
  );
};

export default Name;
