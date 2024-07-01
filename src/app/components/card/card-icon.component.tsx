"use client";

import React from "react";
import styled from "styled-components";
import { IconCourses } from "../icons/icon-courses.component";
import { IconWorkshops } from "../icons/icon-workshops.component";
import { IconPrograms } from "../icons/icon-programs.component";
import { IconCommunity } from "../icons/icon-community.component";

interface cardIconProps {
  image?: string;
  borderradius?: string;
  height?: string;
  $sm_margin?: string;
  $md_margin?: string;
  $margin?: string;
  $xl_margin?: string;
  width?: string;
  $xl_width?: string;
}

const Icon = styled.div<cardIconProps>`
  background: ${({ image }) => `url(${image})`} top center no-repeat;
  background-size: cover;
  border-radius: ${({ borderradius }) =>
    borderradius ? borderradius : "100%"};
  height: ${({ height }) => (height ? height : "65px")};
  margin: ${({ $sm_margin }) => $sm_margin};
  width: ${({ width }) => (width ? width : "65px")};

  @media (min-width: 768px) {
    height: 100px;
    margin: ${({ $md_margin }) => $md_margin};
    width: 100px;
  }

  @media (min-width: 800px) {
    height: 85px;
    margin: ${({ $md_margin }) => $md_margin};
    width: 100px;
  }

  @media (min-width: 1024px) {
    height: 100px;
    margin: ${({ $margin }) => $margin};
    width: 130px;
  }

  @media (min-width: 1360px) {
    height: ${({ height }) => (height ? height : "65px")};
    margin: ${({ $xl_margin }) => $xl_margin};
    width: ${({ width }) => (width ? width : "65px")};
  }
`;

interface Props {
  image?: string;
  borderradius?: string;
  height?: string;
  sm_margin?: string;
  md_margin?: string;
  margin?: string;
  xl_margin?: string;
  width?: string;
  iconName?: string;
}

export const CardIcon = ({
  image,
  borderradius,
  width,
  height,
  sm_margin,
  md_margin,
  margin,
  xl_margin,
  iconName,
}: Props) => {
  return (
    <Icon
      image={image}
      borderradius={borderradius}
      width={width}
      height={height}
      $sm_margin={sm_margin}
      $md_margin={md_margin}
      $margin={margin}
      $xl_margin={xl_margin}
    >
      {iconName === "courses" && <IconCourses height={"48px"} width={"48px"} />}
      {iconName === "workshops" && (
        <IconWorkshops height={"48px"} width={"48px"} />
      )}
      {iconName === "programs" && (
        <IconPrograms height={"48px"} width={"48px"} />
      )}
      {iconName === "community" && (
        <IconCommunity height={"48px"} width={"48px"} />
      )}
    </Icon>
  );
};
