"use client";
import React from "react";
import styled from "styled-components";

const Content = styled.div`
  /* border: thin solid red; */
  /* height: 100vh; */
  padding: 75px 0;
  width: 100vw;

  @media (min-width: 800px) {
    /* height: 50vh; */
  }

  h1,
  h2,
  p {
    color: #fff;
  }

  .heading {
    font-size: 28px;

    @media (min-width: 800px) {
      font-size: 36px;
    }
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
  background: #0091ff;
  border-radius: 35px;
  border: 0;
  color: #fff;
  font-size: 12px;
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
    color: #0091ff;
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
    width: 40%;
  }
`;

const RegistrationBlock = ({
  primary = false,
  heading,
  text,
  cta,
  faq,
}: {
  primary: boolean;
  heading: string;
  text?: string;
  cta: string;
  faq?: boolean;
}) => {
  return (
    <Content>
      <ContentBlock>
        {primary ? <h1 className="heading">{heading}</h1> : <h2>{heading}</h2>}
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
