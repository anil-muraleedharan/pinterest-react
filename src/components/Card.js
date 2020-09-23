import React from 'react';

const Card = ({ cardData }) => {
  return (
    <div className='card'>
      <img src={cardData.imageSrc} alt={`image_${cardData.id}`} />
    </div>
  );
};

export default Card;
