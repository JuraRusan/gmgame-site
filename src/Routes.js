import { Switch, Route } from "react-router-dom";

import General from "./modules/general/pages/general/General.js";
import Auth from "./modules/general/pages/auth/Auth.js";
import Lk from "./modules/general/pages/lk/lk.js";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={General} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/me" component={Lk} />
    </Switch>
  );
};

export default Router;
