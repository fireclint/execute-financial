import React, { useRef, useState } from "react";
import video from "./images/video.mp4";
import "./Video.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

function Video() {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video" id="video">
      <video
        src={video}
        ref={vidRef}
        type="video/mp4"
        Loop
        muted
      />
      <div className="app__video-overlay">
        <div
          className="app__video-overlay_circle"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Video;
