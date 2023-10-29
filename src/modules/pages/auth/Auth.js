import classNames from "classnames";
import React from "react";
import AuthComponent from "../../components/auth-comp/Auth-comp.js";

import styles from "./Auth.module.scss";

const Auth = () => {
  return (
    <div className={classNames(styles["main-reg"])}>
      <AuthComponent/>
    </div>
  );
};

export default Auth;
