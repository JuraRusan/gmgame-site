import CN from "classnames";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { sendRequest } from "../../../DataProvider";
import { useAlert } from "@blaumaus/react-alert";
import Notifications from "../notifications/Notifications";
import Button from "../button/Button";
import FormTitle from "../form-title/FormTitle";
import Input from "../input/Input";
import Select from "../select/Select";

import styles from "./Auth-comp.module.scss";
import Textarea from "../textarea/Textarea";

const AKK_VALUE = [
  { value: "1", name: "Лицензия" },
  { value: "0", name: "Пиратка" },
];

const AuthComponent = () => {
  const alert = useAlert();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => console.log(data);

  function ErrorRender(name) {
    return (
      <ErrorMessage
        errors={errors}
        name={name.name}
        render={({ message }) => <span className={styles["error"]}>{message}</span>}
      />
    );
  }

  const registration = ({ username, password, type_account, age, about, interests, back_servers, friend_name }) => {
    sendRequest("/api/registration_user", "POST", {
      login: username,
      password: password,
      type: type_account,
      age: age,
      from_about: about,
      you_about: interests,
      servers: back_servers,
      friend_name: friend_name,
    }).then((response) => {
      if (!response.error) {
        alert.success(response.message);
        window.location.reload(true);
      } else {
        alert.error(response.body?.error || response.error);
      }
    });
  };

  const errorInfo = {
    username: errors.username,
    password: errors.password,
    type_account: errors.type_account,
    age: errors.age,
    about: errors.about,
    interests: errors.interests,
    back_servers: errors.back_servers,
    checkbox: errors.checkbox,
  };

  const formFields = useMemo(() => {
    return {
      username: register("username", {
        required: { value: true, message: "Обязательное поле" },
        maxLength: { value: 16, message: "Слишком длинный логин" },
        pattern: {
          value: /^[a-zA-Z0-9_]+$/,
          message: "Недопустимые символы",
        },
      }),
      password: register("password", {
        required: { value: true, message: "Обязательное поле" },
        minLength: { value: 8, message: "Пароль должен быть от 8 символов" },
        maxLength: { value: 32, message: "Слишком длинный пароль" },
      }),
      type_account: register("type_account", {
        required: { value: true, message: "Обязательное поле" },
      }),
      age: register("age", {
        required: { value: true, message: "Обязательное поле" },
      }),
      friend_name: register("friend_name", {
        maxLength: { value: 255, message: "Слишком длинный текст" },
      }),
      about: register("about", {
        required: { value: true, message: "Обязательное поле" },
        minLength: { value: 24, message: "Слишком короткий текст" },
        maxLength: { value: 255, message: "Слишком длинный текст" },
      }),
      interests: register("interests", {
        required: { value: true, message: "Обязательное поле" },
        minLength: { value: 32, message: "Слишком короткий текст" },
        maxLength: { value: 1000, message: "Слишком длинный текст" },
      }),
      back_servers: register("back_servers", {
        required: { value: true, message: "Обязательное поле" },
        minLength: { value: 12, message: "Слишком короткий текст" },
        maxLength: { value: 255, message: "Слишком длинный текст" },
      }),
      checkbox: register("checkbox", {
        required: { value: true, message: "Обязательное подтверждение" },
      }),
    };
  }, [register]);

  return (
    <div className={styles["auth-block"]}>
      <div className={styles["container"]}>
        <h4 className={styles["title-register"]}>Создание заявки на GMGame</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* --- */}
          <FormTitle title="Игровой ник:" min={3} max={16} length={watch("username")?.length || 0} />
          <Input type="text" autoComplete="off" placeholder="&nbsp;" {...formFields["username"]} />
          <ErrorRender name="username" />
          {/* --- */}
          <FormTitle title="Пароль для входа на сервер:" min={8} max={32} length={watch("password")?.length || 0} />
          <Input type="password" autoComplete="off" placeholder="&nbsp;" {...formFields["password"]} />
          <ErrorRender name="password" />
          {/* --- */}
          <FormTitle title="Тип аккаунта:" count={false} />
          <Select list={AKK_VALUE} {...formFields["type_account"]} />
          <ErrorRender name="type_account" />
          {/* --- */}
          <FormTitle title="Возраст:" count={false} />
          <Input type="number" {...formFields["age"]} />
          <ErrorRender name="age" />
          {/* --- */}
          {/* prettier-ignore */}
          <FormTitle title="Ник друга, если играете с кем-то:" required={false} min={0} max={255} length={watch("friend_name")?.length || 0}/>
          <Input type="text" autoComplete="off" placeholder="&nbsp;" {...formFields["friend_name"]} />
          {/* --- */}
          <FormTitle title="Откуда узнали о проекте:" min={24} max={255} length={watch("about")?.length || 0} />
          <Textarea {...formFields["about"]} />
          <ErrorRender name="about" />
          {/* --- */}
          <FormTitle title="Интересы в майнкрафте:" min={32} max={1000} length={watch("interests")?.length || 0} />
          <Textarea {...formFields["interests"]} />
          <ErrorRender name="interests" />
          {/* --- */}
          <FormTitle title="Предыдущие сервера:" min={12} max={255} length={watch("back_servers")?.length || 0} />
          <Textarea {...formFields["back_servers"]} style={{ maxHeight: "250px" }} />
          <ErrorRender name="back_servers" />
          {/* --- */}
          <div className={styles["check-block"]}>
            <input
              type="checkbox"
              id="box-1"
              className={CN({
                [styles["inputErrors"]]: errorInfo.checkbox,
              })}
              {...formFields["checkbox"]}
            />
            <label htmlFor="box-1">Да, я прочитал правила и обязуюсь им следовать.</label>
          </div>
        </form>
        <div className={styles["wrapper-warn"]}>
          <Notifications inf="Относитесь ответственно к заполнению заявки" type="warn" />
        </div>
        <form className={styles["action_block"]}>
          <Button
            id="submitButton"
            type="submit"
            label="Отправить"
            view="submit"
            disabled={!isValid}
            onClick={handleSubmit(registration)}
          />
        </form>
      </div>
    </div>
  );
};

export default AuthComponent;
