import classNames from "classnames";
import React from "react";
import useLoading from "../../../loading/useLoading";

import styles from "./CabNotAvailable.module.scss";
import Preload from "../../preloader/Preload";

const CabNotAvailable = () => {

  const isLoading = useLoading();

  if (isLoading) {
    return <Preload full={false}/>
  }

  return (
    <div className={classNames(styles["wrapper_not_available"])}>
      <h4 className={classNames(styles["title"])}>Страница находится в процессе разработки, ожидайте в ближайшем будущем.</h4>
    </div>
  );
};

export default CabNotAvailable;
