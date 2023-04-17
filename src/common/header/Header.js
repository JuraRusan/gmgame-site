import React, {useEffect} from "react";
import {useAxios} from '../../DataProvider';
import AOS from "aos";

import "./Header.scss";
import "aos/dist/aos.css";

const Header = () => {
  const resParams = useAxios(
    "/api/",
    'GET',
    {}
  );

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  function toggle() {
    document.getElementById("toggle").classList.toggle("activeBt");
    document.getElementById('links').classList.toggle('linksActive');
  }

  return (
    <div className="header" data-aos="fade-down">
      <div className="menu">
        <div id="toggle" className="togglePhone" onClick={toggle}></div>
        <div className="content-menu" id="links">
          <ul className="links">
            <li className="links-li li-custom-right links-li-ho-hover">
              <a className="title-logo desktop-link" href="/">
                <span className="colored-title-span-1 font-custom-1">G</span>
                <span className="colored-title-span-2 font-custom-1">M</span>
                <span className="font-custom-1">GAME</span></a>
            </li>
            <li className="links-li">
              <div className="replace desktop-link font-custom-3">Полезное</div>
              <input type="checkbox" id="two-menu"/>
              <label htmlFor="two-menu">Полезное</label>
              <ul className="drop">
                <li className="drop-li"><a href="/articlesWiki">Вики</a></li>
                <li className="drop-li"><a href="/mods">Моды</a></li>
                <li className="drop-li"><a href="/onlineMaps">Онлайн карта</a></li>
                <li className="drop-li"><a href="/statistic">Статистика</a></li>
                <li className="drop-li"><a href="/support">Поддержать</a></li>
                <li className="drop-li"><a href="/texturePack">Текстур пак</a></li>
                <li className="drop-li"><a href="/shopkeepers">Торговая зона</a></li>
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
              {!resParams?.data?.discordUser
                ? <>
                  <a className="desktop-link custon-header" href="/api/login">
                    <p className="ico-name-player font-custom-2">Войти</p>
                  </a>
                </>
                : <>
                  <div className="replace desktop-link custon-header">
                    <img className="ico-player" src={`https://cdn.discordapp.com/avatars/${resParams.data.discordUser.id}/${resParams.data.discordUser.avatar}.png`} alt="none"></img>
                    <p className="ico-name-player font-custom-2">{resParams.data.discordUser.username}</p>
                    <input type="checkbox" id="five-menu"/>
                    <ul className="drop">
                      <li className="drop-li"><a href="/cab/profile">Профиль</a></li>
                      {resParams?.data?.discordUser?.localuser?.status === 2 &&
                      <>
                      <li className="drop-li"><a href="/cab/territories">Мои территории</a></li>
                      <li className="drop-li"><a href="/cab/markers">Мои метки</a></li>
                      <li className="drop-li"><a href="/cab/articles">Статьи</a></li>
                      <li className="drop-li"><a href="/cab/prize">Призы</a></li>
                      <li className="drop-li"><a href="/cab/change_password">Изменить пароль</a></li>
                      </>
                      }
                      {resParams?.data?.discordUser?.role === 'admin' &&
                        <li className="drop-li"><a href="/manager">Админка</a></li>
                      }
                    </ul>
                  </div>
                </>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;