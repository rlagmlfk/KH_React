import "./App.css";
import Header from "./components/include/Header";
import Bottom from "./components/include/Bottom";

function App() {
  return (
    <div className="container">
      <Header />
      <h1>Hello Redux</h1>
      <Bottom />
    </div>
  );
}

export default App;
