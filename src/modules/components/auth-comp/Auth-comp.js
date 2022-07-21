import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import "./Auth-comp.scss";

import SvgMyProfile from "../../../bases/icons/SvgMyProfile.js";
import SvgWarn from "../../../bases/icons/SvgWarn.js";

const AuthComponent = () => {

  const GMGame = "Создание заявки на GMGame";

  const NameSer = "Игровой ник *";
  const passSer = "Пароль для входа на сервер *";
  const ageSer = "Возраст *";
  const ofSer = "Откуда узнали о проекте *";
  const friendSer = "Ник друга, если играете с кем-то *";
  const interestsSer = "Интересы в майнкрафте *";
  const backSer = "Предыдущие серверы *";

  const warAuth = "Относитесь ответственно к заполнению заявки";
  
  const checkReg = "Да я согласен со всей хуйней";
  const dataTip = "<ul><li>* - Обязательно к заполнению</li><li>Зелёная черта - правильно</li><li>Зелёная черта - не правильно</li></ul>";

  const [outputName, setOutputName] = useState(" - ");
  const [outputImg, setOutputImg] = useState("https://minotar.net/avatar/steve/100");
  const [outputTypeAkk, setOutputTypeAkk] = useState(" - ");
  const [outputAge, setOutputAge] = useState(" - ");
  const [outputMyPlayer, setOutputMyPlayer] = useState(" - ");
  const [outputServers, setOutputServers] = useState(" - ");
  const [outputInter, setOutputInter] = useState(" - ");
  const [outputInfo, setOutputInfo] = useState(" - ");

  function OutputName(event) {
    return setOutputName(event.target.value || " - ");
  }
  function OutputImg(event) {
    if (event.target.value === "") {
      setOutputImg("https://minotar.net/avatar/steve/100");
    } else {
      setOutputImg("https://minotar.net/avatar/" + event.target.value + "/100");
    }
  }
  function OutputTypeAkk(event) {
    // setOutputTypeAkk(event.target.value);
    if (event.target.value === "0") {
      setOutputTypeAkk("Лицензия");
    } else if (event.target.value === "1") {
      setOutputTypeAkk("Пиратка");
    } else {
      setOutputTypeAkk(" - ");
    }
  }
  function OutputAge(event) {
    setOutputAge(event.target.value);
  }
  function OutputNameMyPlayer(event) {
    setOutputMyPlayer(event.target.value);
  }
  function OutputServers(event) {
    setOutputServers(event.target.value);
  }
  function OutputInter(event) {
    setOutputInter(event.target.value);
  }
  function OutputInfo(event) {
    setOutputInfo(event.target.value);
  }
  function resetCard() { }

  return (
    <div className="auth-block">
      <div className="container">
        <div className="reg-1">
          <h4 className="title-reg-1 font-custom-2">{GMGame}</h4>
          <ReactTooltip />
          <div className="line">
            <span className="icon-span"><SvgMyProfile width="100%" height="100%" color="#f4f4f4" /></span>
            <input
              onInput={OutputName}
              onChange={OutputImg}
              className="input-custom"
              type="text"
              placeholder={NameSer}
              required
            />
            <span
              data-tip={dataTip}
              data-text-color="white"
              data-background-color="rgba(22, 18, 18, 0.555)"
              data-border="true"
              data-border-color="rgba(240, 255, 255, 0.541)"
              data-effect="float"
              className="war-span"
              data-html="true"
            >
              ?
            </span>
          </div>
          <div className="line">
            <span className="icon-span">
              <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
            </span>
            <input
              className="input-custom"
              type="text"
              placeholder={passSer}
              required
            />
            <span
              data-tip={dataTip}
              data-text-color="white"
              data-background-color="rgba(22, 18, 18, 0.555)"
              data-border="true"
              data-border-color="rgba(240, 255, 255, 0.541)"
              data-effect="float"
              className="war-span"
              data-html="true"
            >
              ?
            </span>
          </div>
          <div className="line">
            <span className="icon-span">
              <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
            </span>
            <select
              className="input-custom"
              type="text"
              onChange={OutputTypeAkk}
            >
              <option value="">Тип аккаунта *</option>
              <option value="0">Лицензия</option>
              <option value="1">Пиратка</option>
            </select>
            <span
              data-tip={dataTip}
              data-text-color="white"
              data-background-color="rgba(22, 18, 18, 0.555)"
              data-border="true"
              data-border-color="rgba(240, 255, 255, 0.541)"
              data-effect="float"
              className="war-span"
              data-html="true"
            >
              ?
            </span>
          </div>
          <div className="line">
            <span className="icon-span">
              <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
            </span>
            <input
              onInput={OutputAge}
              className="input-custom"
              type="text"
              placeholder={ageSer}
              required
            />
            <span
              data-tip={dataTip}
              data-text-color="white"
              data-background-color="rgba(22, 18, 18, 0.555)"
              data-border="true"
              data-border-color="rgba(240, 255, 255, 0.541)"
              data-effect="float"
              className="war-span"
              data-html="true"
            >
              ?
            </span>
          </div>
          <div className="line">
            <span className="icon-span">
              <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
            </span>
            <input
              onInput={OutputNameMyPlayer}
              className="input-custom"
              type="text"
              placeholder={friendSer}
              required
            />
            <span
              data-tip={dataTip}
              data-text-color="white"
              data-background-color="rgba(22, 18, 18, 0.555)"
              data-border="true"
              data-border-color="rgba(240, 255, 255, 0.541)"
              data-effect="float"
              className="war-span"
              data-html="true"
            >
              ?
            </span>
          </div>
          <div className="line">
            <span className="icon-span">
              <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
            </span>
            <textarea
              onChange={OutputServers}
              className="input-custom"
              type="text"
              rows="1"
              placeholder={ofSer}
              required
            />
            <span
              data-tip={dataTip}
              data-text-color="white"
              data-background-color="rgba(22, 18, 18, 0.555)"
              data-border="true"
              data-border-color="rgba(240, 255, 255, 0.541)"
              data-effect="float"
              className="war-span"
              data-html="true"
            >
              ?
            </span>
          </div>
          <div className="line">
            <span className="icon-span">
              <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
            </span>
            <textarea
              onChange={OutputInter}
              className="input-custom"
              type="text"
              rows="1"
              placeholder={interestsSer}
              required
            />
            <span
              data-tip={dataTip}
              data-text-color="white"
              data-background-color="rgba(22, 18, 18, 0.555)"
              data-border="true"
              data-border-color="rgba(240, 255, 255, 0.541)"
              data-effect="float"
              className="war-span"
              data-html="true"
            >
              ?
            </span>
          </div>
          <div className="line">
            <span className="icon-span">
              <SvgMyProfile width="100%" height="100%" color="#f4f4f4" />
            </span>
            <textarea
              onChange={OutputInfo}
              className="input-custom"
              type="text"
              rows="1"
              placeholder={backSer}
              required
            />
            <span
              data-tip={dataTip}
              data-text-color="white"
              data-background-color="rgba(22, 18, 18, 0.555)"
              data-border="true"
              data-border-color="rgba(240, 255, 255, 0.541)"
              data-effect="float"
              className="war-span"
              data-html="true"
            >
              ?
            </span>
          </div>
          <div className="warn-block">
            <span><SvgWarn width="24px" height="24px" color="#f4f4f4"/></span>
            <h4 className="war-h4-auth">{warAuth}</h4>
          </div>
        </div>
        <div className="reg-2">
          <div className="check-block">
            <input type="checkbox" id="box-1" />
            <label for="box-1">{checkReg}</label>
          </div>
        </div>
      </div>
      <div className="card-visual">
        <div className="card-vis-block">
          <button className="reset" onClick={resetCard}>Очистить</button>
          <div className="block-l-1">
            <img className="player-img" src={outputImg} alt="avatar"></img>
            <div className="player-info-card-block">
              <p className="player-inf">Мой ник в игре: <label>{outputName}</label></p>
              <p className="player-inf">Мой возраст: <label>{outputAge}</label></p>
              <p className="player-inf">Тип аккаунта: <label>{outputTypeAkk}</label></p>
              <p className="player-inf">Ник друга с которым я играю: <label>{outputMyPlayer}</label></p>
            </div>
          </div>
          <div className="block-l-2">
            <p className="player-inf">Мои прошлые серверы: <label>{outputServers}</label></p>
            <p className="player-inf">Мои интересы в майнкрафте: <label>{outputInter}</label></p>
            <p className="player-inf">Я узнал о проекте: <label>{outputInfo}</label></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
