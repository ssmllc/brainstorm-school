"use client";

import React from "react";
import styled from "styled-components";
import { CardIcon } from "./card-icon.component";
import { CardDetails } from "./card-details.component";

type Props = {
  stacked: string;
  icon: string;
  heading: string;
  background?: string;
  boxshadow?: string;
  subHeading?: string;
  text?: string;
  width?: string;
};

type containerProps = {
  stacked: string;
  background?: string;
  boxshadow?: string;
  width?: string;
};

const Container = styled.div<containerProps>`
  background: ${({ background }) =>
    background ? background : "var(--off-black)"};
  box-shadow: ${({ boxshadow }) =>
    boxshadow ? boxshadow : "0 0 10px var(--black)"};
  border-radius: 20px;
  display: flex;
  flex-direction: ${({ stacked }) => (stacked === "true" ? "column" : "row")};
  padding: 25px 25px;
  gap: 20px;
  width: ${({ width }) => (width ? width : "100%")};

  @media (min-width: 800px) {
    width: ${({ width }) => (width ? width : "33.33%")};
  }
`;

const Text = styled.p`
  color: var(--white);
  font-size: 12px;
`;

export const Card = ({
  background,
  boxshadow,
  stacked,
  icon,
  heading,
  subHeading,
  text,
  width,
}: Props) => {
  return (
    <Container
      background={background}
      boxshadow={boxshadow}
      stacked={stacked}
      width={width}
    >
      {icon && <CardIcon image={icon} />}
      {heading && <CardDetails heading={heading} subHeading={subHeading} />}
      {text && <Text>{text}</Text>}
    </Container>
  );
};
