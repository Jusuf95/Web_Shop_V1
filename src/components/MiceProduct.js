import React, { useState } from 'react';
import Menu1 from './MicItems';
import MiceCategories from './MiceCategories';
import items from './MiceData';
import './Mice.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories1, setMiceCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our mice feature a reliable build
             with ergonomic form factors and 
             precise sensors. With multi-button, 
             wireless and ambidextrous options in
              the mix, we cater to all 
              gamers and gaming genres.</h2>
          
        </div>
        <MiceCategories categories1={categories1} filterItems={filterItems} />
        <Menu1 items={menuItems} />
      </section>
    </main>
  );
}

export default App;
