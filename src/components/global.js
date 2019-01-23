import styled from 'styled-components';

import { SCREEN } from 'constants';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${SCREEN.xs}) {
    max-width: 540px;
    padding: 0;
  }

  @media (min-width: ${SCREEN.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${SCREEN.md}) {
    max-width: 960px;
  }
`;

export const Section = styled.section`
  padding: 96px 0;
`;
