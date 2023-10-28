import classNames from "classnames";
import React, {useEffect, useState} from "react";

import styles from "./Player-cabinet.module.scss";

const PlayerCabinet = (props) => {

  const sliceName = props.global
  const [maxLength, setMaxLength] = useState(14)
  const outName = sliceName.length > maxLength ? `${sliceName.slice(0, maxLength)}...` : sliceName;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960 && window.innerWidth <= 1024) {
        setMaxLength(10);
      } else if (window.innerWidth > 960) {
        setMaxLength(14);
      } else {
        setMaxLength(33);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classNames(styles["playerWrapper"])}>
      <div className={classNames(styles["rowUser"])}>
        <img
          className={classNames(styles["image"])}
          src={`https://minotar.net/helm/${props.username}/100`}
          alt=""
        />
        <h5 className={classNames(styles["namePlayerH5"])}>{props.username}</h5>
      </div>
      <div className={classNames(styles["rowUser"])}>
        <img
          className={classNames(styles["image"])}
          src={`https://cdn.discordapp.com/avatars/${props.id}/${props.avatar}.png`}
          alt="none"
        />
        <h5 className={classNames(styles["namePlayerH5"])}>@{outName}</h5>
      </div>
    </div>
  );
}

export default PlayerCabinet;
