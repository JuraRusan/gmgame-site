import React from "react"
import classNames from "classnames";
import Button from "../button/Button"
import BinSvgComponent from "../../../../../bases/icons/binSvg/BinSvg";
import SaveSvgComponent from "../../../../../bases/icons/saveSvg/SaveSvg";


import {CropIcon} from "../../../../../bases/icons/CropIcon"
import {HueIcon} from "../../../../../bases/icons/HueIcon"
import {SaturationIcon} from "../../../../../bases/icons/SaturationIcon"
import {ContrastIcon} from "../../../../../bases/icons/ContrastIcon"
import {BrightnessIcon} from "../../../../../bases/icons/BrightnessIcon"
import {ResetIcon} from "../../../../../bases/icons/ResetIcon";

import styles from "./Navigation.module.scss"

const MODE = [
  {
    name: "crop",
    translate: "обрезка",
    ico: <CropIcon/>
  },
  {
    name: "saturation",
    translate: "насыщенность",
    ico: <SaturationIcon/>
  },
  {
    name: "brightness",
    translate: "яркость",
    ico: <BrightnessIcon/>
  },
  {
    name: "contrast",
    translate: "контраст",
    ico: <ContrastIcon/>
  },
  {
    name: "hue",
    translate: "оттенок",
    ico: <HueIcon/>
  }
]

export const Navigation = ({onChange, onDelete, onSave, mode, onClose, onReset, onResetDisabled}) => {

  const customStyle = classNames(styles["navigation_one_button"])

  const setMode = mode => () => {
    onChange?.(mode)
  }

  const handleMouseEnter = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.opacity = '1';
    }
  }

  const handleMouseLeave = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.opacity = '0';
    }
  }

  return (
    <div className={classNames(styles["navigation"])}>
      <label id="label_delete" className={classNames(styles["translate"])}>удалить изображение</label>
      <Button
        className={customStyle}
        onClick={onDelete}
        onMouseEnter={() => handleMouseEnter("label_delete")}
        onMouseLeave={() => handleMouseLeave("label_delete")}
      >
        <BinSvgComponent width="18px" height="18px" color="white"/>
      </Button>
      <div className={classNames(styles["box_actions"])}>
        <label id="label_reset" className={classNames(styles["translate"])}>отменить изменения</label>
        <Button
          className={customStyle}
          onClick={onReset}
          disabled={!onResetDisabled}
          onMouseEnter={() => handleMouseEnter("label_reset")}
          onMouseLeave={() => handleMouseLeave("label_reset")}
        >
          <ResetIcon/>
        </Button>
        {MODE.map((el, index) => (
          <div key={index}>
            <label id={`label_${index}`} className={classNames(styles["translate"])}>{el.translate}</label>
            <Button
              className={customStyle}
              active={mode === el.name}
              onClick={setMode(el.name)}
              onMouseEnter={() => handleMouseEnter(`label_${index}`)}
              onMouseLeave={() => handleMouseLeave(`label_${index}`)}
            >
              {el.ico}
            </Button>
          </div>
        ))}
        <label id="label_close" className={classNames(styles["translate"])}>выйти без сохранения</label>
        <Button
          className={customStyle}
          onClick={onClose}
          onMouseEnter={() => handleMouseEnter("label_close")}
          onMouseLeave={() => handleMouseLeave("label_close")}
        >
          <SaveSvgComponent width="18px" height="18px" color="white"/>
        </Button>
      </div>
      <label id="label_save" className={classNames(styles["translate"])}>сохранить</label>
      <Button
        className={customStyle}
        onClick={onSave}
        onMouseEnter={() => handleMouseEnter("label_save")}
        onMouseLeave={() => handleMouseLeave("label_save")}
      >
        <SaveSvgComponent width="18px" height="18px" color="white"/>
      </Button>
    </div>
  )
}
