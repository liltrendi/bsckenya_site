import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'What DEX is this based on?',
    content: () => (
      <>
        This project is built upon the ethereum network.
      </>
    ),
  },
  {
    title: 'What exchanges do you plan on getting listed on?',
    content: () => (
      <>
        We're currently in talks with some of the biggest exchanges such as Coinbase and Binance,
        for listing. We shall regularly keep our community up to date with such developments.
      </>
    ),
  },
  {
    title: 'Is there a future in this token?',
    content: () => (
      <>
        Absolutely! Hodling for the long term can be quite profitable, as tokens are minted from sellers and redistributed across holders while the rest is burned. With such a scarcity model, the price will eventually go up.
      </>
    ),
  }
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
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
