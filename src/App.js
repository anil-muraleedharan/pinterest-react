import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Pin from './components/Pin';
import NewPin from './components/NewPin';
import IndexPage from './components/IndexPage';
import UserProfile from './components/UserProfile';

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
          {userData.isAuthenticated ? <HomePage /> : <IndexPage />}
        </Route>
        <Route exact path='/newPin'>
          {userData.isAuthenticated ? <NewPin /> : <Redirect to='/' />}
        </Route>
        <Route exact path='/pin/:id'>
          {userData.isAuthenticated ? <Pin /> : <Redirect to='/' />}
        </Route>
        <Route exact path='/user/:id'>
          {userData.isAuthenticated ? (
            <UserProfile userData={userData} />
          ) : (
            <Redirect to='/' />
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
