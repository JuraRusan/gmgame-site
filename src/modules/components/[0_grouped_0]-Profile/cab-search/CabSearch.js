import classNames from "classnames";
import React from "react";
import {Link} from "react-router-dom";
import MapSvgAddBlock from "../../[0_grouped_0]-Maps-all-comp/mini-marker-components/map-svg-add-block/MapSvgAddBlock";

import styles from "./CabSearch.module.scss";

const CabSearch = ({onChange, name, count, to}) => {
  return (
    <div className={classNames(styles["boxSearchWrapper"])}>
      <input className={classNames(styles["searchInput"])} onChange={onChange} type="search" placeholder="Поиск"/>
      <h4 className={classNames(styles["numberListCount"])}>Количество {name} - {count}</h4>
      <Link to={to} className={classNames(styles["margin_btn"])}>
        <MapSvgAddBlock/>
      </Link>
    </div>
  );
}

export default CabSearch;
