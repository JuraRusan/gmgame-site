import classNames from "classnames";
import React, {useEffect, useMemo, useState} from "react";
import AOS from "aos";
import {useSearchParams} from "react-router-dom";
import {sendRequest} from '../../../../DataProvider';
import {useAlert} from "react-alert";
import ReactModal from 'react-modal';
import debounce from 'lodash.debounce';

import styles from "./Player-summary.module.scss";
import "aos/dist/aos.css";

const PlayerSummary = () => {

  const [searchParams] = useSearchParams();
  let [searchParam, setSearchParam] = useState('Поиск работает по discord_id/nickname/discord_tag');
  let [user, setUser] = useState([]);
  let [tag, setTag] = useState({});
  const [action, setAction] = useState({});
  const [markers, setMarkers] = useState({});
  const [territories, setTerritories] = useState({});
  const [modalLog, setModalLog] = useState(false);
  const [modalUd, setModalUd] = useState(false);
  const [logs, setLogs] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [inputMarker, setInputMarker] = useState({});
  const [inputTerrs, setInputTerrs] = useState({});
  const [regens, setRegens] = useState([]);
  const [inputUserDetails, setInputUserDetails] = useState({});

  const handleOpenModal = (userId) => {
    setModalLog(true)

    sendRequest(
      '/api/admin/get_logs',
      'POST',
      {id: userId}
    ).then(response => {
      if (!response.length > 0) {
        setLogs([]);
        alert.error(response.message);
        return;
      }
      setLogs(response);
    });
  }

  const handleCloseModal = () => {
    setModalLog(false);
    setLogs([]);
  }

  const handleOpenModalUd = (user) => {
    const expirationDate = new Date(user.expiration_date);
    const ud = {...user, ...{expirationDate: expirationDate}};
    setUserDetails(ud);
    setModalUd(true);
  }

  const handleCloseModalUd = () => {
    setModalUd(false);
  }

  const alert = useAlert();

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const getUser = (event) => {
    setSearchParam(event?.target?.value || event);
    sendRequest(
      '/api/admin/get_user',
      'POST',
      {
        searchParam: event?.target?.value || event
      }
    ).then(response => {
      if (!response[0]?.user_id) {
        setUser({});
        setTag({});
        setMarkers({});
        setTerritories({});
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
      response.forEach(user => {
        try {
          let tag = JSON.parse(user.tag);
          tagUser[user.username] = tag.id ? tag : JSON.parse(tag);
        } catch (err) {
          const email = user.tag.match(/email": "(.+?)"/);
          tagUser[user.username] = email[1] ? {email: email[1]} : '';
        }
        makersUser[user.username] = user.markers;
        terrUser[user.username] = user.territories;
      })
      setTag(tagUser);
      setMarkers(makersUser);
      setTerritories(terrUser);
      setRegens([])
    });
  }

  const debouncedGetUser = useMemo(() => debounce(getUser, 300), []);

  useEffect(() => {
    if (searchParams.get("user_id")) {
      getUser(searchParams.get("user_id"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMarkers = () => {
    sendRequest(
      '/api/admin/get_markers',
      'POST',
      {}
    ).then(response => {
      if (!response.length > 0) {
        setUser({});
        setTag({});
        alert.error(response.message);
        return;
      }
      setMarkers({all: response});
      setUser({});
      setTerritories([]);
      setRegens([])
    });
  }

  const getTerritories = () => {
    sendRequest(
      '/api/admin/get_territories',
      'POST',
      {}
    ).then(response => {
      if (!response.length > 0) {
        setUser({});
        setTag({});
        alert.error(response.message);
        return;
      }
      setTerritories({all: response});
      setUser({});
      setMarkers([]);
      setRegens([])
    });
  }

  const delMarker = (id, username) => {
    const newMarkers = {...markers};
    actionMarkers(id, '/api/admin/delete_marker');

    const index = markers[username].findIndex((marker) => marker.id === id);
    newMarkers[username].splice(index, 1);
    setMarkers(newMarkers);
  }

  const markerChange = (event, id) => {
    let input = {...inputMarker};

    if (!input[id]) input[id] = {};

    input[id] = {...input[id], ...{[event.target.id]: ['x', 'y', 'z'].includes(event.target.id) ? +event.target.value : event.target.value}};
    setInputMarker(input);
  }

  const terrsChange = (event, id) => {
    let input = {...inputTerrs};

    if (!input[id]) input[id] = {};

    input[id] = {...input[id], ...{[event.target.id]: ['xStart', 'xStop', 'zStart', 'zStop'].includes(event.target.id) ? +event.target.value : event.target.value}};
    setInputTerrs(input);
  }

  const userDetailsChange = (event, id) => {
    let input = {...inputUserDetails};

    if (!input[id]) input[id] = {};

    let valueDate = '';
    if (event.target.id === 'expiration_date') {
      valueDate = new Date(event.target.value).toISOString();
      console.log(valueDate)
    }

    input[id] = {...input[id], ...{[event.target.id]: valueDate || event.target.value}};

    setInputUserDetails(input);
  }

  const updateUser = (id) => {
    actionMarkers(id, '/api/admin/update_user', inputUserDetails);
  }

  const updateMarker = (id) => {
    actionMarkers(id, '/api/admin/update_marker', inputMarker);
  }

  const updateTerr = (id) => {
    actionMarkers(id, '/api/admin/update_territory', inputTerrs);
  }

  const delTerr = (id, index, username) => {
    actionMarkers(id, '/api/admin/delete_territory');
    
    const newTerritories = JSON.parse(JSON.stringify(territories));
    newTerritories[username][index].notRender = true;
    setTerritories(newTerritories);
  }

  const actionMarkers = (id, url, input) => {
    let payload = {id: id};
    if (input) {
      payload = {...payload, ...input[id]};
    }
    sendRequest(
      url,
      'POST',
      payload
    ).then(response => {
      if (response.message) {
        alert.success(response.message);
      } else {
        alert.error(response.error);
      }
    });
  }

  const actionUser = () => {
    Object.keys(action).forEach(user => {
      sendRequest(
        '/api/admin/action_user',
        'POST',
        {
          action: action[user].action,
          user: action[user].user
        }
      ).then(response => {
        if (response.error) {
          alert.error(response.message);
        } else {
          alert.success(response.message);
        }
      });
    });

    setAction({});
  }

  const getActions = (user) => {
    const actions = {
      default: {action: null, text: ''},
      accept: {action: 'accept', text: 'Принять'},
      delete: {action: 'delete', text: 'Удалить'},
      decline: {action: 'decline', text: 'Отклонить'},
      ban: {action: 'ban', text: 'Забанить'},
      unban: {action: 'unban', text: 'Разбанить'},
      addWl: {action: 'resume', text: 'Вернуть в wl'},
      delWL: {action: 'suspend', text: 'Убрать из wl'}
    }

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
      return <option key={index} value={value.action}>{value.text}</option>;
    });

    // return options;
  }

  const getRegens = () => {
    sendRequest(
      '/api/admin/get_regens',
      'POST',
      {}
    ).then(response => {
      if (!response.length > 0) {
        alert.error('Список пуст');
        return;
      }
      setRegens(response)
      setTerritories({});
      setUser({});
      setMarkers([]);
    });
  }

  const regenAction = (user_id, action) => {
    sendRequest(
      '/api/admin/regen_action',
      'POST',
      {user_id: user_id, action: action}
    ).then(response => {
      if (response.error) {
        alert.error(response.message);
        return;
      }
      const newRegens = [...regens];

      const index = newRegens.findIndex((regen) => regen.User_id === user_id);
      newRegens.splice(index, 1);

      setRegens(newRegens)
    });
  }

  return (
    <div className={classNames(styles["mainUserSummary"])} data-aos="zoom-in">

      <input className={classNames(styles["searchPlayers"])} placeholder={searchParam} onChange={debouncedGetUser} type="search" data-aos="zoom-in"/>
      <button className={classNames(styles["buttonSearchPlayers"])} type="submit" onClick={() => getUser(searchParam)} data-aos="zoom-in">Поиск</button>

      <div className={classNames(styles["wrapperButtonManager"])} data-aos="zoom-in">
        <button className={classNames(styles["buttonSearchAll"])} type="submit" onClick={getMarkers}>Отображение всех меток</button>
        <button className={classNames(styles["buttonSearchAll"])} type="submit" onClick={getTerritories}>Отображение всех территорий</button>
        <button className={classNames(styles["buttonSearchAll"])} type="submit" onClick={getRegens}>Пользователи для регена</button>
      </div>

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*--- Таблица для отображения пользователя или всех пользователей ---*/}
      {user[0]?.status &&
        <>
          <table className={classNames(styles["tableMainStyling"])} data-aos="zoom-in">
            <thead className={classNames(styles["tableTheadStyling"])}>
            <tr className={classNames(styles["tableStylingRows"])}>
              <th className={classNames(styles["tableStylingColumns"], styles["userNameColumn"])}>Имя</th>
              <th className={classNames(styles["tableStylingColumns"], styles["userMailColumn"])}>email</th>
              <th className={classNames(styles["tableStylingColumns"], styles["userAgeColumn"])}>Возраст</th>
              <th className={classNames(styles["tableStylingColumns"], styles["userStatusColumn"])}>Статус</th>
              <th className={classNames(styles["tableStylingColumns"], styles["userModalOpen"])}>Доп. инфа</th>
              <th className={classNames(styles["tableStylingColumns"], styles["userActionColumn"])}>Действия</th>
            </tr>
            </thead>
            <tbody className={classNames(styles["tableTbodyStyling"])}>
            {user?.map((el, i) => {
              return (
                <tr className={classNames(styles["tableStylingRows"])} key={i}>
                  <th className={classNames(styles["tableStylingColumns"], styles["userNameColumn"])}>
                    <p className={classNames(styles["textP"])}>{el?.username || "-"}</p>
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["userMailColumn"])}>
                    <p className={classNames(styles["textP"])}>{tag[el?.username]?.email || "-"}</p>
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["userAgeColumn"])}>
                    <p className={classNames(styles["textP"])}>{el?.age || "-"}</p>
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["userStatusColumn"])}>
                    <p className={classNames(styles["textP"])}>{el?.status}</p>
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["userModalOpen"])}>
                    <button className={classNames(styles["modalOpen"])} onClick={() => handleOpenModal(el.user_id)}>Log</button>
                    <button className={classNames(styles["modalOpen"])} onClick={() => handleOpenModalUd(el)}>User Details</button>
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["userActionColumn"])}>
                    <select
                      className={classNames(styles["inputManagerSelect"])}
                      value={action[el.user_id]?.action || ""}
                      onChange={event => setAction(
                        {
                          ...action, ...{
                            [el.user_id]: {
                              action: event.target.value,
                              user: el.user_id
                            }
                          }
                        }
                      )}>{getActions(el)}
                    </select>
                  </th>
                </tr>
              )
            })}
            </tbody>
          </table>
          <button className={classNames(styles["buttonPlayersSubmit"])} type="submit" onClick={actionUser}>Применить</button>
        </>
      }

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
            <h4 className={classNames(styles["managerTitleH4"])} data-aos="zoom-in">Метки {username}</h4>
            <table className={classNames(styles["tableMainStyling"])} data-aos="zoom-in">
              <thead className={classNames(styles["tableTheadStyling"])}>
              <tr className={classNames(styles["tableStylingRows"])}>
                {username === 'all' && <th className={classNames(styles["tableStylingColumns"], styles["userNameColumn"])}>Имя пользователя</th>}
                <th className={classNames(styles["tableStylingColumns"], styles["mapsNameColumn"])}>Название</th>
                <th className={classNames(styles["tableStylingColumns"], styles["mapsDescriptionColumn"])}>Описание</th>
                <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>x</th>
                <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>y</th>
                <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>z</th>
                <th className={classNames(styles["tableStylingColumns"], styles["mapsLinkColumn"])}>&#10148;</th>
                <th className={classNames(styles["tableStylingColumns"], styles["mapsActionColumn"])}>Действия</th>
              </tr>
              </thead>
              <tbody className={classNames(styles["tableTbodyStyling"])}>
              {markers[username].map((el, i) => (
                <tr className={classNames(styles["tableStylingRows"])} key={i}>
                  {username === 'all' &&
                    <th className={classNames(styles["tableStylingColumns"], styles["userNameColumn"])}>
                      <p className={classNames(styles["textP"])}>{el.username}</p>
                    </th>
                  }
                  <th className={classNames(styles["tableStylingColumns"], styles["mapsNameColumn"])}>
                    <input
                      id="name"
                      onChange={(e) => markerChange(e, el.id)}
                      className={classNames(styles["inputManager"])}
                      defaultValue={el.name}
                    />
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["mapsDescriptionColumn"])}>
                    <textarea
                      id="description"
                      onChange={(e) => markerChange(e, el.id)}
                      rows="1"
                      className={classNames(styles["inputManagerTextarea"])}
                      defaultValue={el.description}
                    />
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>
                    <input
                      id="x"
                      onChange={(e) => markerChange(e, el.id)}
                      className={classNames(styles["inputManager"])}
                      defaultValue={el.x}
                    />
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>
                    <input
                      id="y"
                      onChange={(e) => markerChange(e, el.id)}
                      className={classNames(styles["inputManager"])}
                      defaultValue={el.y}
                    />
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>
                    <input
                      id="z"
                      onChange={(e) => markerChange(e, el.id)}
                      className={classNames(styles["inputManager"])}
                      defaultValue={el.z}
                    />
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["mapsLinkColumn"])}>
                    <a
                      href={`https://map.gmgame.ru/#/${el.x}/64/${el.z}/-4/GMGameWorld-overworld/over`} // Нужен фикс, с миром траблы
                      className={classNames(styles["linkMap"])}
                      target="_blank"
                      rel="noreferrer"
                    >&#10148;
                    </a>
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["mapsActionColumn"])}>
                    <button className={classNames(styles["managerActionsButton"])} type="submit" onClick={() => delMarker(el.id, username)}>Удалить</button>
                    <button className={classNames(styles["managerActionsButton"])} type="submit" onClick={() => updateMarker(el.id)}>Обновить</button>
                  </th>
                </tr>
              ))}
              </tbody>
            </table>
          </React.Fragment>
        )
      })
      }

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
            <h4 className={classNames(styles["managerTitleH4"])} data-aos="zoom-in">Территории {username}</h4>
            <table className={classNames(styles["tableMainStyling"])} data-aos="zoom-in">
              <thead className={classNames(styles["tableTheadStyling"])}>
              <tr className={classNames(styles["tableStylingRows"])}>
                {username === 'all' && <th className={classNames(styles["tableStylingColumns"], styles["userNameColumn"])}>Имя пользователя</th>}
                <th className={classNames(styles["tableStylingColumns"], styles["mapsNameColumn"])}>Название</th>
                <th className={classNames(styles["tableStylingColumns"], styles["mapsWorldColumn"])}>Сервер</th>
                <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>xStart</th>
                <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>xStop</th>
                <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>zStart</th>
                <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>zStop</th>
                <th className={classNames(styles["tableStylingColumns"], styles["mapsLinkColumn"])}>&#10148;</th>
                <th className={classNames(styles["tableStylingColumns"], styles["mapsActionColumn"])}>Действия</th>
              </tr>
              </thead>
              <tbody className={classNames(styles["tableTbodyStyling"])}>
              {territories[username].map((el, i) => {
                return(<>{!el.notRender && 
                <tr className={classNames(styles["tableStylingRows"])} key={i}>
                  {username === 'all' &&
                    <th className={classNames(styles["tableStylingColumns"], styles["userNameColumn"])}>
                      <p className={classNames(styles["textP"])}>{el.username || "-"}</p>
                    </th>
                  }
                  <th className={classNames(styles["tableStylingColumns"], styles["mapsNameColumn"])}>
                    <input
                      id="name"
                      onChange={(e) => terrsChange(e, el.id)}
                      className={classNames(styles["inputManager"])}
                      defaultValue={el.name}
                    />
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["mapsWorldColumn"])}>
                    <input
                      id="world"
                      onChange={(e) => terrsChange(e, el.id)}
                      className={classNames(styles["inputManager"])}
                      defaultValue={el.world}
                    />
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>
                    <input
                      id="xStart"
                      onChange={(e) => terrsChange(e, el.id)}
                      className={classNames(styles["inputManager"])}
                      defaultValue={el.xStart}
                    />
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>
                    <input
                      id="xStop"
                      onChange={(e) => terrsChange(e, el.id)}
                      className={classNames(styles["inputManager"])}
                      defaultValue={el.xStop}
                    />
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>
                    <input
                      id="zStart"
                      onChange={(e) => terrsChange(e, el.id)}
                      className={classNames(styles["inputManager"])}
                      defaultValue={el.zStart}
                    />
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["coordinatesColumn"])}>
                    <input
                      id="zStop"
                      onChange={(e) => terrsChange(e, el.id)}
                      className={classNames(styles["inputManager"])}
                      defaultValue={el.zStop}
                    />
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["mapsLinkColumn"])}>
                    <a
                      href={`https://map.gmgame.ru/#/${(el.xStart + el.xStop)/2}/64/${(el.zStart + el.zStop)/2}/-4/GMGameWorld%20-%20overworld/over`} // Нужен фикс, с миром траблы (кроме координат, они тут чотко по центру терры)
                      className={classNames(styles["linkMap"])}
                      target="_blank"
                      rel="noreferrer"
                    >&#10148;
                    </a>
                  </th>
                  <th className={classNames(styles["tableStylingColumns"], styles["mapsActionColumn"])}>
                    <button className={classNames(styles["managerActionsButton"])} type="submit" onClick={() => delTerr(el.id, i, username)}>Удалить</button>
                    <button className={classNames(styles["managerActionsButton"])} type="submit" onClick={() => updateTerr(el.id)}>Обновить</button>
                  </th>
                </tr>
                }</>)
              })}
              </tbody>
            </table>
          </React.Fragment>
        )
      })
      }

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*--- Таблица для regen_user ---*/}
      {regens.length > 0 &&
        <>
          <h4 className={classNames(styles["managerTitleH4"])} data-aos="zoom-in">Список на реген</h4>
          <table className={classNames(styles["tableMainStyling"])} data-aos="zoom-in">
            <thead className={classNames(styles["tableTheadStyling"])}>
            <tr className={classNames(styles["tableStylingRows"])}>
              <th className={classNames(styles["tableStylingColumns"], styles["userNameColumn"])}>Имя</th>
              <th className={classNames(styles["tableStylingColumns"], styles["userIdColumn"])}>id</th>
              <th className={classNames(styles["tableStylingColumns"], styles["regenLinkColumn"])}>&#10148;</th>
              <th className={classNames(styles["tableStylingColumns"], styles["regenActionColumn"])}>Действия</th>
            </tr>
            </thead>
            <tbody className={classNames(styles["tableTbodyStyling"])}>
            {regens.map((regen, i) => (
              <tr className={classNames(styles["tableStylingRows"])} key={i}>
                <th className={classNames(styles["tableStylingColumns"], styles["userNameColumn"])}>
                  <p className={classNames(styles["textP"])}>{regen.username}</p>
                </th>
                <th className={classNames(styles["tableStylingColumns"], styles["userIdColumn"])}>
                  <p className={classNames(styles["textP"])}>{regen.user_id}</p>
                </th>
                <th className={classNames(styles["tableStylingColumns"], styles["regenLinkColumn"])}>
                  <a
                    href={`/manager/player_summary?user_id=${regen.user_id}`}
                    target="_blank"
                    rel="noreferrer"
                    className={classNames(styles["linkUser"])}
                  >&#10148;
                  </a>
                </th>
                <th className={classNames(styles["tableStylingColumns"], styles["regenActionColumn"])}>
                  <button className={classNames(styles["managerActionsButton"])} type="submit" onClick={() => regenAction(regen.user_id, 'regen')}>Отправить в реген</button>
                  <button className={classNames(styles["managerActionsButton"])} type="submit" onClick={() => regenAction(regen.user_id, 'settle')}>Оставить</button>
                </th>
              </tr>
            ))}
            </tbody>
          </table>
        </>
      }

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
        <button className={classNames(styles["closeModal"])} onClick={handleCloseModalUd}>X</button>
        <div className={classNames(styles["cardWrapperManagerUser"])} data-aos="zoom-in">
          <div className={classNames(styles["cardOne"])}>
            <div className={classNames(styles["wrapperActionsAndIcon"])}>
              <img className={classNames(styles["playerImage"])} src={`https://minotar.net/helm/${userDetails?.username}/150`} alt="none"/>
              <button className={classNames(styles["buttonSubmit"])} type="submit" onClick={() => updateUser(userDetails.user_id)}>Сохранить
              </button>
            </div>
            <div className={classNames(styles["textContainer"])}>
              {/*----- username -----*/}
              <div className={classNames(styles["oneBlock"])}>
                <p className={classNames(styles["textDescriptionParagraph"])}>Ник игрока:</p>
                <span className={classNames(styles["lime"])}>{userDetails?.username}</span>
              </div>
              {/*----- user_id -----*/}
              <div className={classNames(styles["oneBlock"])}>
                <p className={classNames(styles["textDescriptionParagraph"])}>Discord id игрока:</p>
                <span className={classNames(styles["lime"])}>{userDetails?.user_id}</span>
              </div>
              {/*----- age -----*/}
              <div className={classNames(styles["oneBlock"])}>
                <p className={classNames(styles["textDescriptionParagraph"])}>Возраст:</p>
                <span className={classNames(styles["lime"])}>{userDetails?.age}</span>
              </div>
              {/*----- status -----*/}
              <div className={classNames(styles["oneBlock"])}>
                <p className={classNames(styles["textDescriptionParagraph"])}>Статус игрока:</p>
                {userDetails?.status === 1 && <span className={classNames(styles["lime"])}>Заявка на рассмотрении [base_status_number - {userDetails?.status}]</span>}
                {userDetails?.status === 2 && <span className={classNames(styles["lime"])}>Игрок сервера [base_status_number - {userDetails?.status}]</span>}
                {userDetails?.status === 3 && <span className={classNames(styles["lime"])}>Отказ по заявке [base_status_number - {userDetails?.status}]</span>}
                {userDetails?.status === 4 && <span className={classNames(styles["lime"])}>Бан на сервере [base_status_number - {userDetails?.status}]</span>}
                {userDetails?.status === 5 && <span className={classNames(styles["lime"])}>Не активный игрок [base_status_number - {userDetails?.status}]</span>}
                {userDetails?.status === "default" && <span className={classNames(styles["lime"])}>Новая заявка [base_status_number - {userDetails?.status}]</span>}
              </div>
              {/*----- user_id -----*/}
              <div className={classNames(styles["oneBlock"])}>
                <p className={classNames(styles["textDescriptionParagraph"])}>Партнер:</p>
                <input
                  id="partner"
                  onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                  className={classNames(styles["inputUserRedactor"])}
                  defaultValue={userDetails?.partner}
                />
                <span className={classNames(styles["viewRedactor"])}>&#10043;</span>
              </div>
              {/*----- from_about -----*/}
              <div className={classNames(styles["oneBlock"])}>
                <p className={classNames(styles["textDescriptionParagraph"])}>Откуда узнал о проекте:</p>
                <span className={classNames(styles["lime"])}>{userDetails?.from_about}</span>
              </div>
              {/*----- you_about -----*/}
              <div className={classNames(styles["oneBlock"])}>
                <p className={classNames(styles["textDescriptionParagraph"])}>Описание:</p>
                <span className={classNames(styles["lime"])}>{userDetails?.you_about}</span>
              </div>
              {/*----- immun -----*/}
              <div className={classNames(styles["oneBlock"])}>
                <p className={classNames(styles["textDescriptionParagraph"])}>Иммунитет:</p>
                <input
                  id="immun"
                  onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                  className={classNames(styles["inputUserRedactor"])}
                  defaultValue={userDetails?.immun}
                />
                <span className={classNames(styles["viewRedactor"])}>&#10043;</span>
              </div>
              {/*----- expiration_date -----*/}
              <div className={classNames(styles["oneBlock"])}>
                <p className={classNames(styles["textDescriptionParagraph"])}>Дата окончания:</p>
                <input
                  id="expiration_date"
                  onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                  className={classNames(styles["inputUserRedactor"])}
                  type="date"
                  defaultValue={userDetails.expirationDate ? userDetails.expirationDate.toISOString().substring(0, 10) : ''}
                />
                <span className={classNames(styles["viewRedactor"])}>&#10043;</span>
              </div>
              {/*----- note -----*/}
              <div className={classNames(styles["oneBlock"])}>
                <p className={classNames(styles["textDescriptionParagraph"])}>Заметка:</p>
                <textarea
                  id="note"
                  className={classNames(styles["inputUserRedactor"])}
                  rows="4"
                  cols="1000"
                  onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                  defaultValue={userDetails?.note}
                />
                <span className={classNames(styles["viewRedactor"])}>&#10043;</span>
              </div>
              {/*-----  -----*/}
            </div>
          </div>
        </div>
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
        <button className={classNames(styles["closeModal"])} onClick={handleCloseModal}>X</button>
        <div className={classNames(styles["cardLog"])} data-aos="zoom-in">
          <table className={classNames(styles["tableLogStyling"])}>
            {/*------*/}
            <thead className={classNames(styles["tableLogTheadStyling"])}>
            <tr className={classNames(styles["tableLogRowsStyling"])}>
              <th className={classNames(styles["tableLogColumnsStyling"], styles["logTimeColumn"])}>Время</th>
              <th className={classNames(styles["tableLogColumnsStyling"], styles["logValueColumn"])}>Лог</th>
              <th className={classNames(styles["tableLogColumnsStyling"], styles["logManagerColumn"])}>Менеджер</th>
            </tr>
            </thead>
            {/*------*/}
            <tbody className={classNames(styles["tableLogTbodyStyling"])}>
            {logs?.map((el, i) => {
              return (
                <tr className={classNames(styles["tableLogRowsStyling"])} key={i}>
                  <th className={classNames(styles["tableLogColumnsStyling"], styles["logTimeColumn"])}>
                    <input className={classNames(styles["logInput"])} defaultValue={new Date(el.log_date).toLocaleString()}/>
                  </th>
                  <th className={classNames(styles["tableLogColumnsStyling"], styles["logValueColumn"])}>
                    <input className={classNames(styles["logInput"])} defaultValue={(() => {
                      let log = el.log;
                      try {
                        log = JSON.parse(el.log);
                      } catch {
                        return log;
                      }
                      return `${log.action} ${log.data ? JSON.stringify(log.data) : ''}`;
                    })()}
                    />
                  </th>
                  <th className={classNames(styles["tableLogColumnsStyling"], styles["logManagerColumn"])}>
                    <input className={classNames(styles["logInput"])} defaultValue={el.manager}/>
                  </th>
                </tr>
              );
            })}
            <tr className={classNames(styles["tableLogRowsStyling"])}>
              <th className={classNames(styles["tableLogColumnsStyling"])}>
                <input className={classNames(styles["logInput"], styles["logTimeColumn"])} defaultValue=" "/>
              </th>
              <th className={classNames(styles["tableLogColumnsStyling"])}>
                <input className={classNames(styles["logInput"], styles["logValueColumn"])} defaultValue=" "/>
              </th>
              <th className={classNames(styles["tableLogColumnsStyling"])}>
                <input className={classNames(styles["logInput"], styles["logManagerColumn"])} defaultValue=" "/>
              </th>
            </tr>
            </tbody>
            {/*------*/}
          </table>
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
