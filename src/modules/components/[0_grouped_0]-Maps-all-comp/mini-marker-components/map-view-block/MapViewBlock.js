import classNames from "classnames";
import React from "react";
import {Link} from 'react-router-dom';
import BinSvgComponent from "../../../../../bases/icons/binSVG/binSvg";
import SvgSettings from "../../../../../bases/icons/SvgSettings";

import styles from "./MapViewBlock.module.scss";

const MapViewBlock = (props) => {
  return (
    <div key={props.key} className={classNames(styles["oneMapsElement"])}>
      <div className={classNames(styles["columnsOne"])}>
        <p className={classNames(styles["elementIndex"])}>{props.index + 1}</p>
        <h3 className={classNames(styles["elementH3Name"])}>{props.name}</h3>
      </div>
      <div className={classNames(styles["columnsTwo"])}>
        <Link to={props.link_to} className={classNames(styles["actions"], styles["hover_settings"])}>
          <SvgSettings width="100%" height="100%" color="#f4f4f4"/>
        </Link>
        <button className={classNames(styles["actions"], styles["hover_delete"])} onClick={props.onClick}>
          <BinSvgComponent width="100%" height="100%" color="#f4f4f4"/>
        </button>
      </div>
    </div>
  );
};

export default MapViewBlock;
