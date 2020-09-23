import React from 'react';

const Pin = ({ pinData }) => {
  const { id, imageSrc, title, description } = pinData;
  return (
    <div className='pin'>
      <img src={imageSrc} alt={`image_${id}`} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Pin;
