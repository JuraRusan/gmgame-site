import classNames from "classnames";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import ButtonCloseSvgComponent from "../../bases/icons/buttonCloseSvg/ButtonCloseSvg";

import styles from "./MyModal.module.scss";

const Footer = ({ open = false, showClose = true, setOpen = () => {}, children, param }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (open) {
      setModal(true);
      document.body.style.setProperty("padding-right", "8px", "important");
      document.body.style.overflow = "hidden";
    } else {
      setModal(false);
      document.body.style.paddingRight = "0px";
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <ReactModal
      isOpen={modal}
      className={classNames(styles["modal_main_box"])}
      overlayClassName={classNames(styles["overlay_modal_full"])}
      ariaHideApp={false}
      {...param}
    >
      <div className={classNames(styles["window"])}>
        {showClose && (
          <button
            onClick={() => {
              setModal(false);
              setOpen(false);
            }}
            className={classNames(styles["modal_close"])}
          >
            <ButtonCloseSvgComponent width="100%" height="100%" />
          </button>
        )}
        {children}
      </div>
    </ReactModal>
  );
};

export default Footer;
