import { useCallback, useEffect, useState } from "react";
import { sendRequest, useAxios } from "../../DataProvider";
import AOS from "aos";

const useHeader = () => {
  const resParams = useAxios("/api/profile", "GET", {});

  const [profileDropdownMenu, setProfileDropdownMenu] = useState(false);
  const [mainDropdownMenu, setMainDropdownMenu] = useState(false);

  const closeMainMenu = useCallback(() => {
    setMainDropdownMenu(false);
  }, []);

  const closeProfileMenu = useCallback(() => {
    setProfileDropdownMenu(false);
  }, []);

  const logout = () => {
    sendRequest("/api/logout", "POST", {}).then(() => {
      localStorage.clear();
      window.location.href = "/";
    });
  };

  useEffect(() => {
    if (profileDropdownMenu) {
      document.addEventListener("click", closeProfileMenu);
    } else {
      document.removeEventListener("click", closeProfileMenu);
    }

    return () => {
      document.removeEventListener("click", closeProfileMenu);
    };
  }, [profileDropdownMenu, closeProfileMenu]);

  useEffect(() => {
    if (mainDropdownMenu) {
      document.addEventListener("click", closeMainMenu);
    } else {
      document.removeEventListener("click", closeMainMenu);
    }

    return () => {
      document.removeEventListener("click", closeMainMenu);
    };
  }, [mainDropdownMenu, closeMainMenu]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return {
    logout,
    resParams,
    profileDropdownMenu,
    setProfileDropdownMenu,
    mainDropdownMenu,
    setMainDropdownMenu,
  };
};

export default useHeader;
