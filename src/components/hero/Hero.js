import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

const ButtonAndNameContainer = styled.div`
  ${tw`
    relative
    flex 
    flex-col  
    w-auto 
    justify-center
    items-center
    h-full
  `}
`;
const NameContainer = styled.span`
  ${tw`
    flex 
    py-3 
    justify-center 
    text-white 
    items-center 
    text-xl 
    font-extrabold 
    mr-2
  `}
`;
const ButtonContainer = styled.div`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-black
    text-sm
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
    bg-white
    cursor-pointer
    hover:bg-transparent
    hover:text-white
    hover:border-white
  `}
`;

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
              <div className="h-screen bg-black text-white">
                <div
                  className="game-card"
                  style={{ '--img': `url(${game.backgroundRaw}` }}
                >
                  <ButtonAndNameContainer>
                    <NameContainer>
                      <h4>{game.name}</h4>
                    </NameContainer>
                    <ButtonContainer
                      onClick={() => {
                        handleCheckDetail(game.steamId);
                      }}
                    >
                      Check Detail
                    </ButtonContainer>
                  </ButtonAndNameContainer>
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
