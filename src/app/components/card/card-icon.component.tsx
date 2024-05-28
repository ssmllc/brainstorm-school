"use client";

import React from "react";
import styled from "styled-components";

interface cardIconProps {
  image?: string;
  borderradius?: string;
}

const Icon = styled.div<cardIconProps>`
  background: var(--white) ${({ image }) => `url(${image})`};
  background-size: cover;
  border-radius: ${({ borderradius }) =>
    borderradius ? borderradius : "100%"};
  height: 50px;
  width: 50px;
`;

export const CardIcon = ({ image, borderradius }: cardIconProps) => {
  return <Icon image={image} borderradius={borderradius}></Icon>;
};
