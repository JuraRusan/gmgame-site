import classNames from "classnames";
import React, { useState } from "react";
import ConfirmModal from "../confirm-modal/ConfirmModal";

import styles from "./Table.module.scss";

const TButton = ({ onClick, typeClick = false, name = "", message = "", ...props }) => {
  const [isConfirmActive, setIsConfirmActive] = useState(false);

  return (
    <>
      <button
        className={classNames(styles["tableButton"])}
        onClick={() => (typeClick ? onClick() : setIsConfirmActive(true))}
        {...props}
      >
        {name}
      </button>
      {typeClick ? null : (
        <ConfirmModal
          open={isConfirmActive}
          close={() => setIsConfirmActive(false)}
          no={() => setIsConfirmActive(false)}
          yes={onClick}
          message={message}
        />
      )}
    </>
  );
};

export default TButton;
