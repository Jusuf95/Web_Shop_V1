import React from 'react';

const KeyboardsItems = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, desc1, desc2, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              
              <ul class="item-text">
               <li> {desc}</li>
               <li> {desc1}</li>
               <li> {desc2}</li>
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default KeyboardsItems;