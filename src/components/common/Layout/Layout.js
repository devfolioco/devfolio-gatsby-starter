import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import { Global } from './style';

const Layout = ({ children }) => (
  <>
    <Header siteTitle="Site Title" />
    <Global />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
