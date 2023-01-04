import {Routes, Route} from "react-router-dom";
import {positions, Provider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import General from "./modules/pages/general/General.js";
import Auth from "./modules/pages/auth/Auth.js";
import Cab from "./modules/pages/cab/Cab.js";
import Faq from "./modules/pages/faq/Faq.js";
import AdminDashboard from "./modules/pages/admin-dashboard/Admin-dashboard.js";
import Regulations from "./modules/pages/regulations/Regulations.js";
import MyProfile from "./modules/components/[0_grouped_0]-Profile/my-profile/My-profile.js";
import MyMarkers from "./modules/components/[0_grouped_0]-Maps-all-comp/my-markers/My-markers.js";
import EditAddMarker from "./modules/components/[0_grouped_0]-Maps-all-comp/my-markers/EditAddMarker.js";
import MyPrizes from "./modules/components/[0_grouped_0]-Prizes/my-prizes/My-prizes.js"
import Articles from "./modules/components/[0_grouped_0]-Profile/articles/Articles.js"
import ChangePassword from "./modules/components/[0_grouped_0]-Profile/change-password/Change-password.js"
import MyTerritories from "./modules/components/[0_grouped_0]-Maps-all-comp/my-territories/My-territories.js"
import EditAddTerr from "./modules/components/[0_grouped_0]-Maps-all-comp/my-territories/EditAddTerr.js";
import ArticlesWiki from "./modules/pages/articles/Articles-wiki.js";
import NotFound from "./modules/pages/not-found/NotFound.js"
import Mods from "./modules/pages/mods/Mods.js";
import Statistic from "./modules/pages/statistic/Statistic.js";
import Maps from "./modules/pages/maps/Maps.js";
import Support from "./modules/pages/support/Support.js";
import AllApplications from "./modules/components/[0_grouped_0]-Admin/applications/AllApplications.js"
import AllPlayerTerritories from "./modules/components/[0_grouped_0]-Admin/all-player-territories/AllPlayerTerritories.js"
import AllPlayerMarkers from "./modules/components/[0_grouped_0]-Admin/all-player-markers/AllPlayerMarkers.js"
import AllPlayerArticles from "./modules/components/[0_grouped_0]-Admin/all-player-articles/AllPlayerArticles.js"

const options = {
  timeout: 7000,
  position: positions.BOTTOM_CENTER,
  offset: '15px',
};

const Router = () => {
  return (
    <Provider template={AlertTemplate} {...options}>
      <Routes>
        <Route path="/" element={<General/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route exact path="/cab" element={<Cab/>}>
          <Route path="profile" element={<MyProfile/>}/>
          <Route path="territories" element={<MyTerritories/>}/>
          <Route path="territories/edit_add_terr/:id" element={<EditAddTerr/>}/>
          <Route path="markers" element={<MyMarkers/>}/>
          <Route path="markers/edit_add_marker/:id" element={<EditAddMarker/>}/>
          <Route path="articles" element={<Articles/>}/>
          <Route path="prize" element={<MyPrizes/>}/>
          <Route path="change_password" element={<ChangePassword/>}/>
        </Route>
        <Route exact path="/adminDashboard" element={<AdminDashboard/>}>
          <Route path="allApplications" element={<AllApplications/>}/>
          <Route path="allPlayerTerritories" element={<AllPlayerTerritories/>}/>
          <Route path="allPlayerMarkers" element={<AllPlayerMarkers/>}/>
          <Route path="allPlayerArticles" element={<AllPlayerArticles/>}/>
        </Route>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/regulations" element={<Regulations/>}/>
        <Route path="/articlesWiki" element={<ArticlesWiki/>}/>
        <Route path="/mods" element={<Mods/>}/>
        <Route path="/statistic" element={<Statistic/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/onlineMaps" element={<Maps/>}/>
        <Route exac path="*" element={<NotFound/>}/>
      </Routes>
    </Provider>
  );
};

export default Router;
