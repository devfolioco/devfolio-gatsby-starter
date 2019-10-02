import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Gallery from '@sections/Gallery';
import Schedule from '@sections/Schedule';
import Sponsors from '@sections/Sponsors';
import Faq from '@sections/FAQ';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Gallery />
    <Schedule />
    <Sponsors />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
