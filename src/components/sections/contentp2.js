import React from 'react';
import { Link } from 'gatsby';

import Image from '@common/Image';
import { Container, Button } from '@components/global';

const Contentp2 = props => (
  <header style={{ padding: '3rem 0', marginTop: '5rem' }}>
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 300 }}>
          <Image />
        </div>
        <div style={{ padding: '4rem' }}>
          <h1>Hi from the second page</h1>
          <p>
          Welcome to page 2
          </p>
          <Button as={Link} to="/index/">
          Back to the homepage ;
          </Button>
        </div>
      </div>
    </Container>
  </header>
);

export default Contentp2;
