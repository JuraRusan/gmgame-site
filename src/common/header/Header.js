import React, {useEffect} from "react";
import AOS from "aos";

import "./Header.scss";
import "aos/dist/aos.css";

const Header = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);


  // function toggle() {
  //   const toggleButton = document.getElementById("toggle");
  //   const togglelinks = document.getElementById("links");
  //   toggleButton.classList.toggle("active");
  //   togglelinks.classList.toggle("active");
  // }

  return (
    <div className="header" data-aos="fade-down">
      <div className="menu">
        {/*<div id="toggle" onClick={toggle()}></div>*/}
        <div className="content-menu">
          <ul className="links" id="links">
            <li className="links-li li-custom-right links-li-ho-hover">
              <a className="title-logo desktop-link" href="/">
                <span className="colored-title-span-1 font-custom-1">G</span>
                <span className="colored-title-span-2 font-custom-1">M</span>
                <span className="font-custom-1">GAME</span></a>
            </li>
            <li className="links-li">
              <a className="desktop-link font-custom-3" href="/">Полезное</a>
              <input type="checkbox" id="two-menu"/>
              <label htmlFor="two-menu">Полезное</label>
              <ul className="drop">
                <li className="drop-li"><a href="/articlesWiki">Вики</a></li>
                <li className="drop-li"><a href="/mods">Моды</a></li>
                <li className="drop-li"><a href="/onlineMaps">Онлайн карты</a></li>
                <li className="drop-li"><a href="/statistic">Статистика</a></li>
                <li className="drop-li"><a href="/support">Поддержать</a></li>
              </ul>
            </li>
            <li className="links-li">
              <a className="desktop-link font-custom-3" href="/regulations">Правила</a>
              <input type="checkbox" id="three-menu"/>
              <label htmlFor="three-menu">Правила</label>
            </li>
            <li className="links-li">
              <a className="desktop-link font-custom-3" href="/faq">faq</a>
              <input type="checkbox" id="four-menu"/>
              <label htmlFor="four-menu">faq</label>
            </li>
            <li className="links-li li-custom-left">
              <a className="desktop-link custon-header" href="/cab/profile">
                <img className="ico-player" src="https://minotar.net/avatar/prestig9110/30" alt="none"></img>
                <p className="ico-name-player font-custom-2">1234567890123456</p>
              </a>
              <input type="checkbox" id="five-menu"/>
              <label htmlFor="five-menu">
                <img className="ico-player" src="https://minotar.net/avatar/prestig9110/30" alt="none"></img>
                <p className="ico-name-player font-custom-2">1234567890123456</p>
              </label>
              <ul className="drop">
                <li className="drop-li"><a href="/cab/territories">Мои территории</a></li>
                <li className="drop-li"><a href="/cab/markers">Мои метки</a></li>
                <li className="drop-li"><a href="/cab/articles">Статьи</a></li>
                <li className="drop-li"><a href="/cab/prize">Призы</a></li>
                <li className="drop-li"><a href="/cab/change_password">Изменить пароль</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
