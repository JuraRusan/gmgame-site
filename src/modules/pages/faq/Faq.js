import AOS from "aos";
import React, { useEffect, useMemo, useState } from "react";

import { tabsFaqList } from "../../../bases/db/faq/tabsFaqList.js";
import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";

import "aos/dist/aos.css";
import "./Faq.scss";

const Faq = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const selectedTab = useMemo(() => tabsFaqList[currentTab], [currentTab]);

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="main-faq">
      <Header />
      <div className="faq-box">
        <h2 className="h2-faq font-custom-2" data-aos="fade-up">
          Часто задаваемые вопросы
        </h2>
        <div className="wrapper-tabs-faq">
          <div className="tabs" data-aos="fade-up">
            {tabsFaqList.map((tab, i) => (
              <button
                className="btn-click font-custom-2"
                key={i}
                id={tab.id}
                disabled={currentTab === i}
                onClick={handleTabClick.bind(null, i)}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>
          <div className="content" data-aos="fade-up">
            <div className="div-id-tab">
              <div className="tab-one">
                <h3 className="title font-custom-2">{selectedTab.tabTitle}</h3>
                <p className="info">{selectedTab.titleInf}</p>
                <div className="lists">
                  {selectedTab.itfContent.map((el) => {
                    return (
                      <div className="list-one" key={el.id}>
                        <input
                          className="one-input"
                          id={el.forIndex}
                          type="checkbox"
                        />
                        <label className="one-label" htmlFor={el.forIndex}>
                          {el.question}
                        </label>
                        <h3 className="one-content-h3">{el.answer}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default Faq;
