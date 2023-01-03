import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { useForm } from "react-hook-form";

import Regulations from "../regulations/Regulations.js";
import SvgMyProfile from "../../../../common/icons/SvgMyProfile.js";

import "./Auth-comp.scss";

const AuthComponent = () => {


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    <div className="auth-block">
      <div className="container">
        <div className="reg-1">
          <h4 className="title-reg-1">Создание заявки на GMGame1</h4>
          <ReactTooltip />
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />
            
            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input type="submit" />
          </form>
          
        </div>
        <div className="reg-2">
          <Regulations/>
          <div className="check-block">
            <input type="checkbox" id="box-1" />
            <label for="box-1">Да я согласен со всей хуйней</label>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AuthComponent;