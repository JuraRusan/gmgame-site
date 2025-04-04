// import classNames from "classnames";
// import React, { useState } from "react";
// import Item from "./Item.js";
// import Money from "./Money.js";
// import Preload from "../../preloader/Preload.js";
// import { sendRequest, useAxios } from "../../../../DataProvider";
// import { useAlert } from "@blaumaus/react-alert"
// import useLoading from "../../../loading/useLoading";
// import Notifications from "../../notifications/Notifications";
//
// import styles from "./My-prizes.module.scss";
//
// const MyPrizes = () => {
//   const isLoading = useLoading();
//   const alert = useAlert();
//   const [refreshData, setRefreshData] = useState(false);
//   const [refresh, setRefresh] = useState(false);
//
//   let body = useAxios("/api/get_awards/", "GET", {}, refreshData);
//
//   if (body.loading || refresh || isLoading) {
//     return <Preload full={false} />;
//   }
//
//   let data = body.data;
//
//   function showMessage(response) {
//     console.log(response);
//     if (response.message) {
//       alert.success(response.message);
//     } else {
//       alert.error(response.error);
//     }
//   }
//
//   const giveReward = (id, event) => {
//     event.currentTarget.disabled = true;
//     setRefresh(true);
//     sendRequest("/api/give_reward", "POST", {
//       rewardId: id,
//     }).then((response) => {
//       showMessage(response);
//       setRefreshData(id);
//       setRefresh(false);
//     });
//   };
//
//   function getWordForm(count) {
//     if (count % 10 === 1 && count % 100 !== 11) {
//       return "выигрыш";
//     } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
//       return "выигрыша";
//     } else {
//       return "выигрышей";
//     }
//   }
//
//   const wordForm = getWordForm(data.count);
//
//   return (
//     <div className={classNames(styles["boxPrizesWrapper"])}>
//       <h4 className={classNames(styles["prizesTitleH4"])}>
//         У Вас {data.count} {wordForm}
//       </h4>
//       {data.count <= 0 ? (
//         <h4 className={classNames(styles["warn_title"])}>
//           Если у Вас нет выигрышей, примите участие в розыгрыше на
//           <a target="_blank" rel="noreferrer" href="https://discord.gg/AesVsdPsFj">
//             мониторинге
//           </a>
//         </h4>
//       ) : (
//         <div className={classNames(styles["allPrizesContainer"])}>
//           {data.awards.map((el, index) => {
//             return el.type === "money" ? (
//               <Money {...{ id: el.id, action: giveReward }} key={index} />
//             ) : (
//               <Item id={el.id} action={giveReward} key={index} />
//             );
//           })}
//         </div>
//       )}
//       {data.count <= 0 ? null : (
//         <div className={classNames(styles["box_warn"])}>
//           <Notifications
//             inf="Для получения приза необходимо находиться онлайн на основном сервере (за исключением денежных призов)"
//             type="warn"
//           />
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default MyPrizes;

import classNames from "classnames";
import React from "react";
import Preload from "../../preloader/Preload.js";
import useLoading from "../../../loading/useLoading";

import styles from "./My-prizes.module.scss";

const MyPrizes = () => {
  const isLoading = useLoading();

  if (isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["boxPrizesWrapper"])}>
      <h4 className={classNames(styles["warn_title"])}>
        В данный момент забрать призы невозможно, но не беспокойтесь — все они сохраняются, и вы сможете получить их
        позже.
      </h4>
    </div>
  );
};

export default MyPrizes;
