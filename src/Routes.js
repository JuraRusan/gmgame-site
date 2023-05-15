import {lazy, Suspense} from 'react';
import Preload from "./modules/components/preloader/Preload";
import {Route, Routes} from "react-router-dom";
import {positions, Provider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// --
import General from "./modules/pages/general/General.js";
// --
const Auth = lazy(() => import(/* webpackChunkName: "auth" */ /* webpackPreload: true */ /* webPackPrefetch: true */ './modules/pages/auth/Auth.js'));
const NotFound = lazy(() => import(/* webpackChunkName: "404" */ './modules/pages/not-found/NotFound.js'));
const NoAccess = lazy(() => import(/* webpackChunkName: "404" */ './modules/pages/no-access/NoAccess.js'));
// --
const Manager = lazy(() => import(/* webpackChunkName: "404" */ './modules/pages/manager/Manager'));
const PlayerSummary = lazy(() => import(/* webpackChunkName: "404" */ './modules/components/[0_grouped_0]-Manager/Player-summary/Player-summary'));
const FaqEditor = lazy(() => import(/* webpackChunkName: "404" */ './modules/components/[0_grouped_0]-Manager/Faq-editor/Faq-editor'));
const ModEditor = lazy(() => import(/* webpackChunkName: "404" */ './modules/components/[0_grouped_0]-Manager/Mod-editor/Mod-editor'));
const TexturePackEditor = lazy(() => import(/* webpackChunkName: "404" */ './modules/components/[0_grouped_0]-Manager/Texture-pack-editor/Texture-pack-editor'));
const RegulationsEditor = lazy(() => import(/* webpackChunkName: "404" */ './modules/components/[0_grouped_0]-Manager/Regulations-editor/Regulations-editor'));
const MonitoringSummary = lazy(() => import(/* webpackChunkName: "404" */ './modules/components/[0_grouped_0]-Manager/Monitoring-summary/Monitoring-summary'));
const GalleryStatusView = lazy(() => import(/* webpackChunkName: "404" */ './modules/components/[0_grouped_0]-Manager/Gallery-status-view/Gallery-status-view'));
// --
const Faq = lazy(() => import(/* webpackChunkName: "faq" */ './modules/pages/faq/Faq.js'));
const Regulations = lazy(() => import(/* webpackChunkName: "regulations" */ './modules/pages/regulations/Regulations.js'));
// --
// const MainGallery = lazy(() => import(/* webpackChunkName: "faq" */ './modules/pages/gallery/Gallery.js'));
// const Gallery = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Profile/gallery/Gallery.js'));
// const EditAddPost = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Profile/gallery/EditAddPost.js'));
// const AnalyticsPost = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Profile/gallery/AnalyticsPost.js'));
// --
const MyMarkers = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Maps-all-comp/my-markers/My-markers.js'));
const EditAddMarker = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Maps-all-comp/my-markers/EditAddMarker.js'));
// --
const MyTerritories = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Maps-all-comp/my-territories/My-territories.js'));
const EditAddTerr = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Maps-all-comp/my-territories/EditAddTerr.js'));
// --
const ArticlesWiki = lazy(() => import(/* webpackChunkName: "wiki" */ './modules/pages/articles/Articles-wiki.js'));
const Articles = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Profile/articles/Articles.js'));
// --
const MyProfile = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Profile/my-profile/My-profile.js'));
const MyPrizes = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Profile/my-prizes/My-prizes.js'));
const ChangePassword = lazy(() => import(/* webpackChunkName: "cab" */ './modules/components/[0_grouped_0]-Profile/change-password/Change-password.js'));
// --
const Statistic = lazy(() => import(/* webpackChunkName: "statistics" */ './modules/pages/statistic/Statistic.js'));
const TexturePack = lazy(() => import(/* webpackChunkName: "texturepack" */ './modules/pages/texture-pack/TexturePack.js'));
const Shopkeepers = lazy(() => import(/* webpackChunkName: "shopkeepers" */ './modules/pages/shopkeepers/Shopkeepers.js'));
const Mods = lazy(() => import(/* webpackChunkName: "mods" */ './modules/pages/mods/Mods.js'));
const Maps = lazy(() => import(/* webpackChunkName: "maps" */ './modules/pages/maps/Maps.js'));
const Support = lazy(() => import(/* webpackChunkName: "support" */ './modules/pages/support/Support.js'));
const Cab = lazy(() => import(/* webpackChunkName: "cab" */ './modules/pages/cab/Cab.js'));
// --

const options = {
  timeout: 7000,
  position: positions.BOTTOM_CENTER,
  offset: '15px',
};

const Router = () => {
  return (
    <Suspense fallback={<Preload/>}>
      <Provider template={AlertTemplate} {...options}>
        <Routes>
          <Route path="/" element={<General/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/no-access" element={<NoAccess/>}/>
          <Route exac path="*" element={<NotFound/>}/>

          <Route exact path="/cab" element={<Cab/>}>
            {/*----------*/}
            <Route path="profile" element={<MyProfile/>}/>
            {/*----------*/}
            <Route path="territories" element={<MyTerritories/>}/>
            <Route path="territories/edit_add_terr/:id" element={<EditAddTerr/>}/>
            {/*----------*/}
            <Route path="markers" element={<MyMarkers/>}/>
            <Route path="markers/edit_add_marker/:id" element={<EditAddMarker/>}/>
            {/*----------*/}
            <Route path="articles" element={<Articles/>}/>
            {/*----------*/}
            {/*<Route path="gallery" element={<Gallery/>}/>*/}
            {/*<Route path="gallery/edit_add_post" element={<EditAddPost/>}/>*/}
            {/*<Route path="gallery/post_analytics" element={<AnalyticsPost/>}/>*/}
            {/*----------*/}
            <Route path="prize" element={<MyPrizes/>}/>
            <Route path="change_password" element={<ChangePassword/>}/>
            {/*----------*/}
          </Route>

          <Route path="/articlesWiki" element={<ArticlesWiki/>}/>
          {/*<Route path="/gallery" element={<MainGallery/>}/>*/}

          <Route path="/faq" element={<Faq/>}/>
          <Route path="/regulations" element={<Regulations/>}/>

          <Route path="/mods" element={<Mods/>}/>
          <Route path="/statistic" element={<Statistic/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/onlineMaps" element={<Maps/>}/>
          <Route path="/texturePack" element={<TexturePack/>}/>
          <Route path="/shopkeepers" element={<Shopkeepers/>}/>

          <Route exact path="/manager" element={<Manager/>}>
            <Route path="player_summary" element={<PlayerSummary/>}/>
            <Route path="faq_editor" element={<FaqEditor/>}/>
            <Route path="mod_editor" element={<ModEditor/>}/>
            <Route path="texture_pack_editor" element={<TexturePackEditor/>}/>
            <Route path="regulations_editor" element={<RegulationsEditor/>}/>
            <Route path="monitoring_summary" element={<MonitoringSummary/>}/>
            <Route path="gallery_status_view" element={<GalleryStatusView/>}/>
          </Route>

        </Routes>
      </Provider>
    </Suspense>
  );
};

export default Router;
