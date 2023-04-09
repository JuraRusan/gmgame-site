import { Suspense, lazy } from 'react';
import Preload from "./modules/components/preloader/Preload";
import {Routes, Route} from "react-router-dom";
import {positions, Provider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import General from "./modules/pages/general/General.js";

import AdminDashboard from "./modules/pages/admin-dashboard/Admin-dashboard.js";
import AllApplications from "./modules/components/[0_grouped_0]-Admin/applications/AllApplications.js"
import AllPlayerTerritories from "./modules/components/[0_grouped_0]-Admin/all-player-territories/AllPlayerTerritories.js"
import AllPlayerMarkers from "./modules/components/[0_grouped_0]-Admin/all-player-markers/AllPlayerMarkers.js"
import AllPlayerArticles from "./modules/components/[0_grouped_0]-Admin/all-player-articles/AllPlayerArticles.js"
import RedFaq from "./modules/components/[0_grouped_0]-Admin/red-faq/RedFaq.js";
import RedRegulations from "./modules/components/[0_grouped_0]-Admin/red-regulations/RedRegulations.js";
// import Manager from "./modules/pages/manager/Manager.js";

const Faq = lazy(() => import(/* webpackChunkName: "faq" */ './modules/pages/faq/Faq.js'));
const Statistic = lazy(() => import(/* webpackChunkName: "statistics" */ './modules/pages/statistic/Statistic.js'));
const TexturePack = lazy(() => import(/* webpackChunkName: "texturepack" */ './modules/pages/texture-pack/TexturePack.js'));
const Shopkeepers = lazy(() => import(/* webpackChunkName: "shopkeepers" */ './modules/pages/shopkeepers/Shopkeepers.js'));
const Auth = lazy(() => import(/* webpackChunkName: "auth" */ /* webpackPreload: true */ /* webPackPrefetch: true */ './modules/pages/auth/Auth.js'));
const Regulations = lazy(() => import(/* webpackChunkName: "regulations" */ './modules/pages/regulations/Regulations.js'));
const ArticlesWiki = lazy(() => import(/* webpackChunkName: "wiki" */ './modules/pages/articles/Articles-wiki.js'));
const NotFound = lazy(() => import(/* webpackChunkName: "404" */ './modules/pages/not-found/NotFound.js'));
const NoAccess = lazy(() => import(/* webpackChunkName: "404" */ './modules/pages/no-access/NoAccess.js'));
const Mods = lazy(() => import(/* webpackChunkName: "mods" */ './modules/pages/mods/Mods.js'));
const Maps = lazy(() => import(/* webpackChunkName: "maps" */ './modules/pages/maps/Maps.js'));
const Support = lazy(() => import(/* webpackChunkName: "support" */ './modules/pages/support/Support.js'));
const Cab = lazy(() => import(/* webpackChunkName: "cab" */ './modules/pages/cab/Cab.js'));
const Articles = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Profile/articles/Articles.js'));
const MyProfile = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Profile/my-profile/My-profile.js'));
const MyMarkers = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Maps-all-comp/my-markers/My-markers.js'));
const EditAddMarker = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Maps-all-comp/my-markers/EditAddMarker.js'));
const MyPrizes = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Prizes/my-prizes/My-prizes.js'));
const ChangePassword = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Profile/change-password/Change-password.js'));
const MyTerritories = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Maps-all-comp/my-territories/My-territories.js'));
const EditAddTerr = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Maps-all-comp/my-territories/EditAddTerr.js'));

const options = {
  timeout: 7000,
  position: positions.BOTTOM_CENTER,
  offset: '15px',
};

const Router = () => {
  return (
    <Suspense fallback={<Preload />}>
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
        <Route exact path="/manager" element={<AdminDashboard/>}>
          <Route path="allApplications" element={<AllApplications/>}/>
          <Route path="allPlayerTerritories" element={<AllPlayerTerritories/>}/>
          <Route path="allPlayerMarkers" element={<AllPlayerMarkers/>}/>
          <Route path="allPlayerArticles" element={<AllPlayerArticles/>}/>
          <Route path="redFaq" element={<RedFaq/>}/>
          <Route path="redRegulations" element={<RedRegulations/>}/>
        </Route>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/regulations" element={<Regulations/>}/>
        <Route path="/articlesWiki" element={<ArticlesWiki/>}/>
        <Route path="/mods" element={<Mods/>}/>
        <Route path="/statistic" element={<Statistic/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/onlineMaps" element={<Maps/>}/>
        <Route path="/texturePack" element={<TexturePack/>}/>
        <Route path="/no-access" element={<NoAccess/>}/>
        <Route path="/shopkeepers" element={<Shopkeepers/>}/>
        <Route exac path="*" element={<NotFound/>}/>
      </Routes>
    </Provider>
    </Suspense>
  );
};

export default Router;
