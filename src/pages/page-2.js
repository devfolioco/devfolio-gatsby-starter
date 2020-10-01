import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import { Container, Button } from '@components/global';

const SecondPage = () => (
  <Layout>
    <Container>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Button as={Link} to="/" style={{ textDecoration: 'none' }}>
        &larr; &nbsp; Go back to the homepage
      </Button>
    </Container>
  </Layout>
);

export default SecondPage;
