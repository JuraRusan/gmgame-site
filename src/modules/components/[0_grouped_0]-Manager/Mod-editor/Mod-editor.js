import classNames from "classnames";
import React from "react";

import styles from "./Mod-editor.module.scss";

const ModEditor = () => {
  return <div className={classNames(styles["modEditorWrapper"])}>редактор модов</div>;
};

export default ModEditor;
