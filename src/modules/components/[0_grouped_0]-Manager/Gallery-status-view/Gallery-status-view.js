import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";

import styles from "./Gallery-status-view.module.scss";
import "aos/dist/aos.css";

const GalleryStatusView = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className={classNames(styles["galleryStatusViewWrapper"])} data-aos="zoom-in">просмотр статуса галереи</div>
  );
};

export default GalleryStatusView;