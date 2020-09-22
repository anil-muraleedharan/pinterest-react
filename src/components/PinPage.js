import React from 'react';

const PinPage = ({ pinData }) => {
  const { id, imageSrc, title, description } = pinData;
  return (
    <div>
      <img src={imageSrc} alt={`image_${id}`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PinPage;
