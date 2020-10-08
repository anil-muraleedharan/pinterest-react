import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from './Card';

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PinLink = styled(Link)`
  display: block;
  width: 250px;
  overflow: hidden;
  border-radius: 12px;
  margin: 20px;
  box-shadow: 0px 0px 4px #ccc;
  &:hover {
    box-shadow: 0px 0px 12px #aaa;
  }
`;

const Cards = (props) => {
  const cards = props.cardsData.map((cardData, index) => (
    <PinLink to={`/pin/${cardData.id}`} key={index + 1}>
      <Card key={cardData.id} cardData={cardData} />
    </PinLink>
  ));
  return <CardsContainer>{cards}</CardsContainer>;
};

export default Cards;
