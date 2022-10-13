import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HackerFooter from "./HackerFooter";
import HackerHeader from "./HackerHeader";
import VideoList from "./VideoList";

const YoutubeList = ({ authLogic }) => {
  // const userId = window.localStorage.getItem("userId");
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const onLogout = () => {
    console.log("onLogout 호출 성공");
    authLogic.logout();
  };
  useEffect(() => {
    authLogic.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyAmKCupzfgAF7MXqmsW8yE-VcVS2nO29Qo`
      )
      .then((result) => {
        console.log(result);
        console.log(result.data);
        console.log(result.data.items);
        setVideos(result.data.items);
      });
  }, []);
  return (
    <>
      <HackerHeader onLogout={onLogout} />
      <div className="container">
        <div className="page-header">
          <h2>
            Youtube&nbsp;
            <i className="fa-solid fa-angles-right"></i>&nbsp;
            <small>유튜브</small>
          </h2>
          <hr />
        </div>
        <div>
          {videos.map((video) => (
            <VideoList key={video.id} video={video} />
          ))}
        </div>
      </div>
      <HackerFooter />
    </>
  );
};

export default YoutubeList;
