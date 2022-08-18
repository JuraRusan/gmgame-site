import React from "react";

import "./Warn.scss";

import SvgWarn from "../../../bases/icons/SvgWarn.js";

const Warn = (props) => {
  return (
    <div className="warn-block">
      <span className="span-war"><SvgWarn width="24px" height="24px" color="#ffb400"/></span>
      <h4 className="war-h4-auth">{props.inf}</h4>
    </div>
  );
};

export default Warn;
