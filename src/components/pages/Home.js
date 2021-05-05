import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Featured from '../Featured';

function Home() {
  return (
    <>
      <HeroSection />
      <Featured />
      <Cards />
      
    </>
  );
}

export default Home;
