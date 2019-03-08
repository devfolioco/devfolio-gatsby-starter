import React from 'react';
import { Link } from 'gatsby';

import Image from '@common/Image';
import { Container } from '@components/global';

const About = () => (
  <header style={{ padding: '40px 0' }}>
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 300 }}>
          <Image />
        </div>
        <div style={{ padding: 40 }}>
          <h1>Hi people</h1>
          <p>
            Welcome to your new Gatsby site. <br /> Now go build something
            great.
          </p>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </div>
    </Container>
  </header>
);

export default About;
