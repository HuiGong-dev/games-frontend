import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Hero = ({ games }) => {
  const navigate = useNavigate();

  const handleCheckDetail = (steamId) => {
    navigate(`/detail/${steamId}`);
  };
  return (
    <div className="w-screen bg-black">
      <Carousel>
        {games?.map((game) => {
          return (
            <Paper key={game.steamId}>
              <div className="h-[950px] bg-black text-white">
                <div
                  className="game-card"
                  style={{ '--img': `url(${game.backgroundRaw}` }}
                >
                  <div className="absolute flex justify-evenly bottom-[50px] w-full">
                    <div className="flex text-white items-center text-xl">
                      <h4>{game.name}</h4>
                    </div>
                    <button
                      className="rounded-full border-solid border-2 border-white px-3 py-1 cursor-pointer"
                      onClick={() => {
                        handleCheckDetail(game.steamId);
                      }}
                    >
                      Check Detail
                    </button>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
