import React from "react";

const VideoDetail = ({ video }) => {
  return (
    <>
      <section>
        <iframe
          type="text/html"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameborder="0"
          allowfullscreen="allowfullscreen"
        ></iframe>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.chnnelTitle}</h3>
        <pre>{video.snippet.description}</pre>
      </section>
    </>
  );
};

export default VideoDetail;
