import classNames from "classnames";
import React, { useEffect } from "react";
import AOS from "aos";

import styles from "./Mod-editor.module.scss";
import "aos/dist/aos.css";

const ModEditor = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classNames(styles["modEditorWrapper"])} data-aos="zoom-in">
      редактор модов
    </div>
  );
};

export default ModEditor;
