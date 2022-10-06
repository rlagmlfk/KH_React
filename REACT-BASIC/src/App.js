import { Route, Routes } from "react-router-dom";
import HackerNews from "./components/HackerNews";
import HackerNewsReple from "./components/HackerNewsReple";
import LoginPage from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ authLogic }) => {
  return (
    <>
    <Routes>
        <Route
          path="/"
          exact={true} 
          element={<LoginPage authLogic={authLogic} />} />
      <Route path="/hackernews" exact={true} element={ <HackerNews />} />
      <Route path="/newsreple/:id" exact={true} element={ <HackerNewsReple />} />
    </Routes>
    </>
  );
}

export default App;
