import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.scss";

const DEFAULT_STATE = {
  lang: {},
};

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "ADD_LANG":
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
