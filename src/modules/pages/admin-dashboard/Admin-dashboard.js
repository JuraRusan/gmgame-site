import React, {useEffect} from "react";
import AOS from "aos";

import "./Admin-dashboard.scss";
import "aos/dist/aos.css";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";

const AdminDashboard = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-dashboard" data-aos="fade-up">
      <Header/>
      <div className="box-dashboard">

      </div>
      <Fotter/>
    </div>
  );
};

export default AdminDashboard;
