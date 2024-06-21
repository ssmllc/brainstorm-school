"use client";

import React from "react";
import styled from "styled-components";

const Content = styled.div`
  /* border: thin dashed red; */
  padding: 35px 0 25px;
  position: relative;
  width: 100vw;

  @media (min-width: 800px) {
    padding: 75px 0;
  }
`;

const ContentBlock = styled.div`
  /* border: thin dashed green; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  width: 80%;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 10px;
    max-width: 1280px;
    width: 55%;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 10px;
    max-width: 1280px;
    width: 80%;
  }

  @media (min-width: 1400px) {
    flex-direction: row;
    gap: 10px;
    max-width: 1150px;
    width: 80%;
  }

  @media (min-width: 1900px) {
    flex-direction: row;
    gap: 10px;
    width: 70%;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  &.no-hot-spot {
    padding: 30px 20px;

    @media (min-width: 800px) {
      padding: 40px 40px;
    }
  }

  @media (min-width: 800px) {
    width: 33.33%;
  }
`;

const FlexBlock = styled.div`
  /* border: thin dashed yellow; */
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
  }

  @media (min-width: 1400px) {
    flex-direction: row;
  }
`;

const Icon = styled.div`
  /* border: thin dashed cyan; */
`;

const Information = styled.div`
  /* border: thin dashed purple; */
`;

const HotSpot = styled.a`
  box-shadow: inset 0 0 0 1px #3f3f3f;
  border-radius: 20px;
  display: flex;
  padding: 40px 25px;
  transition: all 0.25s ease-out;

  @media (min-width: 800px) {
    padding: 60px 25px;
  }

  &:hover {
    box-shadow: inset 0 0 0 1px var(--primary);

    .contact-info {
      color: var(--primary);
    }
  }
`;

const Newsletter = styled.div`
  box-shadow: inset 0 0 0 1px #3f3f3f;
  border-radius: 20px;
  display: flex;
  padding: 40px 25px;
  transition: all 0.25s ease-out;

  @media (min-width: 800px) {
    padding: 60px 25px;
  }

  &:hover {
    box-shadow: inset 0 0 0 1px var(--primary);

    .contact-info {
      color: var(--primary);
    }
  }
`;

const Heading = styled.p`
  color: var(--white);
  font-size: 28px;
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: 36px;
  }
`;

const SubHeading = styled.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;

  @media (min-width: 800px) {
    font-size: 18px;
  }
`;

const Caption = styled.p`
  color: var(--white);
  font-size: 12px;

  @media (min-width: 400px) {
    font-size: 14px;
  }
`;

const Label = styled.p`
  color: var(--white);
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0 0;
  transition: all 0.25s ease-out;

  @media (min-width: 400px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
    padding: 15px 0 0;
  }

  @media (min-width: 1400px) {
    font-size: 18px;
    padding: 15px 0 0;
  }
`;

interface Props {
  heading: string;
  subheading?: string;
}

const ContactBlock = ({ heading, subheading }: Props) => {
  return (
    <Content>
      <ContentBlock>
        <Block className="no-hot-spot">
          <Heading>{heading}</Heading>
          <SubHeading>{subheading ? subheading : null}</SubHeading>
        </Block>

        <Block>
          <Newsletter>
            <FlexBlock>
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  style={{
                    height: "48px",
                    width: "48px",
                    stroke: "#fff",
                    fill: "transparent",
                  }}
                >
                  <path d="M5.99068,18.36885q-.79149-1.43113-1.45659-2.86621A5.70719,5.70719,0,0,1,5.66776,9.1271a45.01,45.01,0,0,1,5.86371-4.88216,1.52562,1.52562,0,0,1,1.89779.2063L19.42388,12.371a2.11142,2.11142,0,0,1,.12194,2.33423l-2.00638,3.36324a2.99894,2.99894,0,0,0,.46074,3.33439,111.72107,111.72107,0,0,0,8.6025,8.60249,2.99892,2.99892,0,0,0,3.33438.46074l3.36325-2.00638a2.1114,2.1114,0,0,1,2.33422.12193l7.91977,5.99463a1.52559,1.52559,0,0,1,.2063,1.89779,45.0957,45.0957,0,0,1-4.88215,5.86371,5.65712,5.65712,0,0,1-4.10587,1.65568c-3.57006-.06685-12.4828-6.18717-18.52762-12.232a64.121,64.121,0,0,1-8.19241-9.98712" />
                  <g>
                    <path d="M24,7A17,17,0,0,1,41,24" />
                    <path d="M24,1A23,23,0,0,1,47,24" />
                  </g>
                </svg>
              </Icon>
              <Information>
                <Caption>Sign up for our newsletter</Caption>

                <form
                  method="post"
                  action="https://ymlp.com/subscribe.php?id=ghmqejqgmgh"
                >
                  <input
                    type="text"
                    name="YMP0"
                    id="bs-email"
                    className="bs-required"
                    placeholder="Email Address"
                  />

                  <button type="submit" id="bs-submit">
                    Join
                  </button>
                </form>
              </Information>
            </FlexBlock>
          </Newsletter>
        </Block>

        <Block>
          <HotSpot href="mailto:info@brainstormschool.com">
            <FlexBlock>
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  style={{
                    height: "48px",
                    width: "48px",
                    stroke: "#fff",
                    fill: "transparent",
                  }}
                >
                  <path d="M38.135,15.51406,26.93463,24.75744a4.61619,4.61619,0,0,1-5.87724-.00062L8.94184,14.7a2.3183,2.3183,0,0,1,1.48071-4.10212h30.9968A2.58064,2.58064,0,0,1,44,13.17847v21.319a2.58065,2.58065,0,0,1-2.58065,2.58065H6.58065A2.58065,2.58065,0,0,1,4,34.49751V15.1036" />
                </svg>
              </Icon>
              <Information>
                <Caption>Contact us by email.</Caption>
                <Label className="contact-info">
                  info@brainstormschool.com
                </Label>
              </Information>
            </FlexBlock>
          </HotSpot>
        </Block>
      </ContentBlock>
    </Content>
  );
};

export default ContactBlock;
