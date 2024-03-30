import classNames from "classnames";
import React from "react";
import EditAddPost from "../../[0_grouped_0]-Profile/gallery/EditAddPost";

import styles from "./Box-view-status.module.scss";

const BoxViewStatus = () => {
  return (
    <div className={classNames(styles["box_wrapper"])}>
      <EditAddPost />
    </div>
  );
};

export default BoxViewStatus;
