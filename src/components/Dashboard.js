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
  return <Columns isHomePage={props.isHomePage}>{columns}</Columns>;
};

export default Dashboard;
