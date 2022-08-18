import React, {useEffect} from "react";
import AOS from "aos";

import "./Articles-wiki.scss";
import "aos/dist/aos.css";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";

const ArticlesWiki = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-wiki" data-aos="fade-up">
      <Header/>
      <div className="box-wiki" data-aos="fade-up">
        <h3 className="h3-wiki font-custom-2">Страница в разработке, ожидайте в ближайшем будущем. </h3>
      </div>
      <Fotter/>
    </div>
  );
};

export default ArticlesWiki;
