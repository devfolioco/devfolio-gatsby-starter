import React from 'react';
import { Link } from 'gatsby';

import Image from '@common/Image';
import { Container, Button } from '@components/global';
import './Header.css';
import coverPageImage from '../../images/cover-page.svg';

const Header = props => (
  <header style={{ padding: '3rem 0', marginTop: '5rem' }}>
    <Container>
      <div className="Header">
        <h1>
          We are India’s largest and fastest growing community of builders.
        </h1>
        <img src={coverPageImage} alt="image" />
      </div>
    </Container>
  </header>
);

export default Header;
