import React, { useState } from "react";
import { Link } from "react-router-dom";
import BinSvgComponent from "../../../../../bases/icons/binSvg/BinSvg";
import ActionsButton from "../../../[0_grouped_0]-Profile/actions-button/ActionsButton";
import ConfirmModal from "../../../confirm-modal/ConfirmModal";

import styles from "./MapViewBlock.module.scss";

const MapViewBlock = ({ link_to, index, name, onClick }) => {
  const [isConfirmActive, setIsConfirmActive] = useState(false);

  return (
    <div className={styles["one_maps_element"]}>
      <Link to={link_to} className={styles["link_to"]}>
        <div className={styles["wrapper"]}>
          <p className={styles["index_count"]}>{index + 1}</p>
          <h3 className={styles["element_name"]}>{name}</h3>
        </div>
      </Link>
      <div className={styles["action_box"]}>
        <ActionsButton onClick={() => setIsConfirmActive(true)} ico={<BinSvgComponent width="100%" height="100%" />} />
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
