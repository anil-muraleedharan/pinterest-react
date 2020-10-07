import React from 'react';
import logo from '../images/index-logo.png';
import gitHubLogo from '../images/github.png';
import styled from 'styled-components';

const Logo = styled.img`
  width: 700px;
  height: auto;
`;

const LoginButtonMessage = styled.span`
  font-family: 'RobotoCondensed';
  font-size: 30px;
`;

const GitHubLog = styled.img`
  position: relative;
  top: 10px;
  height: 46px;
  width: 85px;
`;

const Login = styled.a`
  position: relative;
  top: 20px;
  border: 1px solid rgba(180, 180, 180, 0.8);
  width: 400px;
  height: 65px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  text-decoration: none;
  color: black;
  display: inline-block;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.8);
  }
`;

const Container = styled.div`
  position: relative;
  top: 200px;
  height: 500px;
  width: 700px;
  display: inline-block;
  text-align: center;
`;

const IndexPage = styled.div`
  justify-content: center;
  text-align: center;
`;

export default (props) => (
  <IndexPage className='index-page'>
    <Container>
      <Logo src={logo} alt='logo' />
      <Login href={process.env.REACT_APP_LOGIN_REDIRECT}>
        <LoginButtonMessage>Login Using Github</LoginButtonMessage>
        <GitHubLog src={gitHubLogo} alt='github' />
      </Login>
    </Container>
  </IndexPage>
);
