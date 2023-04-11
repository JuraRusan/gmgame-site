import React, {useEffect} from "react";
import AOS from "aos";

import "./Mode.scss";
import "aos/dist/aos.css";

const Mode = (props) => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="mode-block" data-aos="zoom-in">
      <div className="mode-name">
        <h3 className="font-custom-3">{props.name}</h3>
      </div>
      <div className="circle"></div>
      <h4 className="h4-mode">{props.info}</h4>
    </div>
  );
};

export default Mode;
