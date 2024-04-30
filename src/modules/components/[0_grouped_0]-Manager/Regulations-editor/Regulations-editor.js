import classNames from "classnames";
import React, { useEffect } from "react";
import AOS from "aos";

import styles from "./Regulations-editor.module.scss";
import "aos/dist/aos.css";

const RegulationsEditor = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classNames(styles["regulationEditorWrapper"])} data-aos="zoom-in">
      редактор правил
    </div>
  );
};

export default RegulationsEditor;
