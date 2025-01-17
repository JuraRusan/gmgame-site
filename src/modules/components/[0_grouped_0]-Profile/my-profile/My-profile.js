import classNames from "classnames";
import React, { useState } from "react";
import { useAlert } from "@blaumaus/react-alert";
import { sendRequest, useAxios } from "../../../../DataProvider";
import Preload from "../../preloader/Preload.js";
import useLoading from "../../../loading/useLoading";
import Button from "../../button/Button";
import Link from "../../link/Link";
import Accordion from "../../accordion/Accordion";
import { prepare } from "../../text-editor/functions/Prepare";

import styles from "./My-profile.module.scss";

const IP_LIST = ["fi.gmgame.ru", "lv.gmgame.ru", "by.gmgame.ru"];

const ANSWER = [
  {
    type: "paragraph",
    children: [
      { text: "Отказ был принят большинством " },
      { text: "активных игроков сервера", url: "https://wiki.gmgame.ru/books/gaidy/page/grazdanstvo" },
      {
        text: ". У каждого проголосовавшего игрока могут быть свои причины, которые они не всегда озвучивают. Вы можете попытаться узнать причины в общих чатах ",
      },
      { text: "дискорда", url: "https://discord.com/channels/723912565234728972/799754645614493777" },
      { text: ", но будьте готовы к критике или отсутствию ответа." },
    ],
  },
];
const RejectedFAQ = {
  id: 1,
  question: "Почему мне отказали?",
  answer: prepare(ANSWER, true),
};

const MyProfile = () => {
  const alert = useAlert();

  const isLoading = useLoading();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const resParams = useAxios("/api/profile", "GET", {});

  const data = resParams.data;

  const handleCopyClick = (index) => {
    navigator.clipboard.writeText(IP_LIST[index]);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 3000);

    alert.success("Скопировано!");
  };

  const resubmit = () => {
    sendRequest("/api/resubmit", "POST", {}).then((response) => {
      if (!response.error) {
        window.location.reload(true);
      } else {
        alert.error(response.body?.error || response.error);
      }
    });
  };

  const Discord = () => {
    return (
      <Link
        className={classNames(styles["link_size_discord"])}
        href="https://discord.gg/cAM6tUYEuX"
        rel="noreferrer"
        target="_blank"
        show={false}
      >
        Присоединяйтесь к нам в Discord
      </Link>
    );
  };

  const StatusReview = () => {
    return (
      <div className={classNames(styles["wrapper_description"])}>
        <h4 className={classNames(styles["text"], styles["main_text"])}>
          Ваша заявка успешно подана и находится на рассмотрении.
        </h4>
        <h4 className={classNames(styles["text"])}>
          Заявки рассматриваются активными игроками сервера, поэтому время ожидания может варьироваться от нескольких
          минут до суток в зависимости от текущего онлайна.
        </h4>
        <div className={classNames(styles["hr_custom"])} />
        <h4 className={classNames(styles["text"])}>
          В процессе рассмотрения рекомендуем ознакомиться с важной информацией:
        </h4>
        <ul className={classNames(styles["list"])}>
          <li>
            <Link
              href="https://discord.com/channels/723912565234728972/792059904721944626"
              className={classNames(styles["link_size"])}
              rel="noreferrer"
              target="_blank"
              show={false}
            >
              Правила сервера
            </Link>
            <span> — обязательные к прочтению для всех игроков.</span>
          </li>
          <li>
            <Link
              href="https://discord.com/channels/723912565234728972/849947082591961118"
              className={classNames(styles["link_size"])}
              rel="noreferrer"
              target="_blank"
              show={false}
            >
              Часто задаваемые вопросы
            </Link>
            <span> — в нём вы найдете ответы на большинство распространённых вопросов.</span>
          </li>
          <li>
            <Link
              href="https://wiki.gmgame.ru/"
              className={classNames(styles["link_size"])}
              rel="noreferrer"
              target="_blank"
              show={false}
            >
              Wiki
            </Link>
            <span> — здесь собраны полезные материалы и инструкции.</span>
          </li>
        </ul>
        <div className={classNames(styles["hr_custom"])} />
        <h4 className={classNames(styles["text"])}>Статус вашей заявки будет обновлен:</h4>
        <ul className={classNames(styles["list"])}>
          <li>
            <span>В случае положительного решения он изменится на « Игрок сервера »</span>
          </li>
          <li>
            <span>В случае отказа — на « Отказ по заявке »</span>
          </li>
        </ul>
        <div className={classNames(styles["hr_custom"])} />
        <h4 className={classNames(styles["text"])}>
          Прием заявок осуществляется через дискорд-бота на основе голосования. Важно! С 23:00 до 8:00 (по МСК) бот не
          работает, поэтому если ваша заявка была подана поздно вечером, решение о принятии будет принято только утром.
        </h4>
        <h4 className={classNames(styles["text"])}>Благодарим за терпение и внимание!</h4>
        <Discord />
      </div>
    );
  };

  const StatusApproved = () => {
    return (
      <div className={classNames(styles["wrapper_description"])}>
        <h4 className={classNames(styles["text"], styles["main_text"])}>
          Ваша заявка одобрена. Добро пожаловать на сервер!
        </h4>
        <h4 className={classNames(styles["text"])}>
          Пожалуйста, ознакомьтесь с{" "}
          <Link
            href="https://discord.com/channels/723912565234728972/792059904721944626"
            className={classNames(styles["link_size"])}
            rel="noreferrer"
            target="_blank"
            show={false}
          >
            правилами
          </Link>
          ,{" "}
          <Link
            href="https://wiki.gmgame.ru/"
            className={classNames(styles["link_size"])}
            rel="noreferrer"
            target="_blank"
            show={false}
          >
            wiki{" "}
          </Link>
          и разделом{" "}
          <Link
            href="https://discord.com/channels/723912565234728972/849947082591961118"
            className={classNames(styles["link_size"])}
            rel="noreferrer"
            target="_blank"
            show={false}
          >
            часто задаваемые вопросы{" "}
          </Link>
          для получения полезной информации.
        </h4>
        <div className={classNames(styles["version"])}>
          <span className={classNames(styles["number"])}>Java Edition {data.version}</span>
        </div>
        <div className={classNames(styles["ipList"])}>
          <label className={classNames(styles["label"])}>Серверные адреса для подключения:</label>
          {IP_LIST.map((el, index) => (
            <div className={classNames(styles["wrapper"])} key={index} onClick={() => handleCopyClick(index)}>
              <label className={classNames(styles["ip"], { [styles["ipCopied"]]: copiedIndex === index })}>{el}</label>
            </div>
          ))}
        </div>
        <Discord />
      </div>
    );
  };

  const StatusRejected = () => {
    return (
      <div className={classNames(styles["wrapper_description"])}>
        <h4 className={classNames(styles["text"], styles["main_text"])}>Ваша заявка отклонена.</h4>
        {!data.user.reapplication ? (
          <>
            <h4 className={classNames(styles["text"])}>Вы можете подать повторную заявку только один раз.</h4>
            <h4 className={classNames(styles["text"])}>
              Чтобы увеличить вероятность принятия вашей заявки, пожалуйста, уделите больше внимания деталям при её
              заполнении.
            </h4>
            <div className={classNames(styles["user_update_statement"])}>
              <Button view="submit" label="Переподать заявку" onClick={() => resubmit()} />
            </div>
            <h4 className={classNames(styles["text"])}>
              Ознакомьтесь с системой заявок на нашем{" "}
              <Link
                href="https://wiki.gmgame.ru/books/server/page/zaiavki-i-priem-zaiavok-na-servere-gmgame"
                className={classNames(styles["link_size"])}
                rel="noreferrer"
                target="_blank"
                show={false}
              >
                Wiki
              </Link>
            </h4>
            <Discord />
          </>
        ) : (
          <>
            <h4 className={classNames(styles["text"])}>
              К сожалению, вы больше не можете подать заявку на сервер. Мы понимаем, что это может быть разочаровывающе,
              но важно, чтобы все игроки соответствовали определённым стандартам для поддержания комфортной атмосферы на
              сервере.
            </h4>
            <Accordion el={RejectedFAQ} className={classNames(styles["accordion_update"])} defaultChecked={true} />
            <h4 className={classNames(styles["text"])}>
              Благодарим вас за интерес и участие, желаем удачи и всего наилучшего!
            </h4>
          </>
        )}
      </div>
    );
  };

  const StatusBanned = () => {
    return (
      <img
        className={classNames(styles["banned"])}
        src={process.env.PUBLIC_URL + "/site_assets/pages/webp/banned.webp"}
        alt="none"
        width="100%"
        height="auto"
      />
    );
  };

  const StatusInactive = () => {
    return (
      <div className={classNames(styles["wrapper_description"])}>
        <h4 className={classNames(styles["text"], styles["main_text"])}>
          Ваш аккаунт неактивен из-за продолжительного отсутствия.
        </h4>
        <h4 className={classNames(styles["text"])}>
          Если вы хотите восстановить активность на сервере, пожалуйста, создайте тикет в нашем{" "}
          <Link
            href="https://discord.com/channels/723912565234728972/1185657616806977647"
            className={classNames(styles["link_size"])}
            rel="noreferrer"
            target="_blank"
            show={false}
          >
            Discord-канале
          </Link>
        </h4>
        <h4 className={classNames(styles["text"])}>Мы с радостью вернем вас в игру!</h4>
        <Discord />
      </div>
    );
  };

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["profileBlock"])}>
      <div className={classNames(styles["content"])}>
        {data.user.status === 1 ? <StatusReview /> : null}
        {data.user.status === 2 ? <StatusApproved /> : null}
        {data.user.status === 3 ? <StatusRejected /> : null}
        {data.user.status === 4 ? <StatusBanned /> : null}
        {data.user.status === 5 ? <StatusInactive /> : null}
      </div>
    </div>
  );
};

export default MyProfile;
