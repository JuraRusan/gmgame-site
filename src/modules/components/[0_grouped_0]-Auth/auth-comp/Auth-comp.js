import classNames from "classnames";
import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import AOS from "aos";
import {sendRequest} from '../../../../DataProvider';
import {useAlert} from "react-alert";
import Warn from "../../warn/Warn.js";

import styles from"./Auth-comp.module.scss";
import "aos/dist/aos.css";

const AuthComponent = () => {

  const alert = useAlert();

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const {register, handleSubmit, formState: {errors},} = useForm({mode: "onChange"});

  const onSubmit = (data) => console.log(data);

  function ErrorRender(name) {
    return (
      <ErrorMessage errors={errors} name={name.name} render={({message}) => <span className={classNames(styles["error"])}>{message}</span>}/>
    );
  }

  const registration = (d) => {
    sendRequest(
      '/api/registration_user',
      'POST',
      {
        login: d.username,
        password: d.password,
        type: d.type_account,
        age: d.age,
        from_about: d.about,
        you_about: d.interests,
        servers: d.back_servers,
        friend_name: d.friend_name
      }
    ).then(response => {
      if (!response.error) {
        alert.success(response.message);
        window.location.reload(true);
      } else {
        alert.error(response.body?.error || response.error);
      }
    });
  }

  const errorInfo = {
    username: errors.username,
    password: errors.password,
    type_account: errors.type_account,
    age: errors.age,
    about: errors.about,
    interests: errors.interests,
    back_servers: errors.back_servers,
    checkbox: errors.checkbox
  };

  return (
    <div className={classNames(styles["auth-block"])}>
      <div className={classNames(styles["container"])} data-aos="zoom-in">
        <h4 className={classNames(styles["title-register"])}>Создание заявки на GMGame</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="usernameFor" className={classNames(styles["line"])}>
            <input
              type="text"
              id="usernameFor"
              placeholder="&nbsp;"
              autoComplete="off"
              className={errorInfo.username ? classNames(styles["inputErrors"]) : ''}
              {...register("username", {
                required: {value: true, message: "Обязательное поле"},
                maxLength: {value: 16, message: "Слишком длинный логин"},
                pattern: {
                  value: /^[a-zA-Z0-9_]+$/,
                  message: "Недопустимые символы",
                },
              })}
            />
            <span className={classNames(styles["label"])}>Игровой ник</span>
            <ErrorRender name="username"/>
          </label>
          <label htmlFor="passwordFor" className={classNames(styles["line"])}>
            <input
              type="password"
              id="passwordFor"
              placeholder="&nbsp;"
              autoComplete="off"
              className={errorInfo.password ? classNames(styles["inputErrors"]) : ''}
              {...register("password", {
                required: {value: true, message: "Обязательное поле"},
                minLength: {value: 8, message: "Пароль должен быть от 8 символов"},
              })}
            />
            <span className={classNames(styles["label"])}>Пароль для входа на сервер</span>
            <ErrorRender name="password"/>
          </label>
          <label htmlFor="type_accountFor" className={classNames(styles["line"])}>
            <select
              id="type_accountFor"
              placeholder="&nbsp;"
              className={errorInfo.type_account ? classNames(styles["inputErrors"]) : ''}
              {...register("type_account", {
                required: {value: true, message: "Обязательное поле"},
              })}
            >
              <option value=" "></option>
              <option value="1">Лицензия</option>
              <option value="0">Пиратка</option>
            </select>
            <span className={classNames(styles["label"])}>Тип аккаунта</span>
            <ErrorRender name="type_account"/>
          </label>
          <label htmlFor="ageFor" className={classNames(styles["line"])}>
            <input
              type="text"
              id="ageFor"
              placeholder="&nbsp;"
              autoComplete="off"
              className={errorInfo.age ? classNames(styles["inputErrors"]) : ''}
              {...register("age", {
                required: {value: true, message: "Обязательное поле"},
                pattern: {value: /^[0-9]+$/, message: "Только цифры"},
              })}
            />
            <span className={classNames(styles["label"])}>Возраст</span>
            <ErrorRender name="age"/>
          </label>
          <label htmlFor="friend_nameFor" className={classNames(styles["line"])}>
            <input
              type="text"
              id="friend_nameFor"
              placeholder="&nbsp;"
              autoComplete="off"
              {...register("friend_name")}
            />
            <span className={classNames(styles["label"])}>Ник друга, если играете с кем-то</span>
          </label>
          <label htmlFor="aboutFor" className={classNames(styles["line"])}>
            <input
              type="text"
              id="aboutFor"
              placeholder="&nbsp;"
              autoComplete="off"
              className={errorInfo.about ? classNames(styles["inputErrors"]) : ''}
              {...register("about", {
                required: {value: true, message: "Обязательное поле"},
              })}
            />
            <span className={classNames(styles["label"])}>Откуда узнали о проекте</span>
            <ErrorRender name="about"/>
          </label>
          <label htmlFor="interestsFor" className={classNames(styles["line"])}>
            <input
              type="text"
              id="interestsFor"
              placeholder="&nbsp;"
              autoComplete="off"
              className={errorInfo.interests ? classNames(styles["inputErrors"]) : ''}
              {...register("interests", {
                required: {value: true, message: "Обязательное поле"},
              })}
            />
            <span className={classNames(styles["label"])}>Интересы в майнкрафте</span>
            <ErrorRender name="interests"/>
          </label>
          <label htmlFor="back_serversFor" className={classNames(styles["line"])}>
            <input
              type="text"
              id="back_serversFor"
              placeholder="&nbsp;"
              autoComplete="off"
              className={errorInfo.back_servers ? classNames(styles["inputErrors"]) : ''}
              {...register("back_servers", {
                required: {value: true, message: "Обязательное поле"},
              })}
            />
            <span className={classNames(styles["label"])}>Предыдущие сервера</span>
            <ErrorRender name="back_servers"/>
          </label>
          <div className={classNames(styles["check-block"])}>
            <input
              type="checkbox"
              id="box-1"
              className={errorInfo.checkbox ? classNames(styles["checkboxErrors"]) : ''}
              {...register("checkbox", {
                required: {value: true, message: "Обязательное подтверждение"},
              })} />
            <label htmlFor="box-1">Да, я прочитал правила и обязуюсь им следовать.</label>
          </div>
        </form>
        <div className={classNames(styles["wrapper-warn"])}>
          <Warn inf="Относитесь ответственно к заполнению заявки"/>
        </div>
        <form className={classNames(styles["margin-block"])}>
          <button
            id="submitButton"
            type="Submit"
            onClick={handleSubmit((d) => registration(d))}
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthComponent;
