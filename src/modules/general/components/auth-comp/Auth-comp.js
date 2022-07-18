import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import "./Auth-comp.scss";

import Regulations from "../regulations/Regulations.js";
import SvgMyProfile from "../../../../common/icons/SvgMyProfile.js";

const AuthComponent = () => {
  const [outputName, setOutputName] = useState(' - ')
  const [outputImg, setOutputImg] = useState('https://minotar.net/avatar/steve/100')
  const [outputTypeAkk, setOutputTypeAkk] = useState(' - ')
  const [outputAge, setOutputAge] = useState(' - ')
  const [outputMyPlayer, setOutputMyPlayer] = useState(' - ')
  const [outputServers, setOutputServers] = useState(' - ')
  const [outputInter, setOutputInter] = useState(' - ')
  const [outputInfo, setOutputInfo] = useState(' - ')

  function OutputName(event) {
    if (event.target.value === " ") { setOutputName(" - ") }
    else { setOutputName(event.target.value); }
  }
  function OutputImg(event) {
    if (event.target.value === "") { setOutputImg("https://minotar.net/avatar/steve/100"); }
    else { setOutputImg("https://minotar.net/avatar/" + event.target.value + "/100"); }
  }
  function OutputTypeAkk(event) {

    // setOutputTypeAkk(event.target.value);
    if (event.target.value === "0") { setOutputTypeAkk("Лицензия") }
    else if (event.target.value === "1") { setOutputTypeAkk("Пиратка") }
    else if (event.target.value === "2") { setOutputTypeAkk("Бедрок") }
    else { setOutputTypeAkk(" - ") }
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
  function resetCard() {
  }

  return (
    <div className="auth-block">
      <div className="container">
        <div className="reg-1">
          <h4 className="title-reg-1">Создание заявки на GMGame</h4>
          <ReactTooltip />
          <div className="line">
            <span className="icon-span">
              <SvgMyProfile width="100%" height="100%" />
            </span>
            <input
              onInput={OutputName}
              onChange={OutputImg}
              className="input-custom"
              type="text"
              placeholder="Ник в игре"
              required
            />
            <span
              data-tip="<ul><li>red-неправильно</li><li>greeen правильно</li><li>шо то за какой то текст</li></ul>"
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
              <SvgMyProfile width="100%" height="100%" />
            </span>
            <input
              className="input-custom"
              type="text"
              placeholder="Пароль, используется для входа в игру"
              required
            />
            <span
              data-tip="<ul><li>red-неправильно</li><li>greeen правильно</li><li>шо то за какой то текст</li></ul>"
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
              <SvgMyProfile width="100%" height="100%" />
            </span>
            <select className="input-custom" type="text" onChange={OutputTypeAkk}>
              <option value="">Тип аккаунта</option>
              <option value="0">Лицензия</option>
              <option value="1">Пиратка</option>
              <option value="2">Бедрок</option>
            </select>
            <span
              data-tip="<ul><li>red-неправильно</li><li>greeen правильно</li><li>шо то за какой то текст</li></ul>"
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
              <SvgMyProfile width="100%" height="100%" />
            </span>
            <input
              onInput={OutputAge}
              className="input-custom"
              type="text"
              placeholder="Возраст"
              required
            />
            <span
              data-tip="<ul><li>red-неправильно</li><li>greeen правильно</li><li>шо то за какой то текст</li></ul>"
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
              <SvgMyProfile width="100%" height="100%" />
            </span>
            <input
              onInput={OutputNameMyPlayer}
              className="input-custom"
              type="text"
              placeholder="Ник друга, играющего на сервере (если есть)"
              required
            />
            <span
              data-tip="<ul><li>red-неправильно</li><li>greeen правильно</li><li>шо то за какой то текст</li></ul>"
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
              <SvgMyProfile width="100%" height="100%" />
            </span>
            <textarea
              onChange={OutputServers}
              className="input-custom"
              type="text"
              rows="1"
              placeholder="Прошлые серверы"
              required
            />
            <span
              data-tip="<ul><li>red-неправильно</li><li>greeen правильно</li><li>шо то за какой то текст</li></ul>"
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
              <SvgMyProfile width="100%" height="100%" />
            </span>
            <textarea
              onChange={OutputInter}
              className="input-custom"
              type="text"
              rows="1"
              placeholder="Интересы в майнкрафт"
              required
            />
            <span
              data-tip="<ul><li>red-неправильно</li><li>greeen правильно</li><li>шо то за какой то текст</li></ul>"
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
              <SvgMyProfile width="100%" height="100%" />
            </span>
            <textarea
              onChange={OutputInfo}
              className="input-custom"
              type="text"
              rows="1"
              placeholder="Откуда узнали о проекте"
              required
            />
            <span
              data-tip="<ul><li>red-неправильно</li><li>greeen правильно</li><li>шо то за какой то текст</li></ul>"
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
        </div>
        <div className="reg-2">
          <Regulations />
          <div className="check-block">
            <input type="checkbox" id="box-1" />
            <label for="box-1">Да я согласен со всей хуйней</label>
          </div>
        </div>
      </div>
      <div className="card-visual">
        <div className="card-vis-block">
          <button onClick={resetCard}>Reset</button>
          <div className="block-l-1" >
            <img className="player-img" src={outputImg} alt="avatar"></img>
            <div className="player-info-card-block">
              <p className="player-inf">Мой ник в игре: {outputName}</p>
              <p className="player-inf">Мой возраст: {outputAge}</p>
              <p className="player-inf">Тип аккаунта: {outputTypeAkk}</p>
              <p className="player-inf">Ник друга с которым я играю: {outputMyPlayer}</p>
            </div>
          </div>
          <div className="block-l-2" >
            <p className="player-inf">Мои прошлые сервера: {outputServers}</p>
            <p className="player-inf">Мои интересы в майнкрафте: {outputInter}</p>
            <p className="player-inf">Я узнал о проекте: {outputInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;