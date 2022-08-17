import { Routes, Route } from "react-router-dom";

import General from "./modules/pages/general/General.js";
import Auth from "./modules/pages/auth/Auth.js";
import SvgList from "./modules/pages/svg-list/Svg-list.js";
import Cab from "./modules/pages/cab/Cab.js";
import Faq from "./modules/pages/faq/Faq.js";
import AdminDashboard from "./modules/pages/admin-dashboard/Admin-dashboard.js";
import Regulations from "./modules/pages/regulations/Regulations.js";
import MyProfile from "./modules/components/my-profile/My-profile.js";
import MyMarkers from "./modules/components/my-markers/My-markers.js";
import EditAddMarker from "./modules/components/my-markers/EditAddMarker.js";
import MyPrizes from "./modules/components/my-prizes/My-prizes.js"
import Articles from "./modules/components/articles/Articles.js"
import ChangePassword from "./modules/components/change-password/Change-password.js"
import MyTerritories from "./modules/components/my-territories/My-territories.js"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<General/>} />
      <Route path="/svgList" element={<SvgList/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route exact path="/cab" element={<Cab/>}>
        <Route path="profile" element={<MyProfile/>} />
        <Route path="territories" element={<MyTerritories/>} />
        <Route path="markers" element={<MyMarkers />} />
        <Route path="markers/edit_add_marker/:id" element={<EditAddMarker />} />
        <Route path="articles" element={<Articles/>} />
        <Route path="prize" element={<MyPrizes/>} />
        <Route path="change_password" element={<ChangePassword/>} />
      </Route>
      <Route path="/faq" element={<Faq/>} />
      <Route path="/regulations" element={<Regulations/>} />
      <Route path="/admin-dashboard" element={<AdminDashboard/>} />
    </Routes>
  );
};

export default Router;
