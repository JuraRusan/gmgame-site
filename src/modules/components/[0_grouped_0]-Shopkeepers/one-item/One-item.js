import classNames from "classnames";
import React, {useState, useEffect} from 'react';
import ShulkerBoxMini from "../shulker-box-mini/Shulker-box-mini";
import MinecraftName from "../mini-component/Minecraft-name";
import MinecraftRegister from "../mini-component/Minecraft-register";
import MinecraftList from "../mini-component/Minecraft-list";
import MinecraftImage from "../mini-component/Minecraft-image";
import MinecraftArmorType from "../mini-component/Minecraft-armor-type";
import MinecraftArmorName from "../mini-component/Minecraft-armor-name";
import MinecraftBanner from "../mini-component/Minecraft-banner";
import MinecraftShield from "../mini-component/Minecraft-shield";
import MinecraftShieldColor from "../mini-component/Minecraft-shield-color";
import {SHULKERS_TYPE} from "../../../pages/shopkeepers/ShulkersType";
import MinecraftArmorColor from "../mini-component/Minecraft-armor-color";

import styles from "./One-item.module.scss"

const OneItem = ({item, onClick}) => {

  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({x: undefined, y: undefined});
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
    }, 350);
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false);
    setShowTooltip(false);
  }

  const calculateLeftPosition = (x) => {
    const minWidth = 250;
    const maxWidth = 420 + 28;
    const tooltipWidth = Math.min(Math.max(minWidth, maxWidth), maxWidth);
    const windowWidth = window.innerWidth;

    if (x + tooltipWidth > windowWidth) {
      return windowWidth - tooltipWidth - 15;
    }

    return x - 15;
  };

  const tooltipStyle = {
    top: tooltipPosition.y + 15,
    left: calculateLeftPosition(tooltipPosition.x),
    display: showTooltip ? 'block' : 'none',
    visibility: tooltipVisible ? 'visible' : 'hidden'
  };

  return (
    <div className={classNames(styles["oneItemBlock"])} onClick={onClick}>
      <div className={classNames(styles["photoItem"])} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {item.banner_pattern === undefined && item.shield_color?.color === undefined ? <MinecraftImage item={item}/> : null}
        {item.banner_pattern !== undefined && item.shield_color?.color === undefined ? <MinecraftBanner item={item} type="center"/> : null}
        {item.shield_color?.color !== undefined ? <MinecraftShield item={item} type="center"/> : null}
        <span className={classNames(styles["itemCount"])}>{item.amount}</span>
      </div>
      {showTooltip === true
        ?
        <div className={classNames(styles["tooltip"])} style={tooltipStyle}>
          <MinecraftName item={item}/>
          {item.trim === undefined ? null : <MinecraftArmorName item={item}/>}
          {item.shield_color?.color === undefined ? null : <MinecraftShieldColor item={item}/>}
          {item.leather_color === undefined ? null : <MinecraftArmorColor item={item}/>}
          <MinecraftList item={item}/>
          <MinecraftRegister item={item}/>
          {item.trim === undefined ? null : <MinecraftArmorType item={item}/>}
          {item.banner_pattern !== undefined && item.shield_color?.color === undefined ? <MinecraftBanner item={item} type="normal"/> : null}
          {item.shield_color?.color !== undefined ? <MinecraftShield item={item} type="normal"/> : null}
          {SHULKERS_TYPE.includes(item.type)
            ? <div className={classNames(styles["shulkerWrapper"])}><ShulkerBoxMini item={item}/></div>
            : null
          }
        </div>
        :
        null
      }
    </div>
  );
};

export default OneItem;
