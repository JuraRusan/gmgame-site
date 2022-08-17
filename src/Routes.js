import { Routes, Route } from "react-router-dom";

import General from "./modules/pages/general/General.js";
import Auth from "./modules/pages/auth/Auth.js";
import SvgList from "./modules/pages/svg-list/Svg-list.js";
import Cab from "./modules/pages/cab/Cab.js";
import Faq from "./modules/pages/faq/Faq.js";
import AdminDashboard from "./modules/pages/admin-dashboard/Admin-dashboard.js";
import Regulations from "./modules/pages/regulations/Regulations.js";
import MyProfile from "./modules/components/my-profile/My-profile.js";
import MyMarkers from "./modules/components/my-markers/My-markers";
import EditAddMarker from "./modules/components/my-markers/EditAddMarker";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<General/>} />
      <Route path="/svgList" element={<SvgList/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route exact path="/cab" element={<Cab/>}>
        <Route path="profile" element={<MyProfile/>} />
        <Route path="territories" element={<MyProfile/>} />
        <Route path="markers" element={<MyMarkers />} />
        <Route path="markers/edit_add_marker/:id" element={<EditAddMarker />} />
        <Route path="articles" element={<MyProfile/>} />
        <Route path="prize" element={<MyProfile/>} />
        <Route path="change_password" element={<MyProfile/>} />
      </Route>
      <Route path="/faq" element={<Faq/>} />
      <Route path="/regulations" element={<Regulations/>} />
      <Route path="/admin-dashboard" element={<AdminDashboard/>} />
    </Routes>
  );
};

export default Router;
