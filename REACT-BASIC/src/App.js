import { Route, Routes } from "react-router-dom";
import HackerNews from "./components/HackerNews";
import HackerNewsReple from "./components/HackerNewsReple";
import LoginPage from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import DeptList from "./components/DeptList";

const App = ({ authLogic, pictureUpload }) => {
  return (
    <>
    <Routes>
        <Route
          path="/"
          exact={true} 
          element={<LoginPage authLogic={authLogic} />} />
        <Route path="/hackernews/:userId"
          exact={true}
          element={<HackerNews authLogic={authLogic} pictureUpload={pictureUpload} />} />
        <Route path="/newsreple/:id"
          exact={true}
          element={<HackerNewsReple />} />
        <Route path="/dept"
          exact={true}
          element={<DeptList authLogic={authLogic} />} />
    </Routes>
    </>
  );
}

export default App;
