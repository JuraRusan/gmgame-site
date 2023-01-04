import {React} from "react";
import {useForm} from "react-hook-form";
import {sendRequest} from '../../../../DataProvider';
import {useAlert} from "react-alert";
import {ErrorMessage} from "@hookform/error-message";

import "./Change-password.scss";

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
      <ErrorMessage errors={errors} name={name.name} render={({message}) => <span className="error">{message}</span>}/>
    );
  }

  return (
    <div className="block-pass">
      <h3 className="pass-h3">Введите новый пароль</h3>
      <form onSubmit={handleSubmit()}>
        <input 
          className="input-pass" 
          type="password" 
          {...register("password", {
            required: {value: true, message: "Обязательное поле"},
            minLength: {value: 8, message: "Пароль должен быть от 8 символов"},
          })}
        />
        <ErrorRender name="password"/>
        <button className="bt-pass font-custom-2" onClick={handleSubmit((d) => changePassword(d))}>Изменить</button>
      </form>
    </div>
  );
};

export default ChangePassword;
