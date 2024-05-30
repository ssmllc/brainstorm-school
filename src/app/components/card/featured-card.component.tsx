"use client";
import React from "react";
import styled from "styled-components";
import ImageDetailCard from "./card.component";

const Featured = styled.div`
  /* border: thin solid blue; */
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  margin: 75px auto;
  position: relative;
  width: 85%;

  @media (min-width: 800px) {
    max-width: 1125px;
    width: 65%;
  }
`;

interface Props {
  superheading?: string;
  info?: string;
}

const FeaturedCard = ({ superheading, info }: Props) => {
  return (
    <Featured>
      <ImageDetailCard variant="lg" superHeading={superheading} info={info} />
    </Featured>
  );
};

export default FeaturedCard;
