import React from "react";
import {Triangle} from 'react-loader-spinner';

import "./Preload.scss";


function Preload() {
  return (
    <div className="preloader-box">
      <Triangle wrapperClass="preloader"/>
    </div>
  );
}

export default Preload;