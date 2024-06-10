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
  height: ${({ height }) => (height ? height : "60px")};
  width: ${({ width }) => (width ? width : "60px")};

  @media (min-width: 768px) {
    height: 80px;
    width: 80px;
  }

  @media (min-width: 1400px) {
    height: ${({ height }) => (height ? height : "80px")};
    width: ${({ width }) => (width ? width : "80px")};
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
