import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Pin from './components/Pin';
import NewPin from './components/NewPin';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Dashboard />
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
