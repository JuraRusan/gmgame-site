import { Switch, Route } from "react-router-dom";

import General from "./modules/pages/general/General.js";
import Auth from "./modules/pages/auth/Auth.js";
import Lk from "./modules/pages/lk/lk.js";
import SvgList from "./modules/pages/svg-list/Svg-list.js";
import Cab from "./modules/pages/cab/Cab.js";
import Faq from "./modules/pages/faq/Faq.js";
import AdminDashboard from "./modules/pages/admin-dashboard/Admin-dashboard.js";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={General} />
      <Route exact path="/svgList" component={SvgList} />
      {/* <Route exact path="/auth" component={Auth} /> */}
      <Route exact path="/me" component={Lk} />
      <Route exact path="/cab" component={Cab} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/admin-dashboard" component={AdminDashboard} />
    </Switch>
  );
};

export default Router;
