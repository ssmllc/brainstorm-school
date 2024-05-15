"use client";

import React from "react";
import styled from "styled-components";

interface cardIconProps {
  image?: string;
}

const Icon = styled.div<cardIconProps>`
  background: var(--white) ${({ image }) => `url(${image})`};
  background-size: cover;
  border-radius: 100%;
  height: 50px;
  width: 50px;
`;

export const CardIcon = ({ image }: cardIconProps) => {
  return <Icon image={image}></Icon>;
};
