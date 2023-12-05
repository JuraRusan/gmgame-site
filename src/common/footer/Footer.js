import classNames from "classnames";
import React from "react";
import VkSvgComponent from "../../bases/icons/vkSvg/VkSvg";
import InstagramSvgComponent from "../../bases/icons/instagramSvg/InstagramSvg";
import DiscordSvgComponent from "../../bases/icons/discordSvg/DiscordSvg";

import styles from "./Footer.module.scss";

const Footer = () => {

  return (
    <div className={classNames(styles["footer"])}>
      <div className={classNames(styles["rows-bt"])}>
        <div className={classNames(styles["leftLine"])}></div>
        <div className={classNames(styles["wrapperLink"])}>
          <a className={classNames(styles["bt-links"])} href="https://vk.com/gmgameru">
            <VkSvgComponent width="100%" height="100%" color="white"/>
          </a>
          <a className={classNames(styles["bt-links"])} href="https://www.instagram.com/gmgameserver/">
            <InstagramSvgComponent width="100%" height="100%" color="white"/>
          </a>
          <a className={classNames(styles["bt-links"])} href="https://discord.gg/cAM6tUYEuX">
            <DiscordSvgComponent width="100%" height="100%" color="white"/>
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
