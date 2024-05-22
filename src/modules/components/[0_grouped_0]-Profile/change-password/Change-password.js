import classNames from "classnames";
import React, { useState } from "react";
import { sendRequest } from "../../../../DataProvider";
import { useAlert } from "react-alert";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";
import Button from "../../button/Button";
import Input from "../../input/Input";
import Checkbox from "../../checkbox/Checkbox";
import FormTitle from "../../form-title/FormTitle";

import styles from "./Change-password.module.scss";

const MIN_LENGTH = 8;
const MAX_LENGTH = 32;

const ChangePassword = () => {
  const isLoading = useLoading();

  const alert = useAlert();

  const [passwordValue, setPasswordValue] = useState("");
  const [passwordErrorValue, setPasswordErrorValue] = useState("");

  const [checked, setChecked] = useState(false);
  const [type, setType] = useState("password");

  const handleCheckboxClick = (isChecked) => {
    setType(isChecked ? "text" : "password");
  };

  const validatePassword = (text) => {
    const hasNumber = /\d/;
    const hasLetter = /[a-zA-Z]/;
    const hasUnderscore = /_/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    return hasNumber.test(text) && hasLetter.test(text) && hasUnderscore.test(text) && hasSpecialChar.test(text);
  };

  const checkPassword = (pass) => {
    if (pass.length < MIN_LENGTH) {
      setPasswordErrorValue("Пароль слишком короткий");
    } else if (pass.length > MAX_LENGTH) {
      setPasswordErrorValue("Пароль слишком длинный");
    } else if (validatePassword(pass)) {
      setPasswordErrorValue("Пароль не соответствует требованиям");
    } else {
      setPasswordErrorValue("");
    }
  };

  const changePassword = () => {
    if (passwordErrorValue !== "") {
      alert.error(passwordErrorValue);
      return;
    }

    sendRequest("/api/change_password", "POST", {
      password: passwordValue,
    }).then((response) => {
      if (response.message) {
        alert.success(response.message);
      } else {
        alert.error(response.error);
      }
    });
  };

  if (isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["block_password"])}>
      <FormTitle title="Введите новый пароль" count={false} required={false} center={true} />
      <Input
        className={classNames(styles["password"])}
        type={type}
        onChange={(e) => {
          setPasswordValue(e.target.value);
          checkPassword(e.target.value);
        }}
      />
      <Checkbox
        checked={checked}
        onChange={setChecked}
        onClick={handleCheckboxClick}
        message="Показать пароль"
        className={classNames(styles["check_wrapper"])}
      />
      <Button label="Изменить" view="submit" onClick={changePassword} />
    </div>
  );
};

export default ChangePassword;
