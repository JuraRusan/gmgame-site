import React from "react";
import NotificationsSvgComponent from "../../../../../bases/icons/notificationsSvg/NotificationsSvg";

export function checkName(name, setErrorMessage) {
  const label = name.trim();
  if (label.length < 5 || label.length > 300) {
    setErrorMessage(<NotificationsSvgComponent inf="Имя должно содержать от 5 до 300 символов." type="error"/>);
  } else {
    setErrorMessage(null);
  }
}