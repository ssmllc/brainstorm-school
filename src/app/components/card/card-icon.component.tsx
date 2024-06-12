"use client";

import React from "react";
import styled from "styled-components";

interface cardIconProps {
  image?: string;
  borderradius?: string;
  height?: string;
  $sm_margin?: string;
  $md_margin?: string;
  $margin?: string;
  $xl_margin?: string;
  width?: string;
}

const Icon = styled.div<cardIconProps>`
  background: var(--white) ${({ image }) => `url(${image})`};
  background-size: cover;
  border-radius: ${({ borderradius }) =>
    borderradius ? borderradius : "100%"};
  height: ${({ height }) => (height ? height : "65px")};
  margin: ${({ $sm_margin }) => $sm_margin};
  width: ${({ height }) => (height ? height : "65px")};

  @media (min-width: 768px) {
    height: ${({ height }) => (height ? height : "75px")};
    margin: ${({ $md_margin }) => $md_margin};
    width: ${({ height }) => (height ? height : "75px")};
  }

  @media (min-width: 1024px) {
    height: ${({ height }) => (height ? height : "65px")};
    margin: ${({ $margin }) => $margin};
    width: ${({ height }) => (height ? height : "65px")};
  }

  @media (min-width: 1024px) {
    height: ${({ height }) => (height ? height : "65px")};
    margin: ${({ $xl_margin }) => $xl_margin};
    width: ${({ height }) => (height ? height : "65px")};
  }
`;

interface Props {
  image?: string;
  borderradius?: string;
  height?: string;
  sm_margin?: string;
  md_margin?: string;
  margin?: string;
  xl_margin?: string;
  width?: string;
}

export const CardIcon = ({
  image,
  borderradius,
  width,
  height,
  sm_margin,
  md_margin,
  margin,
  xl_margin,
}: Props) => {
  return (
    <Icon
      image={image}
      borderradius={borderradius}
      width={width}
      height={height}
      $sm_margin={sm_margin}
      $md_margin={md_margin}
      $margin={margin}
      $xl_margin={xl_margin}
    ></Icon>
  );
};
