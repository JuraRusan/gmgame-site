import classNames from "classnames";
import React, {useEffect, useState} from "react";

import styles from "./Player-cabinet.module.scss";

const PlayerCabinet = ({username}) => {

  const sliceName = username
  const [maxLength, setMaxLength] = useState(16)
  const outName = sliceName.length > maxLength ? `${sliceName.slice(0, maxLength)}...` : sliceName;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960 && window.innerWidth <= 1024) {
        setMaxLength(12);
      } else {
        setMaxLength(16);
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
          src={`https://minotar.net/helm/${username}/100`}
          alt=""
        />
        <h5 className={classNames(styles["namePlayerH5"])}>{outName}</h5>
      </div>
    </div>
  );
}

export default PlayerCabinet;
