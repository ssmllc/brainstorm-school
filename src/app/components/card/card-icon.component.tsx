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
