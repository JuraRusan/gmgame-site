import classNames from "classnames";
import React from "react";
import EditAddPost from "../../[0_grouped_0]-Profile/gallery/EditAddPost";
import LogTrade from "../../[0_grouped_0]-Profile/shops-user/LogTrade";

import styles from "./Box-view.module.scss";

const BoxView = ({ type = "gallery" }) => {
  return (
    <div className={classNames(styles["main_box"])}>
      <div className={classNames(styles["wrapper"])}>
        {type === "gallery" ? <EditAddPost /> : null}
        {type === "shopkeepers_log" ? <LogTrade /> : null}
      </div>
    </div>
  );
};

export default BoxView;
