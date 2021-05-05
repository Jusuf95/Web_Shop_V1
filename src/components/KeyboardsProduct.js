import React, { useState } from 'react';
import Menu from './KeyboardsItems';
import Categories from './Categories';
import items from './data1';
import './KeyboardsProduct.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

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
          <h1 className="KeyTitle">GAMING KEYBOARDS</h1>
          <p>A quality keyboard is vital for 
            both work and play. Whether you’re a 
            mechanical purist, a couch gamer, 
            a freak for extra 
            functions or someone who wants 
            it all – we’ve got you covered.</p>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
