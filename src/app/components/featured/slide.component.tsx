"use client";

import React from "react";
import styled from "styled-components";
import ImageDetailCard from "../card/card.component";

const Card = styled.div`
  /* border: thin solid green; */
  width: 320px;

  @media (min-width: 800px) {
    width: 1125px;
  }
`;

interface Props {
  heading: string;
  variantType: string;
}

const Slide = ({ variantType, heading }: Props) => {
  return (
    <Card className="slide">
      <ImageDetailCard
        heading={heading}
        variant={variantType}
        superHeading="Featured Blog"
        info="Lorem ipsum dolor sit amet, Optio pariatur blanditiis accusantium placeat."
      />
    </Card>
  );
};

export default Slide;
