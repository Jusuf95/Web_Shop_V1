import React from 'react';
import '../App.css';

import './HeroSection.css';

function HeroSection() {
  return (
    <section className='hero'>
      <h1>FLIP THE <span>SWITCH</span></h1>
      <video autoPlay loop muted>
      <source src='https://cdn.shopify.com/s/files/1/0508/6747/0494/files/Magma_FHD_v2.mp4?v=1619699838'  />
      </video>
    </section>
  );
}

export default HeroSection;
