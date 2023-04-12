import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";

import "./App.scss";

function App() {

  return (
    <Router>
      <div id="dynamic" className="main-wrapper-bg">
        <div className="class-z-index-10000-header"><Header/></div>
        <div className="class-z-index-1000"><Routes/></div>
        <div className="class-z-index-10000-footer"><Footer/></div>
      </div>
    </Router>
  );
}

export default App;