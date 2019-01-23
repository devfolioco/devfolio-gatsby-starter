import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../SEO';

import { GlobalStyles } from './style';
import Navbar from 'common/Navbar';

const Layout = ({ children }) => (
  <>
    <SEO />
    <GlobalStyles />
    <Navbar />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
