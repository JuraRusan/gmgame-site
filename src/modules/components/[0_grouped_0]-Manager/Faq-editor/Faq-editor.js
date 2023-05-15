import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";

import styles from "./Faq-editor.module.scss";
import "aos/dist/aos.css";

const FaqEditor = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className={classNames(styles["faqEditorWrapper"])} data-aos="zoom-in">редактор фака</div>
  );
};

export default FaqEditor;