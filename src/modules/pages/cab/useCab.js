import { sendRequest, useAxios } from "../../../DataProvider";
import cN from "classnames";
import styles from "./Cab.module.scss";
import { useEffect, useState } from "react";

const useCab = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const resParams = useAxios("/api/profile", "GET", {});

  const closeMenuMain = () => {
    setOpenMenu(false);
  };

  const logout = () => {
    sendRequest("/api/logout", "POST", {}).then(() => {
      localStorage.clear();
      window.location.href = "/";
    });
  };

  const activeTab = ({ isActive }) => {
    return cN(styles["tab"], {
      [styles["checked"]]: isActive,
    });
  };

  useEffect(() => {
    if (openMenu) {
      document.addEventListener("click", closeMenuMain);
    } else {
      document.removeEventListener("click", closeMenuMain);
    }

    return () => {
      document.removeEventListener("click", closeMenuMain);
    };
  }, [openMenu, closeMenuMain]);

  useEffect(() => {
    const displayElement = document.getElementById("display");

    if (displayElement) {
      if (openMenu === true) {
        displayElement.classList.add(styles["display"]);
      } else {
        displayElement.classList.remove(styles["display"]);
      }
    }
  }, [openMenu]);

  return {
    resParams,
    openMenu,
    setOpenMenu,
    closeMenuMain,
    activeTab,
    logout,
  };
};

export default useCab;
