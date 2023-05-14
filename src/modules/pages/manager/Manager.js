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

  return (
    <>
      <div className={classNames(styles["wrapperManagerTo"])} data-aos="zoom-in">
        <h3 className={classNames(styles["navigationTitle"])}>Навигация по менеджеру</h3>
        {arrayLink.map((el, index) =>
          <div className={classNames(styles["row"])}>
            <h2 className={classNames(styles["name"])}>- {el.label}</h2>
            <NavLink className={classNames(styles["link"])} to={el.to}>Перейти</NavLink>
          </div>
        )}
      </div>
      <Outlet/>
    </>
  );
};

export default Manager;