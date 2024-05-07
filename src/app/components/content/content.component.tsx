"use client";

import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100vw;

  &::before {
    content: "";
    background: url("/backgrounds/sci-fi-city.jpg") center center no-repeat;
    background-size: cover;
    position: absolute;
    height: 100%;
    filter: grayscale(1);
    pointer-events: none;
    opacity: 0.15;
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
