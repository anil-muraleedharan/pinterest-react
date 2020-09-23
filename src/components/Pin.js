import React from 'react';

const Pin = ({ pinData }) => {
  const { id, imageSrc, title, description } = pinData;
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
