"use client";

import React from "react";
import styled from "styled-components";
import ImageDetailCard from "../card/card.component";

const Card = styled.div`
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
    width: 1125px;
  }
`;

interface Props {
  heading: string;
  poster: string;
  variantType: string;
}

const Slide = ({ variantType, heading, poster }: Props) => {
  return (
    <Card className="slide">
      <ImageDetailCard
        heading={heading}
        variant={variantType}
        poster={poster}
        superHeading="Featured Blog"
        info="Lorem ipsum dolor sit amet, Optio pariatur blanditiis accusantium placeat."
      />
    </Card>
  );
};

export default Slide;
