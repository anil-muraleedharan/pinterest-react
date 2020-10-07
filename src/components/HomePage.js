import React from 'react';
import Dashboard from './Dashboard';

const HomePage = (props) => (
  <Dashboard dataURL='/api/getAllPins' isHomePage={true} />
);

export default HomePage;
