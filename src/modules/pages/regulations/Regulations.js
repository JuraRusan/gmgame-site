import React, {useEffect} from "react";
import AOS from "aos";

import {regulationsDB} from "../../../bases/db/regulations/regulationsDB.js";

import "aos/dist/aos.css";
import "./Regulations.scss";
import SvgArrow from "../../../bases/icons/SvgArrow.js";

const Regulations = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-regulations">
      <div className="regulations-box" data-aos="fade-up">
        <div className="box-one" data-aos="fade-up">
          <h2 className="title-division font-custom-2">{regulationsDB.oneTitle}</h2>
          <div className="regulations-list">
            <p className="one-content-p">1. {regulationsDB.oneRegulation}</p>
            <p className="one-content-p">2. {regulationsDB.twoRegulation}</p>
            <p className="one-content-p">3. {regulationsDB.threeRegulation}</p>
            <p className="one-content-p">4. {regulationsDB.fourRegulation}
              <ul className="content-ul">
                <li className="ul-content-li">{regulationsDB.fourOneRegulation}</li>
                <li className="ul-content-li">{regulationsDB.fourTwoRegulation}</li>
              </ul>
            </p>
            <p className="one-content-p">5. {regulationsDB.fiveRegulation}</p>
            <p className="one-content-p">6. {regulationsDB.sixRegulation}</p>
            <p className="one-content-p">7. {regulationsDB.sevenRegulation}</p>
            <p className="one-content-p">8. {regulationsDB.eightRegulation}</p>
          </div>
        </div>
        <div className="box-one" data-aos="fade-up">
          <h2 className="title-division font-custom-2">{regulationsDB.twoTitle}</h2>
          <div className="regulations-list">
            <p className="one-content-p">1. {regulationsDB.twoOneRegulation}
              <ul className="content-ul">
                <li className="ul-content-li">{regulationsDB.twoOneOneRegulation}</li>
                <li className="ul-content-li">{regulationsDB.twoOneTwoRegulation}</li>
                <li className="ul-content-li">{regulationsDB.twoOneThreeRegulation}</li>
                <li className="ul-content-li">{regulationsDB.twoOneFourRegulation}</li>
                <li className="ul-content-li">{regulationsDB.twoOneFiveRegulation}</li>
                <li className="ul-content-li">{regulationsDB.twoOneSixRegulation}</li>
                <li className="ul-content-li">{regulationsDB.twoOneSevenRegulation}</li>
                <li className="ul-content-li">{regulationsDB.twoOneEightRegulation}</li>
              </ul>
            </p>
            <div className="svg-punishment-one">
              <span className="svg-rotate">
                <SvgArrow width="100%" height="100%" color="#FF0000"/>
              </span>
              <label className="punishment-one"><span
                className="span-war">{regulationsDB.punishment}</span> {regulationsDB.twoOnePunishment}</label>
            </div>
            <p className="one-content-p">2. {regulationsDB.twoTwoRegulation}</p>
            <div className="svg-punishment-one">
              <span className="svg-rotate">
                <SvgArrow width="25px" height="25px" color="#FF0000"/>
              </span>
              <label className="punishment-one"><span
                className="span-war">{regulationsDB.punishment}</span> {regulationsDB.twoTwoPunishment}</label>
            </div>
            <p className="one-content-p">3. {regulationsDB.twoThreeRegulation}</p>
            <div className="svg-punishment-one">
              <span className="svg-rotate">
                <SvgArrow width="100%" height="100%" color="#FF0000"/>
              </span>
              <label className="punishment-one"><span
                className="span-war">{regulationsDB.punishment}</span> {regulationsDB.twoThreePunishment}</label>
            </div>
            <p className="one-content-p">4. {regulationsDB.twoFourRegulation}</p>
            <div className="svg-punishment-one">
              <span className="svg-rotate">
                <SvgArrow width="100%" height="100%" color="#FF0000"/>
              </span>
              <label className="punishment-one"><span
                className="span-war">{regulationsDB.punishment}</span> {regulationsDB.twoFourPunishment}</label>
            </div>
            <p className="one-content-p">5. {regulationsDB.twoFiveRegulation}</p>
            <div className="svg-punishment-one">
              <span className="svg-rotate">
                <SvgArrow width="100%" height="100%" color="#FF0000"/>
              </span>
              <label className="punishment-one"><span
                className="span-war">{regulationsDB.punishment}</span> {regulationsDB.twoFivePunishment}</label>
            </div>
            <p className="one-content-p">6. {regulationsDB.twoSixRegulation}</p>
            <div className="svg-punishment-one">
              <span className="svg-rotate">
                <SvgArrow width="100%" height="100%" color="#FF0000"/>
              </span>
              <label className="punishment-one"><span
                className="span-war">{regulationsDB.punishment}</span> {regulationsDB.twoSixPunishment}</label>
            </div>
            <p className="one-content-p">7. {regulationsDB.twoSevenRegulation}</p>
            <div className="svg-punishment-one">
              <span className="svg-rotate">
                <SvgArrow width="100%" height="100%" color="#FF0000"/>
              </span>
              <label className="punishment-one"><span
                className="span-war">{regulationsDB.punishment}</span> {regulationsDB.twoSevenPunishment}</label>
            </div>
            <p className="one-content-p">8. {regulationsDB.twoEightRegulation}</p>
            <div className="svg-punishment-one">
              <span className="svg-rotate">
                <SvgArrow width="100%" height="100%" color="#FF0000"/>
              </span>
              <label className="punishment-one"><span
                className="span-war">{regulationsDB.punishment}</span> {regulationsDB.twoEightPunishment}</label>
            </div>
            <p className="one-content-p">9. {regulationsDB.twoNineRegulation}</p>
            <div className="svg-punishment-one">
              <span className="svg-rotate">
                <SvgArrow width="100%" height="100%" color="#FF0000"/>
              </span>
              <label className="punishment-one"><span
                className="span-war">{regulationsDB.punishment}</span> {regulationsDB.twoNinePunishment}</label>
            </div>
            <p className="one-content-p">10. {regulationsDB.twoTenRegulation}</p>
            <div className="svg-punishment-one">
              <span className="svg-rotate">
                <SvgArrow width="100%" height="100%" color="#FF0000"/>
              </span>
              <label className="punishment-one"><span
                className="span-war">{regulationsDB.punishment}</span> {regulationsDB.twoTenPunishment}</label>
            </div>
            <p className="one-content-p">11. {regulationsDB.twoElevenRegulation}</p>
            <div className="svg-punishment-one">
              <span className="svg-rotate">
                <SvgArrow width="100%" height="100%" color="#FF0000"/>
              </span>
              <label className="punishment-one"><span
                className="span-war">{regulationsDB.punishment}</span> {regulationsDB.twoElevenPunishment}</label>
            </div>
            <p className="one-content-p">12. {regulationsDB.twoTwelveRegulation}</p>
            <div className="svg-punishment-one">
              <span className="svg-rotate">
                <SvgArrow width="100%" height="100%" color="#FF0000"/>
              </span>
              <label className="punishment-one"><span
                className="span-war">{regulationsDB.punishment}</span> {regulationsDB.twoTwelvePunishment}</label>
            </div>
          </div>
        </div>
        <div className="box-one" data-aos="fade-up">
          <h2 className="title-division font-custom-2">{regulationsDB.threeTitle}</h2>
          <div className="regulations-list">
            <p className="one-content-p">{regulationsDB.threeLine1}</p>
            <p className="one-content-p">{regulationsDB.threeLine2}</p>
            <p className="one-content-p">{regulationsDB.threeLine3}</p>
            <p className="one-content-p">{regulationsDB.threeLine4}</p>
            <p className="one-content-p">{regulationsDB.threeLine5}</p>
            <p className="one-content-p">{regulationsDB.threeLine6}</p>
            <p className="one-content-p">{regulationsDB.threeLine7}</p>
            <p className="one-content-p">{regulationsDB.threeLine8}</p>
            <p className="one-content-p">{regulationsDB.threeLine9}</p>
          </div>
        </div>
        <div className="box-one" data-aos="fade-up">
          <h2 className="title-division font-custom-2">{regulationsDB.fourTitle}</h2>
          <div className="regulations-list">
            <p className="one-content-p">{regulationsDB.fourInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regulations;

