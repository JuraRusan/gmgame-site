import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";
import {NavLink, Outlet, Navigate} from "react-router-dom";
import {Context} from "../../../common/header/Header";

import styles from "./Manager.module.scss";
import "aos/dist/aos.css";

const Manager = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  if (!Context.user) {
    return <Navigate to="/api/login" replace={true}/>
  }

  if (Context.user.role !== 'admin') {
    return <Navigate to="/no-access" replace={true}/>
  }

  function setActive(isActive) {
    return isActive ? classNames(styles["tab"], styles["checked"]) : styles["tab"];
  }

  return (
    <div className={classNames(styles["wrapperManager"])}>
      <div className={classNames(styles["actions"])}>
        <NavLink className={({isActive}) => setActive(isActive)} to="player_summary">Сводка по игрокам</NavLink>
        <NavLink className={({isActive}) => setActive(isActive)} to="faq_editor">Редактор Faq</NavLink>
        <NavLink className={({isActive}) => setActive(isActive)} to="mod_editor">Редактор модов</NavLink>
        <NavLink className={({isActive}) => setActive(isActive)} to="texture_pack_editor">Редактор текстур пака</NavLink>
        <NavLink className={({isActive}) => setActive(isActive)} to="regulations_editor">Редактор правил</NavLink>
        <NavLink className={({isActive}) => setActive(isActive)} to="monitoring_summary">Сводка по мониторингам</NavLink>
      </div>
      <div className={classNames(styles["contentContainer"])}>
        <Outlet/>
      </div>
    </div>
  );
};

export default Manager;