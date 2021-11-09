import { Switch, Route } from "react-router-dom";

import General from "./modules/general/pages/general/General.js";
import Gmgame from "./modules/general/pages/gmgame/Gmgame.js";
import Lobby from "./modules/general/pages/lobby/Lobby.js";
import Resources from "./modules/general/pages/resources/Resources.js";
import Farm from "./modules/general/pages/farm/Farm.js";
import Creative from "./modules/general/pages/creative/Creative.js";
import Auth from "./modules/general/pages/auth/Auth.js";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={General} />
      <Route exact path="/gmgame-server" component={Gmgame} />
      <Route exact path="/lobby-server" component={Lobby} />
      <Route exact path="/resources-server" component={Resources} />
      <Route exact path="/farm-server" component={Farm} />
      <Route exact path="/creative-server" component={Creative} />
      <Route exact path="/auth" component={Auth} />
    </Switch>
  );
};

export default Router;
