import React from 'react';
import Dashboard from './Dashboard';

const HomePage = (props) => (
  <Dashboard dataURL='/api/getAllPins' className='home-dashboard' />
);

export default HomePage;
