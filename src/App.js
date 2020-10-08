import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Pin from './components/Pin';
import NewPin from './components/NewPin';
import IndexPage from './components/IndexPage';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

const AppContanier = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('/api/getMyUserData')
      .then((res) => res.json())
      .then(setUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppContanier>
        {user.isAuth && <Header />}
        <Switch>
          <PublicRoute exact path='/login' component={IndexPage} />
          <PrivateRoute exact path='/' component={HomePage} />
          <PrivateRoute exact path='/newPin' component={NewPin} />
          <PrivateRoute exact path='/pin/:id' component={Pin} />
          <PrivateRoute exact path='/user/:id' component={UserProfile} />
        </Switch>
      </AppContanier>
    </UserContext.Provider>
  );
};

export default App;
