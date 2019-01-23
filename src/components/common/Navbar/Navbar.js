import React, { Component } from 'react';
import Media from 'react-media';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from 'components/global';
import { Nav, NavItem, StyledContainer, NavList, MobileMenu } from './style';

const NAV_ITEMS = ['About', 'Sponsors', 'FAQ'];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  );

  getNavItems = () => (
    <>
      {NAV_ITEMS.map(navItem => (
        <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
      ))}
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
                  <button onClick={this.toggleMobileMenu}> = </button>
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
