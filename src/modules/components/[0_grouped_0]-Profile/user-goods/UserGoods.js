import classNames from "classnames";
import React from "react";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";
import CabSearch from "../cab-search/CabSearch";

import styles from "./UserGoods.module.scss";

const UserGoods = () => {
  const isLoading = useLoading();

  if (isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["user_goods"])}>
      <CabSearch
        count={0}
        name="Количество предметов -"
        to={"edit_add_item/new"}
        href="https://wiki.gmgame.ru/books/gaidy"
      />
    </div>
  );
};

export default UserGoods;
