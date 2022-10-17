import "./App.css";
import Header from "./components/include/Header";
import Bottom from "./components/include/Bottom";
import KaKaoMapTest from "./components/kakao/KaKaoMapTest";
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  return (
    <div className="container">
      <Header number={number} />
      <h1>Hello Redux</h1>
      <KaKaoMapTest />
      <Bottom increase={increase} decrease={decrease} />
    </div>
  );
};

export default App;
