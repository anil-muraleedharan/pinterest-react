import React from 'react';
import Pin from './Pin';
import { Link } from 'react-router-dom';

const Pins = (props) => {
  const pins = props.pinsData.map((pinData, index) => (
    <Link to={`/pin/${pinData.id}`} className='pinLink' key={index + 1}>
      <Pin key={pinData.id} pinData={pinData} />
    </Link>
  ));
  return <div>{pins}</div>;
};

export default Pins;
