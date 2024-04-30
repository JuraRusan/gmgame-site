import classNames from "classnames";
import React from "react";
import NotificationsSvgComponent from "../../../bases/icons/notificationsSvg/NotificationsSvg";

import styles from "./Notifications.module.scss";

const Notifications = ({ inf, type }) => {
  return (
    <div className={classNames(styles["notifications_container"])}>
      <span className={classNames(styles["span_icon"])}>
        <NotificationsSvgComponent width="24px" height="24px" color={type === "error" ? "#ff0000" : "#ffb400"} />
      </span>
      <h4
        className={classNames(styles["notifications_information"], {
          [styles["notifications_error"]]: type === "error",
          [styles["notifications_warn"]]: type === "warn",
        })}
      >
        {inf}
      </h4>
    </div>
  );
};

export default Notifications;
