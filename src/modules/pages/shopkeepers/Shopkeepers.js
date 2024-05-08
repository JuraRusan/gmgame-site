import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Link, scroller } from "react-scroll";
import OneSuggestions from "../../components/[0_grouped_0]-Shopkeepers/one-suggestions/One-suggestions.js";
import Notifications from "../../components/notifications/Notifications";
import Villager from "../../components/[0_grouped_0]-Shopkeepers/villager/Villager";
import PreviewComponent from "../../components/[0_grouped_0]-Shopkeepers/preview-component/Preview-component";
import { debounce } from "lodash";
import Button from "../../components/button/Button";
import useLoading from "../../loading/useLoading";
import Preload from "../../components/preloader/Preload";
import { useDispatch } from "react-redux";
import { useAxios } from "../../../DataProvider";
import { useAlert } from "react-alert";

import styles from "./Shopkeepers.module.scss";

const INFO_DEFAULT = "Поиск работает по всем предметам, даже по тем что лежат в шалкерах.";

const DEFAULT_INFO_SHOP = {
  name: " ",
  ownerName: " ",
  coordinatesX: " ",
  coordinatesY: " ",
  coordinatesZ: " ",
  villagerType: "savanna",
  profession: "none",
  offerKey: 0,
  product: " ",
  balance: {},
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

  const [allShopData, setAllShopData] = useState({});
  const [indexVisible, setIndexVisible] = useState({});
  const [searchIndex, setSearchIndex] = useState({});

  const [init, setInit] = useState(false);

  const resParams = useAxios("api/get_shops", "GET", {});

  const shopFunction = (seller, key = 0, product = "", balance = {}) => {
    setInfoShop({
      name: seller.name,
      ownerName: seller.owner,
      coordinatesX: seller.x,
      coordinatesY: seller.y,
      coordinatesZ: seller.z,
      villagerType: seller.object_villager_type,
      profession: seller.object_profession,
      offerKey: key,
      product: product,
      balance: balance,
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

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setShowButton(scrollY > 350);
  };

  const isName = (props) => {
    return props.name === "" ? props.owner : props.name;
  };

  useEffect(() => {
    if (valueSearchItem === "") {
      const filteredData = {};

      for (const shop in allShopData) {
        if (allShopData.hasOwnProperty(shop)) {
          filteredData[shop] = Object.keys(allShopData[shop].offers);
        }
      }

      setIndexVisible(filteredData);
    } else {
      let filteredData = {};

      Object.keys(searchIndex).forEach((key) => {
        if (String(key).toLowerCase().includes(valueSearchItem)) {
          Object.keys(searchIndex[key]).forEach((innerKey) => {
            filteredData[innerKey] = filteredData[innerKey]
              ? [...new Set([...filteredData[innerKey], ...searchIndex[key][innerKey]])]
              : [...new Set(searchIndex[key][innerKey])];
          });
        }
      });

      setIndexVisible(filteredData);
    }
  }, [valueSearchItem, allShopData, searchIndex]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get("scrollTo");

    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        smooth: true,
        spy: true,
        offset: -60,
      });
    }
  }, [isLoading]);

  if (resParams.loaded && !init) {
    setInit(true);

    if (resParams.data.error) {
      alert.error(resParams.data.error);
    } else {
      dispatch({ type: "ADD_LANG", payload: resParams.data.lang });
      setAllShopData(resParams.data.shops);
      setSearchIndex(resParams.data.searchIndex);
    }
  }

  if (isLoading || resParams.loading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["shopkeepers"])} id="topScroll">
      <h4 className={classNames(styles["title"])}>Товары игроков сервера</h4>
      <div className={classNames(styles["content"])}>
        <div className={classNames(styles["list"])}>
          <ul className={classNames(styles["ul_names"])}>
            {Object.keys(indexVisible).map((keys) => (
              <>
                {allShopData[keys].offers[1] && (
                  <li key={keys} className={classNames(styles["one"])}>
                    <Link
                      activeClass={classNames(styles["active"])}
                      className={classNames(styles["link"])}
                      spy={true}
                      smooth={true}
                      offset={-64}
                      to={`scroll_${allShopData[keys].shop_id}`}
                      onClick={() => shopFunction(allShopData[keys])}
                    >
                      {isName(allShopData[keys])}
                    </Link>
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
          {Object.keys(indexVisible).map((keys) => (
            <>
              {allShopData[keys].offers[1] === undefined ? (
                <section
                  className={classNames(styles["single_offers"])}
                  id={`scroll_${allShopData[keys].shop_id}`}
                  key={allShopData[keys].shop_id}
                />
              ) : (
                <section
                  id={`scroll_${allShopData[keys].shop_id}`}
                  key={allShopData[keys].shop_id}
                  className={classNames(styles["single_offers"])}
                >
                  <h4 className={classNames(styles["name_fixed"])}>{isName(allShopData[keys])}</h4>
                  {indexVisible[keys].map((offerKeys) => (
                    <div
                      className={classNames(styles["actions"])}
                      key={offerKeys}
                      onClick={() =>
                        shopFunction(
                          allShopData[keys],
                          allShopData[keys].offers[offerKeys],
                          allShopData[keys].offers[offerKeys].product.id,
                          allShopData[keys].balance
                        )
                      }
                    >
                      <OneSuggestions
                        itemOne={allShopData[keys].offers[offerKeys].price.slot1}
                        itemTwo={allShopData[keys].offers[offerKeys].price.slot2}
                        itemRes={allShopData[keys].offers[offerKeys].product}
                        onClickOne={() => {
                          setSelected(allShopData[keys].offers[offerKeys].price.slot1);
                          setVisible(true);
                        }}
                        onClickTwo={() => {
                          setSelected(allShopData[keys].offers[offerKeys].price.slot2);
                          setVisible(true);
                        }}
                        onClickRes={() => {
                          setSelected(allShopData[keys].offers[offerKeys].product);
                          setVisible(true);
                        }}
                      />
                    </div>
                  ))}
                </section>
              )}
            </>
          ))}
        </div>
        <div className={classNames(styles["villages_and_preview"])}>
          <Notifications inf={INFO_DEFAULT} type="warn" />
          <input
            type="search"
            className={classNames(styles["search_items"])}
            onChange={debounce((e) => setValueSearchItem(e.target.value.toLowerCase()), 300)}
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
