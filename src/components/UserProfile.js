import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from './Dashboard';

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Username = styled.p`
  font-size: 40px;
  font-family: 'RobotoCondensedBold';
  margin: 15px;
`;

const UserCard = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 25px 0;
`;

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
      <UserCard>
        <Avatar src={userData.avatar_url} alt='avatar' />
        <Username>{userData.name}</Username>
      </UserCard>
      <Dashboard dataURL={`/api/getUserPins/${id}`} isHomePage={false} />
    </div>
  );
};

export default UserProfile;
