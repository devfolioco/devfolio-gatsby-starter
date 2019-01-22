import React from 'react';
import Helmet from 'react-helmet';

const data = {
  description: 'SEO description here',
  title: 'Title | Here',
  url: 'http://site.com',
  author: 'team',
  keywords: ['gatsby', 'site'],
  twitter: {
    id: '@twitterid',
    img: 'http://site.com/img/twitter.png',
  },
  facebook: {
    id: '2342342',
    img: 'http://site.com/img/facebook-og.png',
  },
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={data.facebook.id} />
      <meta property="og:title" content={data.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.url} />
      <meta property="og:image" content={data.facebook.img} />
      <meta property="og:description" content={data.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@hackinoutco" />
      <meta name="twitter:site" content="@hackinoutco" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:domain" content={data.url} />
      <meta name="twitter:image:src" content={data.img} />

      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords.join(', ')} />
      <meta name="author" content={data.author} />
      <title>{data.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
