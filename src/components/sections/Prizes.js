import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const PRIZES = [
  {
    name: 'Rs. 30000',
    image: 'prize1.jpg',
    
  },
  {
    name: 'Rs. 20000',
    image: 'prize2.jpg',
    
  },
  {
    name: 'Rs. 10000',
    image: 'prize3.jpg',
    
  }
];

const Prizes = () => (
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
        
      <Section id="prizes">
        <Container>
          <h1 style={{ marginBottom: '3rem',textAlign: 'center' }}>Prizes</h1>
          <div align="center">
          <Grid style={{marginLeft:'15rem'}}>
          
            {PRIZES.map(({ name, image, url }, i) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <center>
                <ExternalLink href={url} key={i} >
                  <Img fluid={img.childImageSharp.fluid} alt={name}  />
                  <p>{name}</p>
                </ExternalLink>
                </center>
              );
            })}
            
          </Grid>
          </div>
        </Container>
      </Section>
      
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  grid-gap: 32px;

  > a {
    text-decoration: none;
    color: inherit;
  }
`;


export default Prizes;
