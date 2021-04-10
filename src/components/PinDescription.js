import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.p`
  font-size: 19px;
  line-height: 28px;
  opacity: 0.9;
  margin: 5px 0;
  overflow: wrap;
  font-family: 'RobotoCondensed';
`;

const StyledDescriptionPlaceholder = styled(StyledDescription)`
  color: #ccc;
`;

const PinDescription = ({ description }) =>
  description ? (
    <StyledDescription>{description}</StyledDescription>
  ) : (
    <StyledDescriptionPlaceholder>
      No description available...
    </StyledDescriptionPlaceholder>
  );

export default PinDescription;
