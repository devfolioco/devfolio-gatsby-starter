import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 1rem 0;
  @media (min-width: ${props => props.theme.screen.md}) {
    padding: 2rem 0;
  }

  ${props =>
    props.accent && `background-color: ${props.theme.color.black.lighter}`}
`;

export const Button = styled.button`
  background-color: ${props => props.theme.color.blue.regular};
  color: ${props => props.theme.color.white.regular};
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background-color: #2954bf;
  }
`;
