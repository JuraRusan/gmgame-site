import React from "react";
import Notifications from "../../../notifications/Notifications";

export function checkForm(number, setErrorMessage) {
  const cord = number.trim();
  if (!/^[0-9+-]+$/.test(cord)) {
    setErrorMessage(<Notifications inf="Только числа" type="error"/>)
  } else {
    setErrorMessage(null);
  }
}