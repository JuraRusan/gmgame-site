import classNames from "classnames";
import React, {useEffect} from "react";
import {sendRequest, useAxios} from '../../../DataProvider';
import {Link, Navigate, NavLink, Outlet} from "react-router-dom";
import PlayerCabinet from "../../components/[0_grouped_0]-Profile/player-cabinet/Player-cabinet.js";
import Auth from "../../../modules/pages/auth/Auth.js";
import Preload from "../../components/preloader/Preload.js";
import AOS from "aos";

import styles from "./Cab.module.scss";
import "aos/dist/aos.css";

const Cab = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const resParams = useAxios(
    "/api/profile",
    'GET',
    {}
  );

  if (resParams.loading) {
    return <Preload/>
  }

  if (!resParams.data?.discordUser) {
    return <Navigate to="/api/login" replace={true}/>
  }

  if (!resParams.data.user || !resParams.data.user?.username) {
    return <Auth/>
  }

  function setActive(isActive) {
    return isActive ? classNames(styles["tab"], styles["checked"]) : styles["tab"];
  }

  function phoneCabFunctionAdd() {
    document.getElementById("phoneOpacityOne").classList.add(classNames(styles["columnOneRender"]));
    document.getElementById("phoneOpacityTwo").classList.add(classNames(styles["columnTwoRender"]));
    document.getElementById("buttonAdd").classList.add(classNames(styles["buttonPhoneNoVisible"]));
    document.getElementById("buttonDelete").classList.remove(classNames(styles["buttonPhoneNoVisible"]));
  }

  function phoneCabFunctionRemove() {
    document.getElementById("phoneOpacityOne").classList.remove(classNames(styles["columnOneRender"]));
    document.getElementById("phoneOpacityTwo").classList.remove(classNames(styles["columnTwoRender"]));
    document.getElementById("buttonDelete").classList.add(classNames(styles["buttonPhoneNoVisible"]));
    document.getElementById("buttonAdd").classList.remove(classNames(styles["buttonPhoneNoVisible"]));
  }

  const logout = () => {
    sendRequest(
      '/api/logout',
      'POST',
      {}
    ).then(response => {
      localStorage.clear();
      window.location.href = '/';
    });
  }

  return (
    <div className={classNames(styles["mainCab"])}>
      <div className={classNames(styles["boxWrapper"])}>

        <div className={classNames(styles["buttonWrapper"])}>
          <button id="buttonDelete" className={classNames(styles["buttonPhone"], styles["buttonPhoneNoVisible"])} onClick={phoneCabFunctionRemove}>&#128473;</button>
          <button id="buttonAdd" className={classNames(styles["buttonPhone"])} onClick={phoneCabFunctionAdd}>&#9776;</button>
        </div>

        <div className={classNames(styles["columnOne"])} id="phoneOpacityOne">
          <PlayerCabinet {...resParams.data.user} />
          <div className={classNames(styles["menuCab"])} data-aos="zoom-in">
            <div className={classNames(styles["blockLink"])}>
              <NavLink onClick={phoneCabFunctionRemove} className={({isActive}) => setActive(isActive)} to="profile">Профиль</NavLink>
              {resParams.data.user.status === 2 &&
                <>
                  <NavLink onClick={phoneCabFunctionRemove} className={({isActive}) => setActive(isActive)} to="territories">Мои территории</NavLink>
                  <NavLink onClick={phoneCabFunctionRemove} className={({isActive}) => setActive(isActive)} to="markers">Мои метки</NavLink>
                  <NavLink onClick={phoneCabFunctionRemove} className={({isActive}) => setActive(isActive)} to="articles">Статьи</NavLink>
                  {/*<NavLink onClick={phoneCabFunctionRemove} className={({isActive}) => setActive(isActive)} to="gallery">Моя галерея</NavLink>*/}
                  <NavLink onClick={phoneCabFunctionRemove} className={({isActive}) => setActive(isActive)} to="prize">Призы</NavLink>
                  {/*<NavLink onClick={phoneCabFunctionRemove} className={({isActive}) => setActive(isActive)} to="achievements">Достижения</NavLink>*/}
                  <NavLink onClick={phoneCabFunctionRemove} className={({isActive}) => setActive(isActive)} to="change_password">Изменить пароль</NavLink>
                </>
              }
              {resParams.data.discordUser.role === 'admin' && <Link to="/manager" className={classNames(styles["tab"])}>Менеджер</Link>}
            </div>
            <div className={classNames(styles["blockLink"])}>
              <button className={classNames(styles["tab"])} onClick={logout}>Выйти</button>
            </div>
          </div>
        </div>
        <div className={classNames(styles["columnTwo"])} id="phoneOpacityTwo">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}


export default Cab;
