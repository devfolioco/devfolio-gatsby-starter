import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header2';
import Ideas from '@sections/Ideas';
import Footer from '@sections/Footer';
import { Container, Button } from '@components/global';

const SecondPage = () => (
  <Layout>
    <Container>
      <Header />
      <Ideas />
      <Button as={Link} to="/" style={{ textDecoration: 'none' }}>
            Go back to home page &nbsp; &rarr;
      </Button>
      <Footer />
    </Container>
  </Layout>
);

export default SecondPage;
