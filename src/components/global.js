import styled from 'styled-components';

import { screen } from 'constants';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${screen.xs}) {
    max-width: 540px;
    padding: 0;
  }

  @media (min-width: ${screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${screen.md}) {
    max-width: 960px;
  }
`;

export const Section = styled.section`
  padding: 96px 0;
`;
