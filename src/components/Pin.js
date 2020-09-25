import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Like from './Like';

const Pin = (props) => {
  const { id } = useParams();
  const [pinDetails, setPinDetails] = useState({});
  const [likesCount, setLikesCount] = useState(0);
  const {
    imageSrc,
    title,
    description,
    name,
    avatar_url,
    createdAt,
  } = pinDetails;

  useEffect(() => {
    fetch(`/api/getPin/${id}`)
      .then((res) => res.json())
      .then(setPinDetails);
  }, [likesCount]);

  useEffect(() => {
    setLikesCount(pinDetails.likes);
  }, [pinDetails]);

  const addLike = () =>
    fetch('/api/addLike', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(({ likes }) => setLikesCount(likes));

  return (
    <div className='pin'>
      <div className='pin-image-container'>
        <img src={imageSrc} alt={`image_${id}`} className='pin-image' />
      </div>
      <div className='pin-details'>
        <h3 className='pin-title'>{title}</h3>
        <p className='pin-description'>{description}</p>
        <p className='created-time'>
          Created on {new Date(createdAt).toLocaleString()}
        </p>
        <div className='pin-add-details'>
          <div className='pin-creator'>
            <img
              src={avatar_url}
              className='creator-avatar'
              alt='creator-avatar'
            />
            <p className='creator-name'>{name}</p>
          </div>
          <Like likes={likesCount} addLike={addLike} />
        </div>
      </div>
    </div>
  );
};

export default Pin;
