import React from "react";
import ReduxHeader from "./components/include/ReduxHeader";
import ReduxBottom from "./components/include/ReduxBottom";
import MainPage from "./components/page/MainPage";

const ReduxApp = (props) => {
  return (
    <div className="container">
      <ReduxHeader />
      <h1>React Redux 실습</h1>
      <MainPage />
      <ReduxBottom />
    </div>
  );
};

export default ReduxApp;
