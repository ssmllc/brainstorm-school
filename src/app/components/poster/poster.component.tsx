"use client";

import React from "react";
import styled from "styled-components";

interface posterProps {
  $imageUrl: string;
  $bgSize?: string;
  $margin?: string;
}

const Preview = styled.div<posterProps>`
  background: ${({ $imageUrl }) => `url(${$imageUrl}) center center no-repeat`};
  background-size: ${({ $bgSize }) => ($bgSize ? $bgSize : "cover")};
  border-radius: 20px;
  height: 400px;
  overflow: hidden;
  margin: ${({ $margin }) => ($margin ? $margin : "50px 0")};
  width: 100%;

  @media (min-width: 768px) {
    height: 650px;
  }

  @media (min-width: 1024px) {
    height: 75vh;
  }

  @media (min-width: 1400px) {
    height: 75vh;
  }
`;

interface Props {
  imageUrl: string;
  bgSize?: string;
  margin?: string;
}

const Poster = ({ imageUrl, bgSize, margin }: Props) => {
  return <Preview $imageUrl={imageUrl} $bgSize={bgSize} $margin={margin} />;
};

export default Poster;
