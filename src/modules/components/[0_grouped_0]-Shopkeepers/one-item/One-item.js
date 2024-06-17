import classNames from "classnames";
import React, { useEffect, useState } from "react";
import MinecraftName from "../mini-component/Minecraft-name";
import MinecraftRegister from "../mini-component/Minecraft-register";
import MinecraftImage from "../mini-component/Minecraft-image";
import MinecraftShield from "../mini-component/Minecraft-shield";
import MinecraftBanner from "../mini-component/Minecraft-banner";
import ShulkerBox from "../shulker-box/Shulker-box";
import MinecraftArmorType from "../mini-component/Minecraft-armor-type";
import { SHULKERS_TYPE } from "../../../pages/shopkeepers/ShulkersType";

import styles from "./One-item.module.scss";

const OneItem = ({ item, onClick, customLink, mini = false }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (showTooltip) {
        setTooltipPosition({ x: event.clientX, y: event.clientY });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showTooltip]);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    setTimeout(() => {
      setTooltipVisible(true);
    }, 350);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
    setShowTooltip(false);
  };

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
    display: showTooltip ? "block" : "none",
    visibility: tooltipVisible ? "visible" : "hidden",
  };

  if (!item) {
    return (
      <div className={classNames(styles["item_block"])}>
        <div className={classNames(styles["item"], mini && styles["mini"])}></div>
      </div>
    );
  }

  return (
    <div className={classNames(styles["item_block"])} onClick={onClick}>
      <div
        className={classNames(styles["item"], styles["content"], mini && styles["mini"])}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {item.shield !== undefined ? <MinecraftShield item={item} type="center" /> : null}
        {!item.banner_pattern && !item.shield ? <MinecraftImage item={item} dots={customLink} /> : null}
        {item.banner_pattern !== undefined && !item.shield ? <MinecraftBanner item={item} type="center" /> : null}
        <span className={classNames(styles["count"])}>{item.amount}</span>
      </div>
      {showTooltip && (
        <div className={classNames(styles["tooltip"])} style={tooltipStyle}>
          <MinecraftName item={item} />
          {!item.trim ? null : <MinecraftArmorType item={item} />}
          {item.shield !== undefined ? <MinecraftShield item={item} type="normal" /> : null}
          {item.banner_pattern !== undefined && !item.shield ? <MinecraftBanner item={item} type="normal" /> : null}
          {SHULKERS_TYPE.includes(item.id) && (
            <div className={classNames(styles["shulker_wrapper"])}>
              <ShulkerBox item={item} full={false} customLink={customLink} />
            </div>
          )}
          <MinecraftRegister item={item} />
        </div>
      )}
    </div>
  );
};

export default OneItem;
