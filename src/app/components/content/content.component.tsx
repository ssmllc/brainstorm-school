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
      url("/backgrounds/clouds/cloud-2.png"),
      url("/backgrounds/lightning/lightning-2.png"),
      url("/backgrounds/clouds/cloud-2.png");
    background-size: 75%, 100%, 75%, 100%;
    background-position: top left, top center, center right, bottom center;
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
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
  }
`;

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Content = ({ children }: Props) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

export default Content;
