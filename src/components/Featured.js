import React from 'react';
import './Featured.css';

function Featured() {
  return (
    <section className='featured'>
       <div className='item'>
        <img src='/images/tastatura.png' />
            <h2>VULCAN TKL PRO</h2>
            <p>Tenkeyless form factor Titan Switch 
              Optical AIMO intelligent 
              lighting engine Mixer-style
               media controls Detachable braided USB-C cable</p>
        </div>

        <div className='item'>
            <img src='/images/mis.png' />
            <h2>BURST PRO</h2>
            <p>Extreme lightweight shell – only 68g 
              Titan Switch Optical speed & precision 
              PhantomFlexTM cable virtually 
              disappears Heat-treated pure PTFE glides</p>
        </div>
        
        <div className='item'>
        <img src='/images/slusalice.png' />
            <h2>ELO 7.1 AIR</h2>
            <p>Self-Adjusting Metal Headband 
              Glasses Friendly Memory Foam 
              Cushions Supreme stereo sound 
              Crystal clear TruSpeak mic 
              technology Cross-platform</p>
        </div>
    </section>
    
  );
}

export default Featured;