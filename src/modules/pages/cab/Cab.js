import React from "react";

import "./Cab.scss";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";

const Cab = () => {
  return (
    <div className="main-cab">
      <Header />
      <div className="box">
       <div className="col-1"></div>
       <div className="col-2"></div>
      </div>
      <Fotter />
    </div>
  );
};

export default Cab;
