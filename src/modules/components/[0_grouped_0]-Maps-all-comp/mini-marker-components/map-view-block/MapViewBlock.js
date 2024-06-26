import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BinSvgComponent from "../../../../../bases/icons/binSvg/BinSvg";
import ActionsButton from "../../../[0_grouped_0]-Profile/actions-button/ActionsButton";
import ConfirmModal from "../../../confirm-modal/ConfirmModal";

import styles from "./MapViewBlock.module.scss";

const MapViewBlock = ({ link_to, key, index, name, onClick }) => {
  const [isConfirmActive, setIsConfirmActive] = useState(false);

  return (
    <div key={key} className={classNames(styles["one_maps_element"])}>
      <Link to={link_to} className={classNames(styles["link_to"])}>
        <div className={classNames(styles["wrapper"])}>
          <p className={classNames(styles["elementIndex"])}>{index + 1}</p>
          <h3 className={classNames(styles["elementH3Name"])}>{name}</h3>
        </div>
      </Link>
      <div className={classNames(styles["action_column"])}>
        <ActionsButton
          onClick={() => {
            setIsConfirmActive(true);
          }}
          ico={<BinSvgComponent width="100%" height="100%" />}
        />
        <ConfirmModal
          open={isConfirmActive}
          close={() => setIsConfirmActive(false)}
          no={() => setIsConfirmActive(false)}
          yes={onClick}
        />
      </div>
    </div>
  );
};

export default MapViewBlock;
