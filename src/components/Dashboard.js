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
  const [pins, setPins] = useState([]);

  useEffect(() => {
    fetch(props.dataURL)
      .then((res) => res.json())
      .then(({ pins }) => setPins(pins));
  }, [props.dataURL]);

  const columnsData = splitColumnWise(pins);
  const columns = columnsData.map((columnData, index) => (
    <Cards cardsData={columnData} key={index + 1} />
  ));
  return <div className={props.className}>{columns}</div>;
};

export default Dashboard;
