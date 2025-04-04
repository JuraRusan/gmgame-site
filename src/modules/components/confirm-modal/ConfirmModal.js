import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import MyModal from "../../../common/modal/MyModal";
import Button from "../button/Button";

import styles from "./ConfirmModal.module.scss";

const ConfirmModal = ({
  open = false,
  close,
  yes,
  no,
  time = 5000,
  message = "Подтвердите действие «Удалить»",
  children,
}) => {
  const [width, setWidth] = useState("100%");
  const [color, setColor] = useState("#00ff00");

  const animationRef = useRef();

  const handleYes = () => {
    yes();
    close();
  };

  const handleNo = () => {
    no();
    close();
  };

  useEffect(() => {
    if (open) {
      const startTime = Date.now();
      let isCanceled = false;

      const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / time, 1);

        const widthPercent = (1 - progress) * 100;
        setWidth(`${widthPercent}%`);

        const startColor = { r: 0x00, g: 0xff, b: 0x00 };
        const endColor = { r: 0xff, g: 0x00, b: 0x00 };

        const currentColor = {
          r: Math.round(startColor.r + (endColor.r - startColor.r) * progress),
          g: Math.round(startColor.g + (endColor.g - startColor.g) * progress),
          b: Math.round(startColor.b + (endColor.b - startColor.b) * progress),
        };

        const colorString = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
        setColor(colorString);

        if (progress < 1 && !isCanceled) {
          animationRef.current = requestAnimationFrame(update);
        }

        if (progress === 1) {
          handleNo();
        }
      };

      animationRef.current = requestAnimationFrame(update);

      return () => {
        isCanceled = true;
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <MyModal open={open} showClose={false}>
      <div className={classNames(styles["confirm"])}>
        <p className={classNames(styles["text"])}>{message}</p>
        {!children ? null : <div className={classNames(styles["children"])}>{children}</div>}
        <div className={classNames(styles["actions"])}>
          <Button onClick={handleNo} view="submit" label="Отменить" />
          <Button onClick={handleYes} view="delete" label="Подтвердить" />
        </div>
        <div
          className={classNames(styles["timeline"])}
          style={{
            width: width,
            backgroundColor: color,
          }}
        />
      </div>
    </MyModal>
  );
};

export default ConfirmModal;
