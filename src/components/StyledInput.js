import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  border-bottom: solid 2px #333;
  margin: 30px 0 5px 0;
  width: 80%;
  &:focus {
    outline: none;
  }
`;

const TitleInput = styled(StyledInput)`
  font-size: 35px;
  margin: 35px 0 10px 0;
  font-family: 'RobotoCondensedBold';
`;

const DescriptionInput = styled(StyledInput)`
  font-size: 19px;
  line-height: 28px;
  opacity: 0.9;
  margin: 5px 0;
  font-family: 'RobotoCondensed';
`;

export { TitleInput, DescriptionInput };
