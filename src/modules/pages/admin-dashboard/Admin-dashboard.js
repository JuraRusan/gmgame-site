import React, {useEffect, useState} from "react";
import AOS from "aos";
import {NavLink, Outlet, Link} from "react-router-dom";
import {useAxios, sendRequest} from '../../../DataProvider';
import {useAlert} from "react-alert";
import ReactModal from 'react-modal';

import "./Admin-dashboard.scss";
import "aos/dist/aos.css";

const AdminDashboard = () => {
  let [searchParam, setSearchParam] = useState('Поиск работает по discord_id/nickname/discord_tag');
  let [user, setUser] = useState([]);
  let [tag, setTag] = useState({});
  const [action, setAction] = useState('');
  const [markers, setMarkers] = useState({});
  const [territories, setTerritories] = useState({});
  const [modalLog, setModalLog] = useState(false);
  const [modalUd, setModalUd] = useState(false);
  const [logs, setLogs] = useState([]);
  const [userDetails, setUserDetails] = useState({})

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
    setUserDetails(user);
    setModalUd(true);
  }

  const handleCloseModalUd = () => {
    setModalUd(false);
  }

  const alert = useAlert();

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const getUser = () => {
    sendRequest(
      '/api/admin/get_user',
      'POST',
      {
        searchParam: searchParam
      }
    ).then(response => {
      if (!response[0]?.user_id) {
        setUser({});
        setTag({});
        setMarkers({});
        setTerritories({});
        alert.error(response.message);
        return;
      }
      setUser(response);

      let makersUser = {};
      let tagUser = {};
      let terrUser = {};

      response.map( user => {
        try {
          tagUser[user.username] = JSON.parse(user.tag);
        } catch (err) {
          console.log(err)
          console.log(user.tag);
        }
        makersUser[user.username] = user.markers;
        terrUser[user.username] = user.territories;
      })
      setTag(tagUser);
      setMarkers(makersUser);
      setTerritories(terrUser);
    });
  }

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
    });
  }

  const delMarker = (id) => {
    const newMarkers = [...markers];
    actionMarkers(id, '/api/admin/delete_marker');

    const index = markers.findIndex((marker) => marker.id === id);
    newMarkers.splice(index, 1);
    setMarkers(newMarkers);
  }

  const updateMarker = (id) => {
    actionMarkers(id, '/api/admin/update_marker');
  }

  const updateTerr = (id) => {
    actionMarkers(id, '/api/admin/update_territory');
  }

  const delTerr = (id) => {
    const newTerrs = [...territories];
    actionMarkers(id, '/api/admin/delete_territory');

    const index = newTerrs.findIndex((terr) => terr.id === id);
    newTerrs.splice(index, 1);
    setTerritories(newTerrs);
  }

  const actionMarkers = (id, url) => {
    sendRequest(
      url,
      'POST',
      {id: id}
    ).then(response => {
      if (response.message) {
        alert.success(response.message);
      } else {
        alert.error(response.error);
      }
    });
  }

  const actionUser = () => {
    sendRequest(
      '/api/admin/action_user',
      'POST',
      {
        action: action.action,
        user: action.user
      }
    ).then(response => {
      if (response.error) {
        alert.error(response.message);
      } else {
        alert.success(response.message);
      }
    });
  }

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

  const options = values.map((value, index) => {
    return <option key={index} value={value.action}>{value.text}</option>;
  });

  const inlineStyle = {
    overlay: {
      zIndex: 12001,
      width: "100%",
      backgroundColor: "rgba(1, 22, 37, 1)",
    },
    content: {
      zIndex: 12002,
      color: 'lightsteelblue',
      inset: "30px",
    }
  }

  return (
    <div className="main-dashboard" data-aos="fade-up">

      <input
        className="search-players"
        placeholder={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
        type="search">
      </input>

      <button className="button-search-players" type="submit" onClick={getUser}>Поиск</button>

      <div className="wrapper-btn-manager">
        <button className="button-search" type="submit" onClick={getMarkers}>Отображение всех меток</button>
        <button className="button-search" type="submit" onClick={getTerritories}>Отображение всех территорий</button>
      </div>

      {user[0]?.status &&
        <>
          <table className="table-main-styling">
            <thead className="table-thead-styling">
            <tr className="table-tr-styling-rows">
              <th className="table-th-styling-columns">Имя</th>
              <th className="table-th-styling-columns">email</th>
              <th className="table-th-styling-columns">Возраст</th>
              <th className="table-th-styling-columns">Статус</th>
              <th className="table-th-styling-columns">Действия</th>
              <th className="table-th-styling-columns"></th>
            </tr>
            </thead>
            <tbody className="table-tbody-styling">
            {user?.map(el => {
              return(
                <tr className="table-tr-styling-rows">
                  <th className="table-th-styling-columns">{el?.username}</th>
                  <th className="table-th-styling-columns">{tag[el?.username]?.email}</th>
                  <th className="table-th-styling-columns">{el?.age}</th>
                  <th className="table-th-styling-columns">{el?.status}</th>
                  <th className="table-th-styling-columns modals-manager">
                    <button className="modal-open" onClick={() => handleOpenModal(el.user_id)}>Log</button>
                    <button className="modal-open" onClick={() => handleOpenModalUd(el)}>User Details</button>
                  </th>
                  <th className="table-th-styling-columns">
                    <select className="in-manager-option" value={action.action} onChange={event => setAction({
                      action: event.target.value,
                      user: el.user_id
                    })}>{options}</select>
                  </th>
                </tr>
              )
            })}
            </tbody>
          </table>
          <button className="button-search-players" type="submit" onClick={actionUser}>Применить</button>
        </>
      }
      {Object.keys(markers).map(username => {
        if (markers[username].length === 0) {
          return;
        }
        return(
        <>
          <h4 className="manager-h4">Метки {username}</h4>
          <table className="table-main-styling">
            <thead className="table-thead-styling">
            <tr className="table-tr-styling-rows">
              <th className="table-th-styling-columns">Название</th>
              <th className="table-th-styling-columns">Описание</th>
              <th className="table-th-styling-columns table-coordinates">x</th>
              <th className="table-th-styling-columns table-coordinates">y</th>
              <th className="table-th-styling-columns table-coordinates">z</th>
              <th className="table-th-styling-columns submit-table">Действие</th>
            </tr>
            </thead>
              <tbody className="table-tbody-styling">
                {markers[username].map( el => (
                    <tr className="table-tr-styling-rows">
                      <th className="table-th-styling-columns"><input className="in-manager" defaultValue={el.name}/></th>
                      <th className="table-th-styling-columns"><textarea rows="1" className="in-manager-textarea"
                                                                        defaultValue={el.description}/></th>
                      <th className="table-th-styling-columns table-coordinates"><input className="in-manager"
                                                                                        defaultValue={el.x}/></th>
                      <th className="table-th-styling-columns table-coordinates"><input className="in-manager"
                                                                                        defaultValue={el.y}/></th>
                      <th className="table-th-styling-columns table-coordinates"><input className="in-manager"
                                                                                        defaultValue={el.z}/></th>
                      <th className="table-th-styling-columns submit-table">
                        <button className="manager-btn" type="submit" onClick={() => delMarker(el.id)}>Удалить
                        </button>
                        <button className="manager-btn" type="submit" onClick={() => updateMarker(el.id)}>Обновить</button>
                      </th>
                    </tr>
                ))}
              </tbody>
          </table>
        </>
      )})
      }
      {Object.keys(territories).map(username => {
        if (territories[username].length === 0) {
          return;
        }
        return(
        <>
          <h4 className="manager-h4">Территории {username}</h4>
          <table className="table-main-styling">
            <thead className="table-thead-styling">
            <tr className="table-tr-styling-rows">
              <th className="table-th-styling-columns">Название</th>
              <th className="table-th-styling-columns">Сервер</th>
              <th className="table-th-styling-columns table-coordinates">xStart</th>
              <th className="table-th-styling-columns table-coordinates">xStop</th>
              <th className="table-th-styling-columns table-coordinates">zStart</th>
              <th className="table-th-styling-columns table-coordinates">zStop</th>
              <th className="table-th-styling-columns submit-table">Действие</th>
            </tr>
            </thead>
            <tbody className="table-tbody-styling">
            {territories[username].map( el => (
                <tr className="table-tr-styling-rows">
                  <th className="table-th-styling-columns"><input className="in-manager" defaultValue={el.name}/></th>
                  <th className="table-th-styling-columns"><input className="in-manager" defaultValue={el.world}/></th>
                  <th className="table-th-styling-columns table-coordinates"><input className="in-manager"
                                                                                    defaultValue={el.xStart}/></th>
                  <th className="table-th-styling-columns table-coordinates"><input className="in-manager"
                                                                                    defaultValue={el.xStop}/></th>
                  <th className="table-th-styling-columns table-coordinates"><input className="in-manager"
                                                                                    defaultValue={el.zStart}/></th>
                  <th className="table-th-styling-columns table-coordinates"><input className="in-manager"
                                                                                    defaultValue={el.zStop}/></th>
                  <th className="table-th-styling-columns submit-table">
                    <button className="manager-btn" type="submit" onClick={() => delTerr(el.id)}>Удалить
                    </button>
                    <button className="manager-btn" type="submit" onClick={() => updateTerr(el.id)}>Обновить
                    </button>
                  </th>
                </tr>
            ))}
            </tbody>
          </table>
        </>
        )})
      }

      <ReactModal isOpen={modalUd} onRequestClose={handleCloseModalUd} style={inlineStyle}>
        <button className="close-modal" onClick={handleCloseModalUd}>Close Modal</button>
        <table className="table-main-styling">
          <thead className="table-thead-styling">
          <tr className="table-tr-styling-rows">
            <th className="table-th-styling-columns">Откуда</th>
            <th className="table-th-styling-columns">Описание</th>
            <th className="table-th-styling-columns">Партнер</th>
            <th className="table-th-styling-columns">Иммунитет</th>
            <th className="table-th-styling-columns">Дата окончания</th>
            <th className="table-th-styling-columns">Заметка</th>
          </tr>
          </thead>
          <tbody className="table-tbody-styling">
          <tr className="table-tr-styling-rows">
            <th className="table-th-styling-columns">{userDetails?.from_about}</th>
            <th className="table-th-styling-columns">{userDetails?.you_about}</th>
            <th className="table-th-styling-columns"><input className="in-manager" defaultValue={userDetails?.partner}/></th>
            <th className="table-th-styling-columns"><input className="in-manager" defaultValue={userDetails?.immun}/></th>
            <th className="table-th-styling-columns"><input className="in-manager"/></th>
            <th className="table-th-styling-columns"><textarea rows="1" className="in-manager-textarea" defaultValue={userDetails?.note}/></th>
          </tr>
          </tbody>
        </table>
      </ReactModal>

      <ReactModal isOpen={modalLog} onRequestClose={handleCloseModal} style={inlineStyle}>
        <button className="close-modal" onClick={handleCloseModal}>Close Modal</button>
        <table className="table-main-styling">
          <thead className="table-thead-styling">
          <tr className="table-tr-styling-rows">
            <th className="table-th-styling-columns">Время</th>
            <th className="table-th-styling-columns">Лог</th>
            <th className="table-th-styling-columns table-coordinates">Менеджер</th>
          </tr>
          </thead>
          <tbody className="table-tbody-styling">
          {logs?.map(el => {
            return (
              <tr className="table-tr-styling-rows">
                <th className="table-th-styling-columns"><input className="in-manager" defaultValue={el.log_date}/></th>
                <th className="table-th-styling-columns"><input className="in-manager" defaultValue={(() => {
                  let log = el.log;
                  try {
                    log = JSON.parse(el.log);
                  } catch {
                    return log;
                  }
                  return `${log.action} ${JSON.stringify(log.data)}`;
                })()}/></th>
                <th className="table-th-styling-columns table-coordinates table-coordinates"><input className="in-manager" defaultValue={el.manager}/></th>
              </tr>
            );
          })}
          </tbody>
        </table>
      </ReactModal>

    </div>
  );
};

export default AdminDashboard;
