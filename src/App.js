import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

import "./App.scss";

import Header from "./common/layout/header/Header.js";
import Fotter from "./common/layout/fotter/Fotter.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Fotter />
    </Router>
  );
}

export default App;
