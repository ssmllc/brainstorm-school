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
  bio?: any;
  cta?: any;
  base?: string;
  path?: string;
}

const Slide = ({
  variantType,
  superheading,
  heading,
  subheading,
  poster,
  width,
  info,
  bio,
  cta,
  base,
  path,
}: Props) => {
  return (
    <Card className="slide" width={width}>
      <ImageDetailCard
        heading={heading}
        subheading={subheading}
        variant={variantType}
        poster={poster}
        superHeading={superheading}
        info={info}
        bio={bio}
        cta={cta}
        base={base}
        path={path}
      />
    </Card>
  );
};

export default Slide;
