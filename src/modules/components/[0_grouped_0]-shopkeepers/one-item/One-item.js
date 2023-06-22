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

  const calculateLeftPosition = (x) => {
    const minWidth = 250;
    const maxWidth = 420 + 28;
    const tooltipWidth = Math.min(Math.max(minWidth, maxWidth), maxWidth);
    const windowWidth = window.innerWidth;

    if (x + tooltipWidth > windowWidth) {
      return windowWidth - tooltipWidth + 10;
    }

    return x + 10; // 10 - отступ от курсора
  };

  const tooltipStyle = {
    top: tooltipPosition.y + 10,
    left: calculateLeftPosition(tooltipPosition.x),
    display: showTooltip ? 'block' : 'none',
    visibility: tooltipVisible ? 'visible' : 'hidden'
  };

  const itemNameId = props.item_minecraft_name_id;
  const goatHorn = props.goat_horn_instrument_type;
  const goatHornRu = props.goat_horn_instrument_type_ru;
  const idPotion = props.item_minecraft_id_potion

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

  const minecraftIdRegister =
    <p className={classNames(styles["minecraftId"])}>minecraft:
      {itemNameId}
      {idPotion === "" || idPotion === undefined || idPotion === null ? "" : `. [${idPotion}]`}
      {goatHorn === "" || goatHorn === undefined || goatHorn === null ? "" : `. [${goatHorn}]`}
    </p>

  return (
    <div className={classNames(styles["oneItemBlock"])} onClick={props.onClick}>
      <div className={classNames(styles["photoItem"])} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span className={classNames(styles["itemCount"])}>{props.item_count}</span>
        {itemNameId === "tipped_arrow" || itemNameId === "splash_potion" || itemNameId === "potion" || itemNameId === "lingering_potion" || itemNameId === "enchanted_golden_apple"
          ?
          itemNameId === "enchanted_golden_apple"
            ?
            <LazyLoadImage
              className={classNames(styles["image"])}
              src="./site_assets/minecraft-item/png/enchanted_golden_apple.png"
              width="100%"
              height="100%"
              effect="blur"
              alt="none"
            />
            :
            <LazyLoadImage
              className={classNames(styles["image"])}
              src={`./site_assets/minecraft-item/png/${itemNameId}_${idPotion}.png`}
              width="100%"
              height="100%"
              effect="blur"
              alt="none"
            />
          :
          <LazyLoadImage
            className={classNames(styles["image"])}
            src={`./site_assets/minecraft-item/png/${itemNameId}.png`}
            width="100%"
            height="100%"
            effect="blur"
            alt="none"
          />
        }
      </div>
      {
        shulkers_type.includes(itemNameId)
          ?
          <div className={classNames(styles["tooltip"])} style={tooltipStyle}>
            <h3 className={classNames(styles["name"])}>
              {props.item_name_title}
              {goatHornRu === "" || goatHornRu === undefined || goatHornRu === null ? "" : <span> "{goatHornRu}"</span>}
            </h3>
            {listEnchant}
            {minecraftIdRegister}
            <div className={classNames(styles["scale"])}>
              <ShulkerBox content={props.contentHover}/>
            </div>
          </div>
          :
          <div className={classNames(styles["tooltip"])} style={tooltipStyle}>
            <h3 className={classNames(styles["name"])}>
              {props.item_name_title}
              {goatHornRu === "" || goatHornRu === undefined || goatHornRu === null ? "" : <span> "{goatHornRu}"</span>}
            </h3>
            {listEnchant}
            {minecraftIdRegister}
          </div>
      }
    </div>
  )
    ;
};

export default OneItem;
