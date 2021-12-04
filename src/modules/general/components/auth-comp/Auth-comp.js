import React from "react";
import ReactTooltip from "react-tooltip";

import SvgMyProfile from "../../../../common/icons/SvgMyProfile.js";

import "./Auth-comp.scss";

const authComponent = () => {
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
            <select className="input-custom" type="text">
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
          <button className="regulation">Правила</button>
          <div className="check-block">
            <input type="checkbox" id="box-1" />
            <label for="box-1">Да я согласен со всей хуйней</label>
          </div>
        </div>
      </div>
      <div className="card-visual">
        <div className="card-vis-block">
          
        </div>
      </div>
    </div>
  );
};

export default authComponent;
