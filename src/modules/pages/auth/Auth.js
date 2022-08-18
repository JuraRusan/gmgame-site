import React from "react";

import "./Auth.scss";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";
import AuthComponent from "../../components/auth-comp/Auth-comp.js";

const auth = () => {
  return (
    <div className="main-reg">
      <Header/>
      <AuthComponent/>
      <Fotter/>
    </div>
  );
};

export default auth;
