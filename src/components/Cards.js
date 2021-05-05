import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>      
      <h1>At ROCCAT, we're passionate about developing premium gaming hardware that makes you play better. German engineering since 2007.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src='images/img-1.jpg'
              text='Vulcan Pro Optical RGB Gaming Keyboard'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Elo 7.1 USB Surround Sound RGB Gaming Headset'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
