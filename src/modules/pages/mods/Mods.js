import React, {useEffect} from "react";
import AOS from "aos";

import "./Mods.scss";
import "aos/dist/aos.css";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";

const Mods = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-mods" data-aos="fade-up">
      <Header/>
      <div className="box-mods" data-aos="fade-up">
        <h3 className="h3-mods font-custom-2">Страница в разработке, ожидайте в ближайшем будущем. </h3>
      </div>
      <Fotter/>
    </div>
  );
};

export default Mods;
