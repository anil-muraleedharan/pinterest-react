import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../UserContext';

const Logout = (props) => {
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const handleClick = () =>
    fetch('/api/logout').then(() => {
      setUser({ isAuth: false });
      history.push('/login');
    });
  return (
    <button className='button logout' onClick={handleClick}>
      Logout
    </button>
  );
};

export default Logout;
