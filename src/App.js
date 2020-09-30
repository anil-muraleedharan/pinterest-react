import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Pin from './components/Pin';
import NewPin from './components/NewPin';
import IndexPage from './components/IndexPage';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('/api/getMyUserData')
      .then((res) => res.json())
      .then(setUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='App'>
        {user.isAuth && <Header />}
        <Switch>
          <PublicRoute exact path='/login' component={IndexPage} />
          <PrivateRoute exact path='/' component={HomePage} />
          <PrivateRoute exact path='/newPin' component={NewPin} />
          <PrivateRoute exact path='/pin/:id' component={Pin} />
          <PrivateRoute exact path='/user/:id' component={UserProfile} />
        </Switch>
      </div>
    </UserContext.Provider>
  );
};

export default App;
