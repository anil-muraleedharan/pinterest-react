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
      <img src={userData.avatar_url} />
      <p>{userData.name}</p>
      <Dashboard userId={userData.id} dataURL='/api/getAllMyPins' />
    </div>
  );
};

export default UserProfile;
