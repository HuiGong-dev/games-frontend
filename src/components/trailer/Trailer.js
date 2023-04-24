import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Trailer = () => {
  let params = useParams();
  let key = params.trailerId;
  const baseURL = 'https://www.youtube.com/watch?v=';
  return (
    <div className="h-[90vh] border-2 border-white">
      {key != null ? (
        <ReactPlayer
          controls={true}
          playing={true}
          url={`${baseURL}${key}`}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
};

export default Trailer;
