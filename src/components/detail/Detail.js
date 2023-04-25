import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/axiosConfig';
import Trailer from '../Trailer';
import Info from '../Info';
import Reviews from '../reviews/Reviews';

const Detail = ({ getSingleGame, game, reviews, setReviews }) => {
  const params = useParams();
  const steamId = params.steamId;

  useEffect(() => {
    getSingleGame(steamId);
  }, []);

  return (
    <div className="flex justify-center">
      <div className={`flex flex-col w-2/3 bg-neutral-950 `}>
        <div className="flex flex-row content-start justify-between">
          <Trailer videoLink={game?.movies[0]} />
          <Info
            name={game?.name}
            genres={game?.genres}
            header={game?.header}
            releaseDate={game?.releaseDate}
          />
        </div>

        <Reviews reviews={game?.reviewIds} />
      </div>
    </div>
  );
};

export default Detail;
