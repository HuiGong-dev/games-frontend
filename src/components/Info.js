import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const InfoContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    my-5
    justify-center
    p-5
    border 
    rounded-md 
    drop-shadow-md 
    bg-neutral-900 
    border-neutral-900
  `}
`;

const UnderContainer = styled.div`
  ${tw`
  h-full
  w-full
  flex 
  flex-row
  p-2 
  border 
  rounded-md  
  drop-shadow-md 
  bg-neutral-900 
  border-neutral-900
`}
  @media (max-width: 900px) {
    ${tw`
      flex
      flex-col
      justify-center
    `}
  }
`;

const UnderLeftContainer = styled.div`
  ${tw`
    h-auto
    w-auto
    max-w-md

  `}
`;
const UnderRightContainer = styled.div`
  ${tw`
    h-auto
    w-auto
    flex 
    flex-col 
    px-10 
    pt-5
    justify-start
    text-xl
  `}
  @media (max-width: 900px) {
    ${tw`
      px-0
      text-lg
    `}
  }
`;

const Info = ({ name, genres, header, releaseDate }) => {
  return (
    <InfoContainer>
      <strong className="text-xl mb-2 mx-2 lg:text-2xl text-white hover:text-electricblue">
        Game Information
      </strong>
      <UnderContainer>
        <UnderLeftContainer>
          {header != null ? <img src={header} alt="game poster" /> : 'name'}
        </UnderLeftContainer>
        <UnderRightContainer>
          <div className="flex flex-row items-center">
            <strong className="pr-2 text-electricblue ">Name:</strong> {name}
          </div>
          <div className="flex flex-row items-center">
            <strong className="pr-2 text-electricblue ">Genre:</strong>{' '}
            {genres?.map((genre, index) => {
              return (
                <span key={index} className="ml-2">
                  {genre}
                </span>
              );
            })}
          </div>
          <div className="flex flex-row items-center">
            <strong className="pr-2 text-electricblue ">Release Date:</strong>{' '}
            {releaseDate}
          </div>
        </UnderRightContainer>
      </UnderContainer>
    </InfoContainer>
  );
};

export default Info;
