import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import add from '../images/add.png';

const Header = (props) => (
  <div className='header'>
    <Link to='/'>
      <img src={logo} className='logo' />
    </Link>
    <Link to='/newPin'>
      <img src={add} className='add-icon' />
    </Link>
  </div>
);

export default Header;
