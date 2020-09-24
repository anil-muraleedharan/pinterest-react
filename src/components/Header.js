import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import add from '../images/add.png';

const Header = ({ userData }) => {
  if (userData.isAuthenticated) {
    return (
      <div className='header'>
        <div className='header-left-end'>
          <Link to='/'>
            <img src={logo} className='logo' alt='logo' />
          </Link>
          <Link to='/newPin'>
            <img src={add} className='add-icon' alt='add-icon' />
          </Link>
        </div>
        <Link to={`/user/${userData.id}`} style={{ textDecoration: 'none' }}>
          <div className='user-data'>
            <p className='username'>{userData.name}</p>
            <img src={userData.avatar_url} className='avatar' alt='avatar' />
          </div>
        </Link>
      </div>
    );
  }
  return <div></div>;
};

export default Header;
