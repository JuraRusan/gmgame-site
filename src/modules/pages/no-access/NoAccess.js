import React, {useEffect} from "react";
import AOS from "aos";

import "./NoAccess.scss";
import "aos/dist/aos.css";

const NoAccess = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-no-access-403" data-aos="fade-up">
      <div className="container-403">
        <div className="wrapper-lock">
          <div className="lock"></div>
        </div>
        <div className="lock-message">
          <h1 className="h1-403">Error 403</h1>
          <h2 className="lock-h2">Доступ к этой странице ограничен!</h2>
          <p className="lock-p">Пожалуйста, свяжитесь с администратором сайта, если вы считаете, что это ошибка.</p>
          <a href="/" className="back-403">Вернутся на главную страницу</a>
        </div>
      </div>
    </div>
  );
};

export default NoAccess;
