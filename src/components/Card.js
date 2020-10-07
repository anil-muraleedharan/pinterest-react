import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: whitesmoke;
`;

const CardImg = styled.img`
  width: 100%;
`;

const Card = ({ cardData }) => (
  <CardContainer>
    <CardImg src={cardData.imageSrc} alt={`image_${cardData.id}`} />
  </CardContainer>
);

export default Card;
