"use client";

import React from "react";
import styled from "styled-components";

const Details = styled.div<Props>`
  /* border: thin dashed blue; */
`;

const Heading = styled.div<Props>`
  color: var(--white);
  font-size: 18px;
  font-weight: bold;
`;

const SubHeading = styled.div<Props>`
  color: var(--white);
  font-size: 12px;
`;

interface Props {
  heading?: string;
  subHeading?: string;
}

export const CardDetails = ({ heading, subHeading }: Props) => {
  return (
    <Details>
      <Heading>{heading}</Heading>
      <SubHeading>{subHeading}</SubHeading>
    </Details>
  );
};
