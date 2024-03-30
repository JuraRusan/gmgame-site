import React, { useRef } from "react";
import classNames from "classnames";
import { Slider } from "../slider/Slider";
import CropHelper from "../crop-helper/CropHelper";
import Button from "../button/Button";
import BinSvgComponent from "../../../../../bases/icons/binSvg/BinSvg";
import SaveSvgComponent from "../../../../../bases/icons/saveSvg/SaveSvg";
import BrightnessSvgComponent from "../../../../../bases/icons/brightnessSvg/BrightnessSvg";
import SaturationSvgComponent from "../../../../../bases/icons/saturationSvg/SaturationSvg";
import CropSvgComponent from "../../../../../bases/icons/cropSvg/CropSvg";
import ContrastSvgComponent from "../../../../../bases/icons/contrastSvg/ContrastSvg";
import HueSvgComponent from "../../../../../bases/icons/hueSvg/HueSvg";
import ResetSvgComponent from "../../../../../bases/icons/resetSvg/ResetSvg";
import DownloadSvgComponent from "../../../../../bases/icons/downloadSvg/DownloadSvg";
import UploadSvgComponent from "../../../../../bases/icons/uploadSvg/UploadSvg";
import GoOutSvgComponent from "../../../../../bases/icons/goOutSvg/GoOutSvg";
import FlipHorizontalSvgComponent from "../../../../../bases/icons/flipHorizontalSvg/FlipHorizontalSvg";
import FlipVerticalSvgComponent from "../../../../../bases/icons/flipVerticalSvg/FlipVerticalSvg";
import RotateLeftSvgComponent from "../../../../../bases/icons/rotateLeftSvg/RotateLeftSvg";
import RotateRightSvgComponent from "../../../../../bases/icons/rotateRightSvg/RotateRightSvg";
import TextLineHelper from "../text-lite-helper/TextLineHelper";

import styles from "./Navigation.module.scss";

const Navigation = ({
  onChange,
  onDelete,
  onSave,
  mode,
  onClose,
  onReset,
  onDisabledReset,
  onDisabledSave,
  onDownload,
  onUpload,
  flip,
  rotate,
  center,
  maximize,
  onChangeValue,
  resize,
  value,
}) => {
  const customStyle = classNames(styles["navigation_one_button"]);

  const inputRef = useRef(null);

  const setMode = (mode) => () => {
    onChange?.(mode);
  };

  const handleMouseEnter = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.opacity = "1";
    }
  };

  const handleMouseLeave = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.opacity = "0";
    }
  };

  const onUploadButtonClick = () => {
    inputRef.current?.click();
  };

  const onLoadImage = (event) => {
    const { files } = event.target;

    if (files && files[0]) {
      if (onUpload) {
        onUpload(URL.createObjectURL(files[0]));
      }
    }

    event.target.value = "";
  };

  const List = [
    {
      name: "reset",
      text: "Отменить изменения",
      on: onReset,
      disabled: !onDisabledReset,
      ico: <ResetSvgComponent width="24px" height="24px" />,
    },
    {
      name: "upload",
      text: "Загрузить новое изображение",
      on: onUploadButtonClick,
      ico: <UploadSvgComponent width="24px" height="24px" />,
    },
    {
      name: "flip_horizontal",
      text: "Перевернуть по горизонтали",
      on: flip(true, false),
      ico: <FlipHorizontalSvgComponent width="16px" height="16px" />,
    },
    {
      name: "flip_vertical",
      text: "перевернуть по вертикали",
      on: flip(false, true),
      ico: <FlipVerticalSvgComponent width="16px" height="16px" />,
    },
    {
      name: "rotate_clockwise",
      text: "вращаться по часовой стрелке",
      on: rotate(90),
      ico: <RotateRightSvgComponent width="16px" height="16px" />,
    },
    {
      name: "rotate_counter_clockwise",
      text: "Вращать против часовой стрелки",
      on: rotate(-90),
      ico: <RotateLeftSvgComponent width="16px" height="16px" />,
    },
    {
      name: "crop",
      text: "Обрезка",
      on: setMode("crop"),
      ico: <CropSvgComponent width="24px" height="24px" />,
    },
    {
      name: "saturation",
      text: "Насыщенность",
      on: setMode("saturation"),
      ico: <SaturationSvgComponent width="24px" height="24px" />,
    },
    {
      name: "brightness",
      text: "Яркость",
      on: setMode("brightness"),
      ico: <BrightnessSvgComponent width="24px" height="24px" />,
    },
    {
      name: "contrast",
      text: "Контраст",
      on: setMode("contrast"),
      ico: <ContrastSvgComponent width="24px" height="24px" />,
    },
    {
      name: "hue",
      text: "Оттенок",
      on: setMode("hue"),
      ico: <HueSvgComponent width="24px" height="24px" />,
    },
    {
      name: "download",
      text: "Скачать изображение",
      on: onDownload,
      ico: <DownloadSvgComponent width="24px" height="24px" />,
    },
    {
      name: "close",
      text: "Выйти без сохранения",
      on: onClose,
      stroke: "stroke",
      ico: <GoOutSvgComponent width="20px" height="20px" />,
    },
  ];

  return (
    <div className={classNames(styles["navigation"])}>
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/webp, image/jpeg, image/avif"
        onChange={onLoadImage}
        className={classNames(styles["upload"])}
      />
      {mode !== "crop" && <Slider value={value} onChange={onChangeValue} />}
      {mode === "crop" && (
        <CropHelper
          center={center}
          resize={resize}
          maximize={maximize}
          MouseEnter={handleMouseEnter}
          MouseLeave={handleMouseLeave}
        />
      )}
      <Button
        className={customStyle}
        onClick={onDelete}
        type="stroke"
        onMouseEnter={() => handleMouseEnter("label_delete")}
        onMouseLeave={() => handleMouseLeave("label_delete")}
      >
        <BinSvgComponent width="18px" height="18px" />
      </Button>
      <TextLineHelper className={classNames(styles["text_position"])} id="label_delete" text="Удалить изображение" />
      <div className={classNames(styles["box_actions"])}>
        {List.map((el, index) => (
          <div key={index}>
            <Button
              className={customStyle}
              active={mode === el.name}
              onClick={el.on}
              disabled={el?.disabled}
              type={el?.stroke}
              onMouseEnter={() => handleMouseEnter(`label_${index}`)}
              onMouseLeave={() => handleMouseLeave(`label_${index}`)}
            >
              {el.ico}
            </Button>
            <TextLineHelper id={`label_${index}`} className={classNames(styles["text_position"])} text={el.text} />
          </div>
        ))}
      </div>
      <Button
        className={customStyle}
        onClick={onSave}
        disabled={onDisabledSave}
        type="stroke"
        onMouseEnter={() => handleMouseEnter("label_save")}
        onMouseLeave={() => handleMouseLeave("label_save")}
      >
        <SaveSvgComponent width="18px" height="18px" />
      </Button>
      <TextLineHelper className={classNames(styles["text_position"])} id="label_save" text="Сохранить изменения" />
    </div>
  );
};

export default Navigation;
