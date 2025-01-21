import classNames from "classnames";
import React, { useEffect, useState } from "react";
import MinecraftName from "../mini-component/Minecraft-name";
import MinecraftRegister from "../mini-component/Minecraft-register";
import MinecraftImage from "../mini-component/Minecraft-image";
import ShulkerBox from "../shulker-box/Shulker-box";
import { SHULKERS_TYPE } from "../../../pages/shopkeepers/ShulkersType";

import styles from "./One-item.module.scss";

const OneItem = ({ item, onClick, size = "medium", mini = false, big = false }) => {
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
      <div className={classNames(styles["item_block"])} onClick={onClick}>
        <div className={classNames(styles["item"], mini && styles["mini"])}></div>
      </div>
    );
  }

  return (
    <div className={classNames(styles["item_block"])} onClick={onClick}>
      <div
        className={classNames(styles["item"], styles["content"], mini && styles["mini"], big && styles["big"])}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MinecraftImage item={item} width={mini ? 28 : 58} height={mini ? 28 : 58} />
        <span className={classNames(styles["count"])}>{item.amount}</span>
      </div>
      {showTooltip && (
        <div className={classNames(styles["tooltip"])} style={tooltipStyle}>
          <MinecraftName item={item} />
          {(item.trim || item.shield || item.banner_pattern) && (
            <MinecraftImage item={item} width={256} height={256} background="#27272a" />
          )}
          {SHULKERS_TYPE.includes(item.id) && (
            <div className={classNames(styles["shulker_wrapper"])}>
              <ShulkerBox item={item} full={false} />
            </div>
          )}
          <MinecraftRegister item={item} />
        </div>
      )}
    </div>
  );
};

export default OneItem;
