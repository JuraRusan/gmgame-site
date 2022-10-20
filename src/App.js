import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import Fotter from "./common/fotter/Fotter";
import Header from "./common/header/Header";

import "./App.scss";

function App() {

  window.onscroll = function () {
    myFunction()
  };

  function myFunction() {
    if (document.documentElement.scrollTop > 3500) {
      document.getElementById("dynamic").className = "main-wrapper-bg-scrolling-color";
    } else {
      document.getElementById("dynamic").className = "main-wrapper-bg";
    }
  }

  return (
    <Router>
      <div id="dynamic" className="main-wrapper-bg">
        <div className="class-z-index-10000-header"><Header/></div>
        <div className="class-z-index-1000"><Routes/></div>
        <div className="class-z-index-10000-fotter"><Fotter/></div>
      </div>
    </Router>
  );
}

export default App;