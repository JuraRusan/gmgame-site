import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import Fotter from "./common/fotter/Fotter";
import Header from "./common/header/Header";

import "./App.scss";

function App() {

  // const element = document.getElementById("dynamic");

  // window.addEventListener("scroll", function () {
  //   if (this.scrollY > 2000) {
  //     element.classList.add("main-wrapper-bg-scrolling-color");
  //   } else {
  //     element.classList.remove("main-wrapper-bg-scrolling-color");
  //   }
  // });

  return (
    <Router>
      <div id="dynamic" className="main-wrapper-bg">
        <div className="class-z-index-10000"><Header/></div>
        <div className="class-z-index-1000"><Routes/></div>
        <div className="class-z-index-10000"><Fotter/></div>
      </div>
    </Router>
  );
}

export default App;