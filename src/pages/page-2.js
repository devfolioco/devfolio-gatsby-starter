import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import { Button } from '@components/global';
import { Container } from '@components/global';

const SecondPage = () => (
  <Layout>
    <Navbar />
    <Container>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <p>Feel free to go back to Homepage! :)</p>
      <Button as={Link} to="/" style={{ textDecoration: 'none' }}>
            Go to Homepage &nbsp; &larr;
          </Button>
    </Container>
  </Layout>
);

export default SecondPage;
