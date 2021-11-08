import React, { useState } from "react";

import "./Header.scss";

import SvgMyProfile from "../../icons/SvgMyProfile.js";
import SvgSettings from "../../icons/SvgSettings.js";
import SvgLogout from "../../icons/SvgLogout.js";
import SvgDiscord from "../../icons/SvgDiscord.js";
import SvgLinkHref from "../../icons/SvgLinkHref.js";
import SvgInstagram from "../../icons/SvgInstagram.js";
import SvgMap from "../../icons/SvgMap.js";
import SvgMap3D from "../../icons/SvgMap3D.js";
import SvgVk from "../../icons/SvgVk.js";
import SvgMonitiring from "../../icons/SvgMonitiring.js";
import SvgHotMc from "../../icons/SvgHotMc.js";
import SvgMinecraftStatistic from "../../icons/SvgMinecraftStatistic.js";
import SvgMinecraftrating from "../../icons/SvgMinecraftrating.js";

const Header = () => {
  return (
    <div className="header">
      <Navbar>
        <NavItem
          spase="&nbsp;&nbsp;"
          title="Ссылки"
          icon={<SvgLinkHref width="100%" height="100%" />}
        >
          <DropdownMenuHref></DropdownMenuHref>
        </NavItem>

        <NavItem
          spase="&nbsp;&nbsp;"
          title="Войти"
          icon={<SvgMyProfile width="100%" height="100%" />}
        >
          <DropdownMenuSingIn></DropdownMenuSingIn>
        </NavItem>

        <NavItem icon={<SvgSettings width="100%" height="100%" />}>
          <DropdownMenuSettings></DropdownMenuSettings>
        </NavItem>
      </Navbar>
    </div>
  );
};

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
        {props.spase}
        {props.title}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenuSettings() {
  function DropdownItem(props) {
    return (
      <a href={props.href} className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem
        href="#"
        leftIcon={<SvgSettings width="100%" height="100%" />}
      >
        &nbsp;&nbsp;Настройки
      </DropdownItem>
    </div>
  );
}

function DropdownMenuSingIn() {
  function DropdownItem(props) {
    return (
      <a href={props.href} className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem
        href="#"
        leftIcon={<SvgMyProfile width="100%" height="100%" />}
      >
        &nbsp;&nbsp;Войти
      </DropdownItem>
      <DropdownItem href="#" leftIcon={<SvgLogout />}>
        &nbsp;&nbsp;Выйти
      </DropdownItem>
    </div>
  );
}

function DropdownMenuHref() {
  function DropdownItem(props) {
    return (
      <a href={props.href} target="_blank" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem
        href="https://www.instagram.com/gmgameserver/"
        leftIcon={<SvgInstagram width="100%" height="100%" />}
      >
        &nbsp;&nbsp;Instagram
      </DropdownItem>
      <DropdownItem
        href="https://discord.gg/sPR62FDQQz"
        leftIcon={<SvgDiscord width="100%" height="100%" />}
      >
        &nbsp;&nbsp;Discord
      </DropdownItem>
      <DropdownItem
        href="http://map.gmgame.ru/"
        leftIcon={<SvgMap width="100%" height="100%" />}
      >
        &nbsp;&nbsp;Карта сервера
      </DropdownItem>
      <DropdownItem
        href="http://3dmap.gmgame.ru/"
        leftIcon={<SvgMap3D width="100%" height="100%" />}
      >
        &nbsp;&nbsp;3D карта сервера
      </DropdownItem>
      <DropdownItem
        href="https://vk.com/gmgameru"
        leftIcon={<SvgVk width="100%" height="100%" />}
      >
        &nbsp;&nbsp;ВКонтакте
      </DropdownItem>
      <DropdownItem
        href="https://monitoringminecraft.ru/server/694954"
        leftIcon={<SvgMonitiring width="100%" height="100%" />}
      >
        &nbsp;&nbsp;Monitoringminecraft.ru
      </DropdownItem>
      <DropdownItem
        href="https://hotmc.ru/minecraft-server-205185"
        leftIcon={<SvgHotMc width="100%" height="100%" />}
      >
        &nbsp;&nbsp;Hotmc.ru
      </DropdownItem>
      <DropdownItem
        href="https://minecraftrating.ru/server/gmgame/"
        leftIcon={<SvgMinecraftrating width="100%" height="100%" />}
      >
        &nbsp;&nbsp;Minecraftrating.ru
      </DropdownItem>
      <DropdownItem
        href="https://minecraft-statistic.net/ru/server/GMGame.html"
        leftIcon={<SvgMinecraftStatistic width="100%" height="100%" />}
      >
        &nbsp;&nbsp;Minecraft-statistic.net
      </DropdownItem>
    </div>
  );
}

export default Header;
