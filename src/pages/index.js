import React from 'react';
import { Link } from 'gatsby';

import Layout from 'common/Layout';
import Image from 'common/Image';
import SEO from 'common/SEO';

import ActivityIcon from 'static/icons/activity.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      Random icon here: <img src={ActivityIcon} alt="activity" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
