import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Quotes from '@sections/Quotes';
import Footer from '@sections/Footer';

const quotes = () => (
  <Layout>
    <Navbar />
    <Quotes />
    <Footer />
  </Layout>
);

export default quotes;
