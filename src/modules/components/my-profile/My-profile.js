import React from "react";
import { gsap } from "gsap";

import "./My-profile.scss";


const MyProfile = () => {

  const profileApplicationNotSubmitted = "Заявка не подана";
  const profileApplicationUnderConsideration = "Заявка на рассмотрении";
  const profileApplicationNotAccepted = "Заявка не принята";
  const profileApplicationOnWhitelist = "В вайт листе";
  const profileApplicationDroppedOffWhitelist = "Выпал из вайтлиста";
  const profileApplicationBannedCheck = "Забанен, чекай";

  const profileServerAdress = "Адрес сервера";
  const profileApplicationAkk = "Статус аккаунта";
  const profileServerVersion = "Версия игры";

  const profileServerAdressOutput = "mine.gmgame.ru";
  const profileServerVersionOutput = "Java Edition 1.19";


  function isTweening() {
    let scanner = gsap.isTweening(".scanner");
    let button = gsap.isTweening("button");
    return scanner || button;
  }

  function activateAnimated() {

    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);

    if (isTweening()) return;

    const tl = gsap.timeline();

    gsap.set(".scanner", {
      x: 0,
      background: "#292e3e",
      boxShadow: `0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff`
    });

    gsap.set("button", {
      innerHTML: " "
    });

    tl.to("button", {
      innerHTML: " ",
      outline: "none",
      boxShadow: `0px 0px 0px rgba(163, 177, 198, 0.6), 0px 0px 0px rgba(255, 255, 255, 0.5)`,
      cursor: "wait",
      duration: 0.01,
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
      .to(".scanner", {
        display: "block",
        x: 30,
        boxShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff, 0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff`,
        background: "white",
        duration: 0.2,
        ease: "none"
      },
        "-=1.4"
      )
      .to(".scanner", {
        x: 300,
        duration: 1,
        ease: "none",
        display: "none"
      },
        "-=1"
      )
      .to(".scanner", {
        boxShadow: `0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff`,
        background: "#292e3e",
        duration: 0.2,
        ease: "none",
      })
      .to("button", {
        innerHTML: " ",
        outline: "none",
      },
        "-=0.1"
      )
      .to("button", {
        innerHTML: " ",
        cursor: "pointer",
      },
        "+=1"
      );
  }

  return (
    <div className="profile-block">
      <div className="ds-link">
        <img className="ds-img" src="https://minotar.net/avatar/prestig9110/75" alt="none"></img>
        <h5 className="h5-ds">prestig9110@1026</h5>
      </div>
      <div className="prof-block">
        <div className="prof-cont">
          <h5 className="h5-cont">{profileServerAdress}</h5>
          <div className="label-cout">
            <input className="label-cout font-custom-2" type="text" value={profileServerAdressOutput} id="myInput" disabled />
            <button className="copy-button" onClick={activateAnimated}> </button>
            <div className="scanner"></div>
          </div>
        </div>

        <div className="prof-cont">
          <h5 className="h5-cont">{profileApplicationAkk}</h5>
          <label className="label-cout profile-application-under-consideration">{profileApplicationUnderConsideration}</label>
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
