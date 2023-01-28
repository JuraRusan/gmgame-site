import React, {useEffect, useState} from "react";
import AOS from "aos";
import {NavLink, Outlet, Link} from "react-router-dom";
import {useAxios, sendRequest} from '../../../DataProvider';

import "./Admin-dashboard.scss";
import "aos/dist/aos.css";

const AdminDashboard = () => {
  let [searchParam, setSearchParam] = useState('Поиск работает по discord_id/nickname/discord_tag');
  let [user, setUser] = useState({});
  let [tag, setTag] = useState({});

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
      if (!response) {
        return;
      }
      setUser(response);
      setTag(JSON.parse(response.tag));
    });
  }

  return (
    <div className="main-dashboard" data-aos="fade-up">

      <input
        className="search-players"
        placeholder={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
        type="search">
      </input>

      <button className="button-search-players" type="submit" onClick={getUser}>Сделать запрос</button>

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
          <th className="th-cl"><Link to="allPlayerMarkers" state={{id: user.id}}>UD</Link>, <a>M</a>, <a>T</a></th>
          <th className="th-cl">X</th>
        </tr>
        </tbody>
      </table>
    </div>
  );

  // const allAdminApplication = "Заявки";
  // const allPlayerTerritories = "Территории";
  // const allPlayerMarker = "Метки";
  // const allPlayerArticles = "Статьи";
  // const redFaq = "faq";
  // const redRegulations = "Правила";

  // function setActive(isActive) {
  //   return isActive ? "tab-admin checked" : "tab-admin";
  // }

  // return (
  //   <div className="main-dashboard" data-aos="fade-up">
  //     <div className="box-dashboard">
  //       <div className="input-click-admin">
  //         <NavLink to="allApplications" className={({isActive}) => setActive(isActive)}>{allAdminApplication}</NavLink>
  //         <NavLink to="allPlayerTerritories" className={({isActive}) => setActive(isActive)}>{allPlayerTerritories}</NavLink>
  //         <NavLink to="allPlayerMarkers" className={({isActive}) => setActive(isActive)}>{allPlayerMarker}</NavLink>
  //         <NavLink to="allPlayerArticles" className={({isActive}) => setActive(isActive)}>{allPlayerArticles}</NavLink>
  //         <NavLink to="redFaq" className={({isActive}) => setActive(isActive)}>{redFaq}</NavLink>
  //         <NavLink to="redRegulations" className={({isActive}) => setActive(isActive)}>{redRegulations}</NavLink>
  //       </div>
  //       <div className="output-click-admin">
  //         <Outlet/>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default AdminDashboard;
