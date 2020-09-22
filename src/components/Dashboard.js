import React from 'react';
import Pins from './Pins';

const splitColumnWise = (list) => {
  const columns = [[], [], [], [], []];
  list.forEach((pinData, index) => {
    columns[index % 5].push(pinData);
  });
  return columns;
};

const Dashboard = (props) => {
  const columnsData = splitColumnWise(props.pinsData);
  const columns = columnsData.map((columnData, index) => (
    <Pins pinsData={columnData} key={index + 1} />
  ));
  return <div className='dashboard'>{columns}</div>;
};

export default Dashboard;
