import React from 'react';
import Cards from './Cards';

const splitColumnWise = (list) => {
  const columns = [[], [], [], [], []];
  list.forEach((card, index) => {
    columns[index % 5].push(card);
  });
  return columns;
};

const Dashboard = (props) => {
  const columnsData = splitColumnWise(props.cardsData);
  const columns = columnsData.map((columnData, index) => (
    <Cards cardsData={columnData} key={index + 1} />
  ));
  return <div className='dashboard'>{columns}</div>;
};

export default Dashboard;
