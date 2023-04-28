import classNames from "classnames";
import React from "react";

import styles from "./Player-cabinet.module.scss";

const PlayerCabinet = (user) => {
  return (
    <div className={classNames(styles["playerWrapper"])}>
      <img className={classNames(styles["playerImage"])} src={`https://minotar.net/helm/${user.username}/100`} alt=""/>
      <h5 className={classNames(styles["namePlayerH5"])}>{user.username}</h5>
    </div>
  );
}

export default PlayerCabinet;
