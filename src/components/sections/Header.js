import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Image from '@common/Image';
import { Container, Button } from '@components/global';

const Header = () => (
  <HeaderWrapper>
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <div style={{ padding: '4rem' }}>
          <h1>Hi people</h1>
          <p>
            Welcome to your new Gatsby site. <br /> Now go build something
            great.
          </p>
          <Button as={Link} to="/page-2/">
            Go to page 2 &nbsp; &rarr;
          </Button>
        </div>
      </div>
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  padding: 3rem 0;
  margin-top: 5rem;
`;

const ImageWrapper = styled.div`
  width: 300;
`;

export default Header;
