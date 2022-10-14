import React from "react";
import { VRLI, VRIMG, VRVIDEODIV, VITITLE } from "../styles/YoutubeStyle";

const VideoRow = ({ video, videoSelect }) => {
  return (
    <>
      <VRLI onClick={() => videoSelect(video)}>
        <VRVIDEODIV>
          <VRIMG
            src={video.snippet.thumbnails.medium.url}
            alt="video thumbnail"
          />
          <VITITLE>
            <p>{video.snippet.title}</p>
            <p>{video.snippet.channelTitle}</p>
          </VITITLE>
        </VRVIDEODIV>
      </VRLI>
    </>
  );
};

export default VideoRow;
