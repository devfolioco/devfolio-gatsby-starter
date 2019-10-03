import React from 'react';
import { Link } from 'gatsby';
import Navbar from '@common/Navbar';
import Layout from '@common/Layout';
import { Container } from '@components/global';

const SecondPage = () => (
  <Layout>
  <Navbar />
    <Container>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default SecondPage;
