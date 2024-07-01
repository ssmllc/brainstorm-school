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

  @media (min-width: 390px) {
    width: 291px;
  }

  @media (min-width: 400px) {
    width: 322px;
  }

  @media (min-width: 768px) {
    width: 460px;
  }

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1024px) {
    width: 768px;
  }

  @media (min-width: 1120px) {
    width: 885px;
  }

  @media (min-width: 1360px) {
    width: 1080px;
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
