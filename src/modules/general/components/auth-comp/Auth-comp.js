import React from "react";

import "./Auth-comp.scss";

const authComponent = () => {
  return (
    <div className="auth-block">
      <div className="container">
        <div className="reg-1">
          <div className="line">
            <span></span>
            <input
              className="input-custom"
              type="text"
              placeholder="Ник в игре"
              required
            />
            <span></span>
          </div>
          <div className="line">
            <span></span>
            <input
              className="input-custom"
              type="text"
              placeholder="Пароль для входа на сервер"
              required
            />
            <span></span>
          </div>
          <div className="line">
            <span></span>
            <input
              className="input-custom"
              type="text"
              placeholder="Ваш возраст"
              required
            />
            <span></span>
          </div>
          <div className="line">
            <span></span>
            <input
              className="input-custom"
              type="text"
              placeholder="Ник друга который "
              required
            />
            <span></span>
          </div>
          <div className="line">
            <span></span>
            <input
              className="input-custom"
              type="text"
              placeholder="Ник в игре"
              required
            />
            <span></span>
          </div>
          <div className="line">
            <span></span>
            <input
              className="input-custom"
              type="text"
              placeholder="Ник в игре"
              required
            />
            <span></span>
          </div>
        </div>
        <div className="reg-2"></div>
      </div>
    </div>
  );
};

export default authComponent;
