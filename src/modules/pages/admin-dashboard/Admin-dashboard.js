import React, {useEffect, useMemo, useState} from "react";
import AOS from "aos";
import {useSearchParams} from "react-router-dom";
import {sendRequest} from '../../../DataProvider';
import {useAlert} from "react-alert";
import ReactModal from 'react-modal';
import debounce from 'lodash.debounce';

import "./Admin-dashboard.scss";
import "aos/dist/aos.css";

const AdminDashboard = () => {
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

      response.forEach( user => {
        try {
          tagUser[user.username] = JSON.parse(user.tag);
        } catch (err) {
          console.log(err);
          console.log(user.tag);
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

  const delTerr = (id) => {
    const newTerrs = [...territories];
    actionMarkers(id, '/api/admin/delete_territory');

    const index = newTerrs.findIndex((terr) => terr.id === id);
    newTerrs.splice(index, 1);
    setTerritories(newTerrs);
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
    <div className="main-dashboard" data-aos="zoom-in">

      <input className="search-players" placeholder={searchParam} onChange={debouncedGetUser} type="search" data-aos="zoom-in"></input>
      <button className="button-search-players" type="submit" onClick={() => getUser(searchParam)} data-aos="zoom-in">Поиск</button>

      <div className="wrapper-btn-manager" data-aos="zoom-in">
        <button className="button-search" type="submit" onClick={getMarkers}>Отображение всех меток</button>
        <button className="button-search" type="submit" onClick={getTerritories}>Отображение всех территорий</button>
        <button className="button-search" type="submit" onClick={getRegens}>Пользователи для регена</button>
      </div>

      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------------------------*/}
      {/*--- Таблица для отображения пользователя или всех пользователей ---*/}
      {user[0]?.status &&
        <>
          <table className="table-main-styling" data-aos="zoom-in">
            <thead className="table-thead-styling">
            <tr className="table-tr-styling-rows">
              <th className="table-th-styling-columns">Имя</th>
              <th className="table-th-styling-columns">email</th>
              <th className="table-th-styling-columns age-stat-table">Возраст</th>
              <th className="table-th-styling-columns age-stat-table">Статус</th>
              <th className="table-th-styling-columns action-table">Доп. инфа</th>
              <th className="table-th-styling-columns action-table">Действия</th>
            </tr>
            </thead>
            <tbody className="table-tbody-styling">
            {user?.map((el, i) => {
              return (
                <tr className="table-tr-styling-rows" key={i}>
                  <th className="table-th-styling-columns">{el?.username}</th>
                  <th className="table-th-styling-columns">{tag[el?.username]?.email}</th>
                  <th className="table-th-styling-columns age-stat-table">{el?.age}</th>
                  <th className="table-th-styling-columns age-stat-table">{el?.status}</th>
                  <th className="table-th-styling-columns action-table modals-manager">
                    <button className="modal-open" onClick={() => handleOpenModal(el.user_id)}>Log</button>
                    <button className="modal-open" onClick={() => handleOpenModalUd(el)}>User Details</button>
                  </th>
                  <th className="table-th-styling-columns action-table">
                    <select
                      className="in-manager-option"
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
          <button className="button-search-players" type="submit" onClick={actionUser}>Применить</button>
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
            <h4 className="manager-h4" data-aos="zoom-in">Метки {username}</h4>
            <table className="table-main-styling" data-aos="zoom-in">
              <thead className="table-thead-styling">
              <tr className="table-tr-styling-rows">
                {username === 'all' && <th className="table-th-styling-columns">Имя пользователя</th>}
                <th className="table-th-styling-columns">Название</th>
                <th className="table-th-styling-columns">Описание</th>
                <th className="table-th-styling-columns table-coordinates">x</th>
                <th className="table-th-styling-columns table-coordinates">y</th>
                <th className="table-th-styling-columns table-coordinates">z</th>
                <th className="table-th-styling-columns action-table">Действия</th>
              </tr>
              </thead>
              <tbody className="table-tbody-styling">
              {markers[username].map((el, i) => (
                <tr className="table-tr-styling-rows" key={i}>
                  {username === 'all' &&
                    <th className="table-th-styling-columns">
                      <p className="textP">{el.username}</p>
                    </th>
                  }
                  <th className="table-th-styling-columns">
                    <input
                      id="name"
                      onChange={(e) => markerChange(e, el.id)}
                      className="in-manager"
                      defaultValue={el.name}/></th>
                  <th className="table-th-styling-columns">
                    <textarea
                      id="description"
                      onChange={(e) => markerChange(e, el.id)}
                      rows="1"
                      className="in-manager-textarea"
                      defaultValue={el.description}/></th>
                  <th className="table-th-styling-columns table-coordinates">
                    <input
                      id="x"
                      onChange={(e) => markerChange(e, el.id)}
                      className="in-manager"
                      defaultValue={el.x}/></th>
                  <th className="table-th-styling-columns table-coordinates">
                    <input
                      id="y"
                      onChange={(e) => markerChange(e, el.id)}
                      className="in-manager"
                      defaultValue={el.y}/></th>
                  <th className="table-th-styling-columns table-coordinates">
                    <input
                      id="z"
                      onChange={(e) => markerChange(e, el.id)}
                      className="in-manager"
                      defaultValue={el.z}/></th>
                  <th className="table-th-styling-columns action-table">
                    <button className="manager-btn" type="submit" onClick={() => delMarker(el.id, username)}>Удалить</button>
                    <button className="manager-btn" type="submit" onClick={() => updateMarker(el.id)}>Обновить</button>
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
            <h4 className="manager-h4" data-aos="zoom-in">Территории {username}</h4>
            <table className="table-main-styling" data-aos="zoom-in">
              <thead className="table-thead-styling">
              <tr className="table-tr-styling-rows">
                {username === 'all' && <th className="table-th-styling-columns">Имя пользователя</th>}
                <th className="table-th-styling-columns">Название</th>
                <th className="table-th-styling-columns">Сервер</th>
                <th className="table-th-styling-columns table-coordinates">xStart</th>
                <th className="table-th-styling-columns table-coordinates">xStop</th>
                <th className="table-th-styling-columns table-coordinates">zStart</th>
                <th className="table-th-styling-columns table-coordinates">zStop</th>
                <th className="table-th-styling-columns action-table">Действия</th>
              </tr>
              </thead>
              <tbody className="table-tbody-styling">
              {territories[username].map((el, i) => (
                <tr className="table-tr-styling-rows" key={i}>
                  {username === 'all' &&
                    <th className="table-th-styling-columns">
                      <p className="textP">{el.username}</p>
                    </th>}
                  <th className="table-th-styling-columns">
                    <input
                      id="name"
                      onChange={(e) => terrsChange(e, el.id)}
                      className="in-manager"
                      defaultValue={el.name}/></th>
                  <th className="table-th-styling-columns">
                    <input
                      id="world"
                      onChange={(e) => terrsChange(e, el.id)}
                      className="in-manager"
                      defaultValue={el.world}/></th>
                  <th className="table-th-styling-columns table-coordinates">
                    <input
                      id="xStart"
                      onChange={(e) => terrsChange(e, el.id)}
                      className="in-manager"
                      defaultValue={el.xStart}/></th>
                  <th className="table-th-styling-columns table-coordinates">
                    <input
                      id="xStop"
                      onChange={(e) => terrsChange(e, el.id)}
                      className="in-manager"
                      defaultValue={el.xStop}/></th>
                  <th className="table-th-styling-columns table-coordinates">
                    <input
                      id="zStart"
                      onChange={(e) => terrsChange(e, el.id)}
                      className="in-manager"
                      defaultValue={el.zStart}/></th>
                  <th className="table-th-styling-columns table-coordinates">
                    <input
                      id="zStop"
                      onChange={(e) => terrsChange(e, el.id)}
                      className="in-manager"
                      defaultValue={el.zStop}/></th>
                  <th className="table-th-styling-columns action-table">
                    <button className="manager-btn" type="submit" onClick={() => delTerr(el.id, username)}>Удалить</button>
                    <button className="manager-btn" type="submit" onClick={() => updateTerr(el.id)}>Обновить</button>
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
      {/*--- Таблица для regen_user ---*/}
      {regens.length > 0 &&
        <>
          <h4 className="manager-h4" data-aos="zoom-in">Список на реген</h4>
          <table className="table-main-styling" data-aos="zoom-in">
            <thead className="table-thead-styling">
            <tr className="table-tr-styling-rows">
              <th className="table-th-styling-columns">Имя</th>
              <th className="table-th-styling-columns">Линк</th>
              <th className="table-th-styling-columns action-table">Действия</th>
            </tr>
            </thead>
            <tbody className="table-tbody-styling">
            {regens.map((regen, i) => (
              <tr className="table-tr-styling-rows" key={i}>
                <th className="table-th-styling-columns">{regen.username}</th>
                <th className="table-th-styling-columns">
                  <a href={`/manager?user_id=${regen.user_id}`} target="_blank" rel="noreferrer">Информация о пользователе</a>
                </th>
                <th className="table-th-styling-columns action-table">
                  <button
                    className="manager-btn"
                    type="submit"
                    onClick={() => regenAction(regen.user_id, 'regen')}>Отправить в реген
                  </button>
                  <button
                    className="manager-btn"
                    type="submit"
                    onClick={() => regenAction(regen.user_id, 'settle')}>Оставить
                  </button>
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
        className="modal-main"
        overlayClassName="overlay-modal"
      >
        <button className="close-modal" onClick={handleCloseModalUd}>X</button>
        <div className="card-wrapper-manager" data-aos="zoom-in">
          <div className="card-one">
            <div className="wrapperActionsAndIcon">
              <img className="player-image" src={`https://minotar.net/helm/${userDetails?.username}/150`} alt="none"/>
              <button className="buttonSubmit" type="submit" onClick={() => updateUser(userDetails.user_id)}>Сохранить</button>
            </div>
            <div className="text-container">
              {/*----- username -----*/}
              <div className="oneBlock">
                <p className="text-p">Ник игрока:</p>
                <span className="lime">{userDetails?.username}</span>
              </div>
              {/*----- user_id -----*/}
              <div className="oneBlock">
                <p className="text-p">Discord id игрока:</p>
                <span className="lime">{userDetails?.user_id}</span>
              </div>
              {/*----- age -----*/}
              <div className="oneBlock">
                <p className="text-p">Возраст:</p>
                <span className="lime">{userDetails?.age}</span>
              </div>
              {/*----- status -----*/}
              <div className="oneBlock">
                <p className="text-p">Статус игрока:</p>
                {userDetails?.status === 1 && <span className="lime">Заявка на рассмотрении [base_status_number - {userDetails?.status}]</span>}
                {userDetails?.status === 2 && <span className="lime">Игрок сервера [base_status_number - {userDetails?.status}]</span>}
                {userDetails?.status === 3 && <span className="lime">Отказ по заявке [base_status_number - {userDetails?.status}]</span>}
                {userDetails?.status === 4 && <span className="lime">Бан на сервере [base_status_number - {userDetails?.status}]</span>}
                {userDetails?.status === 5 && <span className="lime">Не активный игрок [base_status_number - {userDetails?.status}]</span>}
                {userDetails?.status === "default" && <span className="lime">Новая заявка [base_status_number - {userDetails?.status}]</span>}
              </div>
              {/*----- user_id -----*/}
              <div className="oneBlock">
                <p className="text-p">Партнер:</p>
                <input
                  id="partner"
                  onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                  className="input-redactor"
                  defaultValue={userDetails?.partner}/>
                <span className="viewRedactor">&#10043;</span>
              </div>
              {/*----- from_about -----*/}
              <div className="oneBlock">
                <p className="text-p">Откуда узнал о проекте:</p>
                <span className="lime">{userDetails?.from_about}</span>
              </div>
              {/*----- you_about -----*/}
              <div className="oneBlock">
                <p className="text-p">Описание:</p>
                <span className="lime">{userDetails?.you_about}</span>
              </div>
              {/*----- immun -----*/}
              <div className="oneBlock">
                <p className="text-p">Иммунитет:</p>
                <input
                  id="immun"
                  onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                  className="input-redactor"
                  defaultValue={userDetails?.immun}/>
                <span className="viewRedactor">&#10043;</span>
              </div>
              {/*----- expiration_date -----*/}
              <div className="oneBlock">
                <p className="text-p">Дата окончания:</p>
                <input
                  id="expiration_date"
                  onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                  className="input-redactor"
                  type="date"
                  defaultValue={userDetails.expirationDate ? userDetails.expirationDate.toISOString().substring(0, 10) : ''}/>
                <span className="viewRedactor">&#10043;</span>
              </div>
              {/*----- note -----*/}
              <div className="oneBlock">
                <p className="text-p">Заметка:</p>
                <textarea
                  id="note"
                  className="input-redactor"
                  rows="4"
                  cols="1000"
                  onChange={(e) => userDetailsChange(e, userDetails.user_id)}
                  defaultValue={userDetails?.note}/>
                <span className="viewRedactor">&#10043;</span>
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
        className="modal-main"
        overlayClassName="overlay-modal"
      >
        <button className="close-modal" onClick={handleCloseModal}>X</button>
        <div className="card-log" data-aos="zoom-in">
          <table className="table-log">
            {/*------*/}
            <thead className="log-thead">
            <tr className="log-rows">
              <th className="log-columns time">Время</th>
              <th className="log-columns log">Лог</th>
              <th className="log-columns manager">Менеджер</th>
            </tr>
            </thead>
            {/*------*/}
            <tbody className="log-tbody">
            {logs?.map((el, i) => {
              return (
                <tr className="log-rows" key={i}>
                  <th className="log-columns time">
                    <input className="log-input" defaultValue={new Date(el.log_date).toLocaleString()}/>
                  </th>
                  <th className="log-columns log">
                    <input className="log-input" defaultValue={(() => {
                      let log = el.log;
                      try {
                        log = JSON.parse(el.log);
                      } catch {
                        return log;
                      }
                      return `${log.action} ${log.data ? JSON.stringify(log.data) : ''}`;
                    })()}/>
                  </th>
                  <th className="log-columns manager">
                    <input className="log-input" defaultValue={el.manager}/>
                  </th>
                </tr>
              );
            })}
            <tr className="log-rows">
              <th className="log-columns time">
                <input className="log-input" defaultValue=" "/>
              </th>
              <th className="log-columns log">
                <input className="log-input" defaultValue=" "/>
              </th>
              <th className="log-columns manager">
                <input className="log-input" defaultValue=" "/>
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

export default AdminDashboard;
