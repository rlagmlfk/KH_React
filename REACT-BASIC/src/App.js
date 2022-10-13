import { Route, Routes } from "react-router-dom";
import HackerNews from "./components/HackerNews";
import HackerNewsReple from "./components/HackerNewsReple";
import LoginPage from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import DeptList from "./components/DeptList";
import "./dept.css";
import DeptDetail from "./components/DeptDetail";
import YoutubeList from "./components/YoutubeList";
import VideoDetail from "./components/VideoDetail";

const App = ({ authLogic, pictureUpload }) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact={true}
          element={<LoginPage authLogic={authLogic} />}
        />
        <Route
          path="/hackernews/:userId"
          exact={true}
          element={
            <HackerNews authLogic={authLogic} pictureUpload={pictureUpload} />
          }
        />
        <Route
          path="/newsreple/:id"
          exact={true}
          element={<HackerNewsReple />}
        />
        <Route
          path="/youtube"
          exact={true}
          element={<YoutubeList authLogic={authLogic} />}
        />
        <Route
          path="/videodetail/:id"
          exact={true}
          element={<VideoDetail authLogic={authLogic} />}
        />
        <Route
          path="/dept"
          exact={true}
          element={
            <DeptList authLogic={authLogic} pictureUpload={pictureUpload} />
          }
        />
        <Route
          path="/deptdetail/:deptno"
          exact={true}
          element={<DeptDetail />}
        />
      </Routes>
    </>
  );
};

export default App;
