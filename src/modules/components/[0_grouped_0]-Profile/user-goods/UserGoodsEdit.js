import classNames from "classnames";
import React, { useState } from "react";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";
import FormTitle from "../../form-title/FormTitle";
import TextEditor from "../../text-editor/TextEditor";

import styles from "./UserGoodsEdit.module.scss";

const UserGoodsEdit = () => {
  const isLoading = useLoading();

  const [name, setName] = useState(null);
  const [lore, setLore] = useState(null);

  if (isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["user_goods_edit"])}>
      <div className={classNames(styles["row"])}>
        <FormTitle title="Название:" count={false} />
        <TextEditor size="small" lite={true} value={name} setValue={setName} />
      </div>
      <div className={classNames(styles["row"])}>
        <FormTitle title="Лор:" count={false} />
        <TextEditor size="small" lite={true} value={lore} setValue={setLore} />
      </div>
      <div className={classNames(styles["row"])}>
        <FormTitle title="Комментарий:" count={false} />
        <TextEditor size="small" value={lore} setValue={setLore} />
      </div>
    </div>
  );
};

export default UserGoodsEdit;
