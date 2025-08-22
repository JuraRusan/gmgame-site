import CN from "classnames";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { sendRequest } from "../../../DataProvider";
import { useAlert } from "@blaumaus/react-alert";
import Notifications from "../notifications/Notifications";
import Button from "../button/Button";

import styles from "./Auth-comp.module.scss";

const AuthComponent = () => {
  const alert = useAlert();

  const {
    register,
    handleSubmit,
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
      }),
      type_account: register("type_account", {
        required: { value: true, message: "Обязательное поле" },
      }),
      age: register("age", {
        required: { value: true, message: "Обязательное поле" },
        pattern: { value: /^[0-9]+$/, message: "Только цифры" },
      }),
      friend_name: register("friend_name"),
      about: register("about", {
        required: { value: true, message: "Обязательное поле" },
        minLength: { value: 24, message: "Слишком короткий текст" },
        maxLength: { value: 256, message: "Слишком длинный текст" },
      }),
      interests: register("interests", {
        required: { value: true, message: "Обязательное поле" },
        minLength: { value: 32, message: "Слишком короткий текст" },
        maxLength: { value: 1000, message: "Слишком длинный текст" },
      }),
      back_servers: register("back_servers", {
        required: { value: true, message: "Обязательное поле" },
        minLength: { value: 12, message: "Слишком короткий текст" },
        maxLength: { value: 256, message: "Слишком длинный текст" },
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
          <label htmlFor="usernameFor" className={styles["line"]}>
            <input
              type="text"
              id="usernameFor"
              placeholder="&nbsp;"
              autoComplete="off"
              className={CN({
                [styles["inputErrors"]]: errorInfo.username,
              })}
              {...formFields["username"]}
            />
            <span className={styles["label"]}>Игровой ник</span>
            <ErrorRender name="username" />
          </label>
          <label htmlFor="passwordFor" className={styles["line"]}>
            <input
              type="password"
              id="passwordFor"
              placeholder="&nbsp;"
              autoComplete="off"
              className={CN({
                [styles["inputErrors"]]: errorInfo.password,
              })}
              {...formFields["password"]}
            />
            <span className={styles["label"]}>Пароль для входа на сервер</span>
            <ErrorRender name="password" />
          </label>
          <label htmlFor="type_accountFor" className={styles["line"]}>
            <select
              id="type_accountFor"
              placeholder="&nbsp;"
              className={CN({
                [styles["inputErrors"]]: errorInfo.type_account,
              })}
              {...formFields["type_account"]}
            >
              <option value=" "></option>
              <option value="1">Лицензия</option>
              <option value="0">Пиратка</option>
            </select>
            <span className={styles["label"]}>Тип аккаунта</span>
            <ErrorRender name="type_account" />
          </label>
          <label htmlFor="ageFor" className={styles["line"]}>
            <input
              type="text"
              id="ageFor"
              placeholder="&nbsp;"
              autoComplete="off"
              className={CN({
                [styles["inputErrors"]]: errorInfo.age,
              })}
              {...formFields["age"]}
            />
            <span className={styles["label"]}>Возраст</span>
            <ErrorRender name="age" />
          </label>
          <label htmlFor="friend_nameFor" className={styles["line"]}>
            <input
              type="text"
              id="friend_nameFor"
              placeholder="&nbsp;"
              autoComplete="off"
              {...formFields["friend_name"]}
            />
            <span className={styles["label"]}>Ник друга, если играете с кем-то</span>
          </label>
          <label htmlFor="aboutFor" className={styles["line"]}>
            <input
              type="text"
              id="aboutFor"
              placeholder="&nbsp;"
              autoComplete="off"
              className={CN({
                [styles["inputErrors"]]: errorInfo.about,
              })}
              {...formFields["about"]}
            />
            <span className={styles["label"]}>Откуда узнали о проекте</span>
            <ErrorRender name="about" />
          </label>
          <label htmlFor="interestsFor" className={styles["line"]}>
            <input
              type="text"
              id="interestsFor"
              placeholder="&nbsp;"
              autoComplete="off"
              className={CN({
                [styles["inputErrors"]]: errorInfo.interests,
              })}
              {...formFields["interests"]}
            />
            <span className={styles["label"]}>Интересы в майнкрафте</span>
            <ErrorRender name="interests" />
          </label>
          <label htmlFor="back_serversFor" className={styles["line"]}>
            <input
              type="text"
              id="back_serversFor"
              placeholder="&nbsp;"
              autoComplete="off"
              className={CN({
                [styles["inputErrors"]]: errorInfo.back_servers,
              })}
              {...formFields["back_servers"]}
            />
            <span className={styles["label"]}>Предыдущие сервера</span>
            <ErrorRender name="back_servers" />
          </label>
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
