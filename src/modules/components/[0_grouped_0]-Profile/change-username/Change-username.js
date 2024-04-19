import classNames from "classnames";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {sendRequest} from '../../../../DataProvider';
import {useAlert} from "react-alert";
import {ErrorMessage} from "@hookform/error-message";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";
import Button from "../../button/Button";

import styles from "./Change-username.module.scss";

const ChangeUsername = () => {

  const isLoading = useLoading();

  const [type, setType] = useState("username")
  const [checked, setChecked] = useState(false);

  const alert = useAlert();

  const {register, handleSubmit, formState: {errors},} = useForm({mode: "onChange"});

  if (isLoading) {
    return <Preload full={false}/>
  }

  const changeUsername = (params) => {
    sendRequest(
      '/api/change_name',
      'POST',
      {
        username: params.username
      }
    ).then(response => {
      if (response.message) {
        alert.success(response.message);
        window.location.reload();
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
    <div className={classNames(styles["blockUsername"])}>
      <h3 className={classNames(styles["usernameTitle"])}>Введите новое имя пользователя</h3>
      <form onSubmit={handleSubmit()}>
        <input
          className={classNames(styles["usernameInput"])}
          type={type}
          {...register("username", {
            required: {value: true, message: "Обязательное поле"},
            maxLength: {value: 16, message: "Имя должно быть до 16 символов"},
          })}
        />
        <ErrorRender name="username"/>
        <div className={classNames(styles["wrapper_btn"])}>
          <Button
            label="Изменить"
            view="submit"
            onClick={handleSubmit((d) => changeUsername(d))}
          />
        </div>
      </form>
    </div>
  );
};

export default ChangeUsername;
