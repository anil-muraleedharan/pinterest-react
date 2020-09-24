import React from 'react';
import logo from '../images/index-logo.png';
import gitHubLogo from '../images/github.png';

const IndexPage = (props) => (
  <div className='index-page'>
    <div className='container'>
      <img src={logo} alt='logo' className='index-logo' />
      <div className='box'>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=`}
          className='link'
        >
          <div className='login'>
            <span className='text'>Login Using Github</span>
            <img src={gitHubLogo} alt='' className='github' />
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default IndexPage;
