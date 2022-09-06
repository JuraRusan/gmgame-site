import React, {useEffect, useState} from "react";
import AOS from "aos";
import {regulationsAllListAndComponents} from "../../../bases/db/regulations/regulationsAllList.js";

import "aos/dist/aos.css";
import "./Regulations.scss";

const Regulations = () => {

  const [currentTab, setCurrentTab] = useState('1');
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  }

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-regulations">
      <div className="regulations-box" data-aos="fade-up">
        <div className="list-reg" data-aos="fade-up">
          {regulationsAllListAndComponents.map((tab, i) =>
            <button className="btn-click font-custom-2" key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.name}</button>)}
        </div>
        <div className="content-reg" data-aos="fade-up">
          {regulationsAllListAndComponents.map((cont, i) =>
            <div className="wrapper" key="1">{currentTab === `${cont.id}` &&
              <div className="div-id-tab-content">
                <h2 className="title-division font-custom-2">{cont.name}</h2>
                {cont.content}
              </div>}
            </div>)}
        </div>
      </div>
    </div>

  );
};

export default Regulations;

