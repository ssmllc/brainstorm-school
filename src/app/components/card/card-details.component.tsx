"use client";

import React from "react";
import styled from "styled-components";
import { IconCap } from "../icons/icon-cap.component";

const Details = styled.div<Props>`
  /* border: thin dashed blue; */
  text-align: left;
  width: 75%;
`;

const Heading = styled.div<Props>`
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  padding: 10px 0 5px;

  @media (min-width: 768px) {
    padding: 0 0 10px;
  }

  @media (min-width: 1024px) {
    padding: 0 0 3px;
  }
`;

const SubHeading = styled.div<Props>`
  align-items: center;
  color: var(--white);
  display: flex;
  font-size: 14px;
  gap: 0 10px;
  line-height: 1.5;
`;

interface Props {
  heading?: string;
  subHeading?: string;
  show_icon?: boolean;
}

export const CardDetails = ({ heading, subHeading, show_icon }: Props) => {
  return (
    <Details>
      <Heading>{heading}</Heading>
      <SubHeading>
        {show_icon && <IconCap width="20px" height="20px" />} {subHeading}
      </SubHeading>
    </Details>
  );
};
