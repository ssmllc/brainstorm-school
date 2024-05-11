"use client";
import React from "react";
import styled from "styled-components";

const Content = styled.div`
  padding: 75px 0;
  position: relative;
  width: 100vw;
  z-index: 20;

  h1,
  h2,
  p {
    color: var(--white);
  }

  .sub-heading {
    /* border: thin solid red; */
    font-size: 16px;
    line-height: 1.5;
    margin: 0 auto;
    padding: 25px 0 0;
    width: 85%;

    @media (min-width: 800px) {
      width: 75%;
    }
  }
`;

const CallToAction = styled.button`
  background: var(--blue);
  border-radius: 35px;
  border: 0;
  color: var(--white);
  font-size: 12px;
  letter-spacing: 2px;
  margin: 35px 0 0;
  padding: 15px 20px;
  text-transform: uppercase;
  transition: all 0.25s ease-out;

  &:hover {
    background: #0059ff;
    cursor: pointer;
  }
`;

const RegistrationFAQ = styled.div`
  /* border: thin solid red; */
  margin: 35px auto 0;
  width: 80%;

  @media (min-width: 800px) {
    width: 70%;
  }

  .faq-text {
    /* border: thin solid red; */
    font-size: 14px;
    line-height: 1.5;
  }

  a {
    color: var(--blue);
  }

  p {
    padding: 10px 0 0;
  }
`;

const ContentBlock = styled.div`
  // border: "thin solid red";
  width: 80%;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 800px) {
    width: 50%;
  }
`;

interface headingProps {
  scale: string;
}

const BigHeading = styled.h1<headingProps>`
  font-size: ${(props) => (props.scale === "xl" ? "42px" : "28px")};
`;

const Heading = styled.p<headingProps>`
  font-size: ${(props) => (props.scale === "xl" ? "42px" : "28px")};
  font-weight: bold;
`;

const RegistrationBlock = ({
  primary = false,
  heading,
  scale,
  text,
  cta,
  faq,
}: {
  primary: boolean;
  heading: string;
  scale: string;
  text?: string;
  cta?: string;
  faq?: boolean;
}) => {
  return (
    <Content>
      <ContentBlock>
        {primary ? (
          <BigHeading scale={scale} className="heading">
            {heading}
          </BigHeading>
        ) : (
          <Heading scale={scale}>{heading}</Heading>
        )}
        {text && <p className="sub-heading">{text}</p>}
        {cta && <CallToAction>{cta}</CallToAction>}
        {faq && (
          <RegistrationFAQ>
            <p className="faq-text">
              Having registration issues?{" "}
              <span>
                Email us{" "}
                <a href="mailto:info@brainstormschool.com">
                  info@brainstormschool.com
                </a>
              </span>
            </p>
            <p>
              For refund and credit policy, See <a href="/faqs">FAQ</a>
            </p>
          </RegistrationFAQ>
        )}
      </ContentBlock>
    </Content>
  );
};

export default RegistrationBlock;
