import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cards from './Cards';

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
  overflow: scroll;
  height: ${(props) => (props.isHomePage ? '90vh' : '73vh')};
`;

const splitColumnWise = (list, columnCount) => {
  const columns = Array.from(Array(columnCount), () => []);
  list.forEach((card, index) => {
    columns[index % columnCount].push(card);
  });
  return columns;
};

const calculateColumnCount = () => Math.floor(window.innerWidth / 300);

const Dashboard = (props) => {
  const [pins, setPins] = useState([]);
  const [columnCount, setColumnCount] = useState(calculateColumnCount());
  const [columnsData, setColumnsData] = useState([]);

  useEffect(() => {
    fetch(props.dataURL)
      .then((res) => res.json())
      .then(({ pins }) => setPins(pins));
  }, [props.dataURL]);

  useEffect(() => {
    setColumnsData(splitColumnWise(pins, columnCount));
  }, [pins, columnCount]);

  window.addEventListener('resize', () =>
    setColumnCount(calculateColumnCount())
  );

  const columns = columnsData.map((columnData, index) => (
    <Cards cardsData={columnData} key={index + 1} />
  ));

  return <Columns isHomePage={props.isHomePage}>{columns}</Columns>;
};

export default Dashboard;
