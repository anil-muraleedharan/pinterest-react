import React from 'react';

const Pin = ({ pinData }) => {
  return (
    <div className='pin'>
      <img src={pinData.imageSrc} />
    </div>
  );
};

export default Pin;
