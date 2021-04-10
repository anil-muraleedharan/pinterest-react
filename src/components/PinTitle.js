import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h3`
  font-size: 35px;
  margin: 35px 0 10px 0;
  overflow: wrap;
  font-family: 'RobotoCondensedBold';
`;

const StyledTitlePlaceholder = styled(StyledTitle)`
  color: #ccc;
`;

const PinTitle = ({ title }) =>
  title ? (
    <StyledTitle>{title}</StyledTitle>
  ) : (
    <StyledTitlePlaceholder>No Title available...</StyledTitlePlaceholder>
  );

export default PinTitle;
