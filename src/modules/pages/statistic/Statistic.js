import React, {useEffect} from "react";
import AOS from "aos";

import "./Statistic.scss";
import "aos/dist/aos.css";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";

const Statistic = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-statistic" data-aos="fade-up">
      <Header/>
      <div className="statistic"><h4>ух какая пиздатая статка</h4></div>
      <Fotter/>
    </div>
  );
};

export default Statistic;
