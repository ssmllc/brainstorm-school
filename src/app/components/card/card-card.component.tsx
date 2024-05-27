"use client";

import React from "react";
import styled from "styled-components";
import { CardIcon } from "./card-icon.component";
import { CardDetails } from "./card-details.component";
import Link from "next/link";

type Props = {
  stacked: string;
  icon: string;
  heading: string;
  href?: string;
  alignitems?: string;
  background?: string;
  boxshadow?: string;
  subHeading?: string;
  text?: string;
  width?: string;
};

type containerProps = {
  stacked: string;
  alignitems?: string;
  background?: string;
  boxshadow?: string;
  width?: string;
};

const Container = styled.div<containerProps>`
  align-items: ${({ alignitems }) => (alignitems ? alignitems : "center")};
  background: ${({ background }) =>
    background ? background : "var(--off-black)"};
  box-shadow: ${({ boxshadow }) =>
    boxshadow ? boxshadow : "0 0 15px rgba(0, 0, 0, 0.5)"};
  border-radius: 20px;
  display: flex;
  flex-direction: ${({ stacked }) => (stacked === "true" ? "column" : "row")};
  padding: 25px 10px;
  min-height: ${({ stacked }) => (stacked === "true" ? "300px" : "auto")};
  position: relative;
  gap: 20px;
  width: ${({ width }) => (width ? width : "100%")};

  @media (min-width: 800px) {
    padding: 25px 25px;
    width: ${({ width }) => (width ? width : "33.33%")};
  }
`;

const Text = styled.p`
  color: var(--white);
  font-size: 12px;
  line-height: 1.5;
`;

export const Card = ({
  href,
  alignitems,
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
    <>
      {href ? (
        <Link href={href}>
          <Container
            alignitems={alignitems}
            background={background}
            boxshadow={boxshadow}
            stacked={stacked}
            width={width}
          >
            {icon && <CardIcon image={icon} />}
            {heading && (
              <CardDetails heading={heading} subHeading={subHeading} />
            )}
            {text && <Text>{text}</Text>}
          </Container>
        </Link>
      ) : (
        <Container
          alignitems={alignitems}
          background={background}
          boxshadow={boxshadow}
          stacked={stacked}
          width={width}
        >
          {icon && <CardIcon image={icon} />}
          {heading && <CardDetails heading={heading} subHeading={subHeading} />}
          {text && <Text>{text}</Text>}
        </Container>
      )}
    </>
  );
};
