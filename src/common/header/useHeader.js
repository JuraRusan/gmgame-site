import {useCallback, useEffect, useState} from 'react';
import {sendRequest, useAxios} from "../../DataProvider";
import AOS from "aos";

const useHeader = () => {
    const resParams = useAxios("/api/profile", "GET", {});

    const [cabDropMenu, setCabDropMenu] = useState(false);
    const [mainDropMenu, setMainDropMenu] = useState(false);

    const closeMenuMain = useCallback(() => {
        setMainDropMenu(false);
    }, []);

    const closeMenuCab = useCallback(() => {
        setCabDropMenu(false);
    }, []);

    const logout = () => {
        sendRequest("/api/logout", "POST", {}).then(() => {
            localStorage.clear();
            window.location.href = "/";
        });
    };

    useEffect(() => {
        if (cabDropMenu) {
            document.addEventListener("click", closeMenuCab);
        } else {
            document.removeEventListener("click", closeMenuCab);
        }

        return () => {
            document.removeEventListener("click", closeMenuCab);
        };
    }, [cabDropMenu, closeMenuCab]);

    useEffect(() => {
        if (mainDropMenu) {
            document.addEventListener("click", closeMenuMain);
        } else {
            document.removeEventListener("click", closeMenuMain);
        }

        return () => {
            document.removeEventListener("click", closeMenuMain);
        };
    }, [closeMenuMain, mainDropMenu]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return {
        resParams,
        cabDropMenu,
        mainDropMenu,
        logout,
        setMainDropMenu,
        setCabDropMenu
    }
};

export default useHeader;