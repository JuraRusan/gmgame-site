import classNames from "classnames";
import React from "react";
import {Link} from 'react-router-dom';
import BinSvgComponent from "../../../../../bases/icons/binSvg/BinSvg";

import styles from "./MapViewBlock.module.scss";

const MapViewBlock = ({link_to, key, index, name, onClick}) => {
  return (
    <div key={key} className={classNames(styles["one_maps_element"])}>
      <Link to={link_to} className={classNames(styles["link_to"])}>
        <div className={classNames(styles["wrapper"])}>
          <p className={classNames(styles["elementIndex"])}>{index + 1}</p>
          <h3 className={classNames(styles["elementH3Name"])}>{name}</h3>
        </div>
      </Link>
      <button className={classNames(styles["actions"], styles["hover_delete"])} onClick={onClick}>
        <BinSvgComponent width="100%" height="100%" color="#f4f4f4"/>
      </button>
    </div>
  );
};

export default MapViewBlock;
