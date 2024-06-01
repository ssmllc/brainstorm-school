"use client";

import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100vw;

  &::before {
    content: "";
    background-image: url("/backgrounds/lightning/lightning.png"),
      url("/backgrounds/lightning/lightning-2.png");
    background-size: 50%, 50%;
    background-position: top left, center right;
    background-repeat: no-repeat, no-repeat;
    position: absolute;
    rotate: 0;
    transform-origin: top left;
    height: 100%;
    filter: grayscale(0.5);
    pointer-events: none;
    opacity: 1;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;

    @media (min-width: 768px) {
      background-size: 50%, 100%, 50%, 100%;
    }

    @media (min-width: 1900px) {
      background-size: 40%, 100%, 40%, 100%;
    }
  }
`;

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Content = ({ children }: Props) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

export default Content;
