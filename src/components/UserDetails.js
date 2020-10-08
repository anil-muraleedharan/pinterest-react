import React from 'react';
import { Link } from 'react-router-dom';

const UserDetails = ({ id, name, avatar }) => (
  <Link to={`/user/${id}`} style={{ textDecoration: 'none' }}>
    <div className='pin-creator'>
      <img src={avatar} className='creator-avatar' alt='creator-avatar' />
      <p className='creator-name'>{name}</p>
    </div>
  </Link>
);

export default UserDetails;
