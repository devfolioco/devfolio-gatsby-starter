import styled from 'styled-components';

import { Container } from 'components/global';

export const Nav = styled.nav`
  padding: 24px 0;
  background-color: white;
  border: 1px solid black;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;

  ${({ mobile }) =>
    mobile &&
    `
      flex-direction: column;
      margin-top: 1em;

      > ${NavItem} {
        margin: 0;
        margin-top: 0.75em;
      }
    `};
`;

export const NavItem = styled.li`
  margin: 0 0.75em;
`;

export const MobileMenu = styled.div`
  width: 100%;
  background: white;
`;
