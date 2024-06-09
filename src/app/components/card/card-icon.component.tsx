"use client";

import React from "react";
import styled from "styled-components";

interface cardIconProps {
  image?: string;
  borderradius?: string;
  height?: string;
  width?: string;
}

const Icon = styled.div<cardIconProps>`
  background: var(--white) ${({ image }) => `url(${image})`};
  background-size: cover;
  border-radius: ${({ borderradius }) =>
    borderradius ? borderradius : "100%"};
  height: ${({ height }) => (height ? height : "50px")};
  width: ${({ width }) => (width ? width : "50px")};

  @media (min-width: 768px) {
    height: 100px;
    width: 100px;
  }

  @media (min-width: 1400px) {
    height: ${({ height }) => (height ? height : "100px")};
    width: ${({ width }) => (width ? width : "100px")};
  }
`;

export const CardIcon = ({
  image,
  borderradius,
  width,
  height,
}: cardIconProps) => {
  return (
    <Icon
      image={image}
      borderradius={borderradius}
      width={width}
      height={height}
    ></Icon>
  );
};
