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

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('/api/getMyUserData')
      .then((res) => res.json())
      .then(setUser);
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      <div className='App'>
        {user.isAuth && <Header />}
        <Switch>
          <Route exact path='/login'>
            {user.isAuth ? <Redirect to='/' /> : <IndexPage />}
          </Route>
          <Route exact path='/'>
            {user.isAuth ? <HomePage /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/newPin'>
            {user.isAuth ? <NewPin /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/pin/:id'>
            {user.isAuth ? <Pin /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/user/:id'>
            {user.isAuth ? <UserProfile /> : <Redirect to='/login' />}
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
};

export default App;
