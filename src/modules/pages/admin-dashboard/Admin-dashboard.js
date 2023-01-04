import React, {useEffect} from "react";
import AOS from "aos";
import {NavLink, Outlet} from "react-router-dom";

import "./Admin-dashboard.scss";
import "aos/dist/aos.css";

const AdminDashboard = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const allAdminApplication = "Заявки";
  const allPlayerTerritories = "Территории";
  const allPlayerMarker = "Метки";
  const allPlayerArticles = "Статьи";

  function setActive(isActive) {
    return isActive ? "tab-admin checked" : "tab-admin";
  }

  return (
    <div className="main-dashboard" data-aos="fade-up">
      <div className="box-dashboard">
        <div className="input-click-admin">
          <NavLink to="allApplications" className={({isActive}) => setActive(isActive)}>{allAdminApplication}</NavLink>
          <NavLink to="allPlayerTerritories" className={({isActive}) => setActive(isActive)}>{allPlayerTerritories}</NavLink>
          <NavLink to="allPlayerMarkers" className={({isActive}) => setActive(isActive)}>{allPlayerMarker}</NavLink>
          <NavLink to="allPlayerArticles" className={({isActive}) => setActive(isActive)}>{allPlayerArticles}</NavLink>
        </div>
        <div className="output-click-admin">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
