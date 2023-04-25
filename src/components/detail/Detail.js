import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Trailer from '../trailer/Trailer';

const Detail = ({ getSingleGame, game, reviews, setReviews }) => {
  const params = useParams();
  const steamId = params.steamId;

  useEffect(() => {
    getSingleGame(steamId);
  }, []);
  const youtubeId = game?.movies[0].substring(game.movies[0].length - 11);

  return (
    <div>
      <Trailer youtubeId={youtubeId} />
    </div>
  );
};

export default Detail;
