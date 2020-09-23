import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Pin from './components/Pin';
import { Switch, Route, useParams } from 'react-router-dom';

const PinPageRoute = ({ pinsData }) => {
  const { id } = useParams();
  return <Pin pinData={pinsData.find((pinData) => pinData.id === +id)} />;
};

const App = () => {
  const [pinsData, setPinsData] = useState([]);

  useEffect(() => {
    fetch('/api/getAllPins')
      .then((res) => res.json())
      .then((allPinsData) => setPinsData(allPinsData));
  }, []);

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Dashboard cardsData={pinsData} />
        </Route>
        <Route exact path='/pin/:id'>
          <PinPageRoute pinsData={pinsData} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
