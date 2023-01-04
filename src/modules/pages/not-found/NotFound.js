import React, {useEffect} from "react";
import AOS from "aos";

import "./NotFound.scss";
import "aos/dist/aos.css";

const NotFound = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  if (window.location.pathname === '/api/login') {
    window.location = 'http://127.0.0.1:3001/api/login';
    return;
  }

  return (
    <div className="main-not-404" data-aos="fade-up">
      <div className="all-404">
        <div className="fof">
          <h1 className="h1-404">Error 404</h1>
          <h2 className="inf-404">Данной страницы не существует, проверьте указанный адрес</h2>
          <a href="/" className="back-404">Вернутся на главную страницу</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;