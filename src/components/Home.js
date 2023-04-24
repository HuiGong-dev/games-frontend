import React from 'react';
import Hero from './hero/Hero';

const Home = ({ games }) => {
  return (
    <div>
      <Hero games={games} />
      <div className="mt-10 bg-white">hi</div>
    </div>
  );
};

export default Home;
