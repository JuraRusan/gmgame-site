import React from "react";

import "./World.scss";

const World = (props) => {

 return (
  <div className="worlds">
   <div className="circle"></div>
   <h3 className="world-name font-custom-2">{props.name}</h3>
   <div className="hr-90" ></div>
   <div className="world-img-text">
    <img src={props.src} alt=" " />
    <h4 className="inf-text">{props.inf}</h4>
   </div>
  </div>
 );
};

export default World;
