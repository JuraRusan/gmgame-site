import classNames from "classnames";
import {useMemo, useState} from "react";
import OneSuggestions from "../../components/[0_grouped_0]-shopkeepers/one-suggestions/One-suggestions.js";
import Warn from "../../components/warn/Warn";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import lodash from 'lodash';
import {useAxios} from '../../../DataProvider';
import Preload from "../../components/preloader/Preload";
import ShulkerBox from "../../components/[0_grouped_0]-shopkeepers/shulker-box/Shulker-box";
import {shopData} from "./testParse/test_data";
import {shulkers_type} from "./ShulkersType";

import styles from "./Shopkeepers.module.scss"
import 'react-lazy-load-image-component/src/effects/blur.css';

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

  const infoSearch = "Поиск работает по всем предметам, даже по тем что лежат в шалкерах."

  const [infoShopName, setInfoShopName] = useState(" ");
  const [infoShopOwnerName, setInfoShopOwnerName] = useState(" ");
  const [infoShopCoordinatesX, setInfoShopCoordinatesX] = useState(" ");
  const [infoShopCoordinatesY, setInfoShopCoordinatesY] = useState(" ");
  const [infoShopCoordinatesZ, setInfoShopCoordinatesZ] = useState(" ");
  const [infoProfession, setInfoProfession] = useState("none");
  const [infoVillagerType, setInfoVillagerType] = useState("savanna");

  const [activeItem, setActiveItem] = useState(null);
  const [valueSearchShop, setValueSearchShop] = useState('');
  const [valueSearchItem, setValueSearchItem] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeScroll, setActiveScroll] = useState(0);

  function shopFunction(props) {
    setInfoShopName(props.name);
    setInfoShopOwnerName(props.owner);
    setInfoShopCoordinatesX(props.x);
    setInfoShopCoordinatesY(props.y);
    setInfoShopCoordinatesZ(props.z);
    setInfoVillagerType(props.object_villager_type.toLowerCase());
    setInfoProfession(props.object_profession.toLowerCase());
  }

  const handleItemClick = (itemId, offers) => {
    setActiveItem(itemId);
    const element = document.getElementById(itemId);
    element.scrollIntoView({ behavior: 'smooth' });

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
    // if (activeScroll === itemId) {
    //   top.scrollIntoView({ behavior: 'smooth' });
    // }
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
          (offer.resultItem.content &&
            offer.resultItem.content.some(
              (contentItem) =>
                (contentItem.id && contentItem.id.includes(valueSearchItem)) ||
                (contentItem.id_ru && contentItem.id_ru.toLowerCase().includes(valueSearchItem))
            ));

        const item1Match =
          (offer.item1.type && offer.item1.type.includes(valueSearchItem)) ||
          (offer.item1.type_ru && offer.item1.type_ru.toLowerCase().includes(valueSearchItem)) ||
          (offer.item1.content &&
            offer.item1.content.some(
              (contentItem) =>
                (contentItem.id && contentItem.id.includes(valueSearchItem)) ||
                (contentItem.id_ru && contentItem.id_ru.toLowerCase().includes(valueSearchItem))
            ));

        const item2Match =
          (offer.item2.type && offer.item2.type.includes(valueSearchItem)) ||
          (offer.item2.type_ru && offer.item2.type_ru.toLowerCase().includes(valueSearchItem)) ||
          (offer.item2.content &&
            offer.item2.content.some(
              (contentItem) =>
                (contentItem.id && contentItem.id.includes(valueSearchItem)) ||
                (contentItem.id_ru && contentItem.id_ru.toLowerCase().includes(valueSearchItem))
            ));

        return resultItemMatch || item1Match || item2Match;
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
            onChange={(e) => setValueSearchShop(e.target.value.toLowerCase())}
          />
          <ul className={classNames(styles["ulBlock"])}>
            {filterShopData.map((id, i) => (
              <li
                key={i}
                onClick={() => handleItemClick(`scroll${id.shop_id}`)}
                className={activeItem === `scroll${id.shop_id}` ? classNames(styles["oneShop"], styles["activeShop"]) : classNames(styles["oneShop"])}
              >
                {id.name === "" ? id.owner : id.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={classNames(styles["shopAllSuggestions"])}>
          {filteredData.map((el, i) => (
              <>
                {el.offers.length === 0
                  ?
                  <div id={`scroll${el.shop_id}`} key={i}></div>
                  :
                  <div id={`scroll${el.shop_id}`} key={i} className={classNames(styles["oneOffersShop"])}>
                    <h4 className={classNames(styles["blockShop"])}>{el.name === "" ? el.owner : el.name}</h4>
                    {el.offers.map((offer, index) => (
                        <div
                          className={classNames(styles["onClick"])}
                          key={index}
                          id={el.id}
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
                            } : undefined}
                            onClick1={isItemInteractiveItem1(offer) ? () => {
                              setSelectedItem(offer.item1)
                            } : undefined}
                            onClick2={isItemInteractiveItem2(offer) ? () => {
                              setSelectedItem(offer.item2)
                            } : undefined}
                            contentHover1={offer.item1.content}
                            contentHover2={offer.item2.content}
                            contentHoverR={offer.resultItem.content}
                          />
                        </div>
                      )
                    )}
                  </div>
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
            onChange={(e) => setValueSearchItem(e.target.value.toLowerCase())}
            placeholder="Найти..."
          />
          {selectedItem &&
            <div className={classNames(styles["viewShulker"])}>
              <ShulkerBox content={selectedItem.content}/>
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