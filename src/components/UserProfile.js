import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    fetch('/api/getAllUserPins')
      .then((res) => res.json())
      .then(setPinsData);
  }, []);

  const columnsData = splitColumnWise(pinsData);
  const columns = columnsData.map((columnData, index) => (
    <Cards cardsData={columnData} key={index + 1} />
  ));
  return <div className='dashboard'>{columns}</div>;
};

const UserProfile = ({ userData }) => {
  const { id } = useParams();
  return (
    <div>
      <img src={userData.avatar_url} />
      <p>{userData.name}</p>
      <Dashboard userId={id} />
    </div>
  );
};

export default UserProfile;
