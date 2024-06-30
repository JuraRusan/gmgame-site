import classNames from "classnames";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { sendRequest } from "../../../../DataProvider";
import { useAlert } from "react-alert";
import MyModal from "../../../../common/modal/MyModal";
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
import Input from "../../input/Input";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import Button from "../../button/Button";
import Textarea from "../../textarea/Textarea";
import FormTitle from "../../form-title/FormTitle";
import BooleanCheck from "../../boolean-check/BooleanCheck";

import styles from "./Player-summary.module.scss";

const StrokeInfo = ({ label, info = undefined, children }) => {
  return (
    <p className={classNames(styles["stroke"])}>
      {label}
      {info === undefined ? null : <span className={classNames(styles["color"])}>{info}</span>}
      {children}
    </p>
  );
};

const StrokeName = ({ name }) => {
  return (
    <div className={classNames(styles["main_line_user"])}>
      <img className={classNames(styles["ico_player"])} src={`https://minotar.net/helm/${name}/150`} alt="none" />
      <StrokeInfo label="Ник игрока:" info={name} />
    </div>
  );
};

const PlayerSummary = () => {
  const [searchParams] = useSearchParams();
  let [searchParam, setSearchParam] = useState("Поиск работает по discord_id/nickname/discord_tag");
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

  const [isConfirmActive, setIsConfirmActive] = useState(false);

  const handleOpenModal = (userId) => {
    setModalLog(true);

    sendRequest("/api/admin/get_logs", "POST", { id: userId }).then((response) => {
      if (!response.length > 0) {
        setLogs([]);
        alert.error(response.message);
        return;
      }
      setLogs(response);
    });
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
        tagUser[user.username] = user.tag;
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
        [event.target.id]: ["x", "y", "z"].includes(event.target.id) ? +event.target.value : event.target.value,
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
        [event.target.id]: ["xStart", "xStop", "zStart", "zStop"].includes(event.target.id)
          ? +event.target.value
          : event.target.value,
      },
    };
    setInputTerrs(input);
  };

  const userDetailsChange = (event, id) => {
    let input = { ...inputUserDetails };

    if (!input[id]) input[id] = {};

    let value = "";
    if (event.target.id === "expiration_date") {
      value = new Date(event.target.value).toISOString();
    }

    input[id] = {
      ...input[id],
      ...{ [event.target.id]: value || event.target.value },
    };

    if (event.target.id === "citizenship") {
      input[id] = {
        ...input[id],
        ...{ [event.target.id]: event.target.checked },
      };
    }

    if (event.target.id === "immun") {
      input[id] = {
        ...input[id],
        ...{ [event.target.id]: event.target.checked },
      };
    }

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
        // try {
        //   let tag = JSON.parse(user.tag);
        //   tagUser[user.username] = tag.id ? tag : JSON.parse(tag);
        // } catch (err) {
        //   const email = user.tag.match(/email": "(.+?)"/);
        //   tagUser[user.username] = email && email[1] ? { email: email[1] } : "";
        // }
        tagUser[user.username] = user.tag.id;
        tagUser[user.username] = !user.tag.email ? "" : user.tag.email;
      });
      setTag(tagUser);
      setRegens([]);
      setTerritories({});
      setUser([]);
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
    sendRequest("/api/admin/get_link", "POST", { name: name }).then((response) => {
      if (response.error) {
        alert.error(response.message);
        return;
      }
      window.open(response, "_blank");
    });
  };

  return (
    <div className={classNames(styles["mainUserSummary"])}>
      <Input placeholder={searchParam} onChange={debouncedGetUser} type="search" />
      <div className={classNames(styles["wrapperButtonManager"])}>
        <button className={classNames(styles["buttonSearchAll"])} type="submit" onClick={getMarkers}>
          Отображение всех меток
        </button>
        <button className={classNames(styles["buttonSearchAll"])} type="submit" onClick={getTerritories}>
          Отображение всех территорий
        </button>
        <button className={classNames(styles["buttonSearchAll"])} type="submit" onClick={getRegens}>
          Пользователи для регена
        </button>
        <button className={classNames(styles["buttonSearchAll"])} type="submit" onClick={getWhiteList}>
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
                <Th type="text" content="Баланс" />
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
                  <Th type="boolean" content={el?.immun} />
                  <Th type="boolean" content={el?.citizenship} />
                  <Th type="text" content={el?.balance} />
                  <Th type="actions">
                    <TButton name="Log" onClick={() => handleOpenModal(el.user_id)} typeClick={true} />
                    <TButton name="User Details" onClick={() => handleOpenModalUd(el)} typeClick={true} />
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
          <Button
            className={classNames(styles["box_save"])}
            view="submit"
            label="Применить"
            onClick={() => setIsConfirmActive(true)}
          />
          <ConfirmModal
            open={isConfirmActive}
            close={() => setIsConfirmActive(false)}
            no={() => setIsConfirmActive(false)}
            yes={actionUser}
            message="Подтвердите действие «Обновить»"
          />
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
                    {username === "all" && <Th type="text" content={el?.username || "-"} />}
                    <Th type="editing">
                      <TInput id="name" size="large" onChange={(e) => markerChange(e, el.id)} defaultValue={el.name} />
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
                      <TInput id="x" size="small" onChange={(e) => markerChange(e, el.id)} defaultValue={el.x} />
                    </Th>
                    <Th type="editing">
                      <TInput id="y" size="small" onChange={(e) => markerChange(e, el.id)} defaultValue={el.y} />
                    </Th>
                    <Th type="editing">
                      <TInput id="z" size="small" onChange={(e) => markerChange(e, el.id)} defaultValue={el.z} />
                    </Th>
                    <Th type="link" href={`https://map.gmgame.ru/#/${el.x}/64/${el.z}/-4/GMGameWorld/over`}></Th>
                    <Th type="actions">
                      <TButton
                        name="Удалить"
                        onClick={() => delMarker(el.id, username)}
                        message="Подтвердите действие «Удалить»"
                      />
                      <TButton
                        name="Обновить"
                        onClick={() => updateMarker(el.id)}
                        message="Подтвердите действие «Обновить»"
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
                          {username === "all" && <Th type="text" content={el?.username || "-"} />}
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
                            href={`https://map.gmgame.ru/#/${(el.xStart + el.xStop) / 2}/64/${
                              (el.zStart + el.zStop) / 2
                            }/-4/GMGameWorld/over`}
                          />
                          <Th type="actions">
                            <TButton
                              name="Удалить"
                              onClick={() => delTerr(el.id, i, username)}
                              message="Подтвердите действие «Удалить»"
                            />
                            <TButton
                              name="Обновить"
                              onClick={() => updateTerr(el.id)}
                              message="Подтвердите действие «Обновить»"
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
                        {username === "all" && <Th type="text" content={el?.username || "-"} />}
                        <Th type="text" id="name" size="large" content={el.name} />
                        <Th type="actions">
                          <TButton name="Посмотреть" onClick={() => getLink(el.name)} typeClick={true} />
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
          <h4 className={classNames(styles["managerTitleH4"])}>Список на реген</h4>
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
                        <Th type="link" href={`/manager/player_summary?user_id=${regen.user_id}`} />
                        <Th type="actions">
                          <TButton
                            name="Реген"
                            onClick={() => regenAction(regen.user_id, "regen", i)}
                            message="Подтвердите действие «Реген»"
                          />
                          <TButton
                            name="Оставить"
                            onClick={() => regenAction(regen.user_id, "settle", i)}
                            message="Подтвердите действие «Оставить»"
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
      <MyModal open={modalUd} close={handleCloseModalUd}>
        <div className={classNames(styles["user_app"])}>
          <h3 className={classNames(styles["app_info"])}>Активная заявка</h3>
          <div className={classNames(styles["active_app"])}>
            <StrokeName name={userDetails?.username} />
            <div className={classNames(styles["description_user"])}>
              <StrokeInfo label="Дискорд id:" info={userDetails?.user_id} />
              <StrokeInfo label="Id в базе:" info={userDetails?.id} />
              <StrokeInfo label="Возраст:" info={userDetails?.age} />
              <StrokeInfo label="Статус игрока:" info={userDetails?.status} />
              <StrokeInfo label="Баланс:" info={userDetails?.balance} />

              <div className={classNames(styles["stroke_row"])}>
                <StrokeInfo label="Иммунитет:" />
                <input
                  className={classNames(styles["input_checkbox"])}
                  id="immun"
                  type="checkbox"
                  onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                  defaultChecked={userDetails?.immun}
                />
              </div>

              <div className={classNames(styles["stroke_row"])}>
                <StrokeInfo label="Гражданство:" />
                <input
                  className={classNames(styles["input_checkbox"])}
                  id="citizenship"
                  type="checkbox"
                  onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                  defaultChecked={userDetails?.citizenship}
                />
              </div>

              <FormTitle title="Партнер:" required={false} count={false} />
              <Input
                id="partner"
                type="text"
                onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                defaultValue={userDetails?.partner}
              />

              <FormTitle title="Откуда узнал о проекте:" required={false} count={false} />
              <Textarea disabled defaultValue={userDetails?.from_about} />

              <FormTitle title="О себе:" required={false} count={false} />
              <Textarea disabled defaultValue={userDetails?.you_about} />

              <FormTitle title="Друзья:" required={false} count={false} />
              <Textarea defaultValue={userDetails?.friends} disabled />

              <FormTitle title="Дата_окончания:" required={false} count={false} />
              <Input
                id="expiration_date"
                type="date"
                onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                defaultValue={
                  userDetails.expirationDate ? userDetails.expirationDate.toISOString().substring(0, 10) : ""
                }
              />

              <FormTitle title="Описание:" required={false} count={false} />
              <Textarea
                id="note"
                onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                defaultValue={userDetails?.note}
                rows="16"
              />
            </div>
            <Button
              className={classNames(styles["wrapper_actions"])}
              view="submit"
              label="Сохранить"
              onClick={() => updateUser(userDetails.user_id)}
            />
          </div>
          {!userDetails.oldUsers
            ? null
            : userDetails.oldUsers.map((el, index) => (
                <>
                  <h3 className={classNames(styles["app_info"])}>Старая заявка [ {index + 1} ]</h3>
                  <div className={classNames(styles["old_app"])}>
                    <StrokeName name={el?.username} />
                    <div className={classNames(styles["description_user"])}>
                      <StrokeInfo label="Дискорд id:" info={userDetails?.oldUsers[index]?.user_id} />
                      <StrokeInfo label="Возраст:" info={userDetails?.oldUsers[index]?.age} />
                      <StrokeInfo label="Баланс:" info={userDetails?.oldUsers[index]?.balance} />
                      <StrokeInfo label="Партнёр:" info={userDetails?.oldUsers[index]?.partner} />

                      <StrokeInfo label="Гражданство:">
                        <BooleanCheck
                          className={classNames(styles["padding_children"])}
                          value={userDetails?.oldUsers[index]?.citizenship}
                        />
                      </StrokeInfo>

                      <StrokeInfo label="Имунитет:">
                        <BooleanCheck
                          className={classNames(styles["padding_children"])}
                          value={userDetails?.oldUsers[index]?.immun}
                        />
                      </StrokeInfo>

                      <StrokeInfo label="Is_discord:">
                        <BooleanCheck
                          className={classNames(styles["padding_children"])}
                          value={userDetails?.oldUsers[index]?.is_discord}
                        />
                      </StrokeInfo>

                      <FormTitle title="Друзья:" required={false} count={false} />
                      <Textarea defaultValue={userDetails?.oldUsers[index]?.friends} disabled />

                      <FormTitle title="Откуда узнали о проэкте:" required={false} count={false} />
                      <Textarea defaultValue={userDetails?.oldUsers[index]?.from_about} disabled />

                      <FormTitle title="О себе:" required={false} count={false} />
                      <Textarea defaultValue={userDetails?.oldUsers[index]?.you_about} disabled />

                      <FormTitle title="Сервера:" required={false} count={false} />
                      <Textarea defaultValue={userDetails?.oldUsers[index]?.server} disabled />

                      <FormTitle title="Заметка о игроке:" required={false} count={false} />
                      <Textarea defaultValue={userDetails?.oldUsers[index]?.note} disabled />
                    </div>
                  </div>
                </>
              ))}
        </div>
      </MyModal>

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*--- Модальное окно для user_log ---*/}
      <MyModal open={modalLog} close={handleCloseModal}>
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
                    <Th type="text" content={new Date(el.log_date).toLocaleString()} />
                    <Th
                      type="text"
                      content={(() => {
                        let log = el.log;
                        try {
                          log = JSON.parse(el.log);
                        } catch {
                          return log;
                        }
                        return `${log.action} ${log.data ? JSON.stringify(log.data) : ""}`;
                      })()}
                    />
                    <Th type="text" content={el.manager} />
                  </Tr>
                );
              })}
            </TBody>
          </TableMain>
        </div>
      </MyModal>

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
    </div>
  );
};

export default PlayerSummary;
