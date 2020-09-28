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
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('/api/isUserAuth')
      .then((res) => res.json())
      .then(setUser);
  }, []);

  return (
    <div className='App'>
      {user.isUserAuth && <Header userId={user.id} />}
      <Switch>
        <Route exact path='/'>
          {user.isUserAuth ? <HomePage /> : <IndexPage />}
        </Route>
        <Route exact path='/newPin'>
          {user.isUserAuth ? <NewPin /> : <Redirect to='/' />}
        </Route>
        <Route exact path='/pin/:id'>
          {user.isUserAuth ? <Pin /> : <Redirect to='/' />}
        </Route>
        <Route exact path='/user/:id'>
          {user.isUserAuth ? <UserProfile /> : <Redirect to='/' />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
