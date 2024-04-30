import React from "react";
import Notifications from "../../../notifications/Notifications";

export function checkName(name, setErrorMessage) {
  const label = name.trim();
  if (label.length < 5 || label.length > 300) {
    setErrorMessage(<Notifications inf="Имя должно содержать от 5 до 300 символов." type="error" />);
  } else {
    setErrorMessage(null);
  }
}
