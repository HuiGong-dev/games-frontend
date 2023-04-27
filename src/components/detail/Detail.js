import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Trailer from '../Trailer';
import Info from '../Info';
import Reviews from '../reviews/Reviews';
import { Container } from 'react-bootstrap';

const Detail = ({ getSingleGame, game, reviews, setReviews }) => {
  const params = useParams();
  const steamId = params.steamId;

  useEffect(() => {
    getSingleGame(steamId);
  }, []);

  return (
    <Container className="flex auto-max mt-5 justify-center  max-w-full h-full bg-black">
      <Container className={`flex flex-col auto-max h-full `}>
        <Trailer videoLink={game?.movies[1]} />
        <Info
          name={game?.name}
          genres={game?.genres}
          header={game?.header}
          releaseDate={game?.releaseDate}
        />

        <Reviews
          reviews={reviews}
          setReviews={setReviews}
          steamId={game?.steamId}
        />
      </Container>
    </Container>
  );
};

export default Detail;
