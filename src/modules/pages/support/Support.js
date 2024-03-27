import classNames from "classnames";
import React, {useState} from "react";
import {monitoringBase} from "./monitoringBase";
// import useLoading from "../../loading/useLoading";
// import {useAxios} from "../../../DataProvider";
// import Preload from "../../components/preloader/Preload";

import styles from "./Support.module.scss";

const DEFAULT = {viewing: true, current: 72535, full: 136000}
// const DEFAULT = {viewing: false, current: 0, full: 0}

const Support = () => {

  // const isLoading = useLoading();

  const [dataDonat] = useState(DEFAULT)

  // const resParams = useAxios(
  //   "/api/get_goals",
  //   'GET',
  //   {}
  // );

  // if (resParams.loading || isLoading) {
  //   return <Preload full={false}/>;
  // }

  return (
    <div className={classNames(styles["mainSupport"])} >
      <div className={classNames(styles["support"])}>
        <h4 className={classNames(styles["titleSupport"])}>Поддержать проект</h4>
        <div className={classNames(styles["donatBlock"])}>
          <div className={classNames(styles["text"])}>
            <p className={classNames(styles["subTitleSupport"])}>Сервер GMGame работает уже больше двух лет. За это время на сервере были построены разнообразные и масштабные проекты, проведены различные ивенты и праздники, сервер приобрел множество друзей, соратников и подарил огромное количество эмоций разным людям.</p>
            <p className={classNames(styles["subTitleSupport"])}>Благодаря этим людям сервер живет и позволяет комфортно играть без лагов и читеров. Мы стараемся каждый день улучшить игровой опыт на сервере и будем признательны за любую помощь. Если у вас есть возможность помочь серверу нижеперечисленными способами, то, пожалуйста, воспользуйтесь ими.</p>
            <p className={classNames(styles["subTitleSupport"])}>На пожертвования уже куплено мощное железо для сервера, источник бесперебойного питания и множество плагинов для комфортной игры. Спасибо всем игрокам, без вашей поддержки не было бы сервера GMGame.</p>
            <div className={classNames(styles["linkWrapper"])}>
              <a className={classNames(styles["supportLink"])} target="_blank" rel="noreferrer" href="/support">- Переводом по номеру карты 2202 2032 5684 4806 &#10148;</a>
              <a className={classNames(styles["supportLink"])} target="_blank" rel="noreferrer" href="https://hotmc.ru/promote-minecraft-server-205185?mode=packs">- Подарить алмазы (HotMC) &#10148;</a>
              <a className={classNames(styles["supportLink"])} target="_blank" rel="noreferrer" href="https://hotmc.ru/casino-205185">- Розыгрыш на мониторинге (HotMC) &#10148;</a>
              <a className={classNames(styles["supportLink"])} target="_blank" rel="noreferrer" href="https://discord.gg/AesVsdPsFj">- Проголосовать на мониторингах &#10148;</a>
            </div>
            <h5 className={classNames(styles["footerSupport"])}>Спасибо! Ваша поддержка очень важна. &#129392;</h5>
          </div>
          <div className={classNames(styles["imgBlockWrapper"])}>
            <img className={classNames(styles["image"])} src="./site_assets/pages/webp/new_7.webp" width="100%" height="100%" alt="none"/>
          </div>
        </div>
        {!dataDonat.viewing ? null :
          <div className={classNames(styles["current_donate_block"])}>
            <h2 className={classNames(styles["current_title"])}>Текущий сбор</h2>
            <div className={classNames(styles["information_block"])}>
              <h3 className={classNames(styles["text"])}>Время неумолимо мчится вперед и оборудование устаревает, поэтому мы решили открыть новый сбор средств на полный апгрейд сервера. </h3>
              <ul className={classNames(styles["list"])}>
                <li className={classNames(styles["stroke"])}>Процессор — AMD Ryzen 9 7950X
                  <a className={classNames(styles["link_site"])} target="_blank" rel="noreferrer" href="https://www.amd.com/en/products/cpu/amd-ryzen-9-7950x">&#10148;</a>
                </li>
                <li className={classNames(styles["stroke"])}>Материнская плата — GIGABYTE X670 AORUS ELITE AX
                  <a className={classNames(styles["link_site"])} target="_blank" rel="noreferrer" href="https://www.gigabyte.com/ua/Motherboard/X670-AORUS-ELITE-AX-rev-10-12">&#10148;</a>
                </li>
                <li className={classNames(styles["stroke"])}>Оперативная память — FURY Beast Black 128 ГБ
                  <a className={classNames(styles["link_site"])} target="_blank" rel="noreferrer" href="https://www.kingston.com/ru/memory/gaming/kingston-fury-beast-ddr5-memory?speed=6000mt%2Fs&total%20(kit)%20capacity=64gb&kit=kit%20of%202&dram%20density=16gbit&profile%20type=amd%20expo&color=black">&#10148;</a>
                </li>
                <li className={classNames(styles["stroke"])}>Блок питания — DEEPCOOL PK600D
                  <a className={classNames(styles["link_site"])} target="_blank" rel="noreferrer" href="https://www.deepcool.com/products/PowerSupplyUnits/powersupplyunits/PK600D-80-PLUS-Bronze-Power-Supply/2022/15620.shtml">&#10148;</a>
                </li>
              </ul>
              <h3 className={classNames(styles["text"])}>Итого ≈ {dataDonat.full} ₽</h3>
              <h3 className={classNames(styles["text"])}>Это довольно большая сумма, и возможно её сбор будет длительным процессом, поэтому состав оборудования и их стоимость вероятно будет меняться, подстраиваясь под современные реалии.</h3>
              <h3 className={classNames(styles["text"])}>Перейдите по ссылке для просмотра актуальной информации по сбору
                <a className={classNames(styles["link_site"])} target="_blank" rel="noreferrer" href="https://discord.com/channels/723912565234728972/994603198587359252">&#10148;</a>
              </h3>
              <h3 className={classNames(styles["text"])}>Благодаря Вашим усилиям игра на сервере будет оставаться комфортной и приятной. Спасибо!</h3>
            </div>
          </div>
        }
        <div className={classNames(styles["monitoringBlock"])}>
          <h4 className={classNames(styles["titleAll"])}>Мы на мониторингах</h4>
          {monitoringBase.map((el, i) =>
            <a className={classNames(styles["monitoringCard"])} target="_blank" rel="noreferrer" href={el.url} key={i}>{el.name}</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;
