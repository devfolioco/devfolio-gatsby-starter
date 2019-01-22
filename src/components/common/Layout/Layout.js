import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import SEO from '../SEO';

import { GlobalStyles } from './style';

const Layout = ({ children }) => (
  <>
    <SEO />
    <GlobalStyles />
    <Header siteTitle="Site Title" />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
