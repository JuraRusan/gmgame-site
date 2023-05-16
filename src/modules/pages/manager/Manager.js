import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";
import {NavLink, Outlet} from "react-router-dom";

import styles from "./Manager.module.scss";
import "aos/dist/aos.css";

const Manager = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const arrayLink = [
    {
      label: "Сводка по игрокам",
      to: "player_summary",
    },
    {
      label: "Редактор Faq",
      to: "faq_editor",
    },
    {
      label: "Редактор модов",
      to: "mod_editor",
    },
    {
      label: "Редактор текстур пака",
      to: "texture_pack_editor",
    },
    {
      label: "Редактор правил",
      to: "regulations_editor",
    },
    {
      label: "Сводка по мониторингам",
      to: "monitoring_summary",
    },
    {
      label: "Статус по постам галереи",
      to: "gallery_status_view",
    }
  ]

  function setActive(isActive) {
    return isActive ? classNames(styles["tab"], styles["checked"]) : styles["tab"];
  }

  return (
    <div className={classNames(styles["wrapperManager"])}>
      <div className={classNames(styles["actions"])}>
        {arrayLink.map((el, index) =>
          <NavLink key={index} className={({isActive}) => setActive(isActive)} to={el.to}>{el.label}</NavLink>
        )}
      </div>
      <div className={classNames(styles["contentContainer"])}>
        <Outlet/>
      </div>
    </div>
  );
};

export default Manager;