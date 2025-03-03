import React from "react";
import videoSrc from "../../assets/img/video/finest video.mp4";

function CompanyVideo() {
  return (
    <>
      <div className="w-full flex justify-center pb-5">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          controls
          className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
        />
      </div>
    </>
  );
}

export default CompanyVideo;
