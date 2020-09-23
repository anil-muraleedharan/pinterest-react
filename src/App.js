import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Pin from './components/Pin';

const App = () => {
  const [pinsData, setPinsData] = useState([]);

  useEffect(() => {
    fetch('/api/getAllPins')
      .then((res) => res.json())
      .then(setPinsData);
  }, []);

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Dashboard cardsData={pinsData} />
        </Route>
        <Route exact path='/pin/:id'>
          <Pin />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
