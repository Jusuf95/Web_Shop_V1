import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Keyboards from './components/pages/Keyboards';
import Mic from './components/pages/Mic';
import Headset from './components/pages/Headset';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/keyboards' component={Keyboards} />
          <Route path='/mic' component={Mic} />
          <Route path='/headset' component={Headset} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
