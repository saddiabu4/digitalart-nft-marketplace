
import React from 'react';
import Hero from '../components/Hero';
import FeaturedArt from '../components/FeaturedArt';
import CreateSell from '../components/CreateSell';
import PopularArtists from '../components/PopularArtists';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 space-y-32 py-10">
      <Hero />
      <FeaturedArt />
      <CreateSell />
      <PopularArtists />
      <Newsletter />
    </div>
  );
};

export default Home;
