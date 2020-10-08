import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 50px 30px 0;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Name = styled.p`
  color: black;
  font-size: 24px;
  margin: 0px;
  opacity: 0.8;
  font-family: 'RobotoCondensed';
  font-weight: bolder;
`;

const UserDetails = ({ id, name, avatar }) => (
  <Link to={`/user/${id}`} style={{ textDecoration: 'none' }}>
    <Container>
      <Avatar src={avatar} alt='creator-avatar' />
      <Name className='creator-name'>{name}</Name>
    </Container>
  </Link>
);

export default UserDetails;
