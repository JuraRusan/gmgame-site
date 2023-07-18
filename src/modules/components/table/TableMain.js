import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";

import styles from "./Table.module.scss";
import "aos/dist/aos.css";

const TableMain = (props) => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <table className={classNames(styles["tableMain"])} data-aos="zoom-in">{props.children}</table>
  );
};

export default TableMain;
