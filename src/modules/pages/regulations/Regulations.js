import React, {useEffect} from "react";
import AOS from "aos";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";

import "aos/dist/aos.css";
import "./Regulations.scss";
import SvgArrow from "../../../bases/icons/SvgArrow";

const Regulations = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-regulations">
      <Header/>
      <div className="regulations-box" data-aos="fade-up">
        <div className="regulations-list">
          <h3 className="regulations-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
            aspernatur cum cumque doloribus, et excepturi harum hic iure iusto laboriosam magni, modi nemo officiis,
            praesentium quos rem voluptatibus? Ea?
          </h3>
          <div className="punishment-and-arrow">
          <span className="svg-rotate">
            <SvgArrow width="100%" height="100%" color="#FF0000"/>
           </span>
            <p className="punishment-block">Наказание:</p>
            <h4 className="h4-punishment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque
              cumque, dolores ducimus earum enim ipsa labore minus molestiae molestias natus nemo officiis pariatur
              perferendis quasi quisquam unde. Eveniet, sequi.</h4>
          </div>
        </div>
      </div>
      <Fotter/>
    </div>
  );
};

export default Regulations;
