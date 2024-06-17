import classNames from "classnames";
import React, { useEffect, useState } from "react";
import OneSuggestions from "../../components/[0_grouped_0]-Shopkeepers/one-suggestions/One-suggestions.js";
import Notifications from "../../components/notifications/Notifications";
import Villager from "../../components/[0_grouped_0]-Shopkeepers/villager/Villager";
import PreviewComponent from "../../components/[0_grouped_0]-Shopkeepers/preview-component/Preview-component";
import { debounce } from "lodash";
import Button from "../../components/button/Button";
import useLoading from "../../loading/useLoading";
import Preload from "../../components/preloader/Preload";
import Title from "../../components/title/Title";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import axios from "axios";
import ResetSvgComponent from "../../../bases/icons/resetSvg/ResetSvg";

import styles from "./Shopkeepers.module.scss";

const INFO_DEFAULT = "Поиск работает по всем предметам, даже по тем что лежат в шалкерах.";

const DEFAULT_INFO_SHOP = {
  name: "",
  ownerName: "",
  coordinatesX: "",
  coordinatesY: "",
  coordinatesZ: "",
  villagerType: "savanna",
  profession: "none",
};

const Shopkeepers = () => {
  const dispatch = useDispatch();
  const isLoading = useLoading();
  const alert = useAlert();

  const [infoShop, setInfoShop] = useState(DEFAULT_INFO_SHOP);

  const [showButton, setShowButton] = useState(false);
  const [valueSearchItem, setValueSearchItem] = useState("");

  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const [dataShops, setDataShops] = useState({});
  const [dataOffers, setDataOffers] = useState([]);

  const [active, setActive] = useState("");

  const [loadedAll, setLoadedAll] = useState(false);
  const [loadedLang, setLoadedLang] = useState(false);
  const [loadingAll, setLoadingAll] = useState(true);
  const [loadingLang, setLoadingLang] = useState(true);

  const [init, setInit] = useState(false);

  const shopFunction = (id) => {
    setInfoShop({
      name: dataShops[id].name,
      ownerName: dataShops[id].owner,
      coordinatesX: dataShops[id].x,
      coordinatesY: dataShops[id].y,
      coordinatesZ: dataShops[id].z,
      villagerType: dataShops[id].object_villager_type,
      profession: dataShops[id].object_profession,
    });
  };

  const scrollActive = () => {
    const top = document.getElementById("topScroll");
    const offset = 100;
    const elementTop = top.offsetTop - offset;

    window.scrollTo({
      top: elementTop,
      behavior: "smooth",
    });
  };

  const handleReset = () => {
    const newUrl = `${window.location.origin}/shopkeepers`;
    window.history.pushState({ path: newUrl }, "", newUrl);

    scrollActive();
    setInfoShop(DEFAULT_INFO_SHOP);
    setValueSearchItem("");
    setDataOffers([]);
    setCurrentPage(1);
    setFetching(true);
  };

  const handleActive = (el) => {
    const newUrl = `${window.location.origin}/shopkeepers?_uuid=${el}`;
    window.history.pushState({ path: newUrl }, "", newUrl);

    shopFunction(el);
    scrollActive();
    setActive(el);
    setDataOffers([]);
    setCurrentPage(1);
    setFetching(true);
  };

  const handleSearch = (e) => {
    setValueSearchItem(e.target.value.toLowerCase());

    scrollActive();
    setDataOffers([]);
    setCurrentPage(1);
    setFetching(true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 200) {
      if (dataOffers.length < totalCount) setFetching(true);
    }
  };

  const handleScroll = () => {
    setShowButton((window.scrollY || document.documentElement.scrollTop) > 350);
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/shops")
      .then((res) => {
        setDataShops(res.data.data);
      })
      .catch((error) => {
        alert.error(error);
      })
      .finally(() => {
        setLoadedAll(true);
        setLoadingAll(false);
      });
    axios
      .get("http://127.0.0.1:4000/lang")
      .then((res) => {
        dispatch({ type: "ADD_LANG", payload: res.data.data });
      })
      .catch((error) => {
        alert.error(error);
      })
      .finally(() => {
        setLoadedLang(true);
        setLoadingLang(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get("_uuid");
    const _uuidSearch = !param ? [] : [param];
    const uuid = [..._uuidSearch];

    if (uuid) {
      setActive(param);
    }

    if (fetching) {
      axios
        .get(
          `http://127.0.0.1:4000/offers?_limit=64&_page=${currentPage}${uuid.length === 0 ? "" : "&_select=" + uuid}${!valueSearchItem ? "" : "&_search=" + valueSearchItem}`
        )
        .then((res) => {
          setDataOffers([...dataOffers, ...res.data.data]);
          setTotalCount(res.data.total);

          if (res.data.total > 64) {
            setCurrentPage((prevState) => prevState + 1);
          }
        })
        .catch((error) => {
          alert.error(error);
        })
        .finally(() => setFetching(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const _uuid = urlParams.get("_uuid");

    if (_uuid) {
      if (loadedAll) shopFunction(urlParams.get("_uuid"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedAll]);

  if (loadedAll && loadedLang && !init) {
    setInit(true);
  }

  if (loadingAll || loadingLang || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["shopkeepers"])} id="topScroll">
      <Title>Товары игроков сервера</Title>
      <div className={classNames(styles["content"])}>
        <div className={classNames(styles["list"])}>
          <ul className={classNames(styles["ul_names"])}>
            {Object.keys(dataShops).map((el) => (
              <>
                {dataShops[el].offers === 0 ? null : (
                  <li
                    key={el}
                    className={classNames(styles["link"], { [styles["active"]]: active === el })}
                    onClick={() => handleActive(el)}
                  >
                    {dataShops[el].name === "" ? dataShops[el].owner : dataShops[el].name}
                  </li>
                )}
              </>
            ))}
          </ul>
          {showButton && (
            <div className={classNames(styles["scroll"])}>
              <Button view="submit" type="submit" onClick={scrollActive} label="Прокрутка вверх" />
            </div>
          )}
        </div>
        <div className={classNames(styles["offers"])}>
          {!active && !valueSearchItem ? null : (
            <button className={classNames(styles["reset"])} onClick={handleReset}>
              <ResetSvgComponent width="100%" height="100%" />
            </button>
          )}
          {fetching && <Preload full={false} />}
          {!fetching && valueSearchItem !== "" && dataOffers.length === 0 ? (
            <div className={classNames(styles["offers_none"])}>
              <span className={classNames(styles["text"])}>Желаемый товар отсутствует</span>
            </div>
          ) : null}
          {dataOffers.map((el, index) => (
            <div className={classNames(styles["actions"])} key={index} onClick={() => shopFunction(el.shop_id)}>
              <OneSuggestions
                itemOne={el.item1}
                itemTwo={el.item2}
                itemRes={el.resultItem}
                onClickOne={() => {
                  setSelected(el.item1);
                  setVisible(true);
                }}
                onClickTwo={() => {
                  setSelected(el.item2);
                  setVisible(true);
                }}
                onClickRes={() => {
                  setSelected(el.resultItem);
                  setVisible(true);
                }}
              />
            </div>
          ))}
        </div>
        <div className={classNames(styles["villages_and_preview"])}>
          <Notifications inf={INFO_DEFAULT} type="warn" />
          <input
            type="search"
            className={classNames(styles["search_items"])}
            onChange={debounce((e) => handleSearch(e), 500)}
            placeholder="Найти..."
          />
          {visible && <PreviewComponent selected={selected} />}
          <div className={classNames(styles["villager_info"])}>
            <Villager shop={infoShop} />
            <Notifications inf="Обновление данных с сервером происходит раз в 15 минут" type="warn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopkeepers;
