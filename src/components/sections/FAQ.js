import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'How much do ETHGlobal hackathons cost?',
    content: () => <>ETHGlobal hackathons are always free for hackers.</>,
  },
  {
    title: 'How do I apply to a hackathon?',
    content: () => (
      <>Find the event you want to hack at above, and click "apply".</>
    ),
  },
  {
    title: 'What is ETHGlobal?',
    content: () => (
      <>
        ETHGlobal helps run hackathons all over the world. Our goal is to be the
        best on-ramp to the global Ethereum community. Our work is supported by
        the Ethereum Foundation, and the many sponsors who make our events
        possible.
      </>
    ),
  },
  {
    title: 'Can my company sponsor an upcoming ETHGlobal hackathon?',
    content: () => (
      <>
        Absolutely! Please send all sponsorship inquiries to{' '}
        <ExternalLink href="ethglobal.co">sponsor@ethglobal.co</ExternalLink>
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ padding: '200px 0' }}>FAQ</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
