import React from "react";
import NotificationsSvgComponent from "../../../../../bases/icons/notificationsSvg/NotificationsSvg";

export function checkForm(number, setErrorMessage) {
  const cord = number.trim();
  if (!/^[0-9+-]+$/.test(cord)) {
    setErrorMessage(<NotificationsSvgComponent inf="Только числа" type="error"/>)
  } else {
    setErrorMessage(null);
  }
}