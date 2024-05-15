"use client";

import React from "react";
import styled from "styled-components";
import { CardIcon } from "./card-icon.component";
import { CardDetails } from "./card-details.component";

type Props = {
  stacked: boolean;
  icon: string;
  heading: string;
  subHeading?: string;
  text?: string;
};

type containerProps = {
  stacked: boolean;
};

const Container = styled.div<containerProps>`
  box-shadow: 0 0 15px #222;
  background: var(--off-black);
  border-radius: 20px;
  display: flex;
  flex-direction: ${({ stacked }) => (stacked ? "column" : "row")};
  padding: 25px 25px;
  gap: 20px;
  width: 33.33%;
`;

const Text = styled.p`
  color: var(--white);
  font-size: 12px;
`;

export const Card = ({ stacked, icon, heading, subHeading, text }: Props) => {
  return (
    <Container stacked={stacked}>
      {icon && <CardIcon image={icon} />}
      {heading && <CardDetails heading={heading} subHeading={subHeading} />}
      {text && <Text>{text}</Text>}
    </Container>
  );
};
