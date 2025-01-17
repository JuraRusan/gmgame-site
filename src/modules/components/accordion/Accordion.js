import classNames from "classnames";
import React from "react";

import styles from "./Accordion.module.scss";

const Accordion = ({ className, defaultChecked = false, el }) => {
  function generateUniqueHash(length) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let hash = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      hash += characters[randomIndex];
    }

    return hash;
  }

  let hash = generateUniqueHash(24);

  return (
    <div className={classNames(styles["box"], className)}>
      <input className={classNames(styles["check_box"])} id={hash} type="checkbox" defaultChecked={defaultChecked} />
      <label className={classNames(styles["question"])} htmlFor={hash}>
        &#8226; {el.question}
      </label>
      <div className={classNames(styles["answer"])} dangerouslySetInnerHTML={{ __html: el.answer }} />
    </div>
  );
};

export default Accordion;
