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

interface buttonProps {
  type?: string;
}

const CallToAction = styled.button<buttonProps>`
  background: ${(props) =>
    props.type === "primary"
      ? "#0091ff"
      : props.type === "tertiary"
      ? "transparent"
      : "#fff"};
  border-radius: 35px;
  border: ${(props) => (props.type === "tertiary" ? "3px solid #fff" : 0)};
  color: ${(props) =>
    props.type === "primary"
      ? "#fff"
      : props.type === "tertiary"
      ? "#fff"
      : "#000"};
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 35px 0 0;
  padding: 15px 20px;
  text-transform: uppercase;
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
  font-size: 36px;

  @media (min-width: 800px) {
    font-size: ${(props) => (props.scale === "xl" ? "42px" : "28px")};
  }
`;

const Heading = styled.p<headingProps>`
  font-size: 36px;
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: ${(props) => (props.scale === "xl" ? "42px" : "28px")};
    font-weight: bold;
  }
`;

const RegistrationBlock = ({
  primary = false,
  heading,
  scale,
  text,
  cta,
  ctaType,
  faq,
}: {
  primary: boolean;
  heading: string;
  scale: string;
  text?: string;
  cta?: string;
  ctaType?: string;
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
        {cta && <CallToAction type={ctaType}>{cta}</CallToAction>}
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
