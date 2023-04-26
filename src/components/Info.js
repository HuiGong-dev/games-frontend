import React from 'react';

const Info = ({ name, genres, header, releaseDate }) => {
  return (
    <div className="flex w-1/3 flex-col p-2 justify-center items-center border rounded-md mx-2 drop-shadow-md bg-neutral-900 border-neutral-900">
      <strong className="text-xl px-5 pb-2">Game Information</strong>
      <div className="flex w-full flex-col p-2 justify-normal  border rounded-md  drop-shadow-md bg-neutral-900 border-neutral-900">
        {header != null ? <img src={header} alt="game poster" /> : 'name'}
        <div className="flex flex-col px-5 py-5 justify-normal">
          <div className="flex flex-row ">
            <strong className="pr-2">Name:</strong> {name}
          </div>
          <div className="flex flex-row py-2">
            <strong className="pr-2">Genre:</strong>{' '}
            {genres?.map((genre, index) => {
              return (
                <span key={index} className="pl-1">
                  {genre}
                </span>
              );
            })}
          </div>
          <div className="flex flex-row py-2">
            <strong className="pr-2 ">Release Date:</strong> {releaseDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
