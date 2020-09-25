import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const splitColumnWise = (list) => {
  const columns = [[], [], [], [], []];
  list.forEach((card, index) => {
    columns[index % 5].push(card);
  });
  return columns;
};

const Dashboard = (props) => {
  const [pinsData, setPinsData] = useState([]);

  useEffect(() => {
    fetch(props.dataURL)
      .then((res) => res.json())
      .then(setPinsData);
  }, []);

  const columnsData = splitColumnWise(pinsData);
  const columns = columnsData.map((columnData, index) => (
    <Cards cardsData={columnData} key={index + 1} />
  ));
  return <div className={props.className}>{columns}</div>;
};

export default Dashboard;
