import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";

import styles from "./Minecraft-name.module.scss";

const MinecraftName = ({ item }) => {
  const lang = useSelector((state) => state.lang);

  return (
    <>
      {item.minecraft_custom === "" ? (
        <h3 className={classNames(styles["name"])}>{lang[item.id]}</h3>
      ) : (
        <h3 className={classNames(styles["name"])} dangerouslySetInnerHTML={{ __html: item.minecraft_custom }}></h3>
      )}
      {item.improvement === "" ? null : (
        <h3 className={classNames(styles["name"])}>
          - <span className={classNames(styles["color"])}>{lang[item.improvement]}</span>
        </h3>
      )}
    </>
  );
};

export default MinecraftName;

// <>
//   <>
//     {item.minecraft_custom === "" ? (
//       <h3 className={classNames(styles["name"])}>{lang[item.id]}</h3>
//     ) : (
//       <h3 className={classNames(styles["name"])} dangerouslySetInnerHTML={{ __html: item.minecraft_custom }}></h3>
//     )}
//     <h3 className={classNames(styles["name"])}>
//       - <span className={classNames(styles["custom"])}>{lang[item.improvement]}</span>
//     </h3>
//   </>
//
//   {/*{customName === "" ? (*/}
//   {/*  <></>*/}
//   {/*) : (*/}
//   {/*  <>*/}
//   {/*    <h3 className={classNames(styles["name"])} dangerouslySetInnerHTML={{ __html: customName }}></h3>*/}
//   {/*    {goatHornRu && (*/}
//   {/*      <h3 className={classNames(styles["name"])}>*/}
//   {/*        Звучание -<span className={classNames(styles["custom"])}> "{goatHornRu}"</span>*/}
//   {/*      </h3>*/}
//   {/*    )}*/}
//   {/*    {fireworkPower && (*/}
//   {/*      <h3 className={classNames(styles["name"])}>*/}
//   {/*        lvl -<span className={classNames(styles["custom"])}> {fireworkPower}</span>*/}
//   {/*      </h3>*/}
//   {/*    )}*/}
//   {/*    {nameSearch.length > 0 ? (*/}
//   {/*      <h3 className={classNames(styles["name"])}>*/}
//   {/*        Шаблон -<span className={classNames(styles["custom"])}> "{nameSearch[0].pattern_ru}"</span>*/}
//   {/*      </h3>*/}
//   {/*    ) : null}*/}
//   {/*  </>*/}
//   {/*)}*/}
// </>
