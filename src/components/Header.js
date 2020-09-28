import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import add from '../images/add.png';

const Header = ({ userId }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`/api/getUserData/${userId}`)
      .then((res) => res.json())
      .then(setUser);
  }, []);

  return (
    <div className='header'>
      <Link to='/'>
        <img src={logo} className='logo' alt='logo' />
      </Link>
      <div className='header-left-end'>
        <Link to='/newPin'>
          <img src={add} className='add-icon' alt='add-icon' />
        </Link>
        <Link to={`/user/${userId}`} style={{ textDecoration: 'none' }}>
          <img src={user.avatar_url} className='avatar' alt='avatar' />
        </Link>
      </div>
    </div>
  );
};

export default Header;
