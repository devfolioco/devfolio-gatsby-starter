import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as GithubIcon } from '@static/icons/github.svg';
import { ReactComponent as InstagramIcon } from '@static/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '@static/icons/twitter.svg';

const SOCIAL = [
  {
    icon: GithubIcon,
    label: 'Follow on GitHub',
    link: 'https://github.com/devfolioco/',
  },
  {
    icon: InstagramIcon,
    label: 'Follow on Instagram',
    link: 'https://www.instagram.com/devfolioco/',
  },
  {
    icon: TwitterIcon,
    label: 'Follow on Twitter',
    link: 'https://twitter.com/devfolioco',
  },
];

const Footer = () => (
  <FooterWrapper>
    <Container
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <Copyright>© Devfolio</Copyright>
        <CopyrightDesc>Kickstart landing page development with GatsbyJS</CopyrightDesc>
      </div>
      <SocialIcons>
        {SOCIAL.map(({ icon: Icon, label, link }) => (
          <ExternalLink href={link} key={link} aria-label={label}><Icon aria-hidden={true} /></ExternalLink>
        ))}
      </SocialIcons>
    </Container>
  </FooterWrapper>
);

const SocialIcons = styled.div`
  display: flex;

  svg {
    color: ${props => props.theme.color.white.regular};
    margin: 0 0.5rem;
    width: 24px;
    height: 24px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.blue.dark};
  padding: 1.5rem 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.white.regular};
`;

const CopyrightDesc = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.gray.regular};
`;

export default Footer;
