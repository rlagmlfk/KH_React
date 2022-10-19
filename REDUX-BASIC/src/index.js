import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import ReduxApp from "./ReduxApp";
import reducer from "./store";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = legacy_createStore(reducer);

// store에 담긴 상태 정보 확인하기
console.log(store.getState());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  </React.StrictMode>
);
