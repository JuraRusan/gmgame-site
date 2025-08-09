import CN from "classnames";
import React, { useEffect, useState } from "react";
import MinecraftName from "../mini-component/Minecraft-name";
import MinecraftRegister from "../mini-component/Minecraft-register";
import MinecraftImage from "../mini-component/Minecraft-image";
import ShulkerBox from "../inventory/Shulker-box";
import Bundle from "../inventory/Bundle";
import { BUNDLES_TYPE, SHULKERS_TYPE } from "../../../pages/shopkeepers/ShulkersType";

import styles from "./One-item.module.scss";

const OneItem = ({ item, onClick, size = "medium" }) => {
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
      <div className={styles["item_block"]}>
        <div
          className={CN(styles["item"], {
            [styles["small"]]: size === "small",
            [styles["medium"]]: size === "medium",
          })}
        />
      </div>
    );
  }

  return (
    <div className={styles["item_block"]} onClick={onClick}>
      <div
        className={CN(styles["item"], styles["content"], {
          [styles["small"]]: size === "small",
          [styles["medium"]]: size === "medium",
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MinecraftImage item={item} width={size === "small" ? 28 : 58} height={size === "small" ? 28 : 58} />
        <span className={styles["count"]}>{item.amount}</span>
      </div>
      {showTooltip && (
        <div className={styles["tooltip"]} style={tooltipStyle}>
          <MinecraftName item={item} />
          {(item.trim || item.shield || item.banner_pattern) && (
            <MinecraftImage item={item} width={256} height={256} background="#27272a" />
          )}
          {SHULKERS_TYPE.includes(item.id) && (
            <div className={styles["_wrapper"]}>
              <ShulkerBox item={item} size="small" />
            </div>
          )}
          {BUNDLES_TYPE.includes(item.id) && (
            <div className={styles["_wrapper"]}>
              <Bundle item={item} size="small" />
            </div>
          )}
          <MinecraftRegister item={item} />
        </div>
      )}
    </div>
  );
};

export default OneItem;
