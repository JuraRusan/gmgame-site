import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";

import styles from "./Monitoring-summary.module.scss";
import "aos/dist/aos.css";

const MonitoringSummary = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className={classNames(styles["monitoringSummaryWrapper"])} data-aos="zoom-in">мониторинги</div>
  );
};

export default MonitoringSummary;