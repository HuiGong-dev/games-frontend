import React from 'react';
import ReactPlayer from 'react-player';

const Trailer = ({ youtubeId }) => {
  const baseURL = 'https://www.youtube.com/watch?v=';
  return (
    <div className="h-[90vh] border-2 border-white">
      {youtubeId != null ? (
        <ReactPlayer
          controls={true}
          playing={true}
          url={`${baseURL}${youtubeId}`}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
};

export default Trailer;
