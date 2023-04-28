import React from 'react';
import ReactPlayer from 'react-player';

const Trailer = ({ videoLink }) => {
  return (
    <div className=" flex h-max-2/3 w-auto justify-center  drop-shadow-md ">
      <div className="w-full h-full p-2">
        {videoLink != null ? (
          <ReactPlayer
            controls={true}
            playing={true}
            muted={true}
            url={videoLink}
            width="100%"
            height="100%"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Trailer;
