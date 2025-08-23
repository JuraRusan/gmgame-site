import CN from "classnames";
import React, { forwardRef } from "react";

import styles from "./Textarea.module.scss";

const Textarea = forwardRef(({ className, ...props }, ref) => {
  return <textarea ref={ref} className={CN(styles["textarea"], className)} {...props} />;
});

export default Textarea;
