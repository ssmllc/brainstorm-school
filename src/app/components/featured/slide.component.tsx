"use client";

import React from "react";
import styled from "styled-components";
import ImageDetailCard from "../card/card.component";

const Card = styled.div`
  /* border: thin solid green; */
  width: 280px;

  @media (min-width: 400px) {
    width: 320px;
  }

  @media (min-width: 800px) {
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
