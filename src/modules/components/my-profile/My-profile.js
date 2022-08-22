import React from "react";
import {gsap} from "gsap";
import {useAxios} from '../../../DataProvider';
import {Triangle} from 'react-loader-spinner';

import "./My-profile.scss";


const MyProfile = () => {
  const resParams = useAxios(
    "/api/profile",
    'GET',
    {}
  );

  if (resParams.loading) {
    return <div className="preloader-box">< Triangle wrapperClass="preloader"/></div>
  }

  const data = resParams.data;


  // const user = params.user;
  // const userDC = params.userDC;
  // const version = params.version;


  // const profileApplicationNotSubmitted = "Заявка не подана";
  // const profileApplicationUnderConsideration = "Заявка на рассмотрении";
  // const profileApplicationNotAccepted = "Заявка не принята";
  // const profileApplicationOnWhitelist = "В вайт листе";
  // const profileApplicationDroppedOffWhitelist = "Выпал из вайтлиста";
  // const profileApplicationBannedCheck = "Забанен, чекай";

  const profileServerAdress = "Адрес сервера";
  const profileApplicationAkk = "Статус аккаунта";
  const profileServerVersion = "Версия игры";

  const profileServerAdressOutput = "mine.gmgame.ru";
  const profileServerVersionOutput = "Java Edition " + data.version;

  function isTweening() {
    let scanner = gsap.isTweening(".scanner");
    let button = gsap.isTweening("button");
    return scanner || button;
  }

  function activateAnimated() {

    if (isTweening()) return;

    const tl = gsap.timeline();

    gsap.set(".scanner", {
      display: "flex",
      x: 10,
      background: "#292e3e",
      boxShadow: `0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #228dff,
    0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff`
    });

    gsap.set("button", {
      innerHTML: " "
    });

    tl.to("button", {
      innerHTML: " ",
      outline: "none",
      cursor: "wait",
      duration: 0.01
    })
      .to("button", {
        innerHTML: " ",
        duration: 0.4
      })
      .to("button", {
        innerHTML: " ",
        duration: 0.4
      })
      .to("button", {
        innerHTML: " ",
        duration: 0.4
      })
      .to(
        ".scanner",
        {
          boxShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
    0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff`,
          background: "white",
          duration: 0.2,
          ease: "none"
        },
        "-=1.4"
      )
      .to(".scanner", {
          x: 310,
          duration: 1,
          display: "none",
          ease: "none",
        },
        "-=1"
      )
      .to(".scanner", {
        boxShadow: `0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #228dff,
    0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff`,
        background: "#292e3e",
        duration: 0.2,
        ease: "none"
      })
      .to("button",
        {
          innerHTML: " ",
          outline: "none"
        },
        "-=0.1"
      )
      .to("button",
        {
          innerHTML: " ",
          cursor: "pointer"
        },
        "+=1"
      );
  }


  return (
    <div className="profile-block">
      <div className="ds-link">
        <img className="ds-img"
             src={`https://cdn.discordapp.com/avatars/${data.discordUser.id}/${data.discordUser.avatar}.png`}
             alt="none"></img>
        <h5 className="h5-ds">{data.discordUser.username}@{data.discordUser.discriminator}</h5>
      </div>
      <div className="prof-block">
        <div className="prof-cont">
          <h5 className="h5-cont">{profileServerAdress}</h5>

          <div className="label-cout">
            <div className="font-custom-2">{profileServerAdressOutput}</div>
            <button className="copy-button" onClick={activateAnimated}></button>
            <div className="scanner"></div>
          </div>
        </div>

        <div className="prof-cont">
          <h5 className="h5-cont">{profileApplicationAkk}</h5>
          <label className="label-cout profile-application-under-consideration">{data.user.status}</label>
        </div>
        <div className="prof-cont">

        </div>
        <div className="prof-cont">
          <h5 className="h5-cont">{profileServerVersion}</h5>
          <label className="label-cout font-custom-2">{profileServerVersionOutput}</label>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
