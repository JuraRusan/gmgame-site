import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";

import styles from "./Texture-pack-editor.module.scss";
import "aos/dist/aos.css";

const TexturePackEditor = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className={classNames(styles["TexturePackEditorWrapper"])} data-aos="zoom-in">редактор текстур пака</div>
  );
};

export default TexturePackEditor;