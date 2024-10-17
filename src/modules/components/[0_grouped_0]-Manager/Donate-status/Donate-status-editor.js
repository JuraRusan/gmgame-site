import classNames from "classnames";
import React, { useState } from "react";
import TextEditor from "../../text-editor/TextEditor";
import Button from "../../button/Button";
import { sendRequest } from "../../../../DataProvider";
import useLoading from "../../../loading/useLoading";
import { useAlert } from "@blaumaus/react-alert"
import Preload from "../../preloader/Preload";

import styles from "./Donate-status-editor.module.scss";

const DonateStatusEditor = () => {
  const isLoading = useLoading();
  const alert = useAlert();

  const [description, setDescription] = useState(null);

  const showMessage = (response) => {
    if (response.message) {
      alert.success(response.message);
    } else {
      alert.error(response.error);
    }
  };

  const handleSave = () => {
    sendRequest("/api/save_goal", "POST", {}).then((response) => {
      showMessage(response);
    });
  };

  if (isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["donate_status"])}>
      {/*<input className={classNames(styles["name"])} type="search" placeholder="Название" />*/}
      <TextEditor value={description} setValue={setDescription} />
      <div className={classNames(styles["action_wrapper"])}>
        <Button onClick={handleSave} />
      </div>
    </div>
  );
};

export default DonateStatusEditor;
