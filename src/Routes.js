import { Switch, Route } from "react-router-dom";

import General from "./modules/general/pages/general/General.js";
import Auth from "./modules/general/pages/auth/Auth.js";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={General} />
      <Route exact path="/auth" component={Auth} />
    </Switch>
  );
};

export default Router;
