import React from "react";
import {regulationsAllDB} from "../../../pages/regulations/regulationsAllDB";

const Rest = () => {
  return (
    <div className="regulations-list">
      <p className="one-content-p">
        <span>1.</span>
        <label>{regulationsAllDB.fourInfo}</label>
      </p>
    </div>
  );
};

export default Rest;
