import React from "react";
import AuthComponent from "../../components/auth-comp/Auth-comp.js";

import styles from "./Auth.module.scss";

const Auth = () => {
  return (
    <div className={styles["main_reg"]}>
      <AuthComponent />
    </div>
  );
};

export default Auth;
