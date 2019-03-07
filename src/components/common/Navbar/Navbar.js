import React, { Component } from 'react';
import Media from 'react-media';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
} from './style';

const NAV_ITEMS = ['About', 'Gallery', 'FAQ'];

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

  getNavList = (mobile = false) => (
    <NavListWrapper>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
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
                <>{this.getNavList()}</>
              )
            }
          </Media>
        </StyledContainer>
        <Media query="(max-width: 991px)">
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList(true)}</Container>
            </MobileMenu>
          )}
        </Media>
      </Nav>
    );
  }
}

export default Navbar;
