import React from "react";

import "./Change-password.scss";

const ChangePassword = () => {
  return (
    <div className="block-pass">
      <h3 className="pass-h3">Введите новый пароль</h3>
      <input className="input-pass" type="text"/>
      <button className="bt-pass font-custom-2">Изменить</button>
    </div>
  );
};

export default ChangePassword;
