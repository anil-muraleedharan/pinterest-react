import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = (props) => (
  <div className='header'>
    <Link to='/'>
      <img src={logo} className='logo' />
    </Link>
  </div>
);

export default Header;
