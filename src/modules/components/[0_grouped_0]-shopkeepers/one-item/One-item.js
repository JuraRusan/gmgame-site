import classNames from "classnames";
import React, {useState, useEffect} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import ShulkerBox from "../shulker-box/Shulker-box";
import {shulkers_type} from "../../../pages/shopkeepers/ShulkersType";
import {animation_type} from "../../../pages/shopkeepers/AnimationType";

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
  const idPotion = props.item_minecraft_id_potion;
  const fireworkPower = props.firework_power_lvl;

  function renderEnchantItem(el) {
    const isSpecialEnchant = el.enchant_id_ru === "Проклятье утраты" || el.enchant_id_ru === "Проклятие несъёмности";
    const mainClass = isSpecialEnchant ? styles["red"] : styles["main"];
    return (
      <>
        <span className={classNames(mainClass)}>{el.enchant_id_ru} </span>- {el.lvl}
      </>
    );
  }

  const listEnchant =
    <ul className={classNames(styles["listWrapper"])}>
      {props.enchantsList?.map((el, i) => (
        <li className={classNames(styles["list"])} key={i}>
          {renderEnchantItem(el)}
        </li>
      ))}
      {props.storedEnchantsList?.map((el, i) => (
        <li className={classNames(styles["list"])} key={i}>
          {renderEnchantItem(el)}
        </li>
      ))}
    </ul>

  const minecraftIdRegister =
    <p className={classNames(styles["minecraftId"])}>minecraft:
      {itemNameId}
      {idPotion === "" || idPotion === undefined || idPotion === null ? "" : `. [${idPotion}]`}
      {goatHorn === "" || goatHorn === undefined || goatHorn === null ? "" : `. [${goatHorn}]`}
    </p>

  const titleName = (
    props.minecraft_custom_name === undefined || props.minecraft_custom_name === "" || props.minecraft_custom_name === null
      ?
      <h3 className={classNames(styles["name"])}>
        {props.item_name_title}
        {goatHornRu && <span className={classNames(styles["goatHorn"])}> "{goatHornRu}"</span>}
        {fireworkPower && <span className={classNames(styles["goatHorn"])}> lvl - {fireworkPower}</span>}
      </h3>
      :
      <>
        <h3 className={classNames(styles["name"])} dangerouslySetInnerHTML={{__html: props.minecraft_custom_name}}></h3>
        {goatHornRu && <h3 className={classNames(styles["name"])}>Звучание - <span className={classNames(styles["goatHorn"])}> "{goatHornRu}"</span></h3>}
        {fireworkPower && <h3 className={classNames(styles["name"])}>lvl - <span className={classNames(styles["goatHorn"])}> {fireworkPower}</span></h3>}
      </>
  )

  const getImageSource = () => {
    if (itemNameId === "enchanted_golden_apple") {
      return "./site_assets/minecraft-item/animation_full/enchanted_golden_apple.gif";
    } else if (itemNameId === "written_book") {
      return "./site_assets/minecraft-item/animation_full/written_book.gif";
    } else if (itemNameId === "enchanted_book") {
      return "./site_assets/minecraft-item/animation_full/enchanted_book.gif";
    } else if (itemNameId === "end_crystal") {
      return "./site_assets/minecraft-item/animation_full/end_crystal.gif";
    } else if (itemNameId === "sculk_sensor") {
      return "./site_assets/minecraft-item/animation_full/sculk_sensor.gif";
    } else if (itemNameId === "calibrated_sculk_sensor") {
      return "./site_assets/minecraft-item/animation_full/calibrated_sculk_sensor.gif";
    } else if (
      itemNameId === "tipped_arrow" ||
      itemNameId === "splash_potion" ||
      itemNameId === "potion" ||
      itemNameId === "lingering_potion"
    ) {
      return `./site_assets/minecraft-item/png/${itemNameId}_${idPotion}.png`;
    } else if (animation_type.includes(itemNameId)) {
      if (props.enchantsList?.length > 0) {
        return `./site_assets/minecraft-item/animation_full/${itemNameId}.gif`;
      } else {
        return `./site_assets/minecraft-item/png/${itemNameId}.png`;
      }
    } else {
      return `./site_assets/minecraft-item/png/${itemNameId}.png`;
    }
  };
  const imageSource = getImageSource();

  return (
    <div className={classNames(styles["oneItemBlock"])} onClick={props.onClick}>
      <div className={classNames(styles["photoItem"])} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span className={classNames(styles["itemCount"])}>{props.item_count}</span>
        <LazyLoadImage
          className={classNames(styles["image"])}
          src={imageSource}
          width="100%"
          height="100%"
          effect="blur"
          alt="none"
        />
      </div>
      {
        shulkers_type.includes(itemNameId)
          ?
          <div className={classNames(styles["tooltip"])} style={tooltipStyle}>
            {titleName}
            {listEnchant}
            {minecraftIdRegister}
            <div className={classNames(styles["scale"])}>
              <ShulkerBox content={props.contentHover}/>
            </div>
          </div>
          :
          <div className={classNames(styles["tooltip"])} style={tooltipStyle}>
            {titleName}
            {listEnchant}
            {minecraftIdRegister}
          </div>
      }
    </div>
  )
    ;
};

export default OneItem;
