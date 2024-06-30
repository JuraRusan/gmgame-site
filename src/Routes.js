import { lazy, Suspense } from "react";
import Preload from "./modules/components/preloader/Preload";
import { Route, Routes } from "react-router-dom";
import { positions, Provider } from "react-alert";
import Alert from "././common/alert/Alert";

// --
import General from "./modules/pages/general/General.js";

// --
const Auth = lazy(() => import(/* webpackChunkName: "auth" */ /* webpackPreload: true */ /* webPackPrefetch: true */ "./modules/pages/auth/Auth.js")); // prettier-ignore
const NotFound = lazy(() => import(/* webpackChunkName: "404" */ "./modules/pages/not-found/NotFound.js")); // prettier-ignore
const NoAccess = lazy(() => import(/* webpackChunkName: "no_access" */ "./modules/pages/no-access/NoAccess.js")); // prettier-ignore

// --
// const CabNotAvailable = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Profile/cab-not-available/CabNotAvailable")); // prettier-ignore
// const NotAvailable = lazy(() => import(/* webpackChunkName: "not_available" */ "./modules/pages/not-available/NotAvailable")); // prettier-ignore

// --
const Manager = lazy(() => import(/* webpackChunkName: "manager" */ "./modules/pages/manager/Manager")); // prettier-ignore
const PlayerSummary = lazy(() => import(/* webpackChunkName: "manager" */ "./modules/components/[0_grouped_0]-Manager/Player-summary/Player-summary")); // prettier-ignore
const FaqEditor = lazy(() => import(/* webpackChunkName: "manager" */ "./modules/components/[0_grouped_0]-Manager/Faq-editor/Faq-editor")); // prettier-ignore
const DonateStatusEditor = lazy(() => import(/* webpackChunkName: "manager" */ "./modules/components/[0_grouped_0]-Manager/Donate-status/Donate-status-editor")); // prettier-ignore
const GalleryStatusView = lazy(() => import(/* webpackChunkName: "manager" */ "./modules/components/[0_grouped_0]-Manager/Gallery-status-view/Gallery-status-view")); // prettier-ignore
const BoxView = lazy(() => import(/* webpackChunkName: "manager" */ "./modules/components/[0_grouped_0]-Manager/Box-view/Box-view")); // prettier-ignore
const ShopkeepersAllStatus = lazy(() => import(/* webpackChunkName: "manager" */ "./modules/components/[0_grouped_0]-Manager/Shopkeepers-all-status/Shopkeepers-all-status")); // prettier-ignore

// --
const Faq = lazy(() => import(/* webpackChunkName: "faq" */ "./modules/pages/faq/Faq.js")); // prettier-ignore
const Regulations = lazy(() => import(/* webpackChunkName: "regulations" */ "./modules/pages/regulations/Regulations.js")); // prettier-ignore

// --
const MainGallery = lazy(() => import(/* webpackChunkName: "gallery" */ "./modules/pages/gallery/Gallery.js")); // prettier-ignore
const Gallery = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Profile/gallery/Gallery.js")); // prettier-ignore
const EditAddPost = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Profile/gallery/EditAddPost.js")); // prettier-ignore
const AnalyticsPost = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Profile/gallery/AnalyticsPost.js")); // prettier-ignore

// --
const MyMarkers = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Maps-all-comp/my-markers/My-markers.js")); // prettier-ignore
const EditAddMarker = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Maps-all-comp/my-markers/EditAddMarker.js")); // prettier-ignore

// --
const MyTerritories = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Maps-all-comp/my-territories/My-territories.js")); // prettier-ignore
const EditAddTerr = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Maps-all-comp/my-territories/EditAddTerr.js")); // prettier-ignore

// --
const MyProfile = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Profile/my-profile/My-profile.js")); // prettier-ignore
const MyPrizes = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Profile/my-prizes/My-prizes.js")); // prettier-ignore

// --
const ShopUser = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Profile/shops-user/ShopUser")); // prettier-ignore
const LogTrade = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Profile/shops-user/LogTrade")); // prettier-ignore

// --
const ChangePassword = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/components/[0_grouped_0]-Profile/change-password/Change-password.js")); // prettier-ignore

// --
const Statistic = lazy(() => import(/* webpackChunkName: "statistics" */ "./modules/pages/statistic/Statistic.js"));
const Maps = lazy(() => import(/* webpackChunkName: "maps" */ "./modules/pages/maps/Maps.js")); // prettier-ignore
const Support = lazy(() => import(/* webpackChunkName: "support" */ "./modules/pages/support/Support.js")); // prettier-ignore
const Shopkeepers = lazy(() => import(/* webpackChunkName: "shopkeepers" */ "./modules/pages/shopkeepers/Shopkeepers.js")); // prettier-ignore
const Cab = lazy(() => import(/* webpackChunkName: "cab" */ "./modules/pages/cab/Cab.js")); // prettier-ignore

// --
const options = {
  timeout: 10000,
  position: positions.BOTTOM_CENTER,
  offset: "15px",
};

const Router = () => {
  return (
    <Suspense fallback={<Preload full={true} />}>
      <Provider template={Alert} {...options}>
        <Routes>
          <Route path="/" element={<General />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/no-access" element={<NoAccess />} />
          <Route exac path="*" element={<NotFound />} />
          <Route exact path="/cab" element={<Cab />}>
            {/* ---------- */}
            <Route path="profile" element={<MyProfile />} />
            {/* ---------- */}
            <Route path="territories" element={<MyTerritories />} />
            <Route path="territories/edit_add_terr/:id" element={<EditAddTerr />} />
            {/* ---------- */}
            <Route path="markers" element={<MyMarkers />} />
            <Route path="markers/edit_add_marker/:id" element={<EditAddMarker />} />
            {/* ---------- */}
            <Route path="gallery" element={<Gallery />} />
            <Route path="gallery/edit_add_post/:id" element={<EditAddPost />} />
            <Route path="gallery/post_analytics/:id" element={<AnalyticsPost />} />
            {/* ---------- */}
            <Route path="prize" element={<MyPrizes />} />
            {/* ---------- */}
            <Route path="shop_user" element={<ShopUser />} />
            <Route path="shop_user/:uuid" element={<LogTrade />} />
            {/* ---------- */}
            <Route path="change_password" element={<ChangePassword />} />
            {/* ---------- */}
          </Route>
          <Route path="/gallery" element={<MainGallery />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/support" element={<Support />} />
          <Route path="/online_map" element={<Maps />} />
          <Route path="/shopkeepers" element={<Shopkeepers />} />
          <Route exact path="/manager" element={<Manager />}>
            <Route path="player_summary" element={<PlayerSummary />} />
            <Route path="faq_editor" element={<FaqEditor />} />
            <Route path="donate_status_editor" element={<DonateStatusEditor />} />
            <Route path="gallery_status_view" element={<GalleryStatusView />} />
            <Route path="gallery_status_view/:id" element={<BoxView type="gallery" />} />
            <Route path="shopkeepers_all_status" element={<ShopkeepersAllStatus />} />
            <Route path="shopkeepers_all_status/:uuid" element={<BoxView type="shopkeepers_log" />} />
          </Route>
        </Routes>
      </Provider>
    </Suspense>
  );
};

export default Router;
