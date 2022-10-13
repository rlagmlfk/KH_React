import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VideoDetail = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [thumbnails, setThumbnails] = useState([]);
  useEffect(() => {});
  return (
    <>
      <h2>비디오 디테일</h2>
    </>
  );
};

export default VideoDetail;
