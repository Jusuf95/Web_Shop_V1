import React, { useState } from 'react';
import Menu2 from './HeadsetItems';
import HeadsetCategories from './HeadsetCategories';
import items from './HeadsetData';
import './Headset.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories2, setHeadsetCategories] = useState(allCategories);

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
          <h1 className="headTitle">GAMING HEADSETS</h1>
          <p>Comfortable and durable, but above 
            all optimized for 
            excellent sound and mic quality. 
            That’s how we design each and 
            every one of our headsets. 
            Our range includes everything 
            from in-ear to over-ear
             and includes 7.1, stereo and 
             mobile options.</p>
        </div>
        <HeadsetCategories categories2={categories2} filterItems={filterItems} />
        <Menu2 items={menuItems} />
      </section>
    </main>
  );
}

export default App;
