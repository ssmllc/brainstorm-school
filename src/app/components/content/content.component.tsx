"use client";

import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100vw;

  &::before {
    content: "";
    background: url("/backgrounds/lightning/lightning.png") 0 0 no-repeat;
    background-size: 75%;
    position: absolute;
    rotate: 0;
    /* rotate: -15deg; */
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

  /* &::after {
    content: "";
    background: url("/backgrounds/clouds/clouds-right-1.jpg") 0 0 no-repeat;
    background-size: 75%;
    position: absolute;
    height: 100%;
    filter: grayscale(0.5);
    pointer-events: none;
    opacity: 1;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  } */
`;

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Content = ({ children }: Props) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

export default Content;
