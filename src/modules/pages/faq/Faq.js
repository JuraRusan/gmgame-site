import React, { useEffect, useState } from "react";
import AOS from "aos";

import "./Faq.scss";
import "aos/dist/aos.css";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";

import { tabsFaqList } from "../../../bases/db/faq/tabsFaqList.js";

const Faq = () => {

 useEffect(() => { AOS.init({ duration: 1000 }); }, []);

 const [currentTab, setCurrentTab] = useState('1');
 const handleTabClick = (e) => {
  setCurrentTab(e.target.id);
 }

 return (
  <div className="main-faq">
   <Header />
   <div className="faq-box">
    <h2 className="h2-faq font-custom-2" data-aos="fade-up">Часто задаваемые вопросы</h2>
    <div className="wrapper-tabs-faq">
     <div className='tabs' data-aos="fade-up">
      {tabsFaqList.map((tab, i) =>
       <button className="btn-click font-custom-2" key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
      )}
     </div>
     <div className='content' data-aos="fade-up">
      {tabsFaqList.map((tab, i) =>
       <div className="div-id-tab" key={i}>{currentTab === `${tab.id}` &&
        <div className="tab-one">
         <h3 className='title font-custom-2'>{tab.tabTitle}</h3>
         <p className="info">{tab.titleInf}</p>
         <div className="lists">
          {tab.itfContent.map((el) => {
           return (
            <div className="list-one" key={el.id} data-aos="fade-up">
             <input className="one-input" id={el.forIndex} type="checkbox" />
             <label className="one-label" for={el.forIndex}>{el.question}</label>
             <h3 className="one-content-h3">{el.answer}</h3>
            </div>
           );
          })}
         </div>
        </div>}
       </div>
      )}
      <div>
      </div>
     </div>
    </div>
   </div>
   <Fotter />
  </div>
 );
};

export default Faq;