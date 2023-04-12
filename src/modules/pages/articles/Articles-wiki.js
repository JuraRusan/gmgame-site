import React, {useEffect} from "react";
import AOS from "aos";

import "./Articles-wiki.scss";
import "aos/dist/aos.css";

const ArticlesWiki = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-wiki" data-aos="zoom-in">
      <div className="box-wiki" data-aos="zoom-in">
        <h3 className="h3-wiki font-custom-2">Страница в разработке, ожидайте в ближайшем будущем. </h3>
      </div>
    </div>
  );
};

export default ArticlesWiki;
