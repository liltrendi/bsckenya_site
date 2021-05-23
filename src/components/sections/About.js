import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>What it is</h2>
              <p>
                Founded in Kenya, this token is community-backed charity project that aims to aid the fight against gender-based violence by donating proceeds made to relevant organizations in this field.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>How it works</h2>
              <p>
                Working on scarcity, this project adopts an autonomous yield and deflationary token model. The more transactions that take place results in more tokens decreasing from the total supply. Not only does every trade contribute toward automatically generating liquidity locked inside PancakeSwap LP, but holders also earn passive rewards through static reflection, growing their $KENYA balance indefinitely.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Actual tokenomics</h2>
              <p>
                Hard-coded into the smart contract are the following tokenomics, we are unable to change them and are fully rug-proof:
                <ul>
                  <li><strong>Total Supply</strong>: 1 Quadrillion (1,000 Trillion) $KENYA tokens</li>
                  <li><strong>Initial Burn</strong>: 50% burnt on fair launch</li>
                  <li><strong>Taxation</strong>: 10% on every transaction, with 5% redistributed to holders and 5% towards liquidity</li>
                  <li><strong>Team</strong>: 5% towards development</li>
                </ul>
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  ul li {
    text-align: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
