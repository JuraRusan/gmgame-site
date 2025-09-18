import React, { useMemo } from "react";
import { sendRequest } from "../../../../DataProvider";
import { useAlert } from "@blaumaus/react-alert";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";
import Button from "../../button/Button";
import Input from "../../input/Input";
import FormTitle from "../../form-title/FormTitle";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Notifications from "../../notifications/Notifications";

import styles from "./Change-password.module.scss";

const ErrorRender = ({ name, errors }) => {
  return (
    <ErrorMessage errors={errors} name={name} render={({ message }) => <Notifications inf={message} type="error" />} />
  );
};

const ChangePassword = () => {
  const isLoading = useLoading();

  const alert = useAlert();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const changePassword = ({ password }) => {
    sendRequest("/api/change_password", "POST", {
      password: password,
    }).then((response) => {
      if (response.message) {
        alert.success(response.message);
      } else {
        alert.error(response.error);
      }
    });
  };

  const formFields = useMemo(() => {
    return {
      password: register("password", {
        required: { value: true, message: "Обязательное поле" },
        minLength: { value: 8, message: "Пароль должен быть от 8 символов" },
        maxLength: { value: 32, message: "Слишком длинный пароль" },
      }),
    };
  }, [register]);

  if (isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={styles["block_password"]}>
      <form className={styles["form"]}>
        <FormTitle title="Введите новый пароль" min={8} max={32} length={watch("password")?.length || 0} />
        <Input type="password" autoComplete="off" placeholder="&nbsp;" {...formFields["password"]} />
        <ErrorRender errors={errors} name="password" />
      </form>
      <Button
        className={styles["action"]}
        label="Изменить"
        view="submit"
        disabled={!isValid}
        onClick={handleSubmit(changePassword)}
      />
    </div>
  );
};

export default ChangePassword;
