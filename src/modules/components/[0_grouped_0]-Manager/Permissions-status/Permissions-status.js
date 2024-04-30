import classNames from "classnames";
import React, { useEffect, useState } from "react";
import AOS from "aos";

import styles from "./Permissions-status.module.scss";
import "aos/dist/aos.css";

const PermissionsStatus = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedValue, setSelectedValue] = useState(1);

  const handleRadioChange = (event) => {
    setSelectedValue(Number(event.target.value));
  };

  const permissionsArray = [
    {
      id: 1,
      perm: ["cmi.command.itemname", "cmi.command.itemlore", "cmi.colors.itemname.*"],
      users: [
        {
          name: "Niksa_Viento",
          price: "1024 DDO",
          payment: true,
        },
        {
          name: "Soft_Panda3",
          price: "1024 DDO",
          payment: true,
        },
        {
          name: "_Baxy_",
          price: "1024 DDO",
          payment: true,
        },
        {
          name: "_Kerubifi_",
          price: "1024 DDO",
          payment: true,
        },
        {
          name: "Blackirita",
          price: " - ",
          payment: false,
        },
        {
          name: "Cytrynid",
          price: "1024 DDO",
          payment: true,
        },
        {
          name: "G1eb04k0",
          price: "1024 DDO",
          payment: true,
        },
        {
          name: "Lucky_Sword",
          price: "1024 DDO",
          payment: true,
        },
        {
          name: "Quilstin",
          price: "1024 DDO",
          payment: true,
        },
        {
          name: "Vio",
          price: "1024 DDO",
          payment: true,
        },
        {
          name: "Vonderan",
          price: "1024 DDO",
          payment: true,
        },
        {
          name: "ytka_sorry_t9",
          price: "1024 DDO",
          payment: true,
        },
      ],
    },
    {
      id: 2,
      perm: ["cmi.command.pweather", "cmi.command.ptime"],
      users: [],
    },
    {
      id: 3,
      perm: ["deluxemenus.default.player_effect.custom.menu.ultra"],
      users: [],
    },
  ];

  const filteredPermissionsArray = permissionsArray.filter((item) => item.id === selectedValue);

  return (
    <div className={classNames(styles["permissionsStatusWrapper"])} data-aos="zoom-in">
      <div className={classNames(styles["navigationWrapper"])}>
        <form>
          {permissionsArray.map((el, i) => (
            <label key={i}>
              <ul>
                {el.perm.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <input
                type="radio"
                name="radioGroup"
                value={el.id}
                checked={selectedValue === el.id}
                onChange={handleRadioChange}
              />
            </label>
          ))}
        </form>
      </div>

      <table className={classNames(styles["tableMainStyling"])}>
        <thead className={classNames(styles["tableTheadStyling"])}>
          <tr className={classNames(styles["tableStylingRows"])}>
            <th className={classNames(styles["tableStylingColumns"], styles["userColumn"])}>Имя пользователя</th>
            <th className={classNames(styles["tableStylingColumns"], styles["paymentColumn"])}>Оплата</th>
            <th className={classNames(styles["tableStylingColumns"], styles["priceColumn"])}>Цена</th>
            <th className={classNames(styles["tableStylingColumns"], styles["actionsColumn"])}>Действие</th>
          </tr>
        </thead>
        {filteredPermissionsArray.map((el, i) => (
          <tbody className={classNames(styles["tableTbodyStyling"])} key={i}>
            {el.users.map((user, i) => (
              <tr className={classNames(styles["tableStylingRows"])} key={i}>
                <th className={classNames(styles["tableStylingColumns"], styles["userColumn"])}>{user.name}</th>
                <th className={classNames(styles["tableStylingColumns"], styles["paymentColumn"])}>
                  {user.payment ? "Да" : "Нет"}
                </th>
                <th className={classNames(styles["tableStylingColumns"], styles["priceColumn"])}>{user.price}</th>
                <th className={classNames(styles["tableStylingColumns"], styles["actionsColumn"])}></th>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default PermissionsStatus;
