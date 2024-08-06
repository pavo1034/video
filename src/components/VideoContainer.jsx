import React from "react";
import { imgPoster, video1 } from "./utils/constant";

const VideoContainer = () => {
  return (
    <div className="w-full pl-20 mt-20">
      <video width="900" height="500" loop autoPlay muted className="rounded-2xl">
        <source src={video1} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoContainer;
