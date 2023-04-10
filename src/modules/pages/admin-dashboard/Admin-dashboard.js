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
  let [user, setUser] = useState({});
  let [tag, setTag] = useState({});
  const [action, setAction] = useState('');
  const [markers, setMarkers] = useState([]);
  const [territories, setTerritories] = useState([]);
  const [modalLog, setModalLog] = useState( false );
  const [modalUd, setModalUd] = useState( false );
  const [logs, setLogs] = useState([]);
  
  const handleOpenModal = () => {
    setModalLog(true)

    sendRequest(
      '/api/admin/get_logs',
      'POST',
      {id: user.user_id}
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
    setModalLog(false)
    setLogs([]);
  }

  const handleOpenModalUd = () => {
    setModalUd(true)
  }
  
  const handleCloseModalUd = () => {
    setModalUd(false)
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
      if (!response?.user_id) {
        setUser({});
        setTag({});
        alert.error(response.message);
        return;
      }
      setUser(response);
      setTag(JSON.parse(response.tag));
      setMarkers(response.markers);
      setTerritories(response.territories);
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
      setMarkers(response);
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
      setTerritories(response);
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

      {user.status &&
        <>
          <table className="table-cl">
            <thead className="thead-cl">
            <tr className="tr-cl">
              <th className="th-cl">Имя</th>
              <th className="th-cl">email</th>
              <th className="th-cl">Возраст</th>
              <th className="th-cl">Статус</th>
              <th className="th-cl">Действия</th>
              <th className="th-cl"></th>
            </tr>
            </thead>
            <tbody className="tbody-cl">
            <tr className="tr-cl">
              <th className="th-cl">{user?.username}</th>
              <th className="th-cl">{tag?.email}</th>
              <th className="th-cl">{user?.age}</th>
              <th className="th-cl">{user?.status}</th>
              <th className="th-cl">
                <button onClick={handleOpenModal}>L</button>
                <ReactModal 
                  isOpen={modalLog}
                  contentLabel="onRequestClose Example"
                  onRequestClose={handleCloseModal}
                >
                  <button onClick={handleCloseModal}>Close Modal</button>
                  <table className="table-cl">
                    <thead className="thead-cl">
                    <tr className="tr-cl">
                      <th className="th-cl">Время</th>
                      <th className="th-cl">Лог</th>
                      <th className="th-cl table-coordinates">Менеджер</th>
                    </tr>
                    </thead>
                    <tbody className="tbody-cl">
                    {logs?.map(el => {
                      return (
                        <tr className="tr-cl">
                          <th className="th-cl"><input className="in-manager" defaultValue={el.log_date}/></th>
                          <th className="th-cl"><input className="in-manager" defaultValue={(() => {
                            let log = el.log;
                            try {
                              log = JSON.parse(el.log);
                            } catch {
                              return log;
                            }

                            return `${log.action} ${JSON.stringify(log.data)}`;
                          })()}/></th>
                          <th className="th-cl table-coordinates table-coordinates"><input className="in-manager" defaultValue={el.manager}/></th>
                        </tr>
                      );
                    })}
                    </tbody>
                  </table>
                </ReactModal>
                <button onClick={handleOpenModalUd}>UD</button>
                <ReactModal 
                  isOpen={modalUd}
                  contentLabel="onRequestClose Example"
                  onRequestClose={handleCloseModalUd}
                >
                  <button onClick={handleCloseModalUd}>Close Modal</button>
                  <table className="table-cl">
                    <thead className="thead-cl">
                    <tr className="tr-cl">
                      <th className="th-cl">Откуда</th>
                      <th className="th-cl">Описание</th>
                      <th className="th-cl">Партнер</th>
                      <th className="th-cl">Иммунитет</th>
                      <th className="th-cl">Дата окончания</th>
                      <th className="th-cl">Заметка</th>
                    </tr>
                    </thead>
                    <tbody className="tbody-cl">
                      <tr className="tr-cl">
                        <th className="th-cl">{user?.from_about}</th>
                        <th className="th-cl">{user?.you_about}</th>
                        <th className="th-cl"><input className="in-manager" defaultValue={user?.partner}/></th>
                        <th className="th-cl"><input className="in-manager" defaultValue={user?.immun}/></th>
                        <th className="th-cl"><input className="in-manager" /></th>
                        <th className="th-cl"><textarea className="in-manager" defaultValue={user?.note}/></th>
                      </tr>
                    </tbody>
                  </table>
                </ReactModal>
              </th>
              <th className="th-cl">
                <select className="in-manager-option" value={action.action} onChange={event => setAction({action: event.target.value, user: user.user_id})}>{options}</select>
              </th>
            </tr>
            </tbody>
          </table>
          <button className="button-search-players" type="submit" onClick={actionUser}>Применить</button>
        </>
      }
      {markers.length > 0 &&
        <>
          <h4 className="manager-h4">Метки</h4>
          <table className="table-cl">
            <thead className="thead-cl">
            <tr className="tr-cl">
              <th className="th-cl">Название</th>
              <th className="th-cl">Описание</th>
              <th className="th-cl table-coordinates">x</th>
              <th className="th-cl table-coordinates">y</th>
              <th className="th-cl table-coordinates">z</th>
              <th className="th-cl"></th>
            </tr>
            </thead>
            <tbody className="tbody-cl">
            {markers?.map(el => {
              return (
                <tr className="tr-cl">
                  <th className="th-cl"><input className="in-manager" defaultValue={el.name}/></th>
                  <th className="th-cl"><textarea className="in-manager" defaultValue={el.description}/></th>
                  <th className="th-cl table-coordinates table-coordinates"><input className="in-manager" defaultValue={el.x}/></th>
                  <th className="th-cl table-coordinates table-coordinates"><input className="in-manager" defaultValue={el.y}/></th>
                  <th className="th-cl table-coordinates table-coordinates"><input className="in-manager" defaultValue={el.z}/></th>
                  <th className="th-cl">
                    <button className="manager-btn" type="submit" onClick={() => delMarker(el.id)}>Удалить
                    </button>
                    <button className="manager-btn" type="submit" onClick={() => updateMarker(el.id)}>Обновить</button>
                  </th>
                </tr>
              );
            })}
            </tbody>
          </table>
        </>
      }
      {territories.length > 0 &&
        <>
          <h4 className="manager-h4">Территории</h4>
          <table className="table-cl">
            <thead className="thead-cl">
            <tr className="tr-cl">
              <th className="th-cl">Название</th>
              <th className="th-cl">Сервер</th>
              <th className="th-cl table-coordinates">xStart</th>
              <th className="th-cl table-coordinates">xStop</th>
              <th className="th-cl table-coordinates">zStart</th>
              <th className="th-cl table-coordinates">zStop</th>
              <th className="th-cl"></th>
            </tr>
            </thead>
            <tbody className="tbody-cl">
            {territories?.map(el => {
              return (
                <tr className="tr-cl">
                  <th className="th-cl"> <input className="in-manager" defaultValue={el.name}/> </th>
                  <th className="th-cl"> <input className="in-manager" defaultValue={el.world}/> </th>
                  <th className="th-cl table-coordinates"> <input className="in-manager" defaultValue={el.xStart}/> </th>
                  <th className="th-cl table-coordinates"> <input className="in-manager" defaultValue={el.xStop}/> </th>
                  <th className="th-cl table-coordinates"> <input className="in-manager" defaultValue={el.zStart}/> </th>
                  <th className="th-cl table-coordinates"> <input className="in-manager" defaultValue={el.zStop}/> </th>
                  <th className="th-cl">
                    <button className="manager-btn" type="submit" onClick={() => delTerr(el.id)}>Удалить
                    </button>
                    <button className="manager-btn" type="submit" onClick={() => updateTerr(el.id)}>Обновить
                    </button>
                  </th>
                </tr>
              );
            })}
            </tbody>
          </table>
        </>
      }
    </div>
  );
};

export default AdminDashboard;
