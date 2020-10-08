import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';
import add from '../images/add.png';
import UserContext from '../UserContext';
import Logout from './Logout';

const StyledIcon = styled.img`
  width: 40px;
  height: auto;
  padding: 10px;
  border-radius: 50%;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderRightSideContainer = styled.div`
  display: flex;
`;

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <HeaderContainer>
      <Link to='/'>
        <StyledIcon src={logo} alt='logo' />
      </Link>
      <HeaderRightSideContainer>
        <Link to='/newPin'>
          <StyledIcon src={add} alt='add-icon' />
        </Link>
        <Link to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
          <StyledIcon src={user.avatar_url} alt='avatar' />
        </Link>
        <Logout />
      </HeaderRightSideContainer>
    </HeaderContainer>
  );
};

export default Header;
