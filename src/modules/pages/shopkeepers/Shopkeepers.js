import classNames from "classnames";
import React, {useEffect, useState} from "react";
import {SHULKERS_TYPE} from "./ShulkersType";
import {Link, scroller} from "react-scroll";
import OneSuggestions from "../../components/[0_grouped_0]-Shopkeepers/one-suggestions/One-suggestions.js";
import Notifications from "../../components/notifications/Notifications";
import Villager from "../../components/[0_grouped_0]-Shopkeepers/villager/Villager";
import PreviewComponent from "../../components/[0_grouped_0]-Shopkeepers/preview-component/Preview-component";
import {debounce} from "lodash";
import Button from "../../components/button/Button";
import useLoading from "../../loading/useLoading";
import axios from "axios";
import Preload from "../../components/preloader/Preload";

import styles from "./Shopkeepers.module.scss"

const INFO_DEFAULT = "Поиск работает по всем предметам, даже по тем что лежат в шалкерах."

const DEFAULT_INFO_SHOP = {
  name: " ",
  ownerName: " ",
  coordinatesX: " ",
  coordinatesY: " ",
  coordinatesZ: " ",
  remainder: " ",
  villagerType: "savanna",
  profession: "none"
}

function isItemInteractiveResult(item) {
  return SHULKERS_TYPE.includes(item.resultItem.type);
}

function isItemInteractiveItem1(item) {
  return SHULKERS_TYPE.includes(item.item1.type);
}

function isItemInteractiveItem2(item) {
  return SHULKERS_TYPE.includes(item.item2.type);
}

const Shopkeepers = () => {

  const isLoading = useLoading();

  const [infoShop, setInfoShop] = useState(DEFAULT_INFO_SHOP);

  const [showButton, setShowButton] = useState(false);
  const [valueSearchShop, setValueSearchShop] = useState('');
  const [valueSearchItem, setValueSearchItem] = useState('');

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemOne, setSelectedItemOne] = useState("");
  const [visible, setVisible] = useState(false)

  const [dataShop, setDataShop] = useState([])

  function shopFunction(props, remainder) {
    setInfoShop({
      name: props.name,
      ownerName: props.owner,
      coordinatesX: props.x,
      coordinatesY: props.y,
      coordinatesZ: props.z,
      remainder: remainder,
      villagerType: props.object_villager_type,
      profession: props.object_profession
    })
  }

  const scrollActive = () => {
    const top = document.getElementById("topScroll");
    const offset = 100;
    const elementTop = top.offsetTop - offset;
    window.scrollTo({
      top: elementTop,
      behavior: 'smooth'
    });
  }

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setShowButton(scrollY > 350);
  };

  const filterShopData = valueSearchShop.trim() === ''
    ? dataShop
    : dataShop.filter((fill) => (fill.name && fill.name.toLowerCase().includes(valueSearchShop)) || (fill.owner && fill.owner.toLowerCase().includes(valueSearchShop)));

  const filteredData = valueSearchItem
    ? filterShopData.map((item) => {
      const matchingOffers = item.offers.filter((offer) => {
        return (
          (offer.resultItem.type && offer.resultItem.type.includes(valueSearchItem)) ||
          (offer.resultItem.type_ru && offer.resultItem.type_ru.toLowerCase().includes(valueSearchItem)) ||
          (offer.resultItem.enchant && offer.resultItem.enchant.some(
            (enchantItem) =>
              (enchantItem.enchant_id && enchantItem.enchant_id.includes(valueSearchItem)) ||
              (enchantItem.enchant_id_ru && enchantItem.enchant_id_ru.toLowerCase().includes(valueSearchItem))
          )) ||
          (offer.resultItem.stored_enchant && offer.resultItem.stored_enchant.some(
            (enchantItem) =>
              (enchantItem.enchant_id && enchantItem.enchant_id.includes(valueSearchItem)) ||
              (enchantItem.enchant_id_ru && enchantItem.enchant_id_ru.toLowerCase().includes(valueSearchItem))
          )) ||
          (offer.resultItem.content &&
            offer.resultItem.content.some(
              (contentItem) =>
                (contentItem.id && contentItem.id.includes(valueSearchItem)) ||
                (contentItem.type_ru && contentItem.type_ru.toLowerCase().includes(valueSearchItem)) ||
                (contentItem.enchant && contentItem.enchant.some(
                  (enchantItem) =>
                    (enchantItem.enchant_id && enchantItem.enchant_id.includes(valueSearchItem)) ||
                    (enchantItem.enchant_id_ru && enchantItem.enchant_id_ru.toLowerCase().includes(valueSearchItem))
                ))
            ))
        )
      });

      return {...item, offers: matchingOffers};
    })
    : filterShopData;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    axios.get("http://46.0.203.33:4000/all_shops_with_offers").then((res) => {
      setDataShop(res.data.data)
    })
  }, [])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scrollTo');

    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        smooth: true,
        spy: true,
        offset: -64,
      });
    }

  }, [isLoading])

  if (isLoading) {
    return <Preload full={false}/>;
  }

  return (
    <div className={classNames(styles["main_shopkeepers_block"])} id="topScroll">
      <h4 className={classNames(styles["title_shop_block"])}>Товары игроков сервера</h4>
      <p className={classNames(styles["WWW"])}>Временно не доступно с этого дисплея</p>
      <div className={classNames(styles["center_block"])}>
        <div className={classNames(styles["shop_list_wrapper"])}>
          <div className={classNames(styles["shop_list_box"])}>
            <input
              type="search"
              className={classNames(styles["search_shop"])}
              placeholder="Поиск по названию магазина"
              onChange={debounce((e) => setValueSearchShop(e.target.value.toLowerCase()), 350)}
            />
            <ul className={classNames(styles["ul_block"])}>
              {filteredData.map((id, index) => (
                <>
                  {id.offers.length === 0
                    ?
                    null
                    :
                    <li
                      key={index}
                      className={classNames(styles["one_shop_list_line"])}
                    >
                      <Link
                        activeClass={classNames(styles["active"])}
                        className={classNames(styles["one_line"])}
                        spy={true}
                        smooth={true}
                        offset={-64}
                        to={`scroll_${id.shop_id}`}
                        // onSetActive={debounce(() => {
                        //   setInfoShop({
                        //     name: id.name,
                        //     ownerName: id.owner,
                        //     coordinatesX: id.x,
                        //     coordinatesY: id.y,
                        //     coordinatesZ: id.z,
                        //     remainder: 0,
                        //     villagerType: id.object_villager_type,
                        //     profession: id.object_profession
                        //   })
                        // }, 500)} // --- !!! --- Вызывает ОГРОМНЫЕ лаги --- !!! ---
                      >
                        {id.name === "" ? id.owner : id.name}
                      </Link>
                    </li>
                  }
                </>
              ))}
            </ul>
          </div>
          {showButton &&
            <div className={classNames(styles["scroll"])}>
              <Button view="submit" type="submit" onClick={scrollActive} label="Прокрутка вверх"/>
            </div>
          }
        </div>
        <div className={classNames(styles["shop_all_suggestions"])}>
          {filteredData.map((el, i) => (
              <>
                {el.offers.length === 0
                  ?
                  <section id={`scroll_${el.shop_id}`} key={i}></section>
                  :
                  <section id={`scroll_${el.shop_id}`} key={i} className={classNames(styles["one_offers_shop"])}>
                    <h4 className={classNames(styles["block_shop"])}>{el.name === "" ? el.owner : el.name}</h4>
                    {el.offers.map((offer, index) => (
                        <div
                          className={classNames(styles["on_click"])}
                          key={index}
                          onClick={() => shopFunction(el, offer.resultItem.remainder)}
                        >
                          <OneSuggestions
                            itemOne={offer.item1}
                            itemTwo={offer.item2}
                            itemRes={offer.resultItem}

                            onClickOne={isItemInteractiveItem1(offer) ? () => {
                              setSelectedItem(offer.item1)
                              setSelectedItemOne(null)
                              setVisible(true)
                            } : () => {
                              setSelectedItem(null)
                              setSelectedItemOne(offer.item1)
                              setVisible(true)
                            }}

                            onClickTwo={isItemInteractiveItem2(offer) ? () => {
                              setSelectedItem(offer.item2)
                              setSelectedItemOne(null)
                              setVisible(true)
                            } : () => {
                              setSelectedItem(null)
                              setSelectedItemOne(offer.item2)
                              setVisible(true)
                            }}

                            onClickRes={isItemInteractiveResult(offer) ? () => {
                              setSelectedItem(offer.resultItem)
                              setSelectedItemOne(null)
                              setVisible(true)
                            } : () => {
                              setSelectedItem(null)
                              setSelectedItemOne(offer.resultItem)
                              setVisible(true)
                            }}
                          />
                        </div>
                      )
                    )}
                  </section>
                }
              </>
            )
          )}
        </div>
        <div className={classNames(styles["shopOneSuggestions"])}>
          <Notifications inf={INFO_DEFAULT} type="warn"/>
          <input
            type="search"
            className={classNames(styles["searchInputItems"])}
            onChange={debounce((e) => setValueSearchItem(e.target.value.toLowerCase()), 350)}
            placeholder="Найти..."
          />
          {visible && <PreviewComponent selectedItem={selectedItem} selectedItemOne={selectedItemOne}/>}
          <div className={classNames(styles["villagerShopInfo"])}>
            <Villager shop={infoShop}/>
            <Notifications inf="Обновление данных с сервером происходит раз в 15 минут" type="warn"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopkeepers;