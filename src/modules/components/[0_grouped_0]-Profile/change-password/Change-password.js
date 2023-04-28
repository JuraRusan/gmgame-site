import classNames from "classnames";
import {React} from "react";
import {useForm} from "react-hook-form";
import {sendRequest} from '../../../../DataProvider';
import {useAlert} from "react-alert";
import {ErrorMessage} from "@hookform/error-message";

import styles from "./Change-password.module.scss";

const ChangePassword = () => {
  const alert = useAlert();

  const {register, handleSubmit, formState: {errors},} = useForm({mode: "onChange"});

  const changePassword = (params) => {
    sendRequest(
      '/api/change_password',
      'POST',
      {
        password: params.password
      }
    ).then(response => {
      if (response.message) {
        alert.success(response.message);
      } else {
        alert.error(response.error);
      }
    });
  };

  function ErrorRender(name) {
    return (
      <ErrorMessage errors={errors} name={name.name} render={({message}) => <span className={classNames(styles["error"])}>{message}</span>}/>
    );
  }

  return (
    <div className={classNames(styles["blockPassword"])}>
      <h3 className={classNames(styles["passwordTitle"])}>Введите новый пароль</h3>
      <form onSubmit={handleSubmit()}>
        <input
          className={classNames(styles["passwordInput"])}
          type="password"
          {...register("password", {
            required: {value: true, message: "Обязательное поле"},
            minLength: {value: 8, message: "Пароль должен быть от 8 символов"},
          })}
        />
        <ErrorRender name="password"/>
        <button className={classNames(styles["buttonPasswordSubmit"])} onClick={handleSubmit((d) => changePassword(d))}>Изменить</button>
      </form>
    </div>
  );
};

export default ChangePassword;
