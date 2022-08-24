import React, {useEffect} from "react";
import AOS from "aos";

import "./Maps.scss";
import "aos/dist/aos.css";

const Maps = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-maps" data-aos="fade-up">
      <div className="maps"><h4>ух какие пиздатые карты то тут</h4></div>
    </div>
  );
};

export default Maps;
