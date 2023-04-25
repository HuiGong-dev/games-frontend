import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Trailer from '../Trailer';
import Info from '../Info';
import Reviews from '../reviews/Reviews';

const Detail = ({ getSingleGame, game, reviews, setReviews }) => {
  const params = useParams();
  const steamId = params.steamId;

  useEffect(() => {
    getSingleGame(steamId);
  }, [steamId]);

  return (
    <div className={`flex flex-col bg-no-repeat w-full h-full `}>
      <Trailer videoLink={game?.movies[0]} />
      <Info />
      <Reviews />
    </div>
  );
};

export default Detail;
