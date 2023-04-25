import React from 'react';
import ReactPlayer from 'react-player';

const Trailer = ({ videoLink }) => {
  return (
    <div className=" flex justify-center border border-black drop-shadow-md ">
      <div className="h-[500px] w-[900px] p-2">
        {videoLink != null ? (
          <ReactPlayer
            controls={true}
            playing={true}
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
