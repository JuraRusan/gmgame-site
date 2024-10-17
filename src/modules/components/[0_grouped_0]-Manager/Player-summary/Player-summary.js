import classNames from "classnames";
import React, { useEffect, useMemo, useState } from "react";
import { sendRequest } from "../../../../DataProvider";
import { useAlert } from "@blaumaus/react-alert"
import { debounce } from "lodash";
import { useNavigate, useSearchParams } from "react-router-dom";
import TableMain from "../../table/TableMain";
import THead from "../../table/THead";
import TBody from "../../table/TBody";
import Tr from "../../table/Tr";
import Th from "../../table/Th";
import TButton from "../../table/TButton";
import TInput from "../../table/TInput";
import TTextarea from "../../table/TTextarea";
import TSelect from "../../table/TSelect";
import MyModal from "../../../../common/modal/MyModal";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import Button from "../../button/Button";
import FormTitle from "../../form-title/FormTitle";
import Input from "../../input/Input";
import Textarea from "../../textarea/Textarea";
import BooleanCheck from "../../boolean-check/BooleanCheck";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";
import ManagerTitle from "../../manager-title/ManagerTitle";

import styles from "./Player-summary.module.scss";

const CASE_STATUS = [
  { id: "default", translate: "Новая заявка" },
  { id: 1, translate: "Заявка на рассмотрении" },
  { id: 2, translate: "Игрок сервера" },
  { id: 3, translate: "Отказ по заявке" },
  { id: 4, translate: "Бан на сервере" },
  { id: 5, translate: "Не активный игрок" },
  { id: 6, translate: "Новый пустой пользователь" },
  { id: 7, translate: "Старый отклоненный пользователь" },
];

const USER_EDIT = {
  default: { action: null, text: "" },
  accept: { action: "accept", text: "Принять" },
  delete: { action: "delete", text: "Удалить" },
  decline: { action: "decline", text: "Отклонить" },
  ban: { action: "ban", text: "Забанить" },
  unban: { action: "unban", text: "Разбанить" },
  addWl: { action: "resume", text: "Вернуть в wl" },
  delWL: { action: "suspend", text: "Убрать из wl" },
};

const PLASEHOLDER = "Поиск работает по discord_id/nickname/discord_tag";

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

const HandleManager = ({ label, ...props }) => {
  return (
    <button className={classNames(styles["buttonSearchAll"])} {...props}>
      {label}
    </button>
  );
};

const PlayerSummary = () => {
  const alert = useAlert();
  const isLoading = useLoading();

  const [urlSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchParam, setSearchParam] = useState("");

  const [user, setUser] = useState([]);
  const [updateUserDetails, setUpdateUserDetails] = useState({});

  const [logs, setLogs] = useState([]);
  const [userDetails, setUserDetails] = useState({});

  const [isConfirmActive, setIsConfirmActive] = useState(false);

  const [action, setAction] = useState({});

  const [regens, setRegens] = useState([]);

  const [markers, setMarkers] = useState({});
  const [updateMarkers, setUpdateMarkers] = useState({});

  const [territories, setTerritories] = useState({});
  const [updateTerritories, setUpdateTerritories] = useState({});

  const [tickets, setTickets] = useState({});

  const [modalLog, setModalLog] = useState(false);
  const [modalUserDetails, setModalUserDetails] = useState(false);

  const [modalStatus, setModalStatus] = useState(false);

  const reset = () => {
    setUser([]);
    setMarkers({});
    setTerritories({});
    setTickets({});
    setRegens([]);
    setSearchParam("");
  };

  /* --- User --- */

  const getUser = (e) => {
    if (e.length < 3) {
      return;
    }

    sendRequest("/api/admin/get_user", "POST", { searchParam: e }).then((response) => {
      if (!response[0]?.user_id) {
        setUser([]);
        setMarkers({});
        setTerritories({});
        setTickets({});
        setRegens([]);

        return;
      }

      let userMarker = {};
      let userTerritories = {};
      let userTickets = {};

      response.forEach((user) => {
        userMarker[user.username] = user.markers;
        userTerritories[user.username] = user.territories;
        userTickets[user.username] = user.tickets;
      });

      setMarkers(userMarker);
      setTerritories(userTerritories);
      setTickets(userTickets);

      setUser(response);

      setRegens([]);
    });
  };

  const getActions = (user) => {
    let values = [USER_EDIT.default];

    switch (user?.status) {
      case 1:
        values.push(USER_EDIT.accept, USER_EDIT.decline, USER_EDIT.delete);
        break;
      case 2:
        values.push(USER_EDIT.ban, USER_EDIT.delete, USER_EDIT.delWL);
        break;
      case 3:
        values.push(USER_EDIT.accept, USER_EDIT.delete);
        break;
      case 4:
        values.push(USER_EDIT.unban, USER_EDIT.delete);
        break;
      case 5:
        values.push(USER_EDIT.addWl, USER_EDIT.delete);
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
  };

  const actionUser = () => {
    Object.keys(action).forEach((user) => {
      const payload = {
        action: action[user].action,
        user: action[user].user,
      };

      sendRequest("/api/admin/action_user", "POST", payload).then((response) => {
        if (response.error) {
          alert.error(response.message);
        } else {
          alert.success(response.message);
        }
      });
    });

    setAction({});
  };

  const userDetailsChange = (event, id) => {
    let input = { ...updateUserDetails };

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

    setUpdateUserDetails(input);
  };

  const updateUser = (id) => {
    actionsManager(id, "/api/admin/update_user", updateUserDetails);
    setUpdateUserDetails({});
  };

  const debouncedGetUser = useMemo(() => debounce(() => getUser(searchParam), 450), [searchParam]);

  /* --- Markers --- */
  const getMarkers = () => {
    sendRequest("/api/admin/get_markers", "POST", {}).then((response) => {
      if (!response.length > 0) {
        alert.error(response.message);

        reset();
        return;
      }

      reset();
      setMarkers({ all: response });
    });
  };

  const markerChange = (event, id) => {
    const param = ["x", "y", "z"];
    let input = { ...updateMarkers };

    if (!input[id]) input[id] = {};

    input[id] = {
      ...input[id],
      ...{ [event.target.id]: param.includes(event.target.id) ? +event.target.value : event.target.value },
    };

    setUpdateMarkers(input);
  };

  const updateMarker = (id) => {
    actionsManager(id, "/api/admin/update_marker", updateMarkers);
    setUpdateMarkers({});
  };

  const delMarker = (id, username) => {
    actionsManager(id, "/api/admin/delete_marker");

    const newMarkers = { ...markers };
    const index = markers[username].findIndex((marker) => marker.id === id);
    newMarkers[username].splice(index, 1);

    setMarkers(newMarkers);
  };

  /* --- Territories --- */
  const getTerritories = () => {
    sendRequest("/api/admin/get_territories", "POST", {}).then((response) => {
      if (!response.length > 0) {
        alert.error(response.message);

        reset();
        return;
      }

      reset();
      setTerritories({ all: response });
    });
  };

  const territoryChange = (event, id) => {
    const param = ["xStart", "xStop", "zStart", "zStop"];
    let input = { ...updateTerritories };

    if (!input[id]) input[id] = {};

    input[id] = {
      ...input[id],
      ...{ [event.target.id]: param.includes(event.target.id) ? +event.target.value : event.target.value },
    };

    setUpdateTerritories(input);
  };

  const updateTerritory = (id) => {
    actionsManager(id, "/api/admin/update_territory", updateTerritories);
    setUpdateTerritories({});
  };

  const delTerritory = (id, username) => {
    actionsManager(id, "/api/admin/delete_territory");

    const newTerritories = { ...territories };
    const index = territories[username].findIndex((territory) => territory.id === id);
    newTerritories[username].splice(index, 1);

    setTerritories(newTerritories);
  };

  /* --- Actions manager --- */
  const actionsManager = (id, url, update) => {
    let payload = { id: id };

    if (update) {
      payload = { ...payload, ...update[id] };
    }

    sendRequest(url, "POST", payload).then((response) => {
      if (response.message) {
        alert.success(response.message);
      } else {
        alert.error(response.error);
      }
    });
  };

  /* --- Regens --- */
  const getRegens = () => {
    sendRequest("/api/admin/get_regens", "POST", {}).then((response) => {
      if (!response.length > 0) {
        alert.error(response.message);

        reset();
        return;
      }

      reset();
      setRegens(response);
    });
  };

  const regenAction = (user_id, action) => {
    const payload = {
      user_id: user_id,
      action: action,
    };

    sendRequest("/api/admin/regen_action", "POST", payload).then((response) => {
      if (response.error) {
        alert.error(response.message);
        return;
      }

      let newRegens = [...regens];
      const index = regens.findIndex((regen) => regen.user_id === user_id);
      newRegens[index].splice(index, 1);

      setRegens(newRegens);
    });
  };

  /* --- WhiteList --- */
  const getWhiteList = () => {
    sendRequest("/api/admin/get_whitelist", "POST", {}).then((response) => {
      if (!response.length > 0) {
        alert.error(response.message);

        reset();
        return;
      }

      reset();
      setUser(response);
    });
  };

  /* --- Logs --- */
  const getLogs = (userId) => {
    sendRequest("/api/admin/get_logs", "POST", { id: userId }).then((response) => {
      if (!response.length > 0) {
        alert.error(response.message);
        return;
      }

      setLogs(response);
    });
  };

  /* --- Tickets --- */
  const getTickets = () => {
    sendRequest("/api/admin/get_tickets", "POST", {}).then((response) => {
      if (!response.length > 0) {
        alert.error(response.message);

        reset();
        return;
      }

      reset();
      setTickets({ all: response });
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

  const sortNumberTickets = (a, b) => {
    const nameA = a.name.replace(".html", "");
    const nameB = b.name.replace(".html", "");

    const extractParts = (str) => str.match(/\d+|\D+/g).map((part) => (isNaN(part) ? part : parseInt(part, 10)));

    const partsA = extractParts(nameA);
    const partsB = extractParts(nameB);

    for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
      if (partsA[i] === undefined) return -1;
      if (partsB[i] === undefined) return 1;

      if (partsA[i] < partsB[i]) return -1;
      if (partsA[i] > partsB[i]) return 1;
    }

    return 0;
  };

  /* --- Modals --- */
  const handleOpenModalLog = (userId) => {
    setModalLog(true);
    getLogs(userId);
  };

  const handleCloseModalLog = () => {
    setModalLog(false);
    setLogs([]);
  };

  const handleOpenModalUserDetails = (user) => {
    const expirationDate = new Date(user.expiration_date);
    const details = { ...user, ...{ expirationDate: expirationDate } };

    setUserDetails(details);
    setModalUserDetails(true);
  };

  const handleCloseModalUserDetails = () => {
    setModalUserDetails(false);
    setUserDetails({});
  };

  const handleOpenModalStatus = () => {
    setModalStatus(true);
  };

  const handleCloseModalStatus = () => {
    setModalStatus(false);
  };

  /* --- useEffect --- */
  useEffect(() => {
    if (urlSearchParams.get("_user")) {
      setSearchParam(urlSearchParams.get("_user"));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    urlSearchParams.set("_user", searchParam);
    navigate({ search: urlSearchParams.toString() }, { replace: true });

    debouncedGetUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParam]);

  if (isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["mainUserSummary"])}>
      <Input
        placeholder={PLASEHOLDER}
        defaultValue={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
        type="search"
      />
      <div className={classNames(styles["wrapperButtonManager"])}>
        <HandleManager type="submit" onClick={getMarkers} label="Markers" />
        <HandleManager type="submit" onClick={getTerritories} label="Territories" />
        <HandleManager type="submit" onClick={getRegens} label="Regens" />
        <HandleManager type="submit" onClick={getWhiteList} label="WhiteList" />
        <HandleManager type="submit" onClick={getTickets} label="Tickets" />
        <HandleManager type="submit" onClick={handleOpenModalStatus} label="Status" />
      </div>

      {/* --- User --- */}
      {!user.length ? null : (
        <>
          <ManagerTitle text="Игроки" count={user.length} />
          <TableMain>
            <THead>
              <Tr header={true}>
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
              {user.map((el, i) => (
                <Tr key={i} keyStyle={i}>
                  <Th type="text" content={el.username} />
                  <Th type="text" content={el.tag.email} />
                  <Th type="text" content={el.user_id} />
                  <Th type="text" content={el.age} />
                  <Th type="text" content={el.status} />
                  <Th type="boolean" content={el.immun} />
                  <Th type="boolean" content={el.citizenship} />
                  <Th type="text" content={el.balance} />
                  <Th type="actions">
                    <TButton name="Log" onClick={() => handleOpenModalLog(el.user_id)} typeClick={true} />
                    <TButton name="Details" onClick={() => handleOpenModalUserDetails(el)} typeClick={true} />
                  </Th>
                  <Th type="editing">
                    <TSelect
                      name={getActions(el)}
                      value={action[el.user_id]?.action || ""}
                      onChange={(event) =>
                        setAction({
                          ...action,
                          ...{ [el.user_id]: { action: event.target.value, user: el.user_id } },
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

      {/* --- Markers --- */}
      {Object.keys(markers).map((username, i) => {
        if (markers[username].length === 0) {
          return null;
        }

        return (
          <>
            <ManagerTitle
              key={i}
              text={`Метки ${username === "all" ? "всех игроков" : username}`}
              count={markers[username].length}
            />
            <TableMain>
              <THead>
                <Tr header={true}>
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
                    {username === "all" && <Th type="text" content={el?.user.username || "-"} />}
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
          </>
        );
      })}

      {/* --- Territories --- */}
      {Object.keys(territories).map((username, i) => {
        if (territories[username].length === 0) {
          return null;
        }

        return (
          <>
            <ManagerTitle
              key={i}
              text={`Территории ${username === "all" ? "всех игроков" : username}`}
              count={territories[username].length}
            />
            <TableMain>
              <THead>
                <Tr header={true}>
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
                {territories[username].map((el, i) => (
                  <Tr key={i} keyStyle={i}>
                    {username === "all" && <Th type="text" content={el?.user.username || "-"} />}
                    <Th type="editing">
                      <TInput
                        id="name"
                        size="large"
                        onChange={(e) => territoryChange(e, el.id)}
                        defaultValue={el.name}
                      />
                    </Th>
                    <Th type="editing">
                      <TInput
                        id="world"
                        size="middle"
                        onChange={(e) => territoryChange(e, el.id)}
                        defaultValue={el.world}
                      />
                    </Th>
                    <Th type="editing">
                      <TInput
                        id="xStart"
                        size="small"
                        onChange={(e) => territoryChange(e, el.id)}
                        defaultValue={el.xStart}
                      />
                    </Th>
                    <Th type="editing">
                      <TInput
                        id="xStop"
                        size="small"
                        onChange={(e) => territoryChange(e, el.id)}
                        defaultValue={el.xStop}
                      />
                    </Th>
                    <Th type="editing">
                      <TInput
                        id="zStart"
                        size="small"
                        onChange={(e) => territoryChange(e, el.id)}
                        defaultValue={el.zStart}
                      />
                    </Th>
                    <Th type="editing">
                      <TInput
                        id="zStop"
                        size="small"
                        onChange={(e) => territoryChange(e, el.id)}
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
                        onClick={() => delTerritory(el.id, username)}
                        message="Подтвердите действие «Удалить»"
                      />
                      <TButton
                        name="Обновить"
                        onClick={() => updateTerritory(el.id)}
                        message="Подтвердите действие «Обновить»"
                      />
                    </Th>
                  </Tr>
                ))}
              </TBody>
            </TableMain>
          </>
        );
      })}

      {/* --- Tickets --- */}
      {Object.keys(tickets).map((username, i) => {
        if (tickets[username].length === 0) {
          return null;
        }

        return (
          <>
            <ManagerTitle
              key={i}
              text={`Тикеты ${username === "all" ? "всех игроков" : username}`}
              count={tickets[username].length}
            />
            <TableMain>
              <THead>
                <Tr header={true}>
                  {username === "all" && <Th type="text" content="Игрок" />}
                  {username === "all" && <Th type="text" content="discord_id" />}
                  <Th type="text" content="Название" />
                  <Th type="text" content="Просмотр" />
                </Tr>
              </THead>
              <TBody>
                {tickets[username]
                  .sort((a, b) => sortNumberTickets(a, b))
                  .reverse()
                  .map((el, i) => (
                    <Tr key={i} keyStyle={i}>
                      {username === "all" && <Th type="text" content={el.user.username} />}
                      {username === "all" && <Th type="text" content={el.user_id} />}
                      <Th type="text" id="name" size="large" content={el.name.replace(".html", "")} />
                      <Th type="actions">
                        <TButton name="Посмотреть" onClick={() => getLink(el.name)} typeClick={true} />
                      </Th>
                    </Tr>
                  ))}
              </TBody>
            </TableMain>
          </>
        );
      })}

      {/* --- Regens --- */}
      {regens.length > 0 && (
        <>
          <ManagerTitle text="Список на реген" count={regens.length} />
          <TableMain>
            <THead>
              <Tr header={true}>
                <Th type="text" content="Имя"></Th>
                <Th type="text" content="id"></Th>
                <Th type="text" content="Просмотр"></Th>
                <Th type="text" content="Действия"></Th>
              </Tr>
            </THead>
            <TBody>
              {regens.map((regen, i) => (
                <Tr key={i} keyStyle={i}>
                  <Th type="text" content={regen.username} />
                  <Th type="text" content={regen.user_id} />
                  <Th type="link" href={`/manager/player_summary?_user=${regen.user_id}`} />
                  <Th type="actions">
                    <TButton
                      name="Реген"
                      onClick={() => regenAction(regen.user_id, "regen")}
                      message="Подтвердите действие «Реген»"
                    />
                    <TButton
                      name="Оставить"
                      onClick={() => regenAction(regen.user_id, "settle")}
                      message="Подтвердите действие «Оставить»"
                    />
                  </Th>
                </Tr>
              ))}
            </TBody>
          </TableMain>
        </>
      )}

      {/* --- Logs --- */}
      <MyModal open={modalLog} close={handleCloseModalLog}>
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

      {/* --- User Details --- */}
      <MyModal open={modalUserDetails} close={handleCloseModalUserDetails}>
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

      {/* --- Status --- */}
      <MyModal open={modalStatus} close={handleCloseModalStatus}>
        <div className={classNames(styles["status_helper"])}>
          <TableMain>
            <THead>
              <Tr header={true}>
                <Th type="text" content="Ключ" />
                <Th type="text" content="Название" />
              </Tr>
            </THead>
            <TBody>
              {CASE_STATUS.map((el, i) => (
                <Tr key={i} keyStyle={i}>
                  <Th type="text" content={el.id} />
                  <Th type="text" content={el.translate} />
                </Tr>
              ))}
            </TBody>
          </TableMain>
        </div>
      </MyModal>
    </div>
  );
};

export default PlayerSummary;
