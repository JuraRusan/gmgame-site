import classNames from "classnames";
import React, {useState, useEffect} from 'react';
import ShulkerBoxMini from "../shulker-box-mini/Shulker-box-mini";
import MinecraftName from "../mini-component/Minecraft-name";
import MinecraftRegister from "../mini-component/Minecraft-register";
import MinecraftList from "../mini-component/Minecraft-list";
import MinecraftImage from "../mini-component/Minecraft-image";
import MinecraftArmorType from "../mini-component/Minecraft-armor-type";
import MinecraftArmorName from "../mini-component/Minecraft-armor-name";
import {shulkers_type} from "../../../pages/shopkeepers/ShulkersType";

import styles from "./One-item.module.scss"

const OneItem = (props) => {

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
    <div className={classNames(styles["oneItemBlock"])} onClick={props.onClick}>
      <div className={classNames(styles["photoItem"])} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <MinecraftImage
          item_minecraft_name_id={props.item_minecraft_name_id}
          item_minecraft_id_potion={props.item_minecraft_id_potion}
          enchantsList={props.enchantsList}
          armor_trim_material={props.armor_trim_material}
        />
        <span className={classNames(styles["itemCount"])}>{props.item_count}</span>
      </div>
      {
        showTooltip === true
          ?
          <div
            className={classNames(styles["tooltip"])}
            style={tooltipStyle}
          >
            <MinecraftName
              goat_horn_instrument_type_ru={props.goat_horn_instrument_type_ru}
              firework_power_lvl={props.firework_power_lvl}
              minecraft_custom_name={props.minecraft_custom_name}
              item_name_title={props.item_name_title}
              item_minecraft_name_id={props.item_minecraft_name_id}
            />
            {props.armor_trim_type_ru === undefined
              ?
              null
              :
              <MinecraftArmorName
                armor_trim_type_ru={props.armor_trim_type_ru}
                armor_trim_material_ru={props.armor_trim_material_ru}
              />
            }
            <MinecraftList
              enchantsList={props.enchantsList}
              storedEnchantsList={props.storedEnchantsList}
            />
            <MinecraftRegister
              item_minecraft_name_id={props.item_minecraft_name_id}
              goat_horn_instrument_type={props.goat_horn_instrument_type}
              item_minecraft_id_potion={props.item_minecraft_id_potion}
              armor_trim_type={props.armor_trim_type}
              armor_trim_material={props.armor_trim_material}
            />
            {props.armor_trim_type === undefined
              ?
              null
              :
              <MinecraftArmorType
                item_type_armor={props.item_minecraft_name_id}
                armor_trim_type={props.armor_trim_type}
                armor_trim_material={props.armor_trim_material}
              />
            }
            {shulkers_type.includes(props.item_minecraft_name_id)
              ?
              <div className={classNames(styles["shulkerWrapper"])}>
                <ShulkerBoxMini content={props.contentHover}/>
              </div>
              :
              null
            }
          </div>
          :
          null
      }
    </div>
  );
};

export default OneItem;
