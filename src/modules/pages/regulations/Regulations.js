import classNames from "classnames";
import React, {useState} from "react";
import {regulationsAllListAndComponents} from "./regulationsAllList.js";

import styles from "./Regulations.module.scss";

const Regulations = () => {

  const [currentTab, setCurrentTab] = useState('1');
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  }

  return (
    <div className={classNames(styles["main-regulations"])}>
      <div className={classNames(styles["regulations-box"])}>
        <div className={classNames(styles["list-reg"])}>
          {regulationsAllListAndComponents.map((tab, i) =>
            <button
              className={classNames(styles["btn-click"])}
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={(handleTabClick)}>{tab.name}
            </button>
          )}
        </div>
        <div className={classNames(styles["content-reg"])}>
          {regulationsAllListAndComponents.map((cont, i) =>
            <div className={classNames(styles["wrapper"])} key={i}>{currentTab === `${cont.id}` &&
              <div className={classNames(styles["div-id-tab-content"])}>
                <h2 className={classNames(styles["title-division"])}>{cont.name}</h2>
                {cont.content}
              </div>}
            </div>)}
        </div>
      </div>
    </div>

  );
};

export default Regulations;

