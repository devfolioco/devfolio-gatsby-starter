import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

// Import all sponsor logos here
import { ReactComponent as DevfolioLogo } from '@images/sponsors/devfolio-logo.svg';

const SPONSORS = [
  {
    logo: DevfolioLogo,
    link: 'https://devfolio.co',
  },
  {
    logo: DevfolioLogo,
    link: 'https://devfolio.co/hackathons',
  },
  {
    logo: DevfolioLogo,
    link: 'https://devfolio.co/profile',
  },
  {
    logo: DevfolioLogo,
    link: 'https://inout.devfolio.co',
  },
];

const Sponsors = () => (
  <Section id="sponsors">
    <Container>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Sponsors</h1>
      <Flex>
        {SPONSORS.map(({ logo, link }) => (
          <Sponsor href={link} key={link}>
            {logo()}
          </Sponsor>
        ))}
      </Flex>
    </Container>
  </Section>
);

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Sponsor = styled(ExternalLink)`
  max-width: 160px;
  margin: 1rem;

  @media (min-width: ${props => props.theme.screen.md}) {
    &:not(:last-child) {
      margin-right: 4rem;
    }
  }  

  > svg {
    width: 100%;
    height: auto;
  }
`;

export default Sponsors;
