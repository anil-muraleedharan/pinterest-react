import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';

const UserProfile = (props) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('/api/getUserData')
      .then((res) => res.json())
      .then(setUserData);
  }, []);

  return (
    <div>
      <div className='profile-header'>
        <img src={userData.avatar_url} className='profile-avatar' />
        <p className='profile-username'>{userData.name}</p>
      </div>
      <Dashboard
        userId={userData.id}
        dataURL='/api/getAllMyPins'
        className='profile-dashboard'
      />
    </div>
  );
};

export default UserProfile;
