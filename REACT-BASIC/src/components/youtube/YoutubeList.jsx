import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HackerFooter from "../page/HackerFooter";
import HackerHeader from "../page/HackerHeader";
import { YOULI } from "../styles/YoutubeStyle";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const YoutubeList = ({ authLogic }) => {
  // const userId = window.localStorage.getItem("userId");
  const key = process.env.REACT_APP_YOUTUBE_APIKEY;
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  // 비디오를 선택하면 호출할 함수 구현
  const videoSelect = (video) => {
    console.log(video);
    setSelectedVideo(video);
  };
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
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`
      )
      .then((result) => {
        console.log(result);
        console.log(result.data);
        console.log(result.data.items);
        setVideos(result.data.items);
      });
  }, []);
  // 검색 버튼 클릭하면 인터셉트
  const youtubeSearch = (event) => {
    console.log("검색버튼 클릭");
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${key}&type=video`
      )
      .then((result) => result.data)
      .then(
        (data) => data.items.map((item) => ({ ...item, id: item.id.videoId })) // 얕은 복사하기 - spread연산자
      )
      .then((items) => {
        console.log(items);
        setVideos(items);
        setSelectedVideo(null);
      })
      .catch((error) => console.log("error", error));
  };
  const onChangeInput = (event) => {
    console.log(
      "키보드를 누를때 마다 useState에 초기화 하기" + event.target.value
    );
    setKeyword(event.target.value);
  };
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
          <YOULI>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="검색어를 입력하세요"
                aria-label="검색"
                name="keyword"
                onChange={onChangeInput}
                onKeyPress={youtubeSearch}
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-danger" onClick={youtubeSearch}>
                검색
              </Button>
            </InputGroup>
          </YOULI>
          {selectedVideo && (
            <div>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
        </div>
        <VideoList videos={videos} videoSelect={videoSelect} />
      </div>
      <HackerFooter />
    </>
  );
};

export default YoutubeList;
