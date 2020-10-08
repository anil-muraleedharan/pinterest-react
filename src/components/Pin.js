import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StyledPinContainer from './StyledPinContainer';
import Like from './Like';

const Pin = (props) => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pinDetails, setPinDetails] = useState({});
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    fetch(`/api/getPin/${id}`)
      .then((res) => res.json())
      .then((details) => {
        setPinDetails(details);
        setIsLoaded(true);
      });
  }, [id, likesCount]);

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
  if (isLoaded) {
    const {
      imageSrc,
      title,
      description,
      name,
      avatar_url,
      createdAt,
      createdBy,
    } = pinDetails;
    return (
      <StyledPinContainer>
        <div className='pin-image-container'>
          <img src={`/${imageSrc}`} alt={`image_${id}`} className='pin-image' />
        </div>
        <div className='pin-details'>
          <h3 className='pin-title'>{title}</h3>
          <p className='pin-description'>{description}</p>
          <p className='created-time'>
            Created on {new Date(createdAt).toLocaleString()}
          </p>
          <div className='pin-add-details'>
            <Link to={`/user/${createdBy}`} style={{ textDecoration: 'none' }}>
              <div className='pin-creator'>
                <img
                  src={avatar_url}
                  className='creator-avatar'
                  alt='creator-avatar'
                />
                <p className='creator-name'>{name}</p>
              </div>
            </Link>
            <Like likes={likesCount} addLike={addLike} />
          </div>
        </div>
      </StyledPinContainer>
    );
  }
  return (
    <div className='pin'>
      <p>Loading...</p>
    </div>
  );
};

export default Pin;
