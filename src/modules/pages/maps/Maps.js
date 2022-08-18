import React, {useEffect} from "react";
import AOS from "aos";

import "./Maps.scss";
import "aos/dist/aos.css";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";

const Maps = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-maps" data-aos="fade-up">
      <Header/>
      <div className="maps"><h4>ух какие пиздатые карты то тут</h4></div>
      <Fotter/>
    </div>
  );
};

export default Maps;
