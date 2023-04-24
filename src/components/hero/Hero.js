import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material';

const Hero = ({ games }) => {
  const navigate = useNavigate();
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
                    <div className="p-0 m-0 w-[150px]">
                      <Link
                        to={`/detail/${game.movies[0].substring(
                          game.movies[0].length - 11
                        )}`}
                      >
                        <div className="p-2 m-1 bg-green-300 cursor-pointer text-xl hover:bg-sky-500">
                          Check detail
                        </div>
                      </Link>
                    </div>
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
