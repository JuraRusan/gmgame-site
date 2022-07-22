import React, { useEffect } from "react";
import AOS from "aos";

import "./Fotter.scss";
import "aos/dist/aos.css";

import SvgDiscord from "../../bases/icons/SvgDiscord.js";
import SvgInstagram from "../../bases/icons/SvgInstagram.js";
import SvgVk from "../../bases/icons/SvgVk.js";

const Fotter = () => {
  useEffect(() => { AOS.init({ duration: 1000 });}, []);

  return (
    <div className="fotter">
      <div className="rows-bt" data-aos="fade-up">
        <a className="bt-links" href="https://vk.com/gmgameru">
          <SvgVk width="40px" height="40px" color="black" />
        </a>
        <a className="bt-links" href="https://www.instagram.com/gmgameserver/">
          <SvgInstagram width="40px" height="40px" color="black" />
        </a>
        <a className="bt-links" href="https://discord.gg/cAM6tUYEuX">
          <SvgDiscord width="40px" height="40px" color="black" />
        </a>
      </div>
      <div className="gmgame-title-f">
        <h3 class="span loader">
          <span>G</span>
          <span>M</span>
          <span>G</span>
          <span>a</span>
          <span>m</span>
          <span>e</span>
          <span>&nbsp;</span>
          <span>M</span>
          <span>i</span>
          <span>n</span>
          <span>e</span>
          <span>c</span>
          <span>r</span>
          <span>a</span>
          <span>f</span>
          <span>t</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>e</span>
          <span>r</span>
          <span>v</span>
          <span>e</span>
          <span>r</span>
          <span>&nbsp;</span>
          <span>©</span>
          <span>&nbsp;</span>
          <span>2</span>
          <span>0</span>
          <span>2</span>
          <span>0</span>
          <span>-</span>
          <span>2</span>
          <span>0</span>
          <span>2</span>
          <span>2</span>
        </h3>
      </div>
    </div>
  );
};

export default Fotter;
