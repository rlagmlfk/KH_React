import React from "react";
import { Link } from "react-router-dom";

function VideoList(props) {
  const { video } = props;
  return (
    <>
      <h2>
        <Link to={"/videodetail/" + video.id} className="nav-link">
          {video.snippet.title}
        </Link>
      </h2>
    </>
  );
}

export default VideoList;
