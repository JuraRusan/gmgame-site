import classNames from "classnames";
import React from "react";
import {regulationsAllDB} from "../../../pages/regulations/regulationsAllDB";
import ArrowSvgComponent from "../../../../bases/icons/arrowSvg/ArrowSvg";

import styles from "../../../pages/regulations/Regulations.module.scss"

const AllMainRules = () => {
  return (
    <div className={classNames(styles["regulations-list"])}>

      <p className={classNames(styles["one-content-p"])}>
        <span>1.</span>
        <label>{regulationsAllDB.twoOneRegulation}
          <ul className={classNames(styles["content-ul"])}>
            <li className={classNames(styles["ul-content-li"])}>{regulationsAllDB.twoOneOneRegulation}</li>
            <li className={classNames(styles["ul-content-li"])}>{regulationsAllDB.twoOneTwoRegulation}</li>
            <li className={classNames(styles["ul-content-li"])}>{regulationsAllDB.twoOneThreeRegulation}</li>
            <li className={classNames(styles["ul-content-li"])}>{regulationsAllDB.twoOneFourRegulation}</li>
            <li className={classNames(styles["ul-content-li"])}>{regulationsAllDB.twoOneFiveRegulation}</li>
            <li className={classNames(styles["ul-content-li"])}>{regulationsAllDB.twoOneSixRegulation}</li>
            <li className={classNames(styles["ul-content-li"])}>{regulationsAllDB.twoOneSevenRegulation}</li>
            <li className={classNames(styles["ul-content-li"])}>{regulationsAllDB.twoOneEightRegulation}</li>
          </ul>
        </label>
      </p>
      <div className={classNames(styles["svg-punishment-one"])}>
        <div className={classNames(styles["svg-rotate-div"])}>
          <span className={classNames(styles["rotate"])}>
            <ArrowSvgComponent width="100%" height="100%" color="#FF0000"/>
          </span>
          <span className={classNames(styles["span-war"])}>{regulationsAllDB.punishment}</span>
        </div>
        <label className={classNames(styles["punishment-one"])}>{regulationsAllDB.twoOnePunishment}</label>
      </div>

      <p className={classNames(styles["one-content-p"])}>
        <span>2.</span>
        <label>{regulationsAllDB.twoTwoRegulation}</label>
      </p>
      <div className={classNames(styles["svg-punishment-one"])}>
        <div className={classNames(styles["svg-rotate-div"])}>
          <span className={classNames(styles["rotate"])}>
            <ArrowSvgComponent width="100%" height="100%" color="#FF0000"/>
          </span>
          <span className={classNames(styles["span-war"])}>{regulationsAllDB.punishment}</span>
        </div>
        <label className={classNames(styles["punishment-one"])}>{regulationsAllDB.twoTwoPunishment}</label>
      </div>


      <p className={classNames(styles["one-content-p"])}>
        <span>3.</span>
        <label>{regulationsAllDB.twoThreeRegulation}</label>
      </p>
      <div className={classNames(styles["svg-punishment-one"])}>
        <div className={classNames(styles["svg-rotate-div"])}>
          <span className={classNames(styles["rotate"])}>
            <ArrowSvgComponent width="100%" height="100%" color="#FF0000"/>
          </span>
          <span className={classNames(styles["span-war"])}>{regulationsAllDB.punishment}</span>
        </div>
        <label className={classNames(styles["punishment-one"])}>{regulationsAllDB.twoThreePunishment}</label>
      </div>


      <p className={classNames(styles["one-content-p"])}>
        <span>4.</span>
        <label>{regulationsAllDB.twoFourRegulation}</label>
      </p>
      <div className={classNames(styles["svg-punishment-one"])}>
        <div className={classNames(styles["svg-rotate-div"])}>
          <span className={classNames(styles["rotate"])}>
            <ArrowSvgComponent width="100%" height="100%" color="#FF0000"/>
          </span>
          <span className={classNames(styles["span-war"])}>{regulationsAllDB.punishment}</span>
        </div>
        <label className={classNames(styles["punishment-one"])}>{regulationsAllDB.twoFourPunishment}</label>
      </div>


      <p className={classNames(styles["one-content-p"])}>
        <span>5.</span>
        <label>{regulationsAllDB.twoFiveRegulation}</label>
      </p>
      <div className={classNames(styles["svg-punishment-one"])}>
        <div className={classNames(styles["svg-rotate-div"])}>
          <span className={classNames(styles["rotate"])}>
            <ArrowSvgComponent width="100%" height="100%" color="#FF0000"/>
          </span>
          <span className={classNames(styles["span-war"])}>{regulationsAllDB.punishment}</span>
        </div>
        <label className={classNames(styles["punishment-one"])}>{regulationsAllDB.twoFivePunishment}</label>
      </div>


      <p className={classNames(styles["one-content-p"])}>
        <span>6.</span>
        <label>{regulationsAllDB.twoSixRegulation}</label>
      </p>
      <div className={classNames(styles["svg-punishment-one"])}>
        <div className={classNames(styles["svg-rotate-div"])}>
          <span className={classNames(styles["rotate"])}>
            <ArrowSvgComponent width="100%" height="100%" color="#FF0000"/>
          </span>
          <span className={classNames(styles["span-war"])}>{regulationsAllDB.punishment}</span>
        </div>
        <label className={classNames(styles["punishment-one"])}>{regulationsAllDB.twoSixPunishment}</label>
      </div>


      <p className={classNames(styles["one-content-p"])}>
        <span>7.</span>
        <label>{regulationsAllDB.twoSevenRegulation}</label>
      </p>
      <div className={classNames(styles["svg-punishment-one"])}>
        <div className={classNames(styles["svg-rotate-div"])}>
          <span className={classNames(styles["rotate"])}>
            <ArrowSvgComponent width="100%" height="100%" color="#FF0000"/>
          </span>
          <span className={classNames(styles["span-war"])}>{regulationsAllDB.punishment}</span>
        </div>
        <label className={classNames(styles["punishment-one"])}>{regulationsAllDB.twoSevenPunishment}</label>
      </div>


      <p className={classNames(styles["one-content-p"])}>
        <span>8.</span>
        <label>{regulationsAllDB.twoEightRegulation}</label>
      </p>
      <div className={classNames(styles["svg-punishment-one"])}>
        <div className={classNames(styles["svg-rotate-div"])}>
          <span className={classNames(styles["rotate"])}>
            <ArrowSvgComponent width="100%" height="100%" color="#FF0000"/>
          </span>
          <span className={classNames(styles["span-war"])}>{regulationsAllDB.punishment}</span>
        </div>
        <label className={classNames(styles["punishment-one"])}>{regulationsAllDB.twoEightPunishment}</label>
      </div>


      <p className={classNames(styles["one-content-p"])}>
        <span>9.</span>
        <label>{regulationsAllDB.twoNineRegulation}</label>
      </p>
      <div className={classNames(styles["svg-punishment-one"])}>
        <div className={classNames(styles["svg-rotate-div"])}>
          <span className={classNames(styles["rotate"])}>
            <ArrowSvgComponent width="100%" height="100%" color="#FF0000"/>
          </span>
          <span className={classNames(styles["span-war"])}>{regulationsAllDB.punishment}</span>
        </div>
        <label className={classNames(styles["punishment-one"])}>{regulationsAllDB.twoNinePunishment}</label>
      </div>


      <p className={classNames(styles["one-content-p"])}>
        <span>10.</span>
        <label>{regulationsAllDB.twoTenRegulation}</label>
      </p>
      <div className={classNames(styles["svg-punishment-one"])}>
        <div className={classNames(styles["svg-rotate-div"])}>
          <span className={classNames(styles["rotate"])}>
            <ArrowSvgComponent width="100%" height="100%" color="#FF0000"/>
          </span>
          <span className={classNames(styles["span-war"])}>{regulationsAllDB.punishment}</span>
        </div>
        <label className={classNames(styles["punishment-one"])}>{regulationsAllDB.twoTenPunishment}</label>
      </div>


      <p className={classNames(styles["one-content-p"])}>
        <span>11.</span>
        <label>{regulationsAllDB.twoElevenRegulation}</label>
      </p>
      <div className={classNames(styles["svg-punishment-one"])}>
        <div className={classNames(styles["svg-rotate-div"])}>
          <span className={classNames(styles["rotate"])}>
            <ArrowSvgComponent width="100%" height="100%" color="#FF0000"/>
          </span>
          <span className={classNames(styles["span-war"])}>{regulationsAllDB.punishment}</span>
        </div>
        <label className={classNames(styles["punishment-one"])}>{regulationsAllDB.twoElevenPunishment}</label>
      </div>


      <p className={classNames(styles["one-content-p"])}>
        <span>12.</span>
        <label>{regulationsAllDB.twoTwelveRegulation}</label>
      </p>
      <div className={classNames(styles["svg-punishment-one"])}>
        <div className={classNames(styles["svg-rotate-div"])}>
          <span className={classNames(styles["rotate"])}>
            <ArrowSvgComponent width="100%" height="100%" color="#FF0000"/>
          </span>
          <span className={classNames(styles["span-war"])}>{regulationsAllDB.punishment}</span>
        </div>
        <label className={classNames(styles["punishment-one"])}>{regulationsAllDB.twoTwelvePunishment}</label>
      </div>

    </div>
  );
};

export default AllMainRules;
