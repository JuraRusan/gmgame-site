import React, { useEffect } from "react";
import AOS from "aos";

import "./Header.scss";
import "aos/dist/aos.css";

const Header = () => {

  useEffect(() => { AOS.init({ duration: 1000 });}, []);

  return <div className="header" data-aos="fade-down">
    
  </div>;
};

export default Header;
