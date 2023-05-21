import classNames from "classnames";
import React, {useEffect, useState, useRef} from "react";
import AOS from "aos";
import AchievementOneSVG from "../../../../bases/icons/achievementOneSVG/achievementOneSVG";
import AchievementTwoSVG from "../../../../bases/icons/achievementTwo/achievementTwoSVG";
import all_chained_up from './json/all_chained_up.json';
import allayance from './json/allayance.json'

import styles from "./Achievement.module.scss";
import "aos/dist/aos.css";

const Achievement = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const [clickedDiv, setClickedDiv] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const divRef = useRef(null);

  const handleClick = (id) => {
    setClickedDiv(id);
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  const handleOutsideClick = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setClickedDiv(null);
      setButtonClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const colorParameterOne = "rgb(0,21,35)" //right-bottom color
  const colorParameterTwo = "#002036" //left-top color
  const colorParameterThree = "#052136" //center color

  return (
    <div className={classNames(styles["achievementsBlock"])} data-aos="zoom-in">
      <h3 className={classNames(styles["achievementsTitle"])}>Игровые достижения</h3>
      <div className={classNames(styles["allWrapper"])}>

        <div ref={divRef} id="one" className={clickedDiv === 'one' && !buttonClicked ? classNames(styles["oneAchievementWrapper"], styles["activeAchievement"]) : classNames(styles["oneAchievementWrapper"])} onClick={() => handleClick('one')}>
          <div className={classNames(styles["achievementView"])}>
            <div className={classNames(styles["iconWrapper"])}>
              <div className={classNames(styles["iconBackground"])}>
                <AchievementOneSVG
                  className={classNames(styles["achievementBackground"])}
                  wight="100%"
                  height="100%"
                  colorOne={colorParameterOne}
                  colorTwo={colorParameterTwo}
                  colorThree={colorParameterThree}
                />
              </div>
              <img
                className={classNames(styles["achievementIcon"])}
                src={`../site_assets/minecraft-item/png/${allayance.display.icon.item.split(":")[1]}.png`}
                alt=" "
                width="100%"
                height="100%"
              />
            </div>
            <h1 className={classNames(styles["achievementName"])}>{allayance.display.title.translate}</h1>
          </div>
          <div className={classNames(styles["achievementDescription"])}>
            <p className={clickedDiv === 'one' && !buttonClicked ? classNames(styles["description"], styles["activeDescription"]) : classNames(styles["description"])}>{allayance.display.description.translate}</p>
          </div>
          <button className={classNames(styles["actionsClose"])} onClick={handleButtonClick} data-aos="zoom-in">X</button>
        </div>

      </div>
    </div>
  );
};

export default Achievement;
