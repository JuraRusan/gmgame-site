import React, { useRef } from "react";
import classNames from "classnames";
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

import styles from "./Navigation.module.scss";

const MODE = [
  {
    name: "crop",
    translate: "обрезка",
    ico: <CropSvgComponent width="24px" height="24px" color="#f4f4f4" />,
  },
  {
    name: "saturation",
    translate: "насыщенность",
    ico: <SaturationSvgComponent width="24px" height="24px" color="#f4f4f4" />,
  },
  {
    name: "brightness",
    translate: "яркость",
    ico: <BrightnessSvgComponent width="24px" height="24px" color="#f4f4f4" />,
  },
  {
    name: "contrast",
    translate: "контраст",
    ico: <ContrastSvgComponent width="24px" height="24px" color="#f4f4f4" />,
  },
  {
    name: "hue",
    translate: "оттенок",
    ico: <HueSvgComponent width="24px" height="24px" color="#f4f4f4" />,
  },
];

export const Navigation = ({
  onChange,
  onDelete,
  onSave,
  mode,
  onClose,
  onReset,
  onDisabled,
  onDownload,
  onUpload,
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

  return (
    <div className={classNames(styles["navigation"])}>
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/webp, image/jpeg, image/avif"
        onChange={onLoadImage}
        className={classNames(styles["upload"])}
      />
      <label id="label_delete" className={classNames(styles["translate"])}>
        удалить изображение
      </label>
      <label id="label_reset" className={classNames(styles["translate"])}>
        отменить изменения
      </label>
      <label id="label_upload" className={classNames(styles["translate"])}>
        загрузить новое изображение
      </label>
      <label id="label_close" className={classNames(styles["translate"])}>
        выйти без сохранения
      </label>
      <label id="label_download" className={classNames(styles["translate"])}>
        скачать изображение
      </label>
      <label id="label_save" className={classNames(styles["translate"])}>
        сохранить изменения
      </label>
      <Button
        className={customStyle}
        onClick={onDelete}
        onMouseEnter={() => handleMouseEnter("label_delete")}
        onMouseLeave={() => handleMouseLeave("label_delete")}
      >
        <BinSvgComponent width="18px" height="18px" color="white" />
      </Button>
      <div className={classNames(styles["box_actions"])}>
        <Button
          className={customStyle}
          onClick={onReset}
          disabled={!onDisabled}
          onMouseEnter={() => handleMouseEnter("label_reset")}
          onMouseLeave={() => handleMouseLeave("label_reset")}
        >
          <ResetSvgComponent width="24px" height="24px" color="#f4f4f4" />
        </Button>
        <Button
          className={customStyle}
          onClick={onUploadButtonClick}
          onMouseEnter={() => handleMouseEnter("label_upload")}
          onMouseLeave={() => handleMouseLeave("label_upload")}
        >
          <UploadSvgComponent width="24px" height="24px" color="white" />
        </Button>
        {MODE.map((el, index) => (
          <div key={index}>
            <label id={`label_${index}`} className={classNames(styles["translate"])}>
              {el.translate}
            </label>
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
        <Button
          className={customStyle}
          onClick={onDownload}
          onMouseEnter={() => handleMouseEnter("label_download")}
          onMouseLeave={() => handleMouseLeave("label_download")}
        >
          <DownloadSvgComponent width="24px" height="24px" color="white" />
        </Button>
        <Button
          className={customStyle}
          onClick={onClose}
          onMouseEnter={() => handleMouseEnter("label_close")}
          onMouseLeave={() => handleMouseLeave("label_close")}
        >
          <SaveSvgComponent width="18px" height="18px" color="white" />
        </Button>
      </div>
      <Button
        className={customStyle}
        onClick={onSave}
        onMouseEnter={() => handleMouseEnter("label_save")}
        onMouseLeave={() => handleMouseLeave("label_save")}
      >
        <SaveSvgComponent width="18px" height="18px" color="white" />
      </Button>
    </div>
  );
};
