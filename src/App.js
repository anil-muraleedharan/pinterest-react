import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Pin from './components/Pin';
import NewPin from './components/NewPin';
import IndexPage from './components/IndexPage';

const App = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('/api/getUserData')
      .then((res) => res.json())
      .then(setUserData);
  }, []);

  return (
    <div className='App'>
      <Header userData={userData} />
      <Switch>
        <Route exact path='/'>
          {userData.isAuthenticated ? <Dashboard /> : <IndexPage />}
        </Route>
        <Route exact path='/newPin'>
          <NewPin />
        </Route>
        <Route exact path='/pin/:id'>
          <Pin />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
