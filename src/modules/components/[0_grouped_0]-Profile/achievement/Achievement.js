import classNames from "classnames";
import React, {useEffect, useState, useRef} from "react";
import AOS from "aos";
import AchievementOneSVG from "../../../../bases/icons/achievementOneSVG/achievementOneSVG";
import AchievementTwoSVG from "../../../../bases/icons/achievementTwo/achievementTwoSVG";
import {dataAc} from "./output";

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

        {dataAc.map((el, i) =>
          <div key={i} ref={divRef} id={`uniqueName${el.id}`} className={clickedDiv === `uniqueName${el.id}` && !buttonClicked ? classNames(styles["notDone"], styles["oneAchievementWrapper"], styles["activeAchievement"]) : classNames(styles["notDone"], styles["oneAchievementWrapper"])} onClick={() => handleClick(`uniqueName${el.id}`)}>
            <div className={classNames(styles["achievementView"])}>
              <div className={classNames(styles["iconWrapper"])}>
                <div className={classNames(styles["iconBackground"])}>
                  {el.display_frame === "challenge" ?
                    <AchievementOneSVG
                      className={classNames(styles["achievementBackground"])}
                      wight="100%"
                      height="100%"
                      colorOne={colorParameterOne}
                      colorTwo={colorParameterTwo}
                      colorThree={colorParameterThree}
                    />
                    :
                    null
                  }
                  {el.display_frame === "task" ?
                    <AchievementTwoSVG
                      className={classNames(styles["achievementBackground"])}
                      wight="100%"
                      height="100%"
                      colorOne={colorParameterOne}
                      colorTwo={colorParameterTwo}
                      colorThree={colorParameterThree}
                    />
                    :
                    null
                  }
                  {el.display_frame === "goal" ?
                    <AchievementTwoSVG
                      className={classNames(styles["achievementBackground"])}
                      wight="100%"
                      height="100%"
                      colorOne={colorParameterOne}
                      colorTwo={colorParameterTwo}
                      colorThree={colorParameterThree}
                    />
                    :
                    null
                  }
                  {el.display_frame === null ?
                    <AchievementTwoSVG
                      className={classNames(styles["achievementBackground"])}
                      wight="100%"
                      height="100%"
                      colorOne={colorParameterOne}
                      colorTwo={colorParameterTwo}
                      colorThree={colorParameterThree}
                    />
                    :
                    null
                  }
                </div>
                <img
                  className={classNames(styles["achievementIcon"])}
                  src={`../site_assets/minecraft-item/png/${el.display_icon_item}.png`}
                  alt=" "
                  width="100%"
                  height="100%"
                />
              </div>
              <h1 className={classNames(styles["achievementName"])}>{el.display_title_translate}</h1>
            </div>
            <div className={classNames(styles["achievementDescription"])}>
              <p className={clickedDiv === `uniqueName${el.id}` && !buttonClicked ? classNames(styles["description"], styles["activeDescription"]) : classNames(styles["description"])}>{el.display_description_translate}</p>
            </div>
            <button className={classNames(styles["actionsClose"])} onClick={handleButtonClick} data-aos="zoom-in">X</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Achievement;
