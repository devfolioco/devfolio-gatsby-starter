import React, { Component } from 'react';
import { Link } from 'gatsby';
import Media from 'react-media';

import { Container } from 'components/global';

import { Nav, NavItem, StyledContainer, NavList, MobileMenu } from './style';

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  handleMenuButtonClick = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  getNavItems = () => (
    <>
      <NavItem>
        <Link to="/about">About</Link>
      </NavItem>
      <NavItem>
        <Link to="/contact">Contact</Link>
      </NavItem>
      <NavItem>
        <Link to="/sponsors">Sponsors</Link>
      </NavItem>
    </>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <div>Logo</div>

          <Media query="(max-width: 991px)">
            {matches =>
              matches ? (
                <>
                  <button onClick={this.handleMenuButtonClick}> = </button>
                </>
              ) : (
                <NavList>{this.getNavItems()}</NavList>
              )
            }
          </Media>
        </StyledContainer>
        <Media query="(max-width: 991px)">
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>
                <NavList mobile>{this.getNavItems()}</NavList>
              </Container>
            </MobileMenu>
          )}
        </Media>
      </Nav>
    );
  }
}

export default Navbar;
