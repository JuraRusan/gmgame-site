import React from "react";
import classNames from "classnames";
import Button from "../button/Button";
import TextLineHelper from "../text-lite-helper/TextLineHelper";
import CenterSvgComponent from "../../../../../bases/icons/centerSvg/CenterSvg";
import ResizeSvgComponent from "../../../../../bases/icons/resizeSvg/ResizeSvg";
import ResizeMaximizeSvgComponent from "../../../../../bases/icons/resizeMaximizeSvg/ResizeMaximizeSvg";
import ResizeVerticalSvgComponent from "../../../../../bases/icons/resizeVerticalSvg/ResizeVerticalSvg";
import ResizeHorizontalSvgComponent from "../../../../../bases/icons/resizeHorizontalSvg/ResizeHorizontalSvg";
import ResizeReduceSvgComponent from "../../../../../bases/icons/resizeReduceSvg/ResizeReduceSvg";

import styles from "./CropHelper.module.scss";

const CropHelper = ({ center, resize, maximize, className, MouseEnter, MouseLeave }) => {
  const customStyle = classNames(styles["crop_button"]);

  const List = [
    {
      id: "resize",
      name: "Изменение размера (x2)",
      on: resize(2, 2),
      icon: <ResizeSvgComponent height="14px" width="14px" />,
    },
    {
      id: "resize_vertical",
      name: "Изменение размера высоты (x2)",
      on: resize(1, 2),
      icon: <ResizeVerticalSvgComponent height="14px" width="14px" />,
    },
    {
      id: "resize_horizontal",
      name: "Изменить размер ширины (x2)",
      on: resize(2, 1),
      icon: <ResizeHorizontalSvgComponent height="14px" width="14px" />,
    },
    {
      id: "resize_reduce",
      name: "Изменение размера (x1/2)",
      on: resize(0.5, 0.5),
      icon: <ResizeReduceSvgComponent height="14px" width="14px" />,
    },
    {
      id: "resize_maximize",
      name: "Увеличить размер до максимума",
      on: maximize,
      icon: <ResizeMaximizeSvgComponent height="14px" width="14px" />,
    },
    {
      id: "resize_center",
      name: "Центральное изменение размера",
      on: center,
      icon: <CenterSvgComponent height="14px" width="14px" />,
    },
  ];

  return (
    <div className={classNames(styles["crop_helper"])}>
      {List.map((el, i) => (
        <>
          <TextLineHelper
            className={classNames(styles["crop_text_position"])}
            id={`label_crop_${el.id}`}
            text={el.name}
          />
          <Button
            className={customStyle}
            onClick={el.on}
            onMouseEnter={() => {
              MouseEnter(`label_crop_${el.id}`);
            }}
            onMouseLeave={() => {
              MouseLeave(`label_crop_${el.id}`);
            }}
          >
            {el.icon}
          </Button>
        </>
      ))}
    </div>
  );
};

export default CropHelper;
