import React, {useEffect} from "react";
import AOS from "aos";

import "./Mods.scss";
import "aos/dist/aos.css";

const Mods = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-mods" data-aos="fade-up">
      <div className="box-mods" data-aos="fade-up">
        <h3 className="h3-mods font-custom-2">Страница в разработке, ожидайте в ближайшем будущем. </h3>
      </div>
    </div>
  );
};

export default Mods;
