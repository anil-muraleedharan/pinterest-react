import React from 'react';
import { useParams } from 'react-router-dom';
import Dashboard from './Dashboard';

const UserProfile = ({ userData }) => {
  const { id } = useParams();
  return (
    <div>
      <img src={userData.avatar_url} />
      <p>{userData.name}</p>
      <Dashboard userId={id} dataURL='/api/getAllMyPins' />
    </div>
  );
};

export default UserProfile;
