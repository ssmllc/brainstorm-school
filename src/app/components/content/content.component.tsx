"use client";

import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  /* border: thin solid red; */
  height: 100%;
  margin: 50px 0;
  position: relative;
  width: 100vw;

  &::before {
    content: "";
    background-image: url("/backgrounds/lightning/lightning.png"),
      url("/backgrounds/clouds/cloud-2.png"),
      url("/backgrounds/clouds/cloud-4.png"),
      url("/backgrounds/clouds/cloud-3.png"),
      url("/backgrounds/clouds/cloud-1.png");
    background-size: 50%;
    background-position: top left, 10% 50%, 80% 50%, 100% 10%, 0% 85%;
    background-repeat: no-repeat, no-repeat;
    position: absolute;
    transform-origin: top left;
    height: 100%;
    pointer-events: none;
    opacity: 1;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 0;
  }
`;

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Content = ({ children }: Props) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

export default Content;
