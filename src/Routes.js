import { Switch, Route } from "react-router-dom";

import General from "./modules/general/pages/General";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={General} />
    </Switch>
  );
};

export default Router;