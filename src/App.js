import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import Header from "./common/layout/header/Header";
import Routes from "./Routes";

function App() {
  return (
      <Router>
        <Header />
        <Routes />
      </Router>
  );
}

export default App;
