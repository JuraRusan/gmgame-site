import classNames from "classnames";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { sendRequest } from "../../../../DataProvider";
import { useAlert } from "react-alert";
import ReactModal from "react-modal";
import debounce from "lodash.debounce";
import TableMain from "../../table/TableMain";
import THead from "../../table/THead";
import TBody from "../../table/TBody";
import Tr from "../../table/Tr";
import Th from "../../table/Th";
import TButton from "../../table/TButton";
import TSelect from "../../table/TSelect";
import TInput from "../../table/TInput";
import TTextarea from "../../table/TTextarea";

import styles from "./Player-summary.module.scss";

const StrokeName = ({ name }) => {
  return (
    <div className={classNames(styles["main_line_user"])}>
      <img
        className={classNames(styles["ico_player"])}
        src={`https://minotar.net/helm/${name}/150`}
        alt="none"
      />
      <p className={classNames(styles["stroke_name"])}>
        Ник игрока:
        <span className={classNames(styles["span_display"])}>{name}</span>
      </p>
    </div>
  );
};

const StrokeInfo = ({ label, info }) => {
  return (
    <p className={classNames(styles["stroke"])}>
      {label}
      <span className={classNames(styles["color"])}>{info}</span>
    </p>
  );
};

const StrokeRedactor = ({ label, onChange, defaultValue, id, type }) => {
  return (
    <div className={classNames(styles["stroke_row"])}>
      <p className={classNames(styles["label_name"])}>{label}</p>
      <input
        className={classNames(styles["input"])}
        id={id}
        type={type}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

const PlayerSummary = () => {
  const [searchParams] = useSearchParams();
  let [searchParam, setSearchParam] = useState(
    "Поиск работает по discord_id/nickname/discord_tag"
  );
  let [user, setUser] = useState([]);
  let [tag, setTag] = useState({});
  const [action, setAction] = useState({});
  const [markers, setMarkers] = useState({});
  const [territories, setTerritories] = useState({});
  const [tickets, setTickets] = useState({});
  const [modalLog, setModalLog] = useState(false);
  const [modalUd, setModalUd] = useState(false);
  const [logs, setLogs] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [inputMarker, setInputMarker] = useState({});
  const [inputTerrs, setInputTerrs] = useState({});
  const [regens, setRegens] = useState([]);
  const [inputUserDetails, setInputUserDetails] = useState({});

  const handleOpenModal = (userId) => {
    setModalLog(true);

    sendRequest("/api/admin/get_logs", "POST", { id: userId }).then(
      (response) => {
        if (!response.length > 0) {
          setLogs([]);
          alert.error(response.message);
          return;
        }
        setLogs(response);
      }
    );
  };

  const handleCloseModal = () => {
    setModalLog(false);
    setLogs([]);
  };

  const handleOpenModalUd = (user) => {
    const expirationDate = new Date(user.expiration_date);
    const ud = { ...user, ...{ expirationDate: expirationDate } };
    setUserDetails(ud);
    setModalUd(true);
  };

  const handleCloseModalUd = () => {
    setModalUd(false);
  };

  const alert = useAlert();

  const getUser = (event) => {
    if (event?.target?.value?.length < 3) {
      return;
    }
    setSearchParam(event?.target?.value || event);
    sendRequest("/api/admin/get_user", "POST", {
      searchParam: event?.target?.value || event,
    }).then((response) => {
      if (!response[0]?.user_id) {
        setUser({});
        setTag({});
        setMarkers({});
        setTerritories({});
        setTickets({});
        // alert.error(response.message);
        return;
      }
      setUser(response);

      let makersUser = {};
      let tagUser = {};
      let terrUser = {};
      setTag({});
      setMarkers({});
      setTerritories({});
      setTickets({});
      response.forEach((user) => {
        try {
          let tag = JSON.parse(user.tag);
          tagUser[user.username] = tag.id ? tag : JSON.parse(tag);
        } catch (err) {
          const email = user.tag.match(/email": "(.+?)"/);
          tagUser[user.username] = email && email[1] ? { email: email[1] } : "";
        }
        makersUser[user.username] = user.markers;
        terrUser[user.username] = user.territories;
        tickets[user.username] = user.tickets;
      });
      setTag(tagUser);
      setMarkers(makersUser);
      setTerritories(terrUser);
      setTickets(tickets);
      setRegens([]);
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetUser = useMemo(() => debounce(getUser, 300), []);

  useEffect(() => {
    if (searchParams.get("user_id")) {
      getUser(searchParams.get("user_id"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMarkers = () => {
    sendRequest("/api/admin/get_markers", "POST", {}).then((response) => {
      if (!response.length > 0) {
        setUser({});
        setTag({});
        alert.error(response.message);
        return;
      }
      setMarkers({ all: response });
      setUser({});
      setTerritories([]);
      setTickets([]);
      setRegens([]);
    });
  };

  const getTerritories = () => {
    sendRequest("/api/admin/get_territories", "POST", {}).then((response) => {
      if (!response.length > 0) {
        setUser({});
        setTag({});
        alert.error(response.message);
        return;
      }
      setTerritories({ all: response });
      setUser({});
      setMarkers([]);
      setRegens([]);
    });
  };

  const delMarker = (id, username) => {
    const newMarkers = { ...markers };
    actionMarkers(id, "/api/admin/delete_marker");

    const index = markers[username].findIndex((marker) => marker.id === id);
    newMarkers[username].splice(index, 1);
    setMarkers(newMarkers);
  };

  const markerChange = (event, id) => {
    let input = { ...inputMarker };

    if (!input[id]) input[id] = {};

    input[id] = {
      ...input[id],
      ...{
        [event.target.id]: ["x", "y", "z"].includes(event.target.id)
          ? +event.target.value
          : event.target.value,
      },
    };
    setInputMarker(input);
  };

  const terrsChange = (event, id) => {
    let input = { ...inputTerrs };

    if (!input[id]) input[id] = {};

    input[id] = {
      ...input[id],
      ...{
        [event.target.id]: ["xStart", "xStop", "zStart", "zStop"].includes(
          event.target.id
        )
          ? +event.target.value
          : event.target.value,
      },
    };
    setInputTerrs(input);
  };

  const userDetailsChange = (event, id) => {
    let input = { ...inputUserDetails };

    if (!input[id]) input[id] = {};

    let valueDate = "";
    if (event.target.id === "expiration_date") {
      valueDate = new Date(event.target.value).toISOString();
    }

    if (event.target.id === "citizenship") {
      valueDate = event.target.value === "true" ? true : false;
    }

    input[id] = {
      ...input[id],
      ...{ [event.target.id]: valueDate || event.target.value },
    };

    setInputUserDetails(input);
  };

  const updateUser = (id) => {
    actionMarkers(id, "/api/admin/update_user", inputUserDetails);
  };

  const updateMarker = (id) => {
    actionMarkers(id, "/api/admin/update_marker", inputMarker);
  };

  const updateTerr = (id) => {
    actionMarkers(id, "/api/admin/update_territory", inputTerrs);
  };

  const delTerr = (id, index, username) => {
    actionMarkers(id, "/api/admin/delete_territory");

    const newTerritories = JSON.parse(JSON.stringify(territories));
    newTerritories[username][index].notRender = true;
    setTerritories(newTerritories);
  };

  const actionMarkers = (id, url, input) => {
    let payload = { id: id };
    if (input) {
      payload = { ...payload, ...input[id] };
    }
    sendRequest(url, "POST", payload).then((response) => {
      if (response.message) {
        alert.success(response.message);
      } else {
        alert.error(response.error);
      }
    });
  };

  const actionUser = () => {
    Object.keys(action).forEach((user) => {
      sendRequest("/api/admin/action_user", "POST", {
        action: action[user].action,
        user: action[user].user,
      }).then((response) => {
        if (response.error) {
          alert.error(response.message);
        } else {
          alert.success(response.message);
        }
      });
    });

    setAction({});
  };

  const getActions = (user) => {
    const actions = {
      default: { action: null, text: "" },
      accept: { action: "accept", text: "Принять" },
      delete: { action: "delete", text: "Удалить" },
      decline: { action: "decline", text: "Отклонить" },
      ban: { action: "ban", text: "Забанить" },
      unban: { action: "unban", text: "Разбанить" },
      addWl: { action: "resume", text: "Вернуть в wl" },
      delWL: { action: "suspend", text: "Убрать из wl" },
    };

    let values = [actions.default];

    switch (user?.status) {
      case 1:
        values.push(actions.accept, actions.decline, actions.delete);
        break;
      case 2:
        values.push(actions.ban, actions.delete, actions.delWL);
        break;
      case 3:
        values.push(actions.accept, actions.delete);
        break;
      case 4:
        values.push(actions.unban, actions.delete);
        break;
      case 5:
        values.push(actions.addWl, actions.delete);
        break;
      default:
        values = [];
    }

    return values.map((value, index) => {
      return (
        <option key={index} value={value.action}>
          {value.text}
        </option>
      );
    });

    // return options;
  };

  const getRegens = () => {
    sendRequest("/api/admin/get_regens", "POST", {}).then((response) => {
      if (!response.length > 0) {
        alert.error("Список пуст");
        return;
      }
      setRegens(response);
      setTerritories({});
      setUser({});
      setMarkers([]);
    });
  };

  const getWhiteList = () => {
    sendRequest("/api/admin/get_whitelist", "POST", {}).then((response) => {
      if (!response.length > 0) {
        alert.error("Список пуст");
        return;
      }
      setTag({});
      let tagUser = {};
      response.forEach((user) => {
        try {
          let tag = JSON.parse(user.tag);
          tagUser[user.username] = tag.id ? tag : JSON.parse(tag);
        } catch (err) {
          const email = user.tag.match(/email": "(.+?)"/);
          tagUser[user.username] = email && email[1] ? { email: email[1] } : "";
        }
      });
      setTag(tagUser);
      setRegens([]);
      setTerritories({});
      setUser({});
      setMarkers([]);
      setUser(response);
    });
  };

  const regenAction = (user_id, action, index) => {
    sendRequest("/api/admin/regen_action", "POST", {
      user_id: user_id,
      action: action,
    }).then((response) => {
      if (response.error) {
        alert.error(response.message);
        return;
      }
      let newRegens = JSON.parse(JSON.stringify(regens));
      newRegens[index].notRender = true;

      setRegens(newRegens);
    });
  };

  const getLink = (name) => {
    sendRequest("/api/admin/get_link", "POST", { name: name }).then(
      (response) => {
        if (response.error) {
          alert.error(response.message);
          return;
        }
        window.open(response, "_blank");
      }
    );
  };

  return (
    <div className={classNames(styles["mainUserSummary"])}>
      <input
        className={classNames(styles["searchPlayers"])}
        placeholder={searchParam}
        onChange={debouncedGetUser}
        type="search"
      />
      <button
        className={classNames(styles["buttonSearchPlayers"])}
        type="submit"
        onClick={() => getUser(searchParam)}
      >
        Поиск
      </button>

      <div className={classNames(styles["wrapperButtonManager"])}>
        <button
          className={classNames(styles["buttonSearchAll"])}
          type="submit"
          onClick={getMarkers}
        >
          Отображение всех меток
        </button>
        <button
          className={classNames(styles["buttonSearchAll"])}
          type="submit"
          onClick={getTerritories}
        >
          Отображение всех территорий
        </button>
        <button
          className={classNames(styles["buttonSearchAll"])}
          type="submit"
          onClick={getRegens}
        >
          Пользователи для регена
        </button>
        <button
          className={classNames(styles["buttonSearchAll"])}
          type="submit"
          onClick={getWhiteList}
        >
          WhiteList
        </button>
      </div>

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*--- Таблица для отображения пользователя или всех пользователей ---*/}
      {user[0]?.status && (
        <>
          <TableMain>
            <THead>
              <Tr header={true}>
                <Th type="text" content="i" />
                <Th type="text" content="Имя" />
                <Th type="text" content="email" />
                <Th type="text" content="discord_id" />
                <Th type="text" content="Возраст" />
                <Th type="text" content="Статус" />
                <Th type="text" content="Имун" />
                <Th type="text" content="Гражд." />
                <Th type="text" content="Доп. инфа" />
                <Th type="text" content="Действия" />
              </Tr>
            </THead>
            <TBody>
              {user?.map((el, i) => (
                <Tr key={i} keyStyle={i}>
                  <Th type="text" content={i + 1} />
                  <Th type="text" content={el?.username || "-"} />
                  <Th type="text" content={tag[el?.username]?.email || "-"} />
                  <Th type="text" content={el?.user_id || "-"} />
                  <Th type="text" content={el?.age || "-"} />
                  <Th type="text" content={el?.status || "-"} />
                  <Th
                    type="text"
                    content={el?.immun === true ? "true" : "false"}
                  />
                  <Th
                    type="text"
                    content={el?.citizenship === true ? "true" : "false"}
                  />
                  <Th type="actions">
                    <TButton
                      name="Log"
                      onClick={() => handleOpenModal(el.user_id)}
                    />
                    <TButton
                      name="User Details"
                      onClick={() => handleOpenModalUd(el)}
                    />
                  </Th>
                  <Th type="editing">
                    <TSelect
                      name={getActions(el)}
                      value={action[el.user_id]?.action || ""}
                      onChange={(event) =>
                        setAction({
                          ...action,
                          ...{
                            [el.user_id]: {
                              action: event.target.value,
                              user: el.user_id,
                            },
                          },
                        })
                      }
                    />
                  </Th>
                </Tr>
              ))}
            </TBody>
          </TableMain>
          <button
            className={classNames(styles["buttonPlayersSubmit"])}
            type="submit"
            onClick={actionUser}
          >
            Применить
          </button>
        </>
      )}

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*--- Таблица для меток пользователя или всех возможных меток ---*/}
      {Object.keys(markers).map((username, i) => {
        if (markers[username].length === 0) {
          return null;
        }
        return (
          <React.Fragment key={i}>
            <h4 className={classNames(styles["managerTitleH4"])}>
              Метки {username === "all" ? "всех игроков" : username}
            </h4>
            <TableMain>
              <THead>
                <Tr header={true}>
                  <Th type="text" content="i" />
                  {username === "all" && <Th type="text" content="Имя" />}
                  <Th type="text" content="Название" />
                  <Th type="text" content="Описание" />
                  <Th type="text" content="x" />
                  <Th type="text" content="y" />
                  <Th type="text" content="z" />
                  <Th type="text" content="Просмотр" />
                  <Th type="text" content="Действия" />
                </Tr>
              </THead>
              <TBody>
                {markers[username].map((el, i) => (
                  <Tr key={i} keyStyle={i}>
                    <Th type="text" content={i + 1} />
                    {username === "all" && (
                      <Th type="text" content={el?.username || "-"} />
                    )}
                    <Th type="editing">
                      <TInput
                        id="name"
                        size="large"
                        onChange={(e) => markerChange(e, el.id)}
                        defaultValue={el.name}
                      />
                    </Th>
                    <Th type="editing">
                      <TTextarea
                        id="description"
                        onChange={(e) => markerChange(e, el.id)}
                        defaultValue={el.description}
                        rows="1"
                      />
                    </Th>
                    <Th type="editing">
                      <TInput
                        id="x"
                        size="small"
                        onChange={(e) => markerChange(e, el.id)}
                        defaultValue={el.x}
                      />
                    </Th>
                    <Th type="editing">
                      <TInput
                        id="y"
                        size="small"
                        onChange={(e) => markerChange(e, el.id)}
                        defaultValue={el.y}
                      />
                    </Th>
                    <Th type="editing">
                      <TInput
                        id="z"
                        size="small"
                        onChange={(e) => markerChange(e, el.id)}
                        defaultValue={el.z}
                      />
                    </Th>
                    <Th
                      type="link"
                      href={`https://map.gmgame.ru/#/${el.x}/64/${el.z}/-4/GMGameWorld/over`}
                    ></Th>
                    <Th type="actions">
                      <TButton
                        name="Удалить"
                        type="submit"
                        onClick={() => delMarker(el.id, username)}
                      />
                      <TButton
                        name="Обновить"
                        type="submit"
                        onClick={() => updateMarker(el.id)}
                      />
                    </Th>
                  </Tr>
                ))}
              </TBody>
            </TableMain>
          </React.Fragment>
        );
      })}

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*--- Таблица для территорий пользователя или всех возможных территорий ---*/}
      {Object.keys(territories).map((username, i) => {
        if (territories[username].length === 0) {
          return null;
        }
        return (
          <React.Fragment key={i}>
            <h4 className={classNames(styles["managerTitleH4"])}>
              Территории {username === "all" ? "всех игроков" : username}
            </h4>
            <TableMain>
              <THead>
                <Tr header={true}>
                  <Th type="text" content="i" />
                  {username === "all" && <Th type="text" content="Имя" />}
                  <Th type="text" content="Название" />
                  <Th type="text" content="Сервер" />
                  <Th type="text" content="xStart" />
                  <Th type="text" content="xStop" />
                  <Th type="text" content="zStart" />
                  <Th type="text" content="zStop" />
                  <Th type="text" content="Просмотр" />
                  <Th type="text" content="Действия" />
                </Tr>
              </THead>
              <TBody>
                {territories[username].map((el, i) => {
                  return (
                    <>
                      {!el.notRender && (
                        <Tr key={i} keyStyle={i}>
                          <Th type="text" content={i + 1} />
                          {username === "all" && (
                            <Th type="text" content={el?.username || "-"} />
                          )}
                          <Th type="editing">
                            <TInput
                              id="name"
                              size="large"
                              onChange={(e) => terrsChange(e, el.id)}
                              defaultValue={el.name}
                            />
                          </Th>
                          <Th type="editing">
                            <TInput
                              id="world"
                              size="middle"
                              onChange={(e) => terrsChange(e, el.id)}
                              defaultValue={el.world}
                            />
                          </Th>
                          <Th type="editing">
                            <TInput
                              id="xStart"
                              size="small"
                              onChange={(e) => terrsChange(e, el.id)}
                              defaultValue={el.xStart}
                            />
                          </Th>
                          <Th type="editing">
                            <TInput
                              id="xStop"
                              size="small"
                              onChange={(e) => terrsChange(e, el.id)}
                              defaultValue={el.xStop}
                            />
                          </Th>
                          <Th type="editing">
                            <TInput
                              id="zStart"
                              size="small"
                              onChange={(e) => terrsChange(e, el.id)}
                              defaultValue={el.zStart}
                            />
                          </Th>
                          <Th type="editing">
                            <TInput
                              id="zStop"
                              size="small"
                              onChange={(e) => terrsChange(e, el.id)}
                              defaultValue={el.zStop}
                            />
                          </Th>
                          <Th
                            type="link"
                            href={`https://map.gmgame.ru/#/${
                              (el.xStart + el.xStop) / 2
                            }/64/${
                              (el.zStart + el.zStop) / 2
                            }/-4/GMGameWorld/over`}
                          />
                          <Th type="actions">
                            <TButton
                              name="Удалить"
                              type="submit"
                              onClick={() => delTerr(el.id, i, username)}
                            />
                            <TButton
                              name="Обновить"
                              type="submit"
                              onClick={() => updateTerr(el.id)}
                            />
                          </Th>
                        </Tr>
                      )}
                    </>
                  );
                })}
              </TBody>
            </TableMain>
          </React.Fragment>
        );
      })}

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*--- Таблица для тикетов пользователя или всех возможных тикетов ---*/}
      {Object.keys(tickets).map((username, i) => {
        if (tickets[username].length === 0) {
          return null;
        }
        return (
          <React.Fragment key={i}>
            <h4 className={classNames(styles["managerTitleH4"])}>
              Тикеты {username === "all" ? "всех игроков" : username}
            </h4>
            <TableMain>
              <THead>
                <Tr header={true}>
                  <Th type="text" content="i" />
                  {username === "all" && <Th type="text" content="Имя" />}
                  <Th type="text" content="Название" />
                  <Th type="text" content="Просмотр" />
                </Tr>
              </THead>
              <TBody>
                {tickets[username].map((el, i) => (
                  <>
                    {!el.notRender && (
                      <Tr key={i} keyStyle={i}>
                        <Th type="text" content={i + 1} />
                        {username === "all" && (
                          <Th type="text" content={el?.username || "-"} />
                        )}
                        <Th
                          type="text"
                          id="name"
                          size="large"
                          content={el.name}
                        />
                        <Th type="actions">
                          <TButton
                            type="submit"
                            name="Посмотреть"
                            onClick={() => getLink(el.name)}
                          />
                        </Th>
                      </Tr>
                    )}
                  </>
                ))}
              </TBody>
            </TableMain>
          </React.Fragment>
        );
      })}

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*--- Таблица для regen_user ---*/}
      {regens.length > 0 && (
        <>
          <h4 className={classNames(styles["managerTitleH4"])}>
            Список на реген
          </h4>
          <TableMain>
            <THead>
              <Tr header={true}>
                <Th type="text" content="i" />
                <Th type="text" content="Имя"></Th>
                <Th type="text" content="id"></Th>
                <Th type="text" content="Статус"></Th>
                <Th type="text" content="Просмотр"></Th>
                <Th type="text" content="Действия"></Th>
              </Tr>
            </THead>
            <TBody>
              {regens.map((regen, i) => {
                return (
                  <>
                    {!regen.notRender && (
                      <Tr key={i} keyStyle={i}>
                        <Th type="text" content={i + 1} />
                        <Th type="text" content={regen.username} />
                        <Th type="text" content={regen.user_id} />
                        <Th type="text" content="Не известно" />
                        <Th
                          type="link"
                          href={`/manager/player_summary?user_id=${regen.user_id}`}
                        />
                        <Th type="actions">
                          <TButton
                            name="Реген"
                            type="submit"
                            onClick={() =>
                              regenAction(regen.user_id, "regen", i)
                            }
                          />
                          <TButton
                            name="Оставить"
                            type="submit"
                            onClick={() =>
                              regenAction(regen.user_id, "settle", i)
                            }
                          />
                        </Th>
                      </Tr>
                    )}
                  </>
                );
              })}
            </TBody>
          </TableMain>
        </>
      )}

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*--- Модальное окно для user_details ---*/}
      <ReactModal
        isOpen={modalUd}
        onRequestClose={handleCloseModalUd}
        className={classNames(styles["modalMain"])}
        overlayClassName={classNames(styles["overlayModal"])}
      >
        <h3 className={classNames(styles["app_info"])}>Активная заявка</h3>
        <div className={classNames(styles["active_app"])}>
          <StrokeName name={userDetails?.username} />
          <div className={classNames(styles["description_user"])}>
            <StrokeInfo label="Дискорд id:" info={userDetails?.user_id} />
            <StrokeInfo label="Возраст:" info={userDetails?.age} />
            <StrokeInfo label="Статус игрока:" info={userDetails?.status} />
            <StrokeRedactor
              label="Партнер:"
              id="partner"
              type="text"
              onChange={(e) => userDetailsChange(e, userDetails.user_id)}
              defaultValue={userDetails?.partner}
            />
            <StrokeInfo
              label="Откуда узнал о проекте:"
              info={userDetails?.from_about}
            />
            <StrokeInfo label="О себе:" info={userDetails?.you_about} />
            <StrokeRedactor
              label="Иммунитет:"
              id="immun"
              type="text"
              onChange={(e) => userDetailsChange(e, userDetails.user_id)}
              defaultValue={userDetails?.immun}
            />
            <StrokeRedactor
              label="Гражданство:"
              id="citizenship"
              type="text"
              onChange={(e) => userDetailsChange(e, userDetails.user_id)}
              defaultValue={userDetails?.citizenship}
            />
            <StrokeRedactor
              label="Дата_окончания:"
              id="expiration_date"
              type="date"
              onChange={(e) => userDetailsChange(e, userDetails.user_id)}
              defaultValue={
                userDetails.expirationDate
                  ? userDetails.expirationDate.toISOString().substring(0, 10)
                  : ""
              }
            />
            <textarea
              className={classNames(styles["notes"])}
              id="note"
              onChange={(e) => userDetailsChange(e, userDetails.user_id)}
              defaultValue={userDetails?.note}
            />
          </div>
          <div className={classNames(styles["wrapper_actions"])}>
            <button
              className={classNames(styles["submit"])}
              type="submit"
              onClick={() => updateUser(userDetails.user_id)}
            >
              Сохранить
            </button>
          </div>
        </div>
        {!userDetails.oldUsers
          ? null
          : userDetails.oldUsers.map((el, index) => (
              <>
                <h3 className={classNames(styles["app_info"])}>
                  Старая заявка [ {index + 1} ]
                </h3>
                <div className={classNames(styles["old_app"])}>
                  <StrokeName name={el?.username} />
                  <div className={classNames(styles["description_user"])}>
                    <StrokeInfo
                      label="Дискорд id:"
                      info={userDetails?.oldUsers[index]?.user_id}
                    />
                    <StrokeInfo
                      label="Возраст:"
                      info={userDetails?.oldUsers[index]?.age}
                    />
                    <StrokeInfo
                      label="Баланс:"
                      info={userDetails?.oldUsers[index]?.balance}
                    />
                    <StrokeInfo
                      label="Гражданство:"
                      info={
                        userDetails?.oldUsers[index]?.citizenship === true
                          ? "true"
                          : "false"
                      }
                    />
                    <StrokeInfo
                      label="Друзья:"
                      info={
                        !userDetails?.oldUsers[index]?.friends
                          ? "-"
                          : userDetails?.oldUsers[index]?.friends
                      }
                    />
                    <StrokeInfo
                      label="Откуда узнали о проэкте:"
                      info={
                        !userDetails?.oldUsers[index]?.from_about
                          ? "-"
                          : userDetails?.oldUsers[index]?.from_about
                      }
                    />
                    <StrokeInfo
                      label="О себе:"
                      info={
                        !userDetails?.oldUsers[index]?.you_about
                          ? "-"
                          : userDetails?.oldUsers[index]?.you_about
                      }
                    />
                    <StrokeInfo
                      label="Сервера:"
                      info={
                        !userDetails?.oldUsers[index]?.server
                          ? "-"
                          : userDetails?.oldUsers[index]?.server
                      }
                    />
                    <StrokeInfo
                      label="Имунитет:"
                      info={
                        userDetails?.oldUsers[index]?.immun === true
                          ? "true"
                          : "false"
                      }
                    />
                    <StrokeInfo
                      label="Is_discord:"
                      info={
                        userDetails?.oldUsers[index]?.is_discord === true
                          ? "true"
                          : "false"
                      }
                    />
                    <StrokeInfo
                      label="Заметка о игроке:"
                      info={
                        !userDetails?.oldUsers[index]?.note
                          ? "-"
                          : userDetails?.oldUsers[index]?.note
                      }
                    />
                    <StrokeInfo
                      label="Партнёр:"
                      info={
                        !userDetails?.oldUsers[index]?.partner
                          ? "-"
                          : userDetails?.oldUsers[index]?.partner
                      }
                    />
                  </div>
                </div>
              </>
            ))}
      </ReactModal>

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*--- Модальное окно для user_log ---*/}
      <ReactModal
        isOpen={modalLog}
        onRequestClose={handleCloseModal}
        className={classNames(styles["modalMain"])}
        overlayClassName={classNames(styles["overlayModal"])}
      >
        <div className={classNames(styles["cardLog"])}>
          <TableMain>
            <THead>
              <Tr header={true}>
                <Th type="text" content="i" />
                <Th type="text" content="Время" />
                <Th type="text" content="Лог" />
                <Th type="text" content="Менеджер" />
              </Tr>
            </THead>
            <TBody>
              {logs?.map((el, i) => {
                return (
                  <Tr key={i} keyStyle={i}>
                    <Th type="text" content={i + 1} />
                    <Th
                      type="text"
                      content={new Date(el.log_date).toLocaleString()}
                    />
                    <Th
                      type="text"
                      content={(() => {
                        let log = el.log;
                        try {
                          log = JSON.parse(el.log);
                        } catch {
                          return log;
                        }
                        return `${log.action} ${
                          log.data ? JSON.stringify(log.data) : ""
                        }`;
                      })()}
                    />
                    <Th type="text" content={el.manager} />
                  </Tr>
                );
              })}
            </TBody>
          </TableMain>
        </div>
      </ReactModal>

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
    </div>
  );
};

export default PlayerSummary;
