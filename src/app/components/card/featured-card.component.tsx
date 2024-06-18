"use client";
import React from "react";
import styled from "styled-components";
import ImageDetailCard from "./card.component";

interface featuredProps {
  $sm_margin?: string;
  $margin?: string;
}

const Featured = styled.div<featuredProps>`
  /* border: thin solid blue; */
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  margin: ${({ $sm_margin }) => ($sm_margin ? $sm_margin : "50px auto")};
  position: relative;
  width: 85%;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 800px) {
    max-width: 1125px;
    margin: ${({ $margin }) => ($margin ? $margin : "75px auto")};
    width: 70%;
  }
`;

interface Props {
  poster: string;
  heading: string;
  superheading?: string;
  sm_margin?: string;
  margin?: string;
  info?: string;
  bio?: string;
  slug?: string;
}

const FeaturedCard = ({
  superheading,
  poster,
  heading,
  info,
  bio,
  margin,
  sm_margin,
  slug,
}: Props) => {
  return (
    <Featured $sm_margin={sm_margin} $margin={margin}>
      <ImageDetailCard
        variant="lg"
        poster={poster}
        superHeading={superheading}
        heading={heading}
        info={info}
        bio={bio}
        tags={false}
        slug={slug}
      />
    </Featured>
  );
};

export default FeaturedCard;
