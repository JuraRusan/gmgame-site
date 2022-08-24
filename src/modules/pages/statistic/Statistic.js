import React, {useEffect} from "react";
import AOS from "aos";

import "./Statistic.scss";
import "aos/dist/aos.css";

const Statistic = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-statistic" data-aos="fade-up">
      <div className="statistic"><h4>ух какая пиздатая статка</h4></div>
    </div>
  );
};

export default Statistic;
