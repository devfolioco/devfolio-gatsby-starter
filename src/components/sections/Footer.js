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
    link: 'github.com',
  },
  {
    icon: InstagramIcon,
    link: 'instagram.com',
  },
  {
    icon: TwitterIcon,
    link: 'twitter.com',
  },
];

const Footer = () => (
  <FooterWrapper>
    <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>(c) Devfolio</span>
      <SocialIcons>
        {SOCIAL.map(({ icon, link }) => (
          <ExternalLink href={link}>{icon()}</ExternalLink>
        ))}
      </SocialIcons>
    </Container>
  </FooterWrapper>
);

const SocialIcons = styled.div`
  display: flex;

  svg {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: tomato;
  padding: 24px 0;
`;

export default Footer;
