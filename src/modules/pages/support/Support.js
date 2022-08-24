import React, {useEffect} from "react";
import AOS from "aos";

import "./Support.scss";
import "aos/dist/aos.css";

const Support = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-support" data-aos="fade-up">
      <div className="support"><h4>данатить быстра данатить</h4></div>
    </div>
  );
};

export default Support;
