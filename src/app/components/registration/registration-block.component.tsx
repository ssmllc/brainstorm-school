"use client";

import React from "react";
import styled from "styled-components";
import ActionButton from "../buttons/action-button.component";

interface contentProps {
  $faq?: boolean;
}

const Content = styled.div<contentProps>`
  border-bottom: ${({ $faq }) =>
    $faq ? "thin solid var(--medium-grey)" : "0"};
  margin: 0 auto;
  padding: 50px 0;
  position: relative;
  width: 100%;
  z-index: 20;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 60%;
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 80%;
  }

  @media (min-width: 1400px) {
    margin: 0 auto;
    width: 50%;
  }

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
    width: 80%;

    @media (min-width: 800px) {
      width: 60%;
    }
  }
`;

interface buttonProps {
  type?: string;
}

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
    color: var(--primary);
  }

  p {
    padding: 10px 0 0;
  }
`;

const ContentBlock = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 80%;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    max-width: 450px;
    width: 100%;
  }

  @media (min-width: 1360px) {
    max-width: 900px;
    width: 100%;
  }
`;

interface headingProps {
  scale: string;
}

const BigHeading = styled.h1<headingProps>`
  font-size: 32px;
  text-transform: capitalize;

  @media (min-width: 800px) {
    font-size: ${(props) => (props.scale === "xl" ? "42px" : "28px")};
  }
`;

const Heading = styled.p<headingProps>`
  font-size: 32px;
  font-weight: bold;
  text-transform: capitalize;

  @media (min-width: 800px) {
    font-size: ${(props) => (props.scale === "xl" ? "42px" : "28px")};
    font-weight: bold;
  }
`;

const RegistrationBlock = ({
  primary = false,
  href,
  heading,
  scale,
  text,
  cta,
  ctaType,
  faq,
  target,
}: {
  primary: boolean;
  href?: string;
  heading: string;
  scale: string;
  text?: string;
  cta?: string;
  ctaType: "primary" | "secondary" | "tertiary";
  faq?: boolean;
  target?: string;
}) => {
  return (
    <Content $faq={faq}>
      <ContentBlock>
        {primary ? (
          <BigHeading scale={scale} className="heading">
            {heading}
          </BigHeading>
        ) : (
          <Heading scale={scale}>{heading}</Heading>
        )}
        {text && <p className="sub-heading">{text}</p>}
        {cta && (
          <ActionButton
            href={href}
            type={ctaType}
            label={cta}
            target={target ? target : "_top"}
          />
        )}
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
              For refund and credit policy, See <a href="/about/faqs">FAQ</a>
            </p>
          </RegistrationFAQ>
        )}
      </ContentBlock>
    </Content>
  );
};

export default RegistrationBlock;
