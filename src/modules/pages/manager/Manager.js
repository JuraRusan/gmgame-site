import classNames from "classnames";
import React from "react";
import {NavLink, Outlet, Navigate} from "react-router-dom";
import Preload from "../../components/preloader/Preload.js";
import {useAxios} from '../../../DataProvider.js';

import styles from "./Manager.module.scss";

const Manager = () => {

  const resParams = useAxios(
    "/api/profile",
    'GET',
    {}
  );

  if (resParams.loading) {
    return <Preload full={false}/>
  }
  
  if (!resParams.data?.user) {
    return <Navigate to="/api/login" replace={true}/>
  }

  if (resParams.data?.discordUser?.role !== 'admin') {
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
        <NavLink className={({isActive}) => setActive(isActive)} to="gallery_status_view">Публикации в галереи</NavLink>
        <NavLink className={({isActive}) => setActive(isActive)} to="permissions_status">Разрешения</NavLink>
      </div>
      <div className={classNames(styles["contentContainer"])}>
        <Outlet/>
      </div>
    </div>
  );
};

export default Manager;