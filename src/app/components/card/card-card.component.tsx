"use client";

import React from "react";
import styled from "styled-components";
import { CardIcon } from "./card-icon.component";
import { CardDetails } from "./card-details.component";

type Props = {
  stacked: string;
  icon: string;
  heading: string;
  subHeading?: string;
  text?: string;
  width?: string;
};

type containerProps = {
  stacked: string;
  width?: string;
};

const Container = styled.div<containerProps>`
  box-shadow: 0 0 10px var(--black);
  background: var(--off-black);
  border-radius: 20px;
  display: flex;
  flex-direction: ${({ stacked }) => (stacked === "true" ? "column" : "row")};
  padding: 25px 25px;
  gap: 20px;
  width: ${({ width }) => (width ? width : "33.33%")};
`;

const Text = styled.p`
  color: var(--white);
  font-size: 12px;
`;

export const Card = ({
  stacked,
  icon,
  heading,
  subHeading,
  text,
  width,
}: Props) => {
  return (
    <Container stacked={stacked} width={width}>
      {icon && <CardIcon image={icon} />}
      {heading && <CardDetails heading={heading} subHeading={subHeading} />}
      {text && <Text>{text}</Text>}
    </Container>
  );
};
