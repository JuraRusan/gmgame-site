import classNames from "classnames";
import React from "react";
import AddSvgComponent from "../../../../../bases/icons/addSvg/AddSvg";

import styles from "./MapSvgAddBlock.module.scss";

const MapSvgAddBlock = () => {
  return (
    <div className={classNames(styles["add_wrapper"])}>
      <div className={classNames(styles["margin_add_box"])}>
        <AddSvgComponent width="100%" height="100%" color="#f4f4f4"/>
      </div>
    </div>
  );
};

export default MapSvgAddBlock;
