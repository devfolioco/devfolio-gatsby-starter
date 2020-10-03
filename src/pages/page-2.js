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
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 250 }}>
          <Button as={Link} to="/" style={{ textDecoration: 'none' }}>
            Go back to home page &rarr;
      </Button>
        </div>
        <div style={{ padding: '2rem' }}>
          <Button as={Link} to="/quotes/" style={{ textDecoration: 'none' }}>
            Go to page of quotes &nbsp; &rarr;
      </Button>
       </div>
      </div>
      <Footer />
    </Container>
  </Layout>
);

export default SecondPage;
