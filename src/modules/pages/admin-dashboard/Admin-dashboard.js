import React, {useEffect} from "react";
import AOS from "aos";

import "./Admin-dashboard.scss";
import "aos/dist/aos.css";

const AdminDashboard = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-dashboard" data-aos="fade-up">
      <div className="box-dashboard">

      </div>
    </div>
  );
};

export default AdminDashboard;
