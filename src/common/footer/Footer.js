import classNames from "classnames";
import React from "react";
import SvgDiscord from "../../bases/icons/SvgDiscord.js";
import SvgInstagram from "../../bases/icons/SvgInstagram.js";
import SvgVk from "../../bases/icons/SvgVk.js";

import styles from "./Footer.module.scss";

const Footer = () => {

  return (
    <div className={classNames(styles["footer"])}>
      <div className={classNames(styles["rows-bt"])}>
        <div className={classNames(styles["leftLine"])}></div>
        <div className={classNames(styles["wrapperLink"])}>
          <a className={classNames(styles["bt-links"])} href="https://vk.com/gmgameru">
            <SvgVk width="100%" height="100%" color="white"/>
          </a>
          <a className={classNames(styles["bt-links"])} href="https://www.instagram.com/gmgameserver/">
            <SvgInstagram width="100%" height="100%" color="white"/>
          </a>
          <a className={classNames(styles["bt-links"])} href="https://discord.gg/cAM6tUYEuX">
            <SvgDiscord width="100%" height="100%" color="white"/>
          </a>
        </div>
        <div className={classNames(styles["rightLine"])}></div>
      </div>
      <div className={classNames(styles["gmgame-title-f"])}>
        <h3 className={classNames(styles["classText"])}>Мы на
          <a href="https://mineserv.top/gmgame">Mineserv.top</a>
        </h3>
        <h3 className={classNames(styles["classText"])}>© 2020 - 2023 GMGame Minecraft Server</h3>
      </div>
    </div>
  );
};

export default Footer;
