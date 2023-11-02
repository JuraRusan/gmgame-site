// import classNames from "classnames";
// import React, {useEffect, useState} from "react";
// import AOS from "aos";
// import {Link} from 'react-router-dom';
// import {LazyLoadImage} from 'react-lazy-load-image-component';
// import Warn from "../../components/warn/Warn.js";
// import {DataBaseTexturePack} from "./texturePackDB.js";
// import {debounce} from "lodash";
//
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import styles from "./TexturePack.module.scss";
// import "aos/dist/aos.css";
//
// const TexturePack = () => {
//
//   const [queryDataTexturePack, setQueryDataTexturePack] = useState("");
//
//   useEffect(() => {
//     AOS.init({duration: 1000});
//   }, []);
//
//   const InformationFromTheAdministration = "Информация, размещенная на сайте, представлена исключительно для удобства просмотра и созерцания прекрасного, и не несет в себе цель распространять интеллектуальную собственность под именем GMGame. "
//
//   return (
//     <div className={classNames(styles["mainTexturePackContainer"])} data-aos="zoom-in">
//       <div className={classNames(styles["blockText"])}>
//         <h3 className={classNames(styles["texturePackTitleH3"])}>Официальный GMGame текстур пак</h3>
//         <div className={classNames(styles["texturePackInformation"])}>
//           <h4 className={classNames(styles["informationH4"])}>Для использования набора ресурсов необходимо установить модификацию Optifine или Sodium с дополнениями.</h4>
//           <h4 className={classNames(styles["informationH4"])}>Без модов он работать не будет.
//             <Link to={'/mods'} className={classNames(styles["linkModsPage"])}> Моды &#10148;</Link>
//           </h4>
//           <h4 className={classNames(styles["informationH4"])}>По вопросам обращаться к игрокам:
//             <span>_Kerubifi_, SoftPanda3</span>
//           </h4>
//         </div>
//         <div className={classNames(styles["downloadWrapper"])}>
//           <a href="./texturePack" className={classNames(styles["downloadFiles"])} download="/static/download/Totem-Elytra-Body-1.19.zip">Скачать текстур пак &#10148;</a>
//         </div>
//         <div className={classNames(styles["warnWrapper"])}>
//           <Warn inf={InformationFromTheAdministration}/>
//         </div>
//       </div>
//
//       <input
//         className={classNames(styles["searchInputTexturePack"])}
//         type="search"
//         placeholder="Найти..."
//         onChange={debounce((e) => setQueryDataTexturePack(e.target.value.toLowerCase()), 350)}
//       />
//
//       {DataBaseTexturePack.filter((fil) => fil.main.toLowerCase().includes(queryDataTexturePack) || fil.info_item.toLowerCase().includes(queryDataTexturePack) || fil.variability_name.find(c => JSON.stringify(c).toLowerCase().includes(queryDataTexturePack))).map((tab, i) => (
//         <div className={classNames(styles["cardItem"])} data-aos="zoom-in" key={i}>
//           <div className={classNames(styles["columnCardOne"])}>
//             <LazyLoadImage
//               className={classNames(styles["icon"])}
//               alt="none"
//               effect="blur"
//               src={`./site_assets/texture-pack/${tab.img}`}/>
//           </div>
//           <div className={classNames(styles["columnCardTwo"])}>
//             <h3 className={classNames(styles["itemTitleName"])}>Предмет: {tab.main}
//               <span className={classNames(styles["hoverEffect"])}>{tab.info_item}</span>
//             </h3>
//             <ul className={classNames(styles["listName"])}>
//               {tab.variability_name.map((list, i) => (
//                 <li className={classNames(styles["listNameOne"])}>{list}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//
//     </div>
//   );
// };
//
// export default TexturePack;
import classNames from "classnames";
import React, {useEffect, useState} from "react";
import AOS from "aos";
import Warn from "../../components/warn/Warn.js";
import {Link} from 'react-router-dom';
import {debounce} from "lodash";
import AlignCenterSvgComponent from "../../../bases/icons/formatAlignCenterSVG/AlignCenterSVG";
import AlignLeftSvgComponent from "../../../bases/icons/formatAlignLeftSVG/AlignLeftSVG";
import AlignRightSvgComponent from "../../../bases/icons/formatAlignRightSVG/AlignRightSVG";

import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from "./TexturePack.module.scss";
import "aos/dist/aos.css";

const TexturePack = () => {

  const arrayTexturePackTotem = [
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "3opurTo.webp",
      variability_name: ["3opurTo"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "AMFIBIYA.webp",
      variability_name: ["AMFIBIYA", "АМФИБИЯ"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "BaXy.webp",
      variability_name: ["BaXy", "Бакси"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Maid_BaXy.webp",
      variability_name: ["Maid BaXy", "Горничная Бакси"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Bivrat.webp",
      variability_name: ["Bivrat", "Биврат"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Blackirita.webp",
      variability_name: ["Blackirita", "Блэки"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Blackiritacup.webp",
      variability_name: ["Blackiritacup", "Блэки Купальник"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Blackiritang.webp",
      variability_name: ["Blackiritang", "Блэкинг"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Blackirite.webp",
      variability_name: ["Blackirite", "Срань господня"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "BlackPirat.webp",
      variability_name: ["BlackPirat", "Пиратик", "Пират", "Чёрный Пират"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "ChancellorIkseew.webp",
      variability_name: ["ChancellorIkseew", "Канцлер"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "ClintFlames.webp",
      variability_name: ["ClintFlames", "Clint", "Клинт"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Cytrynid.webp",
      variability_name: [
        "Cytrynid",
        "Lemonid",
        "Desert Cytrynid",
        "Цитринид",
        "Лемонид",
        "Пустынный Лемонид",
        "Пустынный Цитринид",
      ],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Daesael.webp",
      variability_name: ["Daesael"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Dalandis.webp",
      variability_name: ["Dalandis", "Даландис"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "dooDUDKA.webp",
      variability_name: ["dooDUDKA", "Dudka", "Dudochka", "Дудка", "Дудочка"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "dunno59.webp",
      variability_name: ["dunno59", "дуно"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "dunno59c.webp",
      variability_name: ["dunno59c", "Дунно Короткобибый"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "dunno69.webp",
      variability_name: ["dunno69"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "EagleRu.webp",
      variability_name: ["EagleRu", "Вождя", "Игл"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "EUGENlJUS.webp",
      variability_name: ["EUGENlJUS", "Евгениюс"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Felgur_Tatum.webp",
      variability_name: ["Felgur", "Felgur_Tatum", "Фелгур", "Фелгур Татум"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "G1eb04k0.webp",
      variability_name: ["G1eb04k0", "Glebo4ko", "Gleb", "Глебочко", "Глеб"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "gerhugwsif.webp",
      variability_name: ["ger", "ger", "gerhugwsif", "Гер"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Hazquard.webp",
      variability_name: ["Hazquard", "Хаз"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "HuDreY.webp",
      variability_name: ["HuDreY"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "IronCAT_.webp",
      variability_name: ["IronCAT_", "IronCAT", "Железный Кот"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "ItzClandex.webp",
      variability_name: ["ItzClandex", "Clandex", "Кландекс"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Jean_Viento.webp",
      variability_name: ["Jean", "Jean_Viento", "Жаник"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Pr0sTiK.webp",
      variability_name: ["Prostik", "Pr0sTiK", "Jean Old", "Простик", "Жан Олд"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "_JohngeaR_.webp",
      variability_name: ["_JohngeaR_", "JohngeaR", "John", "Джонгир", "Джон"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "K0hNk_Yt.webp",
      variability_name: ["K0hNk_Yt", "KohNk_Yt", "K0hNk", "KohNk"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Kermitik.webp",
      variability_name: ["Kermitik", "Kermit", "Кермитик", "Кермит"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Kerubifi.webp",
      variability_name: ["Kerubifi", "Керубифи"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Killermax2012.webp",
      variability_name: [
        "Killermax2012",
        "Killermax",
        "Киллермакс2012",
        "Киллермакс",
      ],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "3opurTo.webp",
      variability_name: ["KIPO4", "Кипа"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "KIPO4.webp",
      variability_name: ["Krendilek37", "Krendilek", "Крендилёк"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Krogut.webp",
      variability_name: ["Krogut", "Крогут"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "kurlykepty.webp",
      variability_name: ["kurlykepty", "Kurlyk", "Курлык"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Li_Ora.webp",
      variability_name: ["Li_Ora", "Лиора"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Lucky_Sword.webp",
      variability_name: ["Lucky_Sword", "Лаки"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Lucky_Sword_Imperia.webp",
      variability_name: [
        "Lucky_Sword Imperia",
        "Lucky_Swordi",
        "Лакии",
        "Лаки Империя",
      ],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Lus7.webp",
      variability_name: ["Lus7", "Lu", "Luseven", "Лу", "Лу Семь"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Mad_Chiffa.webp",
      variability_name: ["Mad_Chiffa", "Chiffa", "Безумный Чиффа", "Чиффа"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Matychka.webp",
      variability_name: ["Matychka", "Матюша", "Матюшка"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "McQyaid.webp",
      variability_name: ["McQyaid"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "_Mekhanit_.webp",
      variability_name: ["_Mekhanit_", "Mekhanit", "Механит"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Melimops.webp",
      variability_name: ["Melimops"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "mirage3000.webp",
      variability_name: ["mirage3000", "mirage", "Мираж", "Мираж3000"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "MissAnnet.webp",
      variability_name: ["MissAnnet", "Annet", "МиссАннет", "Аннет"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Mr_Green25.webp",
      variability_name: ["Mr_Green25"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Niksa_Viento.webp",
      variability_name: ["Niksa", "Niksa_Viento", "Никса", "Никс"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Niksette.webp",
      variability_name: ["Niksette", "Niksa Old", "Никсетте", "Никса Олд"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "OMNIONI.webp",
      variability_name: ["OMNIONI"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Oxana__.webp",
      variability_name: ["Oxana__", "Oxana", "Оксана"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "PD_LEDER.webp",
      variability_name: ["PD_LEDER"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "prestig9110.webp",
      variability_name: ["prestig9110", "Престиж"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Pure_VesseI.webp",
      variability_name: ["Pure_VesseI"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "roy_frost.webp",
      variability_name: ["roy_frost", "royfrost", "Рой Фрост", "РойФрост"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "SabLi.webp",
      variability_name: ["SabLi", "Сабля"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Sefaa.webp",
      variability_name: ["Sefaa", "Сефа", "Лёва"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "SenSid.webp",
      variability_name: ["SenSid"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "SoftPanda3.webp",
      variability_name: ["SoftPanda3", "Panda", "SoftPanda", "Пандочка", "Панда"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "SoftPanda3c.webp",
      variability_name: [
        "SoftPanda3c",
        "SoftPandac",
        "Pandac",
        "Пандас",
        "Пандочкас",
      ],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "SoftPanda3ng.webp",
      variability_name: [
        "SoftPanda3ng",
        "SoftPandang",
        "Pandang",
        "Панданг",
        "Пандочканг",
      ],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "SolyankaXD.webp",
      variability_name: [
        "SolyankaXD",
        "Solyanka",
        "Soniaka",
        "Soni4ka",
        "Солянка",
        "Соничка",
      ],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Steinyasha.webp",
      variability_name: ["Steinyasha", "Stein", "Штейн"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "UTKNSS.webp",
      variability_name: ["UTKNSS", "UTKNS", "Утконос"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "VessAy.webp",
      variability_name: ["VessAy"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "VessAyR.webp",
      variability_name: ["VessAyR", "Грэг"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Vio.webp",
      variability_name: ["Vio", "Вио"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Vonderan.webp",
      variability_name: ["Vonderan", "Vonder", "Вондеран", "Вондер"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "wanier680.webp",
      variability_name: ["wanier680", "wanier"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "Wapwolf.webp",
      variability_name: ["Wapwolf", "ВапВульф"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "WiCry.webp",
      variability_name: ["WiCry", "Вай"],
    },
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "ytka_sorry_t9.webp",
      variability_name: ["Ytka", "ytka_sorry_t9", "Утка", "Уточка"],
    }
  ]
  const arrayTexturePackElytra = [
    {
      main_item: "totem_of_undying",
      main_item_ru: "Тотем",
      img_custom: "SoftPanda3.webp",
      variability_name: ["SoftPanda3", "Panda", "SoftPanda", "Пандочка", "Панда"]
    }
  ]

  const arrayTexturePackAll = [
    {
      type_category: "totem", // totem, elytra, food, potion, decoration, and more...
      type_ru: "Тотемы", // Тотемы, Элиты, Еда, Напитки, Декорации, и тд...
      items: arrayTexturePackTotem
    },
    {
      type_category: "elytra", // totem, elytra, food, potion, decoration, and more...
      type_ru: "Елитры", // Тотемы, Элиты, Еда, Напитки, Декорации, и тд...
      items: arrayTexturePackElytra
    },
  ]

  const [queryDataTexturePack, setQueryDataTexturePack] = useState(arrayTexturePackAll[0].items);

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const InformationFromTheAdministration = "Информация, размещенная на сайте, представлена исключительно для удобства просмотра и созерцания прекрасного, и не несет в себе цель распространять интеллектуальную собственность под именем GMGame. "

  return (
    <div className={classNames(styles["mainTexturePackContainer"])} data-aos="zoom-in">

      <div className={classNames(styles["blockText"])}>
        <h3 className={classNames(styles["texturePackTitleH3"])}>Официальный GMGame текстур пак</h3>
        <div className={classNames(styles["texturePackInformation"])}>
          <h4 className={classNames(styles["informationH4"])}>Для использования набора ресурсов необходимо установить
            модификацию Optifine или Sodium с дополнениями.</h4>
          <h4 className={classNames(styles["informationH4"])}>Без модов он работать не будет.
            <Link to={'/mods'} className={classNames(styles["linkModsPage"])}> Моды &#10148;</Link>
          </h4>
          <h4 className={classNames(styles["informationH4"])}>По вопросам обращаться к игрокам:
            <span>_Kerubifi_, SoftPanda3</span>
          </h4>
        </div>
        <div className={classNames(styles["downloadWrapper"])}>
          <a href="./texturePack" className={classNames(styles["downloadFiles"])}
             download="/static/download/Totem-Elytra-Body-1.19.zip">Скачать текстур пак &#10148;</a>
        </div>
        <div className={classNames(styles["warnWrapper"])}>
          <Warn inf={InformationFromTheAdministration}/>
        </div>
      </div>

      <div className={classNames(styles["wrapperPack"])}>

        <div className={classNames(styles["fixedLeftMenuWrapper"])}>
          <ul>
            {arrayTexturePackAll.map((el, i) =>
              <li key={i} onClick={() => setQueryDataTexturePack(el.items)}>{el.type_ru}</li>
            )}
          </ul>
        </div>

        <div className={classNames(styles["previewPack"])}>
          <div className={classNames(styles["wrapperActions"])}>
            <input type="search" className={classNames(styles["search"])} placeholder="Найти..." onChange={debounce((e) => setQueryDataTexturePack(e.target.value.toLowerCase()), 350)}/>
            <button className={classNames(styles["type"])}><AlignLeftSvgComponent wight="100%" height="100%" color="#f4f4f4"/></button>
            <button className={classNames(styles["type"])}><AlignCenterSvgComponent wight="100%" height="100%" color="#f4f4f4"/></button>
            <button className={classNames(styles["type"])}><AlignRightSvgComponent wight="100%" height="100%" color="#f4f4f4"/></button>
          </div>
          <div className={classNames(styles["cardAll"])}>
            {queryDataTexturePack.map((item, i) =>
              <div className={classNames(styles["oneCard"])} key={i}>
                <div className={classNames(styles["imageWrapper"])}>
                  <img className={classNames(styles["image"])} src={`./site_assets/texture-pack/${item.img_custom}`} alt=" "/>
                </div>
                <div className={classNames(styles["textWrapper"])}>
                  <h2 className={classNames(styles["name"])}>{item.variability_name[0]}</h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TexturePack;