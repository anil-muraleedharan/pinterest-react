import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../UserContext';
import { LogoutButton } from './StyledButton';

const Logout = (props) => {
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const handleClick = () =>
    fetch('/api/logout').then(() => {
      setUser({ isAuth: false });
      history.push('/login');
    });
  return <LogoutButton onClick={handleClick}>Logout</LogoutButton>;
};

export default Logout;
