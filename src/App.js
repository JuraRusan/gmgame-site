import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";

import "./App.scss";

function App() {
  window.onscroll = function () {
    let header = document.getElementById("header");
    if (window.pageYOffset > 0) {
      header.classList.add("sticky-header");
    } else {
      header.classList.remove("sticky-header");
    }
  };

  return (
    <Router>
      <div id="dynamic" className="main-wrapper-bg">
        <div className="class-z-index-10000-header" id="header">
          <Header />
        </div>
        <div className="class-z-index-1000">
          <Routes />
        </div>
        <div className="class-z-index-10000-footer">
          <Footer />
        </div>
      </div>
      <div id="particlesDiv" className="particlesDiv"></div>
    </Router>
  );
}

export default App;
