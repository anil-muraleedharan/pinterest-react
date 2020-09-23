import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pin = (props) => {
  const { id } = useParams();
  const [pinDetails, setPinDetails] = useState({});
  const { imageSrc, title, description } = pinDetails;

  useEffect(() => {
    fetch(`/api/getPin/${id}`)
      .then((res) => res.json())
      .then(setPinDetails);
  }, []);

  return (
    <div className='pin'>
      <div className='pin-image-container'>
        <img src={imageSrc} alt={`image_${id}`} className='pin-image' />
      </div>
      <div className='pin-details'>
        <h3 className='pin-title'>{title}</h3>
        <p className='pin-description'>{description}</p>
      </div>
    </div>
  );
};

export default Pin;
