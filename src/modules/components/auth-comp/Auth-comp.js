import React, { useState, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { sendRequest } from "../../../DataProvider";
import { useAlert } from "@blaumaus/react-alert";
import Title from "../title/Title";
import Notifications from "../notifications/Notifications";
import Button from "../button/Button";
import FormTitle from "../form-title/FormTitle";
import Input from "../input/Input";
import Select from "../select/Select";
import Textarea from "../textarea/Textarea";
import Checkbox from "../checkbox/Checkbox";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Auth-comp.module.scss";

const AKK_VALUE = [
  { value: "1", name: "Лицензия" },
  { value: "0", name: "Пиратка" },
];

const WatchText = ({ text, length = 120, watch }) => {
  return (
    <p className={styles["display_watch"]}>
      {text}{" "}
      <span className={styles["colored"]}>
        {watch && watch.length > length ? watch.substring(0, length) + "..." : watch}
      </span>
    </p>
  );
};

const ErrorRender = ({ name, errors }) => {
  return (
    <ErrorMessage errors={errors} name={name} render={({ message }) => <Notifications inf={message} type="error" />} />
  );
};

const AuthComponent = () => {
  const alert = useAlert();

  const [outputSkin, setOutputSkin] = useState("https://minotar.net/helm/steve/130");
  const [outputTypeAkk, setOutputTypeAkk] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const allValues = watch();

  const onSubmit = (data) => console.log(data);

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
        window.location.reload();
      } else {
        alert.error(response.body?.error || response.error);
      }
    });
  };

  useEffect(() => {
    const subscription = watch((data) => {
      let username = "steve";

      if (!errors.username && data.username) {
        username = data.username;
      }

      setOutputSkin(`https://minotar.net/helm/${username}/130`);
      setOutputTypeAkk(data.type_account === "1" ? "лицензия" : "пиратка");
    });

    return () => subscription.unsubscribe();
  }, [watch, setOutputSkin, setOutputTypeAkk, errors]);

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
        min: { value: 1, message: "Минимум 1" },
        max: { value: 99, message: "Максимум 99" },
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

  const hasAnyValue = useMemo(() => {
    return Object.values(allValues).some((val) => val && val.toString().trim() !== "");
  }, [allValues]);

  return (
    <div className={styles["application_block"]}>
      <Title>Создание заявки на GMGame</Title>
      <div className={styles["container"]}>
        <div className={styles["main_form"]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* --- */}
            <FormTitle title="Игровой ник:" min={3} max={16} length={watch("username")?.length || 0} />
            <Input type="text" autoComplete="off" placeholder="&nbsp;" {...formFields["username"]} />
            <ErrorRender errors={errors} name="username" />
            {/* --- */}
            <FormTitle title="Пароль для входа на сервер:" min={8} max={32} length={watch("password")?.length || 0} />
            <Input type="password" autoComplete="off" placeholder="&nbsp;" {...formFields["password"]} />
            <ErrorRender errors={errors} name="password" />
            {/* --- */}
            <FormTitle title="Тип аккаунта:" count={false} />
            <Select list={AKK_VALUE} {...formFields["type_account"]} />
            <ErrorRender errors={errors} name="type_account" />
            {/* --- */}
            <FormTitle title="Возраст:" count={false} />
            <Input type="number" {...formFields["age"]} />
            <ErrorRender errors={errors} name="age" />
            {/* --- */}
            {/* prettier-ignore */}
            <FormTitle title="Ник друга, если играете с кем-то:" required={false} min={0} max={255} length={watch("friend_name")?.length || 0}/>
            <Input type="text" autoComplete="off" placeholder="&nbsp;" {...formFields["friend_name"]} />
            {/* --- */}
            <FormTitle title="Откуда узнали о проекте:" min={24} max={255} length={watch("about")?.length || 0} />
            <Textarea rows="3" max_height="medium" {...formFields["about"]} />
            <ErrorRender errors={errors} name="about" />
            {/* --- */}
            <FormTitle title="Интересы в майнкрафте:" min={32} max={1000} length={watch("interests")?.length || 0} />
            <Textarea rows="3" max_height="large" {...formFields["interests"]} />
            <ErrorRender errors={errors} name="interests" />
            {/* --- */}
            <FormTitle title="Предыдущие сервера:" min={12} max={255} length={watch("back_servers")?.length || 0} />
            <Textarea rows="3" max_height="medium" {...formFields["back_servers"]} />
            <ErrorRender errors={errors} name="back_servers" />
            {/* --- */}
            {/* prettier-ignore */}
            <Checkbox className={styles["check"]} message="Да, я прочитал правила и обязуюсь им следовать" {...formFields["checkbox"]} />
          </form>
        </div>
        <AnimatePresence>
          {!hasAnyValue ? null : (
            <motion.div
              className={styles["check_form"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className={styles["card_wrapper"]}>
                <div className={styles["main_watch"]}>
                  <img className={styles["avatar"]} src={outputSkin} alt="icon" />
                  <div className={styles["main_info"]}>
                    <WatchText text="Мой ник в игре:" watch={watch("username")} />
                    <WatchText text="Мой возраст:" watch={watch("age")} />
                    <WatchText text="Тип аккаунта:" watch={outputTypeAkk} />
                    <WatchText text="Ник друга с которым я играю:" watch={watch("friend_name")} />
                  </div>
                </div>
                <div className={styles["additional_watch"]}>
                  <WatchText text="Я узнал о проекте:" length={180} watch={watch("about")} />
                  <WatchText text="Интересы в майнкрафте:" length={180} watch={watch("interests")} />
                  <WatchText text="Предыдущие сервера:" length={180} watch={watch("back_servers")} />
                </div>
              </div>
              <div className={styles["wrapper_warn"]}>
                <Notifications inf="Относитесь ответственно к заполнению заявки" type="warn" />
              </div>
              <div className={styles["action_block"]}>
                <Button
                  type="submit"
                  label="Отправить"
                  view="submit"
                  disabled={!isValid}
                  onClick={handleSubmit(registration)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthComponent;
