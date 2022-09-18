import React, {useEffect, useContext} from "react";
import AOS from "aos";
// import {useAxios} from '../../../DataProvider';
import {NavLink, Outlet} from "react-router-dom";
import {UserContext} from '../../../Context';
// import {Triangle} from 'react-loader-spinner';
import {Navigate} from "react-router-dom";

import "./Cab.scss";
import "aos/dist/aos.css";

import PlayerCabinet from "../../components/[0_grouped_0]-Profile/player-cabinet/Player-cabinet.js";
// import Auth from "../../../modules/pages/auth/Auth.js";

const Cab = () => {
  const {userContext} = useContext(UserContext);
  // const resParams = useAxios(
  //   "/api/me/",
  //   'GET',
  //   {}
  // );

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const profileMenuMyProfile = "Профиль";
  const profileMenuMyTerritories = "Мои территории";
  const profileMenuMyMarker = "Мои метки";
  const profileMenuMyArticles = "Статьи";
  const profileMenuMyPrizes = "Призы";
  const profileMenuMyChangePassword = "Изменить пароль";
  const profileMenuMyGoOut = "Выйти";

  // const data = resParams.data;

  // if (resParams.loading) {
  //   return <div className="preloader-box"><Triangle wrapperClass="preloader"/></div>
  // }
  console.log(userContext.discordUser)
  if (userContext.discordUser === 'not_auth') {
    return <Navigate to="/login" replace={true}/>
  }

  // if (userContext.user === 'not_found') {
  //   return <Auth />
  // }

  function setActive(isActive) {
    return isActive ? "tab checked" : "tab";
  }

  function phCabFunctionAdd() {
    document.getElementById("phOpacity1").classList.add("col-1-render");
    document.getElementById("phOpacity2").classList.add("col-2-render");
    document.getElementById("btAdd").classList.add("bt-no");
    document.getElementById("btDel").classList.remove("bt-no");
  }

  function phCabFunctionRemove() {
    document.getElementById("phOpacity1").classList.remove("col-1-render");
    document.getElementById("phOpacity2").classList.remove("col-2-render");
    document.getElementById("btDel").classList.add("bt-no");
    document.getElementById("btAdd").classList.remove("bt-no");
  }

  return (
    <div className="main-cab" data-aos="fade-up">
      <div className="box">
        <button id="btDel" className="bt-ph bt-no" onClick={phCabFunctionRemove}>&#128473;</button>
        <button id="btAdd" className="bt-ph" onClick={phCabFunctionAdd}>&#9776;</button>
        <div className="col-1" id="phOpacity1">
          <PlayerCabinet {...userContext.user} />
          <div className="menu-cabinet">
            <div className="m1">
              <NavLink onClick={phCabFunctionRemove} to="profile" className={({isActive}) => setActive(isActive)}>{profileMenuMyProfile}</NavLink>
              <NavLink onClick={phCabFunctionRemove} to="territories" className={({isActive}) => setActive(isActive)}>{profileMenuMyTerritories}</NavLink>
              <NavLink onClick={phCabFunctionRemove} to="markers" className={({isActive}) => setActive(isActive)}>{profileMenuMyMarker}</NavLink>
              <NavLink onClick={phCabFunctionRemove} to="articles" className={({isActive}) => setActive(isActive)}>{profileMenuMyArticles}</NavLink>
              <NavLink onClick={phCabFunctionRemove} to="prize" className={({isActive}) => setActive(isActive)}>{profileMenuMyPrizes}</NavLink>
              <NavLink onClick={phCabFunctionRemove} to="change_password" className={({isActive}) => setActive(isActive)}>{profileMenuMyChangePassword}</NavLink>
            </div>
            <div className="m1">
              <label className="tab">{profileMenuMyGoOut}</label>
            </div>
          </div>
        </div>
        <div className="col-2" id="phOpacity2">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}


export default Cab;
