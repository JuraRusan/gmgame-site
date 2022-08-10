import React, { useEffect } from "react";
import AOS from "aos";

import "./Header.scss";
import "aos/dist/aos.css";

const Header = () => {

  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  function toggle() {
    const toggleButton = document.getElementById("toggle");
    const togglelinks = document.getElementById('links');
    toggleButton.classList.toggle("active");
    togglelinks.classList.toggle('active');
  }

  return (
    <div className="header" data-aos="fade-down">
      <div className="menu">
        {/* <div id="toggle" onClick={toggle()}></div> */}
        <div className="content-menu">
          <ul className="links" id="links">
            <li className="links-li">
              <a className="desktop-link font-custom-3" href="/">Главная</a>
              <input type="checkbox" id="one-menu" />
              <label for="one-menu font-custom-3">Главная</label>
            </li>
            <li className="links-li">
              <a className="desktop-link font-custom-3" href="/">Полезное</a>
              <input type="checkbox" id="two-menu" />
              <label for="two-menu font-custom-3">Полезное</label>
              <ul className="drop">
                <li className="drop-li"><a href="/">Вики</a></li>
                <li className="drop-li"><a href="/">Моды</a></li>
                <li className="drop-li"><a href="/">Онлайн карты</a></li>
                <li className="drop-li"><a href="/">Статистика</a></li>
                <li className="drop-li"><a href="/">Поддержать</a></li>
              </ul>
            </li>
            <li className="links-li">
              <a className="desktop-link font-custom-3" href="/">Правила</a>
              <input type="checkbox" id="three-menu" />
              <label for="three-menu font-custom-3">Правила</label>
            </li>
            <li className="links-li">
              <a className="desktop-link font-custom-3" href="/">faq</a>
              <input type="checkbox" id="four-menu" />
              <label for="four-menu font-custom-3">faq</label>
            </li>
            <li className="links-li">
              <a className="desktop-link font-custom-3" href="/cab">Профиль</a>
              <input type="checkbox" id="five-menu" />
              <label for="five-menu font-custom-3">Профиль</label>
              <ul className="drop">
                <li className="drop-li ico-pl-li">
                  <img className="ico-player" src="https://minotar.net/avatar/prestig9110/30" alt="none"></img>
                  <a href="/cab" className="ico-name-player font-custom-2">prestig9110</a></li>
                <li className="drop-li"><a href="/cab">Профиль</a></li>
                <li className="drop-li"><a href="/cab">Мои территории</a></li>
                <li className="drop-li"><a href="/cab">Мои метки</a></li>
                <li className="drop-li"><a href="/cab">Статьи</a></li>
                <li className="drop-li"><a href="/cab">Призы</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Header;
