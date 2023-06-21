import classNames from "classnames";
import React, {useState, useEffect} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import ShulkerBox from "../shulker-box/Shulker-box";
import {shulkers_type} from "../../../pages/shopkeepers/ShulkersType";

import styles from "./One-item.module.scss"
import 'react-lazy-load-image-component/src/effects/blur.css';

const OneItem = (props) => {

  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({x: 0, y: 0});
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (showTooltip) {
        setTooltipPosition({x: event.clientX, y: event.clientY});
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showTooltip]);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    setTimeout(() => {
      setTooltipVisible(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
    setTimeout(() => {
      setShowTooltip(false);
    }, 100);
  };

  const tooltipStyle = {
    top: tooltipPosition.y + 10,
    left: tooltipPosition.x + 10,
    display: showTooltip ? 'block' : 'none',
    visibility: tooltipVisible ? 'visible' : 'hidden'
  };

  const listEnchant =
    <ul className={classNames(styles["listWrapper"])}>
      {props.enchantsList?.map((el, i) => (
        <li className={classNames(styles["list"])} key={i}>
          {el.enchant_id_ru !== "Проклятье утраты" && el.enchant_id_ru !== "Проклятие несъёмности"
            ?
            <>
              <span className={classNames(styles["main"])}>{el.enchant_id_ru} </span>- {el.lvl}
            </>
            :
            <>
              <span className={classNames(styles["red"])}>{el.enchant_id_ru} </span>- {el.lvl}
            </>
          }

        </li>
      ))}
      {props.storedEnchantsList?.map((el, i) => (
        <li className={classNames(styles["list"])} key={i}>
          {el.enchant_id_ru !== "Проклятье утраты" && el.enchant_id_ru !== "Проклятие несъёмности"
            ?
            <>
              <span className={classNames(styles["main"])}>{el.enchant_id_ru} </span>- {el.lvl}
            </>
            :
            <>
              <span className={classNames(styles["red"])}>{el.enchant_id_ru} </span>- {el.lvl}
            </>
          }

        </li>
      ))}
    </ul>

  return (
    <div className={classNames(styles["oneItemBlock"])} onClick={props.onClick}>
      <div className={classNames(styles["photoItem"])} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span className={classNames(styles["itemCount"])}>{props.item_count}</span>
        {props.item_minecraft_name_id === "tipped_arrow" || props.item_minecraft_name_id === "splash_potion" || props.item_minecraft_name_id === "potion" || props.item_minecraft_name_id === "lingering_potion"
          ?
          <LazyLoadImage
            className={classNames(styles["image"])}
            src={`./site_assets/minecraft-item/png/${props.item_minecraft_name_id}_${props.item_minecraft_id_potion}.png`}
            width="100%"
            height="100%"
            effect="blur"
            alt="none"
          />
          :
          <LazyLoadImage
            className={classNames(styles["image"])}
            src={`./site_assets/minecraft-item/png/${props.item_minecraft_name_id}.png`}
            width="100%"
            height="100%"
            effect="blur"
            alt="none"
          />
        }
      </div>
      {shulkers_type.includes(props.item_minecraft_name_id)
        ?
        <div className={classNames(styles["tooltip"])} style={tooltipStyle}>
          <h3 className={classNames(styles["name"])}>{props.item_name_title}</h3>
          {listEnchant}
          <p className={classNames(styles["minecraftId"])}>minecraft:{props.item_minecraft_name_id}</p>
          <div className={classNames(styles["scale"])}>
            <ShulkerBox content={props.contentHover}/>
          </div>
        </div>
        :
        <div className={classNames(styles["tooltip"])} style={tooltipStyle}>
          <h3 className={classNames(styles["name"])}>{props.item_name_title}</h3>
          {listEnchant}
          <p className={classNames(styles["minecraftId"])}>minecraft:{props.item_minecraft_name_id} {props.item_minecraft_id_potion === "" || props.item_minecraft_id_potion === undefined || props.item_minecraft_id_potion === null ? "" : `. [${props.item_minecraft_id_potion}]`}</p>
        </div>
      }
    </div>
  );
};

export default OneItem;
