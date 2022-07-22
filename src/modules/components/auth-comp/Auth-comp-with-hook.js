import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import AOS from "aos";

import "./Auth-comp.scss";
import "aos/dist/aos.css";

import Authcard from "../auth-card/Auth-Card.js";
import SvgMyProfile from "../../../bases/icons/SvgMyProfile.js";
import SvgWarn from "../../../bases/icons/SvgWarn.js";

const AuthComponent = () => {

  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  const { register, handleSubmit, watch, formState: { errors }, } = useForm({ mode: "onChange" });

  const titleCreateApplication = "Создание заявки на GMGame";
  const serverUserNameTitle = "Игровой ник *";
  const serverUserPasswordTitle = "Пароль для входа на сервер *";
  const serverUserAgeTitle = "Возраст *";
  const serverTypeAkkTitle = "Тип аккаунта *";
  const serverTypeAkkLicenseTitle = "Лицензия";
  const serverTypeAkkPirateTitle = "Пиратка";
  const serverUserAboutTitle = "Откуда узнали о проекте *";
  const serverUserFriendTitle = "Ник друга, если играете с кем-то";
  const serverUserInterestsTitle = "Интересы в майнкрафте *";
  const serverUserBackServersTitle = "Предыдущие сервера *";

  const AttentionAuth = "Относитесь ответственно к заполнению заявки";
  const YesIAgreeRules = "Да я согласен со всей хуйней";

  const [outputImg, setOutputImg] = useState("https://minotar.net/avatar/steve/100");
  const [outputTypeAkk, setOutputTypeAkk] = useState("");

  React.useEffect(() => {
    const subscription = watch((data) => {
      let username = "steve";

      if (data.username && data.username.length < 17) {
        username = data.username;
      }

      setOutputImg("https://minotar.net/avatar/" + username + "/100");
      setOutputTypeAkk(data.type_account === "1" ? "лицензия" : "пиратка");
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  const onSubmit = (data) => console.log(data);

  function ErrorRender(name) {
    return (
      <ErrorMessage errors={errors} name={name.name} render={({ message }) => <span className="error">{message}</span>} />
    );
  }

  return (
    <div className="auth-block">
      <div className="container" data-aos="fade-up">
        <div className="reg-1">
          <h4 className="title-reg-1 font-custom-2">
            {titleCreateApplication}
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="line">
              <span className="icon-span">
                <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
              </span>
              <input
                className="input-custom"
                type="text"
                placeholder={serverUserNameTitle}
                {...register("username", {
                  required: { value: true, message: "Обязательное поле" },
                  maxLength: { value: 16, message: "Слишком длинный логин" },
                  pattern: {
                    value: /^[a-zA-Z0-9_]+$/,
                    message: "Недопустимые символы",
                  },
                })}
              />
            </div>
            <ErrorRender name="username" />
            <div className="line">
              <span className="icon-span">
                <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
              </span>
              <input
                className="input-custom"
                type="password"
                placeholder={serverUserPasswordTitle}
                {...register("password", {
                  required: { value: true, message: "Обязательное поле" },
                })}
              />
            </div>
            <ErrorRender name="password" />
            <div className="line">
              <span className="icon-span">
                <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
              </span>
              <select
                className="input-custom"
                type="text"
                {...register("type_account", {
                  required: { value: true, message: "Обязательное поле" },
                })}
              >
                <option value=" ">{serverTypeAkkTitle}</option>
                <option value="1">{serverTypeAkkLicenseTitle}</option>
                <option value="0">{serverTypeAkkPirateTitle}</option>
              </select>
            </div>
            <ErrorRender name="type_account" />
            <div className="line">
              <span className="icon-span">
                <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
              </span>
              <input
                className="input-custom"
                type="text"
                placeholder={serverUserAgeTitle}
                {...register("age", {
                  required: { value: true, message: "Обязательное поле" },
                  pattern: { value: /^[0-9]+$/, message: "Только цифры" },
                })}
              />
            </div>
            <ErrorRender name="age" />
            <div className="line">
              <span className="icon-span">
                <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
              </span>
              <input
                className="input-custom"
                type="text"
                placeholder={serverUserFriendTitle}
                {...register("friend_name")}
              />
            </div>
            <div className="line">
              <span className="icon-span">
                <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
              </span>
              <textarea
                className="input-custom"
                type="text"
                rows="4"
                placeholder={serverUserAboutTitle}
                {...register("about", {
                  required: { value: true, message: "Обязательное поле" },
                })}
              />
            </div>
            <ErrorRender name="about" />
            <div className="line">
              <span className="icon-span">
                <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
              </span>
              <textarea
                className="input-custom"
                type="text"
                rows="4"
                placeholder={serverUserInterestsTitle}
                {...register("interests", {
                  required: { value: true, message: "Обязательное поле" },
                })}
              />
            </div>
            <ErrorRender name="interests" />
            <div className="line">
              <span className="icon-span">
                <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
              </span>
              <textarea
                className="input-custom"
                type="text"
                rows="4"
                placeholder={serverUserBackServersTitle}
                {...register("back_servers", {
                  required: { value: true, message: "Обязательное поле" },
                })}
              />
            </div>
            <ErrorRender name="back_servers" />
          </form>
          <div className="warn-block">
            <span><SvgWarn width="24px" height="24px" color="#f4f4f4" /></span>
            <h4 className="war-h4-auth">{AttentionAuth}</h4>
          </div>
        </div>
        <div className="reg-2">
          <div className="check-block">
            <input
              type="checkbox"
              id="box-1"
              {...register("checkbox", {
                required: { value: true, message: "Обязательное подтверждение" },
              })} />
            <label for="box-1">{YesIAgreeRules}</label>
            <ErrorRender name="checkbox" />
          </div>
        </div>
      </div>
      {watch("checkbox") && document.getElementById("submitButton").classList.add("card-button-show")}
      {watch("username") && document.getElementById("card-visual").classList.add("card-visual-show")}
      {/* <Authcard /> */}
      <div id="card-visual" className="card-visual">
        <div className="card-vis-block">
          <div className="block-l-1">
            <img className="player-img" src={outputImg} alt="avatar"></img>
            <div className="player-info-card-block">
              <p className="player-inf">Мой ник в игре: <label>{watch("username")}</label></p>
              <p className="player-inf">Мой возраст: <label>{watch("age")}</label></p>
              <p className="player-inf">Тип аккаунта: <label>{outputTypeAkk}</label></p>
              <p className="player-inf">Ник друга с которым я играю: <label>{watch("friend_name")}</label></p>
            </div>
          </div>
          <div className="block-l-2">
            <p className="player-inf">Мои прошлые сервера: <label>{watch("back_servers")}</label></p>
            <p className="player-inf">Мои интересы в майнкрафте: <label>{watch("interests")}</label></p>
            <p className="player-inf">Я узнал о проекте: <label>{watch("about")}</label></p>
          </div>
        </div>         
        <input id="submitButton" type="Submit" className="style-button font-custom-3" />            
      </div>
    </div>
  );
};

export default AuthComponent;
