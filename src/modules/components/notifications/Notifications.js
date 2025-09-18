import CN from "classnames";
import React from "react";
import NotificationsSvgComponent from "../../../bases/icons/notificationsSvg/NotificationsSvg";

import styles from "./Notifications.module.scss";

const Notifications = ({ inf, type, format }) => {
  return (
    <div className={styles["notifications_container"]}>
      <span className={styles["span_icon"]}>
        <NotificationsSvgComponent width="100%" height="100%" color={type === "error" ? "#ff0000" : "#ffb400"} />
      </span>
      <h4
        className={CN(styles["notifications_information"], {
          [styles["notifications_error"]]: type === "error",
          [styles["notifications_warn"]]: type === "warn",
          [styles["text_center"]]: format === "center",
        })}
      >
        {inf}
      </h4>
    </div>
  );
};

export default Notifications;
