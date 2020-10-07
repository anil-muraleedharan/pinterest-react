import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #e60023;
  color: white;
  font-family: 'RobotoCondensedBold';
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LogoutButton = styled(StyledButton)`
  margin: 15px;
`;

const AddPinButton = styled(StyledButton)`
  margin: 30px 0;
`;

export { LogoutButton, AddPinButton };
