import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const SecondPage = () => (
  <Layout>
    <Container>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <br />
      <br />
      <Link to="/gatsby-intro">Brief Intro Gatsby Js</Link>
    </Container>
  </Layout>
);

export default SecondPage;
