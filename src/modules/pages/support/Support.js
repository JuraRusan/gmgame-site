import React, {useEffect} from "react";
import AOS from "aos";

import "./Support.scss";
import "aos/dist/aos.css";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";

const Support = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-support" data-aos="fade-up">
      <Header/>
      <div className="support"><h4>данатить быстра данатить</h4></div>
      <Fotter/>
    </div>
  );
};

export default Support;
