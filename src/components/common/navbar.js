import React, { Component } from 'react';

import { Container } from '@components/global';
import {
  Nav,
  LogoContainer,
  StyledContainer,
} from './Navbar/style';

import { ReactComponent as DevfolioLogo } from '@images/devfolio-white.svg';
import GatsbyLogo from '@images/gatsby.png';

class IntroGatsbyNavbar extends Component {

  render() {
    return (
      <Nav {...this.props}>
        <StyledContainer>
          <a href="https://devfolio.co" target='blank' >
            <LogoContainer aria-label="Devfolio Logo" >
                <DevfolioLogo aria-hidden="true" />
            </LogoContainer>
          </a>
          <Container style={{flex: 1}}></Container>
          <a href="https://www.gatsbyjs.com/" target='blank' >
            <div className='container'>
                <img alt="Gatsby Logo" src={GatsbyLogo} aria-hidden="true" height='60'  />
            </div>
          </a>
          <Container style={{flex: 20}}></Container> 
        </StyledContainer>
        
      </Nav>
    );
  }
}

export default IntroGatsbyNavbar;