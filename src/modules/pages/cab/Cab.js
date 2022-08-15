import React, { useEffect, useState } from "react";
import AOS from "aos";
import useAxios from '../../../DataProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "./Cab.scss";
import "aos/dist/aos.css";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";
import MyProfile from "../../components/my-profile/My-profile.js";
import PlayerCabinet from "../../components/player-cabinet/Player-cabinet.js";
import MyTerritories from "../../components/my-territories/My-territories.js";
import MyMarkers from "../../components/my-markers/My-markers.js";
import Articles from "../../components/articles/Articles.js";
import MyPrizes from "../../components/my-prizes/My-prizes.js";
import ChangePassword from "../../components/change-password/Change-password.js";


const Cab = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { cancel, data, error, loaded } = useAxios(
    "/api/me/",
    'GET',
    {}
  );

  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  const profileMenuMyProfile = "Профиль";
  const profileMenuMyTerritories = "Мои территории";
  const profileMenuMyMarker = "Мои метки";
  const profileMenuMyArticles = "Статьи";
  const profileMenuMyPrizes = "Призы";
  const profileMenuMyChangePassword = "Изменить пароль";
  const profileMenuMyGoOut = "Выйти";

  if (loaded && data.user) {
    return (
      <div className="main-cab" data-aos="fade-up">
        <Header />
        <Tabs
          selectedIndex={selectedIndex}
          onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}
          selectedTabClassName="checked"
          // selectedTabPanelClassName="avengers-tab-panel--selected"
        >
        <div className="box">
        <TabList>
          <div className="col-1">
            <PlayerCabinet {...data.user} />
            <div className="menu-cabinet">
              <div className="m1">
                <Tab className="tab">{profileMenuMyProfile}</Tab>
                <Tab className="tab">{profileMenuMyTerritories}</Tab>
                <Tab className="tab">{profileMenuMyMarker}</Tab>
                <Tab className="tab">{profileMenuMyArticles}</Tab>
                <Tab className="tab">{profileMenuMyPrizes}</Tab>
                <Tab className="tab">{profileMenuMyChangePassword}</Tab>
              </div>
              <div className="m1">
                <label className="tab">{profileMenuMyGoOut}</label>
              </div>
            </div>
          </div>
          </TabList>
            <TabPanel>
              <div className="col-2">
                <MyProfile userDC={data.discordUser} user={data.user} version={data.version} />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="col-2">
                <MyTerritories />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="col-2">
                <MyMarkers />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="col-2">
                <Articles />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="col-2">
                <MyPrizes />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="col-2">
                <ChangePassword />
              </div>
            </TabPanel>
        </div>
        </Tabs>
        <Fotter />
      </div>
    );
  }
  return <span>Loading...</span>;
};

export default Cab;
