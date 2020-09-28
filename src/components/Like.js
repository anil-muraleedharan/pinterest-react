import React from 'react';
import likeIcon from '../images/like.png';

const Like = (props) => {
  const message = `${props.likes} ${props.likes === 1 ? 'Like' : 'Likes'}`;
  return (
    <div className='likes-container' onClick={() => props.addLike()}>
      <img src={likeIcon} className='like-icon' alt='like' />
      <p className='likes-count'>{message}</p>
    </div>
  );
};

export default Like;
