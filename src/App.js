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
        <Header/>
        <Routes/>
        <Fotter/>
      </div>
    </Router>
  );
}

export default App;
