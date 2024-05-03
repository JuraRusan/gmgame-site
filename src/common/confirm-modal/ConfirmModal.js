import classNames from "classnames";
import React, { useEffect } from "react";
import ReactModal from "react-modal";
import Button from "../../modules/components/button/Button";

import styles from "./ConfirmModal.module.scss";

const ConfirmModal = ({ yes, no }) => {
  const handleYes = () => {
    document.body.style.overflow = "auto";
    no();
  };

  const handleNo = () => {
    document.body.style.overflow = "auto";
    yes();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <ReactModal
      isOpen={true}
      className={classNames(styles["modal_main_box"])}
      overlayClassName={classNames(styles["overlay_modal_full"])}
      ariaHideApp={false}
    >
      <div className={classNames(styles["window"])}>
        <p className={classNames(styles["text"])}>Подтвердите удаление</p>
        <div className={classNames(styles["actions"])}>
          <Button onClick={handleYes} view="submit" label="Отменить" />
          <Button onClick={handleNo} view="delete" label="Удалить" />
        </div>
      </div>
    </ReactModal>
  );
};

export default ConfirmModal;
