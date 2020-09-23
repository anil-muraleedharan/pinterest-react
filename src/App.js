import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import PinPage from './components/PinPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';

const PinPageRoute = ({ pinsData }) => {
  const { id } = useParams();
  return <PinPage pinData={pinsData.find((pinData) => pinData.id === +id)} />;
};

const App = () => {
  const [pinsData, setPinsData] = useState([]);
  console.log(pinsData);

  useEffect(() => {
    fetch('/api/getAllPins')
      .then((res) => res.json())
      .then((allPinsData) => setPinsData(allPinsData));
  }, []);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Dashboard cardsData={pinsData} />
          </Route>
          <Route exact path='/pin/:id'>
            <PinPageRoute pinsData={pinsData} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
