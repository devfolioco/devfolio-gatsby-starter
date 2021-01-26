import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Gallery from '@sections/Gallery';
import Schedule from '@sections/Schedule';
import Sponsors from '@sections/Sponsors';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';
import Prizes from '@sections/Prizes';


const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Gallery />
    <Prizes/>
    <Schedule />
    <Sponsors />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
