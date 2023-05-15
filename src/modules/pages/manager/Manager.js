import classNames from "classnames";
import React, {useEffect, useState} from "react";
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

  const [containerIndex, setContainerIndex] = useState(true);

  const handleNext = () => {
    setContainerIndex(false);
  };

  const handlePrev = () => {
    setContainerIndex(true);
  };

  return (
    <div className={classNames(styles["wrapperManager"])}>
      <div className={classNames(styles["actions"])}>
        <button onClick={handlePrev} className={classNames(styles["buttonActions"], styles["prev"])}>Показать навигацию</button>
        <button onClick={handleNext} className={classNames(styles["buttonActions"], styles["next"])}>Показать контент</button>
      </div>
      <div className={classNames(styles["slider"])}>
        {containerIndex === true ? (
          <div className={classNames(styles["wrapperManagerTo"])} data-aos="zoom-in">
            <h3 className={classNames(styles["navigationTitle"])}>Навигация по менеджеру</h3>
            {arrayLink.map((el, index) =>
              <NavLink key={index} onClick={handleNext} className={classNames(styles["link"])} to={el.to}>- {el.label}</NavLink>
            )}
          </div>
        ) : null}
        {containerIndex === false ? <Outlet/> : null}
      </div>
    </div>
  );
};

export default Manager;