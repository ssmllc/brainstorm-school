"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";
import ImageDetailCard from "../card/card.component";

interface cardProps {
  width?: string;
}
const Card = styled.div<cardProps>`
  /* border: thin solid green; */
  width: 292px;

  @media (min-width: 360px) {
    width: 270px;
  }

  @media (min-width: 400px) {
    width: 322px;
  }

  @media (min-width: 768px) {
    width: 576px;
  }

  @media (min-width: 1024px) {
    width: 667px;
  }

  @media (min-width: 1400px) {
    width: ${({ width }) => (width ? width : "1125px")};
  }
`;

interface Props {
  heading: string;
  superheading: string;
  subheading?: string;
  poster: string;
  variantType?: string;
  width?: string;
  info?: any;
}

const Slide = ({
  variantType,
  superheading,
  heading,
  subheading,
  poster,
  width,
  info,
}: Props) => {
  return (
    <Card className="slide" width={width}>
      <ImageDetailCard
        heading={heading}
        subheading={subheading}
        variant={variantType}
        poster={poster}
        superHeading={superheading}
        bio={info}
      />
    </Card>
  );
};

export default Slide;
