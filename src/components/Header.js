import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import add from '../images/add.png';

const Header = ({ userData }) => {
  if (userData.isAuthenticated) {
    return (
      <div className='header'>
        <Link to='/'>
          <img src={logo} className='logo' alt='logo' />
        </Link>
        <div className='header-left-end'>
          <Link to='/newPin'>
            <img src={add} className='add-icon' alt='add-icon' />
          </Link>
          <Link to='/myProfile' style={{ textDecoration: 'none' }}>
            <img src={userData.avatar_url} className='avatar' alt='avatar' />
          </Link>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default Header;
