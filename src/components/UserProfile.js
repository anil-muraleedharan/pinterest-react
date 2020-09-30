import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Dashboard from './Dashboard';

const UserProfile = (props) => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`/api/getUserData/${id}`)
      .then((res) => res.json())
      .then(setUserData);
  }, [id]);

  return (
    <div>
      <div className='profile-header'>
        <img
          src={userData.avatar_url}
          className='profile-avatar'
          alt='avatar'
        />
        <p className='profile-username'>{userData.name}</p>
      </div>
      <Dashboard
        dataURL={`/api/getUserPins/${id}`}
        className='profile-dashboard'
      />
    </div>
  );
};

export default UserProfile;
