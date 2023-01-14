import React from "react";
import {regulationsAllDB} from "../../../pages/regulations/regulationsAllDB";

const GeneralRules = () => {
  return (
    <div className="regulations-list">
      <p className="one-content-p">
        <span>1.</span>
        <label>{regulationsAllDB.oneRegulation}</label>
      </p>
      <p className="one-content-p">
        <span>2.</span>
        <label>{regulationsAllDB.twoRegulation}</label>
      </p>
      <p className="one-content-p">
        <span>3.</span>
        <label>{regulationsAllDB.threeRegulation}</label>
      </p>
      <p className="one-content-p">
        <span>4.</span>
        <label>{regulationsAllDB.fourRegulation}
          <ul className="content-ul">
            <li className="ul-content-li">{regulationsAllDB.fourOneRegulation}</li>
            <li className="ul-content-li">{regulationsAllDB.fourTwoRegulation}</li>
          </ul>
        </label>
      </p>
      <p className="one-content-p">
        <span>5.</span>
        <label>{regulationsAllDB.fiveRegulation}</label>
      </p>
      <p className="one-content-p">
        <span>6.</span>
        <label>{regulationsAllDB.sixRegulation}</label>
      </p>
      <p className="one-content-p">
        <span>7.</span>
        <label>{regulationsAllDB.sevenRegulation}</label>
      </p>
      <p className="one-content-p">
        <span>8.</span>
        <label>{regulationsAllDB.eightRegulation}</label>
      </p>
    </div>
  );
};

export default GeneralRules;
