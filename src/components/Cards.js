import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const Cards = (props) => {
  const cards = props.cardsData.map((cardData, index) => (
    <Link to={`/pin/${cardData.id}`} className='pinLink' key={index + 1}>
      <Card key={cardData.id} cardData={cardData} />
    </Link>
  ));
  return <div className='cards'>{cards}</div>;
};

export default Cards;
