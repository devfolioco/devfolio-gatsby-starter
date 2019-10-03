import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const GALLERY = [
  {
    name: 'Yoda',
    image: 'yoda.jpeg',
    url: 'https://twitter.com/yodaism',
  },
  {
    name: 'r2d2',
    image: 'r2d2.jpeg',
    url: 'https://twitter.com/dan_abramov',
  },
  {
    name: 'Darth Vader',
    image: 'darthvader.jpeg',
    url: 'https://twitter.com/darthvader',
  },
  {
    name: 'Stormtrooper',
    image: 'stormtrooper.jpeg',
    url: 'https://twitter.com/dan_abramov',
  },
  {
    name: 'r2d2',
    image: 'r2d2.jpeg',
    url: 'https://twitter.com/dan_abramov',
  },
  {
    name: 'Yoda',
    image: 'yoda.jpeg',
    url: 'https://twitter.com/yodaism',
  },
  {
    name: 'Stormtrooper',
    image: 'stormtrooper.jpeg',
    url: 'https://twitter.com/dan_abramov',
  },
  {
    name: 'Darth Vader',
    image: 'darthvader.jpeg',
    url: 'https://twitter.com/darthvader',
  },
];

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="gallery">
        <Container>
          <h1 style={{ marginBottom: '3rem' }}>Gallery</h1>
          <div className="gallery">
            {GALLERY.map(({ name, image, url }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <ExternalLink href={url}>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <p>{name}</p>
                </ExternalLink>
              );
            })}
          </div>
        </Container>
      </Section>
    )}
  />
);

export default Gallery;
