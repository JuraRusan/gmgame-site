import CN from "classnames";
import React, { forwardRef } from "react";

import styles from "./Textarea.module.scss";

const Textarea = forwardRef(({ max_height = "small", className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={CN(
        styles["textarea"],
        {
          [styles["height_small"]]: max_height === "small",
          [styles["height_medium"]]: max_height === "medium",
          [styles["height_large"]]: max_height === "large",
        },
        className
      )}
      {...props}
    />
  );
});

export default Textarea;
