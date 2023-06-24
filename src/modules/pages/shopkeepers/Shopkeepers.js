import classNames from "classnames";
import React, {useEffect, useState} from "react";
import OneSuggestions from "../../components/[0_grouped_0]-shopkeepers/one-suggestions/One-suggestions.js";
import Warn from "../../components/warn/Warn";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import ShulkerBox from "../../components/[0_grouped_0]-shopkeepers/shulker-box/Shulker-box";
import {shopData} from "./testParse/test_data";
import {shulkers_type} from "./ShulkersType";
import AOS from "aos";
import {Link} from "react-scroll";
import {debounce} from "lodash";
import MinecraftImage from "../../components/[0_grouped_0]-shopkeepers/mini-component/Minecraft-image";
import MinecraftName from "../../components/[0_grouped_0]-shopkeepers/mini-component/Minecraft-name";
import MinecraftList from "../../components/[0_grouped_0]-shopkeepers/mini-component/Minecraft-list";
import MinecraftRegister from "../../components/[0_grouped_0]-shopkeepers/mini-component/Minecraft-register";

import styles from "./Shopkeepers.module.scss"
import 'react-lazy-load-image-component/src/effects/blur.css';
import "aos/dist/aos.css";

function isItemInteractiveResult(item) {
  return shulkers_type.includes(item.resultItem.type);
}

function isItemInteractiveItem1(item) {
  return shulkers_type.includes(item.item1.type);
}

function isItemInteractiveItem2(item) {
  return shulkers_type.includes(item.item2.type);
}

const Shopkeepers = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const infoSearch = "Поиск работает по всем предметам, даже по тем что лежат в шалкерах."

  const [showButton, setShowButton] = useState(false);
  const [infoShopName, setInfoShopName] = useState(" ");
  const [infoShopOwnerName, setInfoShopOwnerName] = useState(" ");
  const [infoShopCoordinatesX, setInfoShopCoordinatesX] = useState(" ");
  const [infoShopCoordinatesY, setInfoShopCoordinatesY] = useState(" ");
  const [infoShopCoordinatesZ, setInfoShopCoordinatesZ] = useState(" ");
  const [infoProfession, setInfoProfession] = useState("none");
  const [infoVillagerType, setInfoVillagerType] = useState("savanna");

  const [valueSearchShop, setValueSearchShop] = useState('');
  const [valueSearchItem, setValueSearchItem] = useState('');
  const [activeScroll, setActiveScroll] = useState(0);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemOne, setSelectedItemOne] = useState("");
  const [visible, setVisile] = useState(false)

  function shopFunction(props) {
    setInfoShopName(props.name);
    setInfoShopOwnerName(props.owner);
    setInfoShopCoordinatesX(props.x);
    setInfoShopCoordinatesY(props.y);
    setInfoShopCoordinatesZ(props.z);
    setInfoVillagerType(props.object_villager_type);
    setInfoProfession(props.object_profession);
  }

  const scrollActive = () => {
    const top = document.getElementById("topScroll");
    const offset = 80;
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (itemId, offers) => {
    const element = document.getElementById(itemId);
    element.scrollIntoView({behavior: 'smooth'});

    setActiveScroll(itemId);
    const top = document.getElementById("topScroll");
    const offset = 80;
    const elementTop = top.offsetTop - offset;
    if (activeScroll === itemId) {
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
  };

  const filterShopData = valueSearchShop.trim() === ''
    ? shopData
    : shopData.filter((fill) => (fill.name && fill.name.toLowerCase().includes(valueSearchShop)) || (fill.owner && fill.owner.toLowerCase().includes(valueSearchShop)));

  const filteredData = valueSearchItem
    ? filterShopData.map((item) => {
      const matchingOffers = item.offers.filter((offer) => {
        const resultItemMatch =
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
                (contentItem.id_ru && contentItem.id_ru.toLowerCase().includes(valueSearchItem)) ||
                (contentItem.enchant && contentItem.enchant.some(
                  (enchantItem) =>
                    (enchantItem.enchant_id && enchantItem.enchant_id.includes(valueSearchItem)) ||
                    (enchantItem.enchant_id_ru && enchantItem.enchant_id_ru.toLowerCase().includes(valueSearchItem))
                ))
            ));

        // const item1Match =
        //   (offer.item1.type && offer.item1.type.includes(valueSearchItem)) ||
        //   (offer.item1.type_ru && offer.item1.type_ru.toLowerCase().includes(valueSearchItem)) ||
        //   (offer.item1.enchant && offer.item1.enchant.some(
        //     (enchantItem) =>
        //       (enchantItem.enchant_id && enchantItem.enchant_id.includes(valueSearchItem)) ||
        //       (enchantItem.enchant_id_ru && enchantItem.enchant_id_ru.toLowerCase().includes(valueSearchItem))
        //   )) ||
        //   (offer.item1.stored_enchant && offer.item1.stored_enchant.some(
        //     (enchantItem) =>
        //       (enchantItem.enchant_id && enchantItem.enchant_id.includes(valueSearchItem)) ||
        //       (enchantItem.enchant_id_ru && enchantItem.enchant_id_ru.toLowerCase().includes(valueSearchItem))
        //   )) ||
        //   (offer.item1.content &&
        //     offer.item1.content.some(
        //       (contentItem) =>
        //         (contentItem.id && contentItem.id.includes(valueSearchItem)) ||
        //         (contentItem.id_ru && contentItem.id_ru.toLowerCase().includes(valueSearchItem)) ||
        //         (contentItem.enchant && contentItem.enchant.some(
        //           (enchantItem) =>
        //             (enchantItem.enchant_id && enchantItem.enchant_id.includes(valueSearchItem)) ||
        //             (enchantItem.enchant_id_ru && enchantItem.enchant_id_ru.toLowerCase().includes(valueSearchItem))
        //         ))
        //     ));

        // const item2Match =
        //   (offer.item2.type && offer.item2.type.includes(valueSearchItem)) ||
        //   (offer.item2.type_ru && offer.item2.type_ru.toLowerCase().includes(valueSearchItem)) ||
        //   (offer.item2.enchant && offer.item2.enchant.some(
        //     (enchantItem) =>
        //       (enchantItem.enchant_id && enchantItem.enchant_id.includes(valueSearchItem)) ||
        //       (enchantItem.enchant_id_ru && enchantItem.enchant_id_ru.toLowerCase().includes(valueSearchItem))
        //   )) ||
        //   (offer.item2.stored_enchant && offer.item2.stored_enchant.some(
        //     (enchantItem) =>
        //       (enchantItem.enchant_id && enchantItem.enchant_id.includes(valueSearchItem)) ||
        //       (enchantItem.enchant_id_ru && enchantItem.enchant_id_ru.toLowerCase().includes(valueSearchItem))
        //   )) ||
        //   (offer.item2.content &&
        //     offer.item2.content.some(
        //       (contentItem) =>
        //         (contentItem.id && contentItem.id.includes(valueSearchItem)) ||
        //         (contentItem.id_ru && contentItem.id_ru.toLowerCase().includes(valueSearchItem)) ||
        //         (contentItem.enchant && contentItem.enchant.some(
        //           (enchantItem) =>
        //             (enchantItem.enchant_id && enchantItem.enchant_id.includes(valueSearchItem)) ||
        //             (enchantItem.enchant_id_ru && enchantItem.enchant_id_ru.toLowerCase().includes(valueSearchItem))
        //         ))
        //     ));

        return resultItemMatch;
      });

      return {...item, offers: matchingOffers};
    })
    : filterShopData;

  return (
    <div className={classNames(styles["mainShopkeepersBlock"])} id="topScroll">
      <h4 className={classNames(styles["titleShopH4"])}>Товары игроков сервера</h4>
      <div className={classNames(styles["shopBlockCenter"])}>
        <div className={classNames(styles["shopsListWrapper"])}>
          <input
            type="search"
            className={classNames(styles["searchShop"])}
            placeholder="Поиск по названию"
            onChange={debounce((e) => setValueSearchShop(e.target.value.toLowerCase()), 350)}
            data-aos="zoom-in"
          />
          <ul className={classNames(styles["ulBlock"])}>
            {filteredData.map((id, i) => (
              <>
                {id.offers.length === 0
                  ?
                  <></>
                  :
                  <li
                    key={i}
                    className={classNames(styles["oneShopList"])}
                  >
                    <Link
                      activeClass={classNames(styles["activeShop"])}
                      className={classNames(styles["oneShop"])}
                      smooth
                      spy
                      to={`scroll_${id.shop_id}`}
                      onClick={() => handleItemClick(`scroll_${id.shop_id}`)}
                      // onSetActive={debounce(() => {
                      //   setInfoShopName(id.name);
                      //   setInfoShopOwnerName(id.owner);
                      //   setInfoShopCoordinatesX(id.x);
                      //   setInfoShopCoordinatesY(id.y);
                      //   setInfoShopCoordinatesZ(id.z);
                      //   setInfoVillagerType(id.object_villager_type);
                      //   setInfoProfession(id.object_profession);
                      // }, 500)}
                    >
                      {id.name === "" ? id.owner : id.name}
                    </Link>
                  </li>
                }
              </>
            ))}
          </ul>
          {showButton &&
            <div className={classNames(styles["wrapperButton"])}>
              <button className={classNames(styles["scrollTop"])} onClick={scrollActive}>Прокрутка вверх</button>
            </div>
          }
        </div>
        <div className={classNames(styles["shopAllSuggestions"])}>
          {filteredData.map((el, i) => (
              <>
                {el.offers.length === 0
                  ?
                  <section id={`scroll_${el.shop_id}`} key={i}></section>
                  :
                  <section id={`scroll_${el.shop_id}`} key={i} className={classNames(styles["oneOffersShop"])}>
                    <h4 className={classNames(styles["blockShop"])}>{el.name === "" ? el.owner : el.name}</h4>
                    {el.offers.map((offer, index) => (
                        <div
                          className={classNames(styles["onClick"])}
                          key={index}
                          onClick={() => shopFunction(el)}
                        >
                          <OneSuggestions

                            item1_type_ru={offer.item1.type_ru}
                            item1_type={offer.item1.type}
                            item1_amount={offer.item1.amount}

                            item2_type_ru={offer.item2.type_ru}
                            item2_type={offer.item2.type}
                            item2_amount={offer.item2.amount}

                            resultItem_type_ru={offer.resultItem.type_ru}
                            resultItem_type={offer.resultItem.type}
                            resultItem_amount={offer.resultItem.amount}

                            onClickR={isItemInteractiveResult(offer) ? () => {
                              setSelectedItem(offer.resultItem)
                              setSelectedItemOne(null)
                              setVisile(true)
                            } : () => {
                              setSelectedItem(null)
                              setSelectedItemOne(offer.resultItem)
                              setVisile(true)
                            }}

                            onClick1={isItemInteractiveItem1(offer) ? () => {
                              setSelectedItem(offer.item1)
                              setSelectedItemOne(null)
                              setVisile(true)
                            } : () => {
                              setSelectedItem(null)
                              setSelectedItemOne(offer.item1)
                              setVisile(true)
                            }}

                            onClick2={isItemInteractiveItem2(offer) ? () => {
                              setSelectedItem(offer.item2)
                              setSelectedItemOne(null)
                              setVisile(true)
                            } : () => {
                              setSelectedItem(null)
                              setSelectedItemOne(offer.item2)
                              setVisile(true)
                            }}

                            contentHover1={offer.item1.content}
                            contentHover2={offer.item2.content}
                            contentHoverR={offer.resultItem.content}

                            enchantsListResultItem={offer.resultItem.enchant}
                            enchantsListItem1={offer.item1.enchant}
                            enchantsListItem2={offer.item2.enchant}

                            item_minecraft_id_potionItem1={offer.item1.potion}
                            item_minecraft_id_potionItem2={offer.item2.potion}
                            item_minecraft_id_potionResultItem={offer.resultItem.potion}

                            storedEnchantsListItem1={offer.item1.stored_enchant}
                            storedEnchantsListItem2={offer.item2.stored_enchant}
                            storedEnchantsListResultItem={offer.resultItem.stored_enchant}

                            goat_horn_instrument_type_ruItem1={offer.item1.instrument?.instrument_type_ru}
                            goat_horn_instrument_type_ruItem2={offer.item2.instrument?.instrument_type_ru}
                            goat_horn_instrument_type_ruResultItem={offer.resultItem.instrument?.instrument_type_ru}

                            goat_horn_instrument_typeItem1={offer.item1.instrument?.instrument_type}
                            goat_horn_instrument_typeItem2={offer.item2.instrument?.instrument_type}
                            goat_horn_instrument_typeResultItem={offer.resultItem.instrument?.instrument_type}

                            minecraft_custom_nameItem1={offer.item1.minecraft_custom}
                            minecraft_custom_nameItem2={offer.item2.minecraft_custom}
                            minecraft_custom_nameResultItem={offer.resultItem.minecraft_custom}

                            firework_power_lvl_Item1={offer.item1.firework_power}
                            firework_power_lvl_Item2={offer.item2.firework_power}
                            firework_power_lvl_ResultItem={offer.resultItem.firework_power}

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
          <Warn inf={infoSearch}/>
          <input
            type="search"
            className={classNames(styles["searchInputItems"])}
            onChange={debounce((e) => setValueSearchItem(e.target.value.toLowerCase()), 350)}
            placeholder="Найти..."
          />
          {visible &&
            <div className={classNames(styles["prev"])}>
              {selectedItem &&
                <div className={classNames(styles["viewShulker"])}>
                  <ShulkerBox content={selectedItem.content}/>
                </div>
              }
              {selectedItemOne &&
                <div className={classNames(styles["viewItem"])}>
                  <div className={classNames(styles["columnOne"])}>
                    <div className={classNames(styles["imageWrapper"])}>
                      <MinecraftImage
                        item_minecraft_name_id={selectedItemOne.type}
                        item_minecraft_id_potion={selectedItemOne.potion}
                        enchantsList={selectedItemOne.enchant}
                      />
                    </div>
                  </div>
                  <div className={classNames(styles["columnTwo"])}>
                    <div className={classNames(styles["top"])}>
                      <MinecraftName
                        goat_horn_instrument_type_ru={selectedItemOne.instrument?.instrument_type_ru}
                        firework_power_lvl={selectedItemOne.firework_power}
                        minecraft_custom_name={selectedItemOne.minecraft_custom}
                        item_name_title={selectedItemOne.type_ru}
                      />
                      <MinecraftList
                        enchantsList={selectedItemOne.enchant}
                        storedEnchantsList={selectedItemOne.stored_enchant}
                      />
                    </div>
                    <div className={classNames(styles["bottom"])}>
                      <MinecraftRegister
                        item_minecraft_name_id={selectedItemOne.type}
                        goat_horn_instrument_type={selectedItemOne.instrument?.instrument_type}
                        item_minecraft_id_potion={selectedItemOne.potion}
                      />
                    </div>
                  </div>
                </div>
              }
            </div>
          }
          <div className={classNames(styles["villagerShopInfo"])}>
            <div className={classNames(styles["villager"])}>
              <div className={classNames(styles["villagerInfo"])}>
                <h4 className={classNames(styles["styleH4"])}>Владелец:
                  <span className={classNames(styles["color"])}>{infoShopOwnerName}</span>
                </h4>
                <h4 className={classNames(styles["styleH4"])}>Название:
                  <span className={classNames(styles["color"])}>{infoShopName}</span>
                </h4>
                <h4 className={classNames(styles["styleH4"])}>Discord:
                  <span className={classNames(styles["color"])}>Неизвестно</span>
                </h4>
                <h4 className={classNames(styles["styleH4"])}>Расположение:</h4>
                <h4 className={classNames(styles["styleH4"], styles["left"])}>Х:
                  <span className={classNames(styles["color"])}>{infoShopCoordinatesX}</span>
                </h4>
                <h4 className={classNames(styles["styleH4"], styles["left"])}>Y:
                  <span className={classNames(styles["color"])}>{infoShopCoordinatesY}</span>
                </h4>
                <h4 className={classNames(styles["styleH4"], styles["left"])}>Z:
                  <span className={classNames(styles["color"])}>{infoShopCoordinatesZ}</span>
                </h4>
                <h4 className={classNames(styles["styleH4"])}>Осталось предметов в наличии:
                  <span className={classNames(styles["color"])}>Неизвестно</span>
                </h4>
              </div>
              <div className={classNames(styles["villagerImage"])}>
                <LazyLoadImage
                  effect="blur"
                  className={classNames(styles["wrapper"])}
                  src={`./site_assets/villager/webp/${infoVillagerType}_${infoProfession}.webp`}
                  width="auto"
                  height="100%"
                  alt="none"
                />
              </div>
            </div>
            <Warn inf="Обновление данных с сервером происходит раз в 15 минут"/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Shopkeepers;