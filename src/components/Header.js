import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import add from '../images/add.png';
import UserContext from '../UserContext';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='header'>
      <Link to='/'>
        <img src={logo} className='logo' alt='logo' />
      </Link>
      <div className='header-left-end'>
        <Link to='/newPin'>
          <img src={add} className='add-icon' alt='add-icon' />
        </Link>
        <Link to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
          <img src={user.avatar_url} className='avatar' alt='avatar' />
        </Link>
      </div>
    </div>
  );
};

export default Header;
