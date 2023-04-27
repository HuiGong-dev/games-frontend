import React from 'react';
import Hero from './hero/Hero';

const Home = ({ games }) => {
  return (
    <div>
      <Hero games={games} />
    </div>
  );
};

export default Home;
