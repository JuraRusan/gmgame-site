import classNames from "classnames";
import React from "react";

import styles from "./CabSearch.module.scss";
import "aos/dist/aos.css";

const CabSearch = (props) => {
  return (
    <div className={classNames(styles["boxSearchWrapper"])}>
      <input className={classNames(styles["searchInput"])} onChange={props.onChange} type="search" placeholder="Поиск"/>
      <h4 className={classNames(styles["numberListCount"])}>Количество {props.name} - {props.count}</h4>
    </div>
  );
}

export default CabSearch;
