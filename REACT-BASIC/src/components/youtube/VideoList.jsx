import React from "react";
import VideoRow from "./VideoRow";

const VideoList = (props) => {
  const { videos, videoSelect } = props;
  return (
    <>
      <div>
        {videos.map((video) => (
          <VideoRow key={video.id} video={video} videoSelect={videoSelect} />
        ))}
      </div>
    </>
  );
};

export default VideoList;
