"use client";

import React from "react";
import styled from "styled-components";

const Details = styled.div<Props>`
  /* border: thin dashed blue; */
  text-align: left;
`;

const Heading = styled.div<Props>`
  color: var(--white);
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  padding: 25px 0 15px;
`;

const SubHeading = styled.div<Props>`
  color: var(--white);
  font-size: 14px;
  line-height: 1.5;
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
